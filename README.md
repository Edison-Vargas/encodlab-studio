# EncodLab Studio 🧪🔐

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-EncodLab_Studio-blue?style=flat&logo=github)](https://Edison-Vargas.github.io/JWT_Studio/)

> Laboratório técnico interativo para geração, validação e decodificação de JWTs, além de manipulação Base64. Minimalista, seguro e 100% client-side.

---

## 🚀 Sobre o Projeto

O EncodLab Studio é uma plataforma web inovadora, desenhada para desenvolvedores, estudantes e entusiastas de segurança que desejam aprofundar os seus conhecimentos em estruturas de autenticação e codificação, como JWT (JSON Web Tokens) e Base64.

Desenvolvida com React, otimizada com Webpack e alojada de forma eficiente via GitHub Pages, esta aplicação corre integralmente no navegador. A sua arquitetura client-side garante privacidade total, eliminando a necessidade de backends ou o uso de cookies, focando numa experiência técnica refinada e segura.

---

## 🔧 Funcionalidades Principais

### 🔓 Decodificador de JWT (JWT Decoder)
- Cole um JWT e visualize automaticamente seu Header, Payload e Signature.
- Campos exibidos como JSON formatado.
- Tratamento de erros para tokens malformados.

### 🔐 Verificador de Assinatura JWT (Signature Validator)
- Valide a autenticidade de tokens com chave secreta ou pública.
- Compatível com os algoritmos `HS256`, `RS256` e `ES256`.
- Retorno visual da integridade da assinatura.

### 🛠️ Gerador de JWT (JWT Generator)
- Edite livremente Header e Payload.
- Escolha o algoritmo de assinatura.
- Insira a chave e gere seu token em tempo real.

### 🔁 Codificador/Decodificador Base64 (Base64 Encoder/Decoder)
- Converta textos simples em Base64 e vice-versa.
- Útil para análise e manipulação de strings em formato seguro.

---

## 📘 Conceitos Abordados

- **JSON Web Tokens (JWT):** Estrutura padronizada com Header, Payload e Signature.
- **Codificação Base64/Base64URL:** Conversão de dados binários em texto ASCII seguro.
- **Assinatura Digital no Navegador:** Uso da Web Crypto API para assinar e validar tokens.
- **Algoritmos criptográficos:** HMAC (HS256), RSA (RS256) e ECDSA (ES256).
- **Boas práticas de segurança e compatibilidade web.**

---

## 🚀 Tecnologias Utilizadas

- 🧠 **React:** Biblioteca JavaScript moderna e reativa.
- 🧰 **Webpack:** Empacotador de módulos e assets.
- 💻 **JavaScript (ES6+):** Programação moderna e modular.
- 🕸️ **Web Crypto API:** Assinaturas digitais seguras no lado do cliente.
- 🎨 **Estilização utilitária:** Tema escuro com fontes técnicas e responsividade.
- 🌐 **GitHub Pages:** Deploy estático gratuito com CI/CD automatizado.

---

⚙️ Como Executar Localmente

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

O EncodLab Studio nasceu da necessidade premente de um ambiente claro, educacional e funcional para testar, compreender e manipular tokens JWT. O foco inicial era a transparência, a performance e uma experiência técnica refinada. Com a evolução do seu escopo, o projeto expandiu-se para incluir também manipulações Base64, consolidando-se como um verdadeiro laboratório digital multifuncional.

🤝 Contribuições

As contribuições são sempre bem-vindas! Se encontrou um bug ou tem uma sugestão de melhoria:

Abra uma Issue detalhando o problema ou a ideia.

Envie Pull Requests com melhorias técnicas, novas funcionalidades ou correções.

Qualquer tipo de feedback técnico é muito apreciado!

🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

© 2025 Edison Vargas Teixeira. Todos os direitos reservados