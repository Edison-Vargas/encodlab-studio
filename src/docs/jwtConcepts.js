// src/jwtConcepts.js
import React from 'react';

export const jwtConceptsContent = (
    // ADICIONADO: React.Fragment para envolver todo o conteúdo e garantir um único elemento pai
    <React.Fragment>
        <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Conceitos Fundamentais de JWT</h2>
            <p className="mb-2">
                JSON Web Token (JWT) é um padrão aberto (RFC 7519) que define uma forma compacta e autocontida para transmissão segura de informações entre partes como um objeto JSON. Essa informação pode ser verificada e confiável porque é assinada digitalmente.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Estrutura de um JWT</h3>
            <p className="mb-2">Um JWT consiste em três partes, separadas por pontos (`.`):</p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Header (Cabeçalho):</strong> Contém metadados sobre o token, como o tipo de token (JWT) e o algoritmo de assinatura usado (ex: HS256, RS256).
                    <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded-md text-sm my-2 overflow-x-auto">
                        <code>
{`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Payload (Corpo):</strong> Contém as "claims" (declarações), que são informações sobre a entidade (geralmente o usuário) e metadados adicionais. Existem claims registradas (como `iss` para emissor, `exp` para expiração), públicas (definidas por quem usa o JWT) e privadas (acordadas entre as partes).
                    <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded-md text-sm my-2 overflow-x-auto">
                        <code>
{`{
  "sub": "1234567890",
  "name": "João da Silva",
  "admin": true
}`}
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Signature (Assinatura):</strong> Criada usando o Header e o Payload codificados em Base64Url, mais uma chave secreta (para algoritmos simétricos como HS256) ou um par de chaves privada/pública (para algoritmos assimétricos como RS256/ES256). É usada para verificar a integridade do token (se ele foi adulterado) e autenticar o emissor.
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Como um JWT funciona (Fluxo Básico)</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>O usuário faz login com credenciais.</li>
                <li>O servidor autentica o usuário e, se bem-sucedido, gera um JWT contendo informações do usuário no payload.</li>
                <li>O servidor assina o JWT com uma chave secreta/privada e o envia de volta ao cliente.</li>
                <li>O cliente armazena o JWT (ex: em `localStorage`, `sessionStorage` ou cookies).</li>
                {/* CORREÇÃO NA LINHA ABAIXO: Alterado <token> para [seu-token-aqui] */}
                <li>Em requisições subsequentes para recursos protegidos, o cliente envia o JWT no cabeçalho `Authorization` (geralmente como `Bearer [seu-token-aqui]`).</li>
                <li>O servidor recebe o JWT, verifica sua assinatura (usando a mesma chave secreta/chave pública) e decodifica o payload para obter as informações do usuário, sem precisar consultar um banco de dados.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-4 mb-2">Vantagens do JWT</h3>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Autocontido:</strong> Contém todas as informações necessárias sobre o usuário.</li>
                <li><strong>Compacto:</strong> Pode ser enviado em URLs, parâmetros POST ou dentro de cabeçalhos HTTP.</li>
                <li><strong>Seguro (se bem usado):</strong> A assinatura garante a integridade e autenticidade.</li>
                <li><strong>Sem estado (Stateless):</strong> O servidor não precisa armazenar informações de sessão, o que facilita a escalabilidade.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Desvantagens e Considerações</h3>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Não pode ser invalidado facilmente:</strong> Uma vez emitido, um JWT válido com tempo de expiração longo não pode ser "revogado" antes de expirar. Geralmente, usa-se tokens de curta duração e refresh tokens.</li>
                <li><strong>Exposição de informações no payload:</strong> O payload é apenas codificado em Base64, não criptografado. Informações sensíveis não devem ser armazenadas diretamente no payload.</li>
                <li><strong>Roubo de tokens:</strong> Se um JWT for interceptado, ele pode ser usado por um atacante até expirar. Medidas como HTTPS e armazenamento seguro são cruciais.</li>
            </ul>
        </div> {/* FIM DO PRIMEIRO DIV: CONTEÚDO JWT */}

        {/* INÍCIO DO SEGUNDO DIV: CONTEÚDO BASE64. Agora dentro do React.Fragment */}
        <div className="prose dark:prose-invert max-w-none mt-8">
            <h2 className="text-2xl font-bold mb-4">Conceitos Fundamentais de Base64</h2>
            <p className="mb-2">
                Base64 é um método de codificação que representa dados binários em um formato de texto ASCII. É comumente usado para transmitir dados binários em sistemas que são projetados para lidar apenas com dados de texto, como e-mails e URLs. No contexto de JWTs, o Header e o Payload são codificados em Base64Url (uma variante do Base64 padrão) antes de serem combinados e assinados.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Como funciona a Codificação Base64</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Pega 3 bytes de dados binários (24 bits).</li>
                <li>Divide esses 24 bits em 4 grupos de 6 bits.</li>
                <li>Cada grupo de 6 bits é mapeado para um caractere na tabela Base64 (A-Z, a-z, 0-9, +, /).</li>
                <li>Se a entrada não tiver um múltiplo de 3 bytes, caracteres de preenchimento (`=`) são adicionados.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Base64 vs. Base64Url</h3>
            <p className="mb-2">
                Base64Url é uma variante do Base64 que é "segura para URLs" e "segura para nomes de arquivos". As principais diferenças são:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Substitui `+` por `-`.</li>
                <li>Substitui `/` por `_`.</li>
                <li>Remove o preenchimento (`=`) no final (ou o torna opcional), pois o caractere `=` pode ter um significado especial em URLs.</li>
            </ul>
            <p>
                No JWT, o Base64Url é usado para garantir que o token possa ser transmitido sem problemas em URLs.
            </p>
        </div> {/* FIM DO SEGUNDO DIV: CONTEÚDO BASE64 */}
    </React.Fragment> 
);