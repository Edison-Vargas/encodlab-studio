// src/docs/projectStory.js
import React from 'react';

export const projectStoryContent = (
  <div className="prose dark:prose-invert max-w-none">
    <h2 className="text-2xl font-bold mb-4">A História do EncodLab Studio</h2>

    <p className="mb-2">
      O <strong>EncodLab Studio</strong> surgiu da necessidade de ter um ambiente
      técnico e intuitivo para trabalhar com <em>tokens JWT</em> e codificações
      como Base64 de forma prática, segura e educativa. Ele evoluiu de um
      playground experimental para um verdadeiro laboratório digital focado em
      estudo, testes e aprendizado em segurança web.
    </p>

    <h3 className="text-xl font-semibold mt-4 mb-2">De onde veio a ideia</h3>
    <p className="mb-2">
      Trabalhar com JWTs em projetos reais geralmente exige navegar por diversas
      ferramentas para decodificar tokens, gerar novos ou validar suas
      assinaturas. Essa jornada fragmentada motivou a criação de um app que
      unificasse tudo isso — com foco em usabilidade, clareza visual e profundidade
      técnica — numa interface moderna e fluida.
    </p>

    <h3 className="text-xl font-semibold mt-4 mb-2">Inspirações e referências</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <a
          href="https://jwt.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          JWT Debugger
        </a>{' '}
        – Ferramenta clássica que permite decodificar, inspecionar e validar
        tokens JWT em tempo real, inspirando nosso módulo de decodificação.
      </li>
      <li>
        <a
          href="https://www.base64decode.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Base64 Encode and Decode
        </a>{' '}
        – Serviço rápido e direto para conversão Base64, que serviu de base para
        nosso sistema de codificação/decodificação integrado.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">Tecnologias & Arquitetura</h3>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>React (com Hooks):</strong> para modularização, reatividade e fácil
        manutenção do front-end.
      </li>
      <li>
        <strong>Tailwind CSS:</strong> para um design responsivo e estilização
        declarativa que facilita consistência visual.
      </li>
      <li>
        <strong>Web Crypto API:</strong> garantindo assinatura e validação de
        tokens com segurança nativa do navegador.
      </li>
      <li>
        <strong>Webpack + Babel:</strong> pipeline de build moderno para
        compatibilidade entre navegadores e deploy via GitHub Pages.
      </li>
      <li>
        <strong>Paradigma funcional:</strong> priorizando imutabilidade, funções
        puras e efeitos isolados.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mt-4 mb-2">Sobre o nome "EncodLab Studio"</h3>
    <p className="mb-2">
      A aplicação já teve outros nomes — como “JWT Playground Aprimorado” e “JWT
      Studio” — mas a evolução da proposta e o escopo mais amplo pediam um nome
      que refletisse tanto a <strong>ação de codificar</strong> quanto o
      <strong> caráter laboratorial</strong> e criativo do projeto.
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>
        <strong>Encode + Lab:</strong> uma fusão de codificação e experimentação
        técnica.
      </li>
      <li>
        <strong>Studio:</strong> remete a um espaço criativo, organizado e
        multifuncional — como um estúdio de design, arte ou software.
      </li>
    </ul>
    <p>
      O nome <strong>EncodLab Studio</strong> sintetiza tudo isso: um ambiente
      técnico, visual e educativo onde a teoria encontra a prática, e
      desenvolvedores podem estudar, criar, verificar e entender profundamente
      como funcionam estruturas como JWTs.
    </p>
  </div>
);
