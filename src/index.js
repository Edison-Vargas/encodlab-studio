/**
 * index.js
 *
 * Ponto inicial da aplicação EncodLab Studio.
 * Responsável por:
 *  - Importar bibliotecas essenciais do React
 *  - Renderizar o componente raiz <App /> no elemento 'root' do HTML
 *  - Aplicar o modo estrito de verificação
 *  - Carregar os estilos globais (Tailwind CSS)
 */

import React from 'react'; // Biblioteca principal para construir componentes
import ReactDOM from 'react-dom/client'; // Interface para renderizar React no navegador moderno
import App from './App'; // Importa seu componente raiz da aplicação (App.jsx)
import './assets/styles.css'; // Importa o arquivo CSS com Tailwind, onde estão definidas as classes utilitárias

/**
 * Cria o "root" React dentro do elemento com id="root" no index.html.
 * Esse é o ponto onde o React assumirá o controle do DOM.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Renderiza o componente <App /> dentro de <React.StrictMode>.
 * O StrictMode ativa verificações extras no desenvolvimento:
 *  - Detecta efeitos colaterais indesejados
 *  - Avisa sobre práticas obsoletas
 *  - Ajuda na identificação de problemas em componentes
 */
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);