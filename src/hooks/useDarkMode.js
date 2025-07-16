/**
 * Hook: useDarkMode
 *
 * Gerencia o tema visual da aplicação (dark/light mode) de forma:
 * - Persistente via localStorage
 * - Inteligente ao ler preferências do sistema
 * - Reativa, permitindo alteração pelo usuário
 *
 * Retorna: [modoAtual: boolean, setModo: function]
 */

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  /**
   * Estado inicial definido via função para evitar reexecução
   * Tenta obter o valor salvo no localStorage (se houver)
   * Caso contrário, verifica a preferência do sistema via matchMedia
   */
  const [darkMode, setDarkMode] = useState(() => {
    try {
      // Lê o valor salvo no localStorage (se houver)
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

  // Hook retorna o estado atual e sua função atualizadora
  return [darkMode, setDarkMode];
};

export default useDarkMode;