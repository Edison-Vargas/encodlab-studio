# EncodLab Studio 🧪🔐

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-EncodLab_Studio-blue?style=flat&logo=github)](https://Edison-Vargas.github.io/JWT_Studio/)

> Laboratório técnico interativo para geração, validação e decodificação de JWTs, além de manipulação Base64. Minimalista, seguro e 100% client-side.

---

## 📌 Sobre o Projeto

O **EncodLab Studio** é uma plataforma interativa e modular para desenvolvedores, estudantes e entusiastas de segurança explorarem estruturas de autenticação e codificação, como **JWT** (JSON Web Tokens) e **Base64**. Criada com **React**, empacotada com **Webpack** e hospedada via **GitHub Pages**, a aplicação roda totalmente no navegador — sem backend, sem cookies, com foco total em privacidade e aprendizado técnico.

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

## 📁 Estrutura de Pastas (Essencial)

/ (Raiz do Projeto)
|
|-- 📂 src/
|   |
|   |-- 📄 index.js             (Ponto de entrada do React, renderiza o App)
|   |-- 📄 App.jsx               (Componente principal, orquestra a aplicação)
|   |
|   |-- 📂 assets/
|   |   |-- styles.css          (Estilos globais da aplicação)
|   |
|   |-- 📂 components/
|   |   |
|   |   |-- 📄 JwtDecoder.jsx         (Componente: Decodificador de JWT)
|   |   |-- 📄 JwtGenerator.jsx        (Componente: Gerador de JWT)
|   |   |-- 📄 SignatureValidator.jsx (Componente: Validador de Assinatura)
|   |   |-- 📄 Base64Converter.jsx     (Componente: Ferramenta de conversão)
|   |   |-- 📄 ToggleDarkMode.jsx    (Componente: Botão de modo escuro)
|   |   |
|   |   `-- 📂 ui/
|   |       |-- Modal.jsx             (Componente de UI reutilizável: Modal)
|   |       `-- index.js            (Exportador dos componentes de UI)
|   |
|   |-- 📂 hooks/
|   |   `-- useDarkMode.js        (Hook customizado para lógica do modo escuro)
|   |
|   |-- 📂 utils/
|   |   |-- jwtUtils.js           (Funções utilitárias para manipular JWTs)
|   |   `-- cryptoUtils.js        (Funções de criptografia - Web Crypto API)
|   |
|   |-- 📂 constants/
|   |   `-- index.js              (Constantes globais da aplicação)
|   |
|   `-- 📂 docs/
|       |-- jwtConcepts.js        (Conteúdo de texto/documentação)
|       |-- appFeatures.js        (Conteúdo de texto/documentação)
|       `-- projectStory.js       (Conteúdo de texto/documentação)
|
|-- index.html                    (Ponto de entrada HTML da aplicação)
|-- 📄 package.json               (Dependências e scripts do projeto)
|-- 📄 webpack.config.js          (Configuração do bundler da aplicação)
|-- 📄 tailwind.config.js          (Configuração do framework CSS)
|-- 📄 babel.config.js             (Configuração do transpiler de JavaScript)
`-- ... (Outros arquivos de configuração)


---

## 🧪 Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Edison-Vargas/JWT_Studio.git
cd JWT_Studio

2. Instale as dependências

npm install

3. Rode em ambiente de desenvolvimento

npm start
📍 Acesse em: http://localhost:8080

🚀 Deploy no GitHub Pages
Deploy manual
bash
npm run deploy
Deploy automático
O projeto conta com GitHub Actions configurado. Ao fazer push na branch main, o sistema executa o deploy automaticamente para o GitHub Pages.

🧠 História do Projeto
Este projeto nasceu da necessidade de um ambiente claro, educacional e funcional para testar, compreender e manipular tokens JWT — com foco em transparência, performance e uma experiência técnica refinada. Com a evolução do escopo, o projeto passou a incluir também manipulações Base64, se consolidando como um verdadeiro laboratório digital.

🤝 Contribuições
Relate bugs ou sugestões abrindo uma issue

Envie Pull Requests com melhorias técnicas, novas funcionalidades ou correções

Todo tipo de feedback técnico é bem-vindo!

🛡️ Licença
Este projeto está licenciado sob a licença MIT.

© 2025 Edison Vargas Teixeira. Todos os direitos reservados.