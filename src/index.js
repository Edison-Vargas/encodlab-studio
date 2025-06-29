import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa seu componente App.jsx
import './assets/styles.css'; // Importa seu CSS com Tailwind

// Registro do Service Worker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         // Caminho para o service-worker.js, que estará na pasta 'public' e acessível na raiz do servidor
//         navigator.serviceWorker.register('/service-worker.js')
//             .then(registration => {
//                 console.log('Service Worker registrado com sucesso:', registration);
//             })
//             .catch(error => {
//                 console.log('Falha ao registrar o Service Worker:', error);
//             });
//     });
// }

// Renderiza o componente principal da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);