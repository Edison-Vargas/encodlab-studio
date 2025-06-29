import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Inicializa o estado com base no localStorage ou preferência do sistema
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.error("Failed to read theme from localStorage:", error);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // Depois de definir o estado inicial
console.log("[useDarkMode] Estado inicial:", darkMode);

  // Efeito para aplicar a classe 'dark' ao body e salvar no localStorage
  useEffect(() => {
    console.log("[useDarkMode] Modo atual:", darkMode);

    const root = window.document.documentElement; // html element
    const body = window.document.body; // body element

    if (darkMode) {
      console.log("[useDarkMode] Ativando dark mode");
      root.classList.add('dark');
      body.classList.add('dark'); // Tailwind pode usar 'html.dark' ou 'body.dark'
      localStorage.setItem('theme', 'dark');
    } else {
      console.log("[useDarkMode] Desativando dark mode");
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;