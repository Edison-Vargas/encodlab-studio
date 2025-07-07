# EncodLab Studio 🧪🔐

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-EncodLab_Studio-blue?style=flat&logo=github)](https://Edison-Vargas.github.io/encodlab-studio/)

> Laboratório técnico interativo para geração, validação e decodificação de JWTs, além de manipulação Base64. Minimalista, seguro e 100% client-side.

---

## 🚀 Sobre o Projeto

O **EncodLab Studio** é uma plataforma web inovadora, desenhada para desenvolvedores, estudantes e entusiastas de segurança que desejam aprofundar seus conhecimentos em estruturas de autenticação e codificação, como JWT (JSON Web Tokens) e Base64.

Desenvolvida com React, otimizada com Webpack e hospedada via GitHub Pages, a aplicação roda inteiramente no navegador. Sua arquitetura client-side garante privacidade total, eliminando a necessidade de servidores, cookies ou persistência externa — focando numa experiência técnica refinada e segura.

---

## 🔧 Funcionalidades Principais

### 🔓 Decodificador de JWT
- Cole um JWT e visualize automaticamente seu Header, Payload e Signature.
- Os campos são exibidos em formato JSON legível com botão de cópia.
- Validação e tratamento de erros para tokens malformados.

### 🔐 Verificador de Assinatura
- Valide a integridade de tokens usando chaves simétricas ou assimétricas.
- Compatível com os algoritmos `HS256`, `RS256` e `ES256`.
- Retorno visual imediato informando se a assinatura é válida.

### 🛠️ Gerador de JWT
- Edite Header e Payload livremente em formato JSON.
- Escolha o algoritmo de assinatura e forneça a chave apropriada.
- O token gerado pode ser copiado com um clique.

### 🔁 Codificador/Decodificador Base64
- Encode/decode de strings no formato Base64/Base64Url.
- Resultado editável com suporte visual a erros e botão de cópia.

---

## 📘 Conceitos Abordados

- **JSON Web Tokens (JWT):** Estrutura com Header, Payload e Signature.
- **Base64 & Base64Url:** Conversão de dados binários em strings ASCII seguras.
- **Web Crypto API:** Assinatura e verificação de dados no próprio navegador.
- **Algoritmos criptográficos:** Suporte a HS256 (HMAC), RS256 (RSA), ES256 (ECDSA).
- **Segurança e boas práticas:** Codificação segura, sem backends, sem rastreamento.

---

## 🧪 Desafios Técnicos Superados

Durante a construção do projeto, diversos desafios reais foram enfrentados:

1. **Web Crypto API:** manipulação precisa de chaves, buffers e assinatura assíncrona.
2. **Base64 vs Base64Url:** padronização e consistência na codificação.
3. **Parsing seguro de JSON:** proteção contra quebras causadas por entradas inválidas.
4. **Arquitetura modular:** separação clara entre lógica, componentes e conteúdos educacionais.
5. **Persistência de tema:** sincronização de preferências com `localStorage`.
6. **SPA com deploy estático:** ajustes em Webpack e GitHub Pages para navegação fluida.
7. **Componentização reutilizável:** `Alert`, `Textarea`, `Modal`, `CopiarConteúdo`, entre outros.
8. **Feedback visual e acessibilidade:** UX aprimorada com feedbacks claros e interações suaves.
9. **Estados sincronizados:** sincronismo entre input/output com `useEffect` e `useCallback`.
10. **Complexidade interna simplificada:** encapsulamento de lógicas criptográficas para o usuário.
11. **Documentação integrada:** conteúdos JSX técnicos para fins educacionais via modais e docs.

---

## 🧰 Tecnologias Utilizadas

- 🧠 **React** — Biblioteca declarativa e reativa para a interface.
- ⚙️ **Webpack** — Pipeline de build moderno e personalizável.
- 💡 **JavaScript ES6+** — Padrão moderno com sintaxe funcional.
- 🔐 **Web Crypto API** — Assinatura segura client-side.
- 🎨 **Tailwind CSS** — Design utilitário com responsividade e temas claro/escuro.
- 🚀 **GitHub Pages** — Deploy gratuito e automatizado via Actions.

---

## 🛠️ Como Rodar Localmente

Para configurar e executar o EncodLab Studio no seu ambiente local:

1. Clone o repositório

Abra o seu terminal e execute:

git clone https://github.com/Edison-Vargas/JWT_Studio.git
cd JWT_Studio

2. Instale as dependências

Navegue até o diretório do projeto e instale as dependências:

npm install

3. Rode em ambiente de desenvolvimento

Inicie o servidor de desenvolvimento:

npm start

📍 Aceda à aplicação no seu navegador: http://localhost:8080

🚀 Deploy no GitHub Pages

O EncodLab Studio oferece duas formas de deploy para o GitHub Pages:

Deploy Manual

Para realizar um deploy manual:

npm run deploy

Este comando irá construir a aplicação e fazer push para a branch gh-pages do seu repositório.

Deploy Automático (GitHub Actions)

O projeto está pré-configurado com GitHub Actions. Isso significa que, ao fazer push para a branch main, o fluxo de trabalho CI/CD será acionado automaticamente, realizando o build e o deploy para o GitHub Pages.

🧠 História do Projeto

O EncodLab Studio nasceu da vontade de unir teoria, segurança digital e visualização prática. Seu propósito inicial era desmistificar a estrutura dos tokens JWT, evoluindo para um ambiente interativo completo para experimentação de codificação, assinatura e validação. Hoje, o projeto é um laboratório digital que estimula o aprendizado técnico com clareza e propósito.

🤝 Contribuições

As contribuições são sempre bem-vindas! Se encontrou um bug ou tem uma sugestão de melhoria:

Abra uma Issue detalhando o problema ou a ideia.

Envie Pull Requests com melhorias técnicas, novas funcionalidades ou correções.

Qualquer tipo de feedback técnico é muito apreciado!

🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

© 2025 Edison Vargas Teixeira. Todos os direitos reservados