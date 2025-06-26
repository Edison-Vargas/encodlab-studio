# JWT & Base64 Playground Aprimorado

Este projeto é uma plataforma interativa e completa para trabalhar com JSON Web Tokens (JWT) e codificação/decodificação Base64. Desenvolvido com **React** e estilizado com **Tailwind CSS**, ele oferece um ambiente intuitivo para desenvolvedores, estudantes e entusiastas de segurança explorarem, validarem e gerarem tokens, além de manipularem dados em Base64.

## Funcionalidades Principais

O "JWT & Base64 Playground Aprimorado" é composto por várias ferramentas modulares:

1.  **Decodificador de JWT (JWT Decoder):**
    * Cole qualquer JWT para decodificar e visualizar seu Header, Payload e Signature.
    * Exibe o conteúdo em formato JSON legível, com tratamento de erros para tokens inválidos.
    * *(Nota: A edição direta dos campos decodificados para recriação do token não está ativa no momento, focando na estabilidade do projeto.)*

2.  **Verificador de Assinatura JWT (Signature Validator):**
    * Valide a autenticidade de um JWT fornecendo o token e a chave secreta/pública.
    * Suporta os algoritmos de assinatura `HS256`, `RS256` e `ES256`.
    * Feedback visual instantâneo sobre a validade da assinatura.

3.  **Gerador de JWT (JWT Generator):**
    * Crie novos JWTs personalizados.
    * Defina o Header e o Payload através de campos de texto editáveis.
    * Escolha entre os algoritmos `HS256`, `RS256` e `ES256`.
    * Insira a chave necessária para assinar o token e gere o JWT final.

4.  **Codificador/Decodificador Base64 (Base64 Encoder/Decoder):**
    * Converta texto em sua representação Base64 e vice-versa.
    * Ferramenta útil para codificar ou decodificar strings rapidamente, frequentemente usada na estrutura de JWTs e em outras aplicações web.

## Conceitos Abordados

* **JSON Web Tokens (JWT):** Estrutura (Header, Payload, Signature), codificação (Base64Url) e algoritmos de assinatura (simétricos e assimétricos).
* **Codificação Base64:** Explicação do processo de conversão de dados binários em uma representação de texto ASCII.
* **Segurança Web:** Validação de tokens, integridade de dados e autenticação.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Tailwind CSS:** Framework CSS para estilização rápida e responsiva.
* **JavaScript (ES6+):** Linguagem de programação principal.
* **Babel Standalone:** Usado para transpilação de JSX e ES6+ no navegador.

## Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [Nome_da_Pasta_do_Projeto]
    ```
2.  **Inicie um Servidor Web Local:**
    Como este projeto utiliza múltiplos arquivos JavaScript/JSX (`.jsx`, `.js`) que são importados dinamicamente no seu `Projeto_JWT.html` (com `type="module"` ou com Babel Standalone tratando as importações como módulos), e devido às restrições de segurança do navegador (CORS) para carregamento de módulos locais via protocolo `file:///`, **você precisará de um servidor web local para executá-lo corretamente.**

    **Opções para iniciar um servidor local:**

    * **Usando `live-server` (recomendado para desenvolvimento):**
        Se você tem Node.js instalado, pode instalar `live-server` globalmente:
        ```bash
        npm install -g live-server
        ```
        Depois, navegue até a pasta do seu projeto no terminal e execute:
        ```bash
        live-server
        ```
        Isso abrirá automaticamente o projeto no seu navegador.

    * **Usando o módulo HTTP do Python:**
        Se você tem Python instalado (geralmente já vem com macOS/Linux, e pode ser instalado no Windows):
        Navegue até a pasta do seu projeto no terminal e execute:
        ```bash
        python -m http.server 8000
        # Ou python3 -m http.server 8000 se você tiver Python 3
        ```
        Em seguida, abra seu navegador e vá para `http://localhost:8000/Projeto_JWT.html`.

    * **Usando `http-server` (se já tem Node.js):**
        Instale `http-server` globalmente:
        ```bash
        npm install -g http-server
        ```
        Navegue até a pasta do seu projeto no terminal e execute:
        ```bash
        http-server -p 8000
        ```
        Em seguida, abra seu navegador e vá para `http://localhost:8000/Projeto_JWT.html`.

    Escolha uma das opções acima para iniciar um servidor local e acesse o `Projeto_JWT.html` através do endereço fornecido (ex: `http://localhost:8000/Projeto_JWT.html`).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para bugs ou sugestões de novas funcionalidades.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. ---

© 2025 Edison Vargas Teixeira. Todos os direitos reservados.