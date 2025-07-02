import React from 'react';

export const projectStoryContent = (
    <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">A História do JWT Studio</h2>
        <p className="mb-2">
            O <strong>JWT Studio</strong> foi concebido com um objetivo claro: simplificar o processo de trabalho com JSON Web Tokens para desenvolvedores e entusiastas da segurança. A ideia nasceu da necessidade de ter uma ferramenta centralizada e intuitiva que combinasse as funcionalidades essenciais de decodificação, geração e validação de JWTs em um único lugar.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">O Problema e a Inspiração</h3>
        <p className="mb-2">
            Trabalhar com JWTs em projetos reais muitas vezes envolve ir e vir entre diferentes ferramentas online ou scripts locais para decodificar um token, gerar um novo para testes, ou verificar uma assinatura. Essa fragmentação pode ser ineficiente e propenso a erros. A inspiração veio de ferramentas existentes, mas com o desejo de criar uma versão mais **integrada**, **interativa** e com uma **experiência do usuário aprimorada**, utilizando tecnologias web modernas.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Tecnologias Escolhidas</h3>
        <p className="mb-2">
            O projeto foi desenvolvido usando:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>
                <strong>React:</strong> Para uma interface de usuário dinâmica e modular, aproveitando a componentização.
            </li>
            <li>
                <strong>Tailwind CSS:</strong> Para um estilo consistente, flexível e rápido, permitindo customizações profundas sem a necessidade de escrever CSS do zero.
            </li>
            <li>
                <strong>JavaScript Moderno (ES6+):</strong> Para lógica de aplicação robusta e padrões de código limpos.
            </li>
            <li>
                <strong>Babel Standalone:</strong> A escolha de usar Babel diretamente no navegador simplifica o ambiente de desenvolvimento, eliminando a necessidade de um pipeline de build complexo (como Webpack ou Vite) para um projeto de escopo menor, tornando-o fácil de baixar e executar. Isso resulta em uma aplicação de página única (SPA) leve, eficiente e fácil de manter.
            </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">A Origem do Nome "JWT Studio"</h3>
        <p className="mb-2">
            Inicialmente, a aplicação era chamada "JWT Playground Aprimorado", que destacava seu caráter de "campo de testes" e as melhorias implementadas. No entanto, buscando um nome mais conciso, profissional e que transmitisse a ideia de um ambiente de trabalho completo, o nome foi evoluindo:
        </p>
        <ul className="list-disc list-inside mb-4">
            <li>"**Playground**" evoca brincadeira e experimentação.</li>
            <li>"**Lab**" sugere um laboratório para experimentação e análise.</li>
            <li>"**Studio**" (estúdio) remete a um espaço criativo e profissional, onde diferentes ferramentas se unem para um propósito específico. Pense em um estúdio de gravação, um estúdio de arte ou um estúdio de design – todos são locais onde se criam e manipulam elementos complexos de forma organizada e eficiente.</li>
        </ul>
        <p>
            O nome "JWT Studio" foi finalmente escolhido por melhor representar a ambição do projeto: ser um **ambiente integrado e profissional para todas as suas necessidades de JWT**, desde a simples decodificação até a complexa geração e validação de assinaturas. É um lugar onde a teoria encontra a prática, e a complexidade do JWT é simplificada em uma interface amigável.
        </p>
    </div>
);