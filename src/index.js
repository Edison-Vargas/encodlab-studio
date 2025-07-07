import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa seu componente App.jsx
import './assets/styles.css'; // Importa seu CSS com Tailwind

// Renderiza o componente principal da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);