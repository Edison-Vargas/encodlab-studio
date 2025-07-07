import React from 'react';

export const jwtConceptsContent = (
  <>
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-2xl font-bold mb-4">Conceitos Fundamentais de JWT</h2>

      <p className="mb-2">
        O <strong>EncodLab Studio</strong> foi projetado para explorar na prática como funcionam os <em>JSON Web Tokens (JWTs)</em> — um padrão aberto (RFC 7519) que define uma maneira compacta, segura e autocontida de transmitir informações entre sistemas como objetos JSON assinados digitalmente.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">📦 Estrutura de um JWT</h3>
      <p>Um token JWT é composto por três partes separadas por ponto (<code>.</code>):</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Header:</strong> Metadados sobre o token — como o algoritmo utilizado (<code>HS256</code>, <code>RS256</code>) e o tipo do token.
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
          <strong>Payload:</strong> Carrega as informações (“claims”), como ID do usuário (<code>sub</code>) ou data de expiração (<code>exp</code>).
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
          <strong>Signature:</strong> Valida a integridade do token, assinando o conteúdo codificado com uma chave (secreta ou pública).
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">🔁 Como Funciona um JWT na Prática</h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Usuário faz login com email/senha.</li>
        <li>Servidor autentica e gera um JWT assinado com informações no payload.</li>
        <li>JWT é enviado ao cliente, que armazena localmente (ex: localStorage, cookie).</li>
        <li>Em requisições futuras, o JWT é enviado no cabeçalho: <code>Authorization: Bearer [seu-token]</code></li>
        <li>Servidor valida a assinatura e decodifica os dados — sem consultar banco de dados.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-4 mb-2">✅ Vantagens</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Autossuficiente:</strong> Dispensa sessões armazenadas no servidor.</li>
        <li><strong>Compacto:</strong> Leve o suficiente para ser transmitido em cabeçalhos HTTP.</li>
        <li><strong>Seguro:</strong> A assinatura impede alteração não autorizada.</li>
        <li><strong>Escalável:</strong> Ideal para apps distribuídos e arquiteturas sem estado.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">⚠️ Considerações e Limitações</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Dificuldade em invalidar:</strong> Não é possível revogar um JWT sem estratégia externa (como blacklists).</li>
        <li><strong>Payload visível:</strong> Como é apenas codificado (e não criptografado), qualquer um pode ler — não coloque dados sensíveis!</li>
        <li><strong>Sequestrável:</strong> Se roubado, o token pode ser usado até expirar — use HTTPS e boas práticas de armazenamento.</li>
      </ul>
    </div>

    <div className="prose dark:prose-invert max-w-none mt-10">
      <h2 className="text-2xl font-bold mb-4">Conceitos Fundamentais de Base64</h2>
      <p>
        O <strong>Base64</strong> é um mecanismo de codificação que converte dados binários em texto ASCII legível. Muito usado para transportar imagens, arquivos ou conteúdo binário por canais que só aceitam texto — como cabeçalhos HTTP, cookies ou campos de formulários.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">🧮 Como Funciona</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Divide os dados binários em grupos de 3 bytes (24 bits).</li>
        <li>Fragmenta em 4 grupos de 6 bits.</li>
        <li>Converte cada grupo em um caractere (A–Z, a–z, 0–9, <code>+</code>, <code>/</code>).</li>
        <li>Completa com <code>=</code> se não houver múltiplo de 3.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">📌 Base64 vs Base64Url</h3>
      <p>
        O <code>Base64Url</code> é uma variação do Base64, adaptada para uso seguro em URLs e tokens como o JWT.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>+</code> vira <code>-</code> e <code>/</code> vira <code>_</code></li>
        <li>O <code>=</code> de preenchimento é omitido</li>
        <li>Evita colisões ou malformações em URLs e headers</li>
      </ul>

      <p>
        Tanto o Header quanto o Payload de um JWT usam <strong>Base64Url</strong> antes de serem unidos e assinados. Por isso, entender codificação é essencial para compreender os tokens.
      </p>
    </div>
  </>
);
