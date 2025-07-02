import React from 'react';

export const appFeaturesContent = (
    <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Funcionalidades do JWT Studio</h2>
        <p className="mb-4">
            O <strong>JWT Studio</strong> é uma ferramenta interativa projetada para simplificar o trabalho com JSON Web Tokens (JWTs). Ele oferece um conjunto de funcionalidades essenciais para desenvolvedores, testadores e qualquer pessoa que precise manipular ou entender JWTs.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">1. Decodificador de JWT</h3>
        <p className="mb-2">
            Cole qualquer token JWT e o decodificador irá separá-lo em suas três partes constituintes: Header, Payload e Signature. O Header e o Payload são exibidos em formato JSON legível, permitindo uma inspeção rápida e fácil das informações contidas no token. Ideal para:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Compreender o conteúdo de um token recebido.</li>
            <li>Depurar problemas com claims ou cabeçalhos inesperados.</li>
            <li>Visualizar rapidamente os dados do usuário ou metadados da sessão.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">2. Gerador de JWT</h3>
        <p className="mb-2">
            Crie tokens JWT personalizados do zero. Você pode definir seu próprio Header e Payload, escolher o algoritmo de assinatura (HS256, RS256, ES256) e fornecer a chave correspondente. Ideal para:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Gerar tokens para testes de autenticação e autorização.</li>
            <li>Experimentar diferentes payloads e cabeçalhos.</li>
            <li>Entender como os tokens são formados com base em diferentes entradas.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">3. Validador de Assinatura</h3>
        <p className="mb-2">
            Verifique a integridade e autenticidade de um token JWT. Cole o token, selecione o algoritmo e forneça a chave (secreta para HS256, pública para RS256/ES256). A ferramenta indicará se a assinatura é válida ou inválida, garantindo que o token não foi adulterado. Essencial para:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Testar a validação de tokens em seu backend.</li>
            <li>Garantir que um token recebido de uma fonte externa é confiável.</li>
            <li>Diagnosticar problemas de assinatura (chaves incorretas, algoritmos incompatíveis).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">4. Codificador/Decodificador Base64</h3>
        <p className="mb-2">
            Uma ferramenta auxiliar para codificar e decodificar strings em Base64. Essencial para manipular as partes individuais de um JWT ou qualquer outra string codificada em Base64.
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>Decodificar rapidamente as partes do Header e Payload de um JWT.</li>
            <li>Codificar strings para diversos propósitos onde Base64 é necessário.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Recursos Adicionais:</h3>
        <ul className="list-disc list-inside mb-4">
            <li><strong>Modo Escuro/Claro:</strong> Alterne facilmente entre temas para maior conforto visual.</li>
            <li><strong>Interface Intuitiva:</strong> Design limpo e responsivo construído com Tailwind CSS.</li>
            <li><strong>Fácil de Usar:</strong> Sem configurações complexas, basta colar ou digitar e interagir.</li>
        </ul>
        <p>
            O JWT Studio é uma ferramenta poderosa para agilizar seu fluxo de trabalho e aprofundar seu entendimento sobre JSON Web Tokens.
        </p>
    </div>
);