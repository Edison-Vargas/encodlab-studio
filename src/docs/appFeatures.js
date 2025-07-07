import React from 'react';

export const appFeaturesContent = (
  <div className="prose dark:prose-invert max-w-none">
    <h2 className="text-2xl font-bold mb-4">Funcionalidades do EncodLab Studio</h2>

    <p className="mb-4">
      O <strong>EncodLab Studio</strong> é uma aplicação interativa e modular desenvolvida para explorar e manipular <em>tokens JWT</em> e <em>codificações Base64</em>. Ele reúne funcionalidades essenciais para desenvolvedores, estudantes e profissionais de segurança que desejam entender como essas estruturas funcionam — de forma prática, visual e acessível.
    </p>

    <h3 className="text-xl font-semibold mt-4 mb-2">1. Decodificador de JWT</h3>
    <p className="mb-2">
      Cole qualquer token JWT e o decodificador irá separá-lo em suas três partes: <strong>Header</strong>, <strong>Payload</strong> e <strong>Signature</strong>. Os dois primeiros são exibidos em formato JSON legível, com opção de cópia imediata. Ideal para:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Inspecionar os dados de autenticação recebidos.</li>
      <li>Depurar tokens inválidos ou com claims inesperados.</li>
      <li>Entender a estrutura de tokens de terceiros ou APIs.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">2. Gerador de JWT</h3>
    <p className="mb-2">
      Monte seus próprios tokens JWT: defina o Header e o Payload, escolha o algoritmo (<code>HS256</code>, <code>RS256</code>, <code>ES256</code>) e forneça a chave adequada. Um token completo será gerado e exibido com botão de cópia. Perfeito para:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Simular tokens em testes locais.</li>
      <li>Testar integração com sistemas de autenticação.</li>
      <li>Aprender como diferentes configurações alteram a saída.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">3. Validador de Assinatura</h3>
    <p className="mb-2">
      Cole um token JWT, selecione o algoritmo e forneça a chave correspondente. O EncodLab Studio informará se a assinatura está correta ou não — protegendo você contra adulterações e erros de configuração. Essencial para:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Testar se backends validam corretamente tokens recebidos.</li>
      <li>Checar se a assinatura corresponde à chave e ao conteúdo.</li>
      <li>Diagnosticar problemas com bibliotecas JWT ou serviços externos.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">4. Codificador/Decodificador Base64</h3>
    <p className="mb-2">
      Codifique ou decodifique qualquer string usando <strong>Base64url</strong>, com suporte a texto UTF-8. Os resultados podem ser editados e copiados com um clique. Útil para:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Manipular as seções de um JWT manualmente.</li>
      <li>Entender como funciona a codificação no padrão Base64url.</li>
      <li>Trabalhar com dados binários ou criptografados em textos legíveis.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">5. Experiência Interativa</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Modo Escuro/Claro:</strong> personalizável e persistente.</li>
      <li><strong>Interface com Tailwind CSS:</strong> leve, responsiva e moderna.</li>
      <li><strong>Botões de cópia:</strong> rápidos e reutilizáveis em toda a aplicação.</li>
      <li><strong>Feedback visual:</strong> para erros, validações e transformações.</li>
    </ul>

    <p>
      O <strong>EncodLab Studio</strong> é mais do que uma ferramenta: é um pequeno laboratório técnico, projetado para transformar tokens confusos em conhecimento estruturado. Perfeito para usar em estudos, projetos e documentação.
    </p>
  </div>
);
