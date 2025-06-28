import React from 'react';
import JwtDecoder from './components/JwtDecoder';
import SignatureValidator from './components/SignatureValidator';
import JwtGenerator from './components/JwtGenerator';
import Base64Converter from './components/Base64Converter'; // Importe o novo componente
import { Button } from './components/ui';
import useDarkMode from './hooks/useDarkMode';
import Modal from './components/Modal';

// Importe os conteúdos da documentação
import { jwtConceptsContent } from './docs/jwtConcepts';
import { appFeaturesContent } from './docs/appFeatures';
import { projectStoryContent } from './docs/projectStory';

// Ícone do menu sanduíche (hamburger)
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

// Ícone de fechar (X) para o menu
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
    const [darkMode, setDarkMode] = useDarkMode();
    const [showModal, setShowModal] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const [modalContent, setModalContent] = React.useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [currentTool, setCurrentTool] = React.useState('jwt'); // Novo estado para a ferramenta ativa

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setShowModal(true);
        setIsMobileMenuOpen(false); // Fecha o menu mobile ao abrir um modal
    };

    const closeModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalContent(null);
    };

    return (
        <div className={`min-h-screen bg-gray-100 text-gray-900 ${darkMode ? 'dark' : ''}`}>
            {/* Contêiner para os botões de controle e menu sanduíche */}
            <div className="fixed top-4 right-4 z-20 flex gap-2"> {/* Agrupa o botão de tema e o toggle do menu */}
                {/* Botão de tema sempre visível */}
                <Button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md text-gray-800 dark:text-gray-200"
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

                {/* Menu de documentação - visível em telas grandes, ou quando mobileMenuOpen for true */}
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
                </div>
            </div>

            <header className="py-6 bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
                        EncodLab <span className="text-blue-500">Studio</span>
                    </h1>
                </div>
            </header>

            {/* Menu de seleção de ferramenta (novo) */}
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
            
            <footer className="py-4 text-center text-gray-500 dark:text-gray-400">
                EncodLab Studio • © 2025 Edison Vargas Teixeira. Projeto criado com propósito educacional, técnico e de uso interno. Todos os direitos reservados.
            </footer>

            <Modal show={showModal} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default App;