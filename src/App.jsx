/**
 * App.jsx
 *
 * Componente raiz da aplicação EncodLab Studio.
 * Responsável por renderizar:
 * - Ferramentas JWT (decoder, validator, generator)
 * - Conversor Base64
 * - Interface de troca de tema (light/dark)
 * - Modais explicativos sobre o projeto
 * - Menu responsivo adaptado para mobile/desktop
 */

import React from 'react';

// Importa os blocos funcionais
import JwtDecoder from './components/JwtDecoder';
import SignatureValidator from './components/SignatureValidator';
import JwtGenerator from './components/JwtGenerator';
import Base64Converter from './components/Base64Converter'; 

// Botão estilizado e utilitários
import { Button } from './components/ui';
import useDarkMode from './hooks/useDarkMode'; // Hook customizado para persistência de tema
import Modal from './components/Modal'; // Modal reutilizável para exibir conteúdo da documentação

// Textos explicativos carregados de arquivos separados
import { jwtConceptsContent } from './docs/jwtConcepts';
import { appFeaturesContent } from './docs/appFeatures';
import { projectStoryContent } from './docs/projectStory';

/**
 * Ícones de menu (hamburger e fechar)
 * SVGs usados para interface mobile responsiva
 */
const MenuIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const App = () => {
    // Gerencia tema escuro/claro com persistência
    const [darkMode, setDarkMode] = useDarkMode();

    // Gerencia visibilidade do modal e seu conteúdo
    const [showModal, setShowModal] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const [modalContent, setModalContent] = React.useState(null);

    // Controle do menu sanduíche para mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Define qual ferramenta está ativa no momento
    const [currentTool, setCurrentTool] = React.useState('jwt');

    // Executa efeitos após montagem inicial (debug/logs)
    React.useEffect(() => {
        console.log('[App] useEffect executado após montagem do App');
    }, []);

    // Abre um modal com conteúdo específico
    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
        setIsMobileMenuOpen(false); // Fecha o menu se for mobile
    };

    const closeModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalContent(null);
    };

    console.log("🔍 App.jsx renderizou");

    return (
        <div className={`min-h-screen bg-gray-100 text-gray-900 ${darkMode ? 'dark' : ''}`}>

            {/* Topbar com tema e menu responsivo */}
            <div className="fixed top-4 right-4 z-20 flex gap-2">
                {/* Botão para alternância de modo visual */}
                <Button
                    onClick={() => setDarkMode(!darkMode)}
                    className="hidden md: block p-2 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md text-gray-800 dark:text-gray-200"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>

                {/* Botão do menu sanduíche - visível APENAS em telas pequenas (md:hidden) */}
                <Button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-md shadow-md text-white font-medium ml-2"
                >
                    {isMobileMenuOpen ? (
                        <CloseIcon className="h-6 w-6" />
                    ) : (
                        <MenuIcon className="h-6 w-6" />
                    )}
                </Button>

                {/* Menu de acesso à documentação - visível em telas grandes, ou quando mobileMenuOpen for true */}
                <div
                    className={`${
                        isMobileMenuOpen ? 'block' : 'hidden' // Esconde por padrão, mostra se o menu está aberto
                    } md:flex flex-col md:flex-row gap-2 mt-2 md:mt-0 
                    absolute md:static top-full right-0 bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent
                    p-4 md:p-0 rounded-md shadow-lg md:shadow-none w-48 md:w-auto`}
                >
                    <Button
                        onClick={() => openModal('Conceitos de JWT', jwtConceptsContent)}
                        className="p-2 bg-blue-300 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-md shadow-md text-white font-medium w-full md:w-auto"
                    >
                        Conceitos
                    </Button>
                    <Button
                        onClick={() => openModal('Funcionalidades da Aplicação', appFeaturesContent)}
                        className="p-2 bg-blue-300 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-md shadow-md text-white font-medium w-full md:w-auto"
                    >
                        Funcionalidades
                    </Button>
                    <Button
                        onClick={() => openModal('A História do Projeto', projectStoryContent)}
                        className="p-2 bg-blue-300 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-md shadow-md text-white font-medium w-full md:w-auto"
                    >
                        Sobre
                    </Button>
                    <Button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md text-gray-800 dark:text-gray-200"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </div>
            </div>

            {/* Cabeçalho com nome estilizado do projeto */}
            <header className="py-6 bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl :text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 to-blue-800 text-transparent bg-clip-text drop-shadow-lg">
                        EncodLab <span className="text-4xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text drop-shadow-lg">Studio</span>
                    </h1>
                </div>
            </header>

            {/* Botões para selecionar a ferramenta ativa */}
            <nav className="bg-gray-200 dark:bg-gray-700 py-2 shadow-sm">
                <div className="container mx-auto px-4 flex justify-center gap-4">
                    <Button
                        onClick={() => setCurrentTool('jwt')}
                        className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
                            currentTool === 'jwt'
                                ? 'bg-blue-600 text-white shadow'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                        }`}
                    >
                        JWT Tools
                    </Button>
                    <Button
                        onClick={() => setCurrentTool('base64')}
                        className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
                            currentTool === 'base64'
                                ? 'bg-blue-600 text-white shadow'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                        }`}
                    >
                        Base64 Converter
                    </Button>
                </div>
            </nav>

            {/* Área principal com ferramentas */}
            <main className="container mx-auto py-8 px-4">
                {/* Renderização condicional das ferramentas */}
                {currentTool === 'jwt' && (
                    <>
                        <JwtDecoder />
                        <SignatureValidator />
                        <JwtGenerator />
                    </>
                )}
                {currentTool === 'base64' && (
                    <Base64Converter />
                )}
            </main>
            
            {/* Rodapé institucional */}
            <footer className="py-4 text-center text-gray-500 dark:text-gray-400">
                EncodLab Studio © 2025 Edison Vargas Teixeira. Projeto criado com propósito educacional, técnico e de uso interno. Todos os direitos reservados.
            </footer>

            {/* Modal reutilizável para textos explicativos */}
            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default App;