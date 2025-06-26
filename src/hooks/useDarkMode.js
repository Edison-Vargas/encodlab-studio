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

  // Efeito para aplicar a classe 'dark' ao body e salvar no localStorage
  useEffect(() => {
    const root = window.document.documentElement; // html element
    const body = window.document.body; // body element

    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark'); // Tailwind pode usar 'html.dark' ou 'body.dark'
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;