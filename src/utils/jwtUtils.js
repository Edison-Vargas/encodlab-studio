// src/utils/jwtUtils.js

/**
 * Decodifica uma string Base64URL.
 * @param {string} str A string Base64URL para decodificar.
 * @returns {string} A string decodificada.
 */
export const base64urlDecode = (str) => {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw new Error('String Base64URL inválida');
    }
    return atob(output);
};

/**
 * Codifica uma string para Base64URL.
 * @param {string} str A string para codificar.
 * @returns {string} A string codificada em Base64URL.
 */
export const base64urlEncode = (str) => {
    return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
};

/**
 * Formata um objeto JSON para exibição.
 * @param {any} obj O objeto JSON.
 * @returns {string} Uma string JSON formatada.
 */
export const formatJSON = (obj) => {
    try {
        return JSON.stringify(obj, null, 2);
    } catch (error) {
        return 'Objeto JSON inválido';
    }
};

/**
 * Analisa uma string JSON.
 * @param {string} str A string JSON.
 * @returns {any} O objeto JSON analisado.
 */
export const parseJSON = (str) => {
    try {
        return JSON.parse(str);
    } catch (error) {
        return {};
    }
};

/**
 * Formata a assinatura ECDSA para o formato raw, esperado pela função sign.
 * @param {Uint8Array} signatureBuffer A assinatura no formato DER.
 * @returns {string} A assinatura no formato raw.
 */
function formatRawECDSASignature(signatureBuffer) {
    let offset = 2;
    const rLength = signatureBuffer[3];
    offset += 1 + rLength;
    const sLength = signatureBuffer[offset + 1];
    offset += 2;

    const r = signatureBuffer.slice(4, 4 + rLength);
    const s = signatureBuffer.slice(offset, offset + sLength);

    // Garante que r e s tenham 32 bytes (preenche com zeros à esquerda se necessário)
    const rPadded = new Uint8Array(32);
    rPadded.set(r, 32 - r.length);
    const sPadded = new Uint8Array(32);
    sPadded.set(s, 32 - s.length);

    const rawSignature = new Uint8Array(64);
    rawSignature.set(rPadded);
    rawSignature.set(sPadded, 32);

    let rawSignatureString = '';
    for (let i = 0; i < rawSignature.length; i++) {
        rawSignatureString += String.fromCharCode(rawSignature[i]);
    }
    return rawSignatureString;
}

/**
 * Converte uma assinatura ECDSA do formato raw (64 bytes) para o formato DER.
 * @param {string} rawSignature A assinatura ECDSA no formato raw.
 * @returns {string} A assinatura no formato DER.
 */
function convertRawSignatureToDER(rawSignature) {
    const r = new Uint8Array(rawSignature.slice(0, 32).split('').map(c => c.charCodeAt(0)));
    const s = new Uint8Array(rawSignature.slice(32, 64).split('').map(c => c.charCodeAt(0)));

    // Remove zeros à esquerda significativos
    let rOffset = 0;
    while (rOffset < r.length && r[rOffset] === 0) {
        rOffset++;
    }
    let sOffset = 0;
    while (sOffset < s.length && s[sOffset] === 0) {
        sOffset++;
    }

    const rValue = r.slice(rOffset);
    const sValue = s.slice(sOffset);

    // Garante que os valores sejam positivos
    const rPositive = rValue[0] > 127 ? new Uint8Array([0, ...rValue]) : rValue;
    const sPositive = sValue[0] > 127 ? new Uint8Array([0, ...sValue]) : sValue;

    const rLength = rPositive.length;
    const sLength = sPositive.length;

    const derSignature = [
        0x30, // Sequência
        4 + rLength + sLength, // Comprimento total
        0x02, // Inteiro
        rLength,
        ...rPositive,
        0x02, // Inteiro
        sLength,
        ...sPositive,
    ];

    return String.fromCharCode(...derSignature);
}


/**
 * Assina um payload usando o algoritmo e a chave fornecidos.
 * @param {object} header O header do JWT.
 * @param {object} payload O payload do JWT.
 * @param {string} algorithm O algoritmo de assinatura ('HS256', 'RS256', 'ES256').
 * @param {string} key A chave secreta (para HS256) ou chave privada (para RS256, ES256).
 * @returns {Promise<string>} A assinatura do JWT.
 */
export const sign = async (header, payload, algorithm, key) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${base64urlEncode(JSON.stringify(header))}.${base64urlEncode(JSON.stringify(payload))}`);

    if (algorithm === 'HS256') {
        const keyBuffer = encoder.encode(key);
        const hmacKey = await crypto.subtle.importKey(
            'raw',
            keyBuffer,
            { name: 'HMAC', hash: { name: 'SHA-256' } },
            true,
            ['sign', 'verify']
        );
        const signatureBuffer = await crypto.subtle.sign('HMAC', hmacKey, data);
        return base64urlEncode(String.fromCharCode(...new Uint8Array(signatureBuffer)));
    } else if (algorithm === 'RS256') {
        // Para RS256, a chave `key` deve ser a chave privada no formato PKCS8.
        // É importante que a chave seja formatada corretamente (ex: com cabeçalhos PEM).
        // Se a chave for apenas a string sem os cabeçalhos PEM, pode haver erro.
        // Exemplo: `-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----`
        const privateKey = await crypto.subtle.importKey(
            'pkcs8',
            encoder.encode(key),
            {
                name: 'RSASSA-PKCS1-v1_5',
                hash: { name: 'SHA-256' },
            },
            false, // Não exportável
            ['sign']
        );
        const signatureBuffer = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', privateKey, data);
        return base64urlEncode(String.fromCharCode(...new Uint8Array(signatureBuffer)));
    } else if (algorithm === 'ES256') {
        // Para ES256, a chave `key` deve ser a chave privada no formato PKCS8.
        const privateKey = await crypto.subtle.importKey(
            'pkcs8',
            encoder.encode(key),
            {
                name: 'ECDSA',
                namedCurve: 'P-256', // Curva padrão para ES256
                hash: { name: 'SHA-256' }
            },
            false,
            ['sign']
        );
        const signatureBuffer = await crypto.subtle.sign('ECDSA', privateKey, data);
        // O Web Crypto API retorna ECDSA em formato DER. Precisamos formatar para raw (64 bytes).
        const rawSignature = formatRawECDSASignature(new Uint8Array(signatureBuffer));
        return base64urlEncode(rawSignature);
    } else {
        throw new Error(`Algoritmo de assinatura não suportado: ${algorithm}`);
    }
};

/**
 * Verifica se uma assinatura é válida.
 * @param {string} token O token JWT completo.
 * @param {string} algorithm O algoritmo de assinatura.
 * @param {string} key A chave secreta (para HS256) ou chave pública (para RS256, ES256).
 * @returns {Promise<boolean>} `true` se a assinatura for válida, `false` caso contrário.
 */
export const verifySignature = async (token, algorithm, key) => {
    try {
        const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');
        if (!encodedHeader || !encodedPayload || !encodedSignature) {
            return false;
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(`${encodedHeader}.${encodedPayload}`);
        const signatureBufferRaw = new Uint8Array(
            Array.from(atob(encodedSignature).split(''), (c) => c.charCodeAt(0))
        );

        if (algorithm === 'HS256') {
            const keyBuffer = encoder.encode(key);
            const hmacKey = await crypto.subtle.importKey(
                'raw',
                keyBuffer,
                { name: 'HMAC', hash: { name: 'SHA-256' } },
                true,
                ['sign', 'verify']
            );
            return await crypto.subtle.verify('HMAC', hmacKey, signatureBufferRaw, data);
        } else if (algorithm === 'RS256') {
            // Para RS256, a chave `key` deve ser a chave pública no formato SPKI.
            const publicKey = await crypto.subtle.importKey(
                'spki',
                encoder.encode(key),
                {
                    name: 'RSASSA-PKCS1-v1_5',
                    hash: { name: 'SHA-256' },
                },
                false, // Não exportável
                ['verify']
            );
            return await crypto.subtle.verify('RSASSA-PKCS1-v1_5', publicKey, signatureBufferRaw, data);
        } else if (algorithm === 'ES256') {
            // Para ES256, a chave `key` deve ser a chave pública no formato SPKI.
            const publicKey = await crypto.subtle.importKey(
                'spki',
                encoder.encode(key),
                {
                    name: 'ECDSA',
                    namedCurve: 'P-256', // Curva padrão para ES256
                    hash: { name: 'SHA-256' }
                },
                false,
                ['verify']
            );
            // O Web Crypto API espera assinatura ECDSA em formato DER para verificação.
            // Precisamos converter a assinatura Base64URL (que é raw) para DER.
            const derSignature = convertRawSignatureToDER(base64urlDecode(encodedSignature));
            const signatureBufferDer = new Uint8Array(Array.from(derSignature).map(c => c.charCodeAt(0)));
            return await crypto.subtle.verify('ECDSA', publicKey, signatureBufferDer, data);
        } else {
            return false;
        }
    } catch (error) {
        console.error("Erro ao verificar a assinatura:", error);
        return false;
    }
};