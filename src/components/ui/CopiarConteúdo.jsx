import React, { useState } from 'react';

/**
 * Componente: CopiarConteúdo
 *
 * Props:
 *  - texto: string que será copiada para a área de transferência
 *  - classe: string opcional para classes adicionais de estilo
 *
 * Lógica:
 * 1. Ao clicar, navigator.clipboard.writeText(texto) copia o conteúdo.
 * 2. O estado 'copiado' dispara feedback visual por 1,5s.
 */

const CopiarConteúdo = ({ texto, classe = '' }) => {
  const [copiado, setCopiado] = useState(false);

  const copiarParaClipboard = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <button
      onClick={copiarParaClipboard}
      className={`
        px-2 py-1 rounded-md text-sm transition
        ${copiado 
          ? 'bg-green-600 text-white' 
          : 'bg-blue-600 text-white hover:bg-blue-700'}
        ${classe}
      `}
    >
      {copiado ? '✅ Copiado!' : '📋 Copiar'}
    </button>
  );
};

export default CopiarConteúdo;
