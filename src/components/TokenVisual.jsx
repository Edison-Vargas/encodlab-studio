// src/components/TokenVisual.jsx
import React from 'react';

/**
 * TokenVisual
 *
 * Exibe as três partes de um JWT (header, payload, signature)
 * com cores distintas, ideal para sobrepor a um <pre> ou
 * servir como fallback de destaque inline.
 *
 * Cores padrão via Tailwind:
 *  - Header:   text-pink-500
 *  - Payload:  text-yellow-500
 *  - Signature:text-blue-500
 *  - Pontos:   text-gray-400
 */
const TokenVisual = ({ token = '' }) => {
  // Se o token não tiver 3 partes, exibe como texto simples
  if (typeof token !== 'string' || !token.includes('.')) {
    return <code className="text-gray-500">{token}</code>;
  }

  const [header, payload, signature] = token.split('.');

  return (
    <div className="text-sm font-mono break-all">
      <span className="text-pink-500">{header}</span>
      <span className="text-gray-400">.</span>
      <span className="text-yellow-500">{payload}</span>
      <span className="text-gray-400">.</span>
      <span className="text-blue-500">{signature}</span>
    </div>
  );
};

export default TokenVisual;
