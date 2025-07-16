/**
 * Componente: JwtDecoder
 *
 * Responsável por decodificar tokens JWT em suas três partes:
 * - Header (metadados como algoritmo e tipo)
 * - Payload (conteúdo, claims)
 * - Signature (assinatura criptográfica)
 *
 * Utiliza destaque de sintaxe, suporte a tema escuro, exibição condicional,
 * tratamento de erros e botão para copiar conteúdo.
 */

import React from 'react';
import CopiarConteúdo from './ui/CopiarConteúdo';
import HighlightedTextarea from './ui/HighlightedTextarea';
import { base64urlDecode, parseJSON, formatJSON } from '../utils/jwtUtils';
import { Alert, AlertTitle, AlertDescription } from './ui';
import useDarkMode from '../hooks/useDarkMode';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark as prismOneDark,
  oneLight as prismOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const JwtDecoder = () => {
  const [darkMode] = useDarkMode();
  const [token, setToken]         = React.useState('');
  const [header, setHeader]       = React.useState(null);
  const [payload, setPayload]     = React.useState(null);
  const [signature, setSignature] = React.useState('');
  const [error, setError]         = React.useState(null);

  const handleTokenChange = React.useCallback(e => {
    const t = e.target.value.trim();
    setToken(t);
    setError(null);
    try {
      const parts = t.split('.');
      if (parts.length === 3) {
        setHeader(parseJSON(base64urlDecode(parts[0])));
        setPayload(parseJSON(base64urlDecode(parts[1])));
        setSignature(parts[2]);
      } else {
        setHeader(null);
        setPayload(null);
        setSignature('');
      }
    } catch (err) {
      setError(`Erro ao decodificar o token: ${err.message}`);
      setHeader(null);
      setPayload(null);
      setSignature('');
    }
  }, []);

  const jsonHeader  = header  ? formatJSON(header)  : '';
  const jsonPayload = payload ? formatJSON(payload) : '';

  // só anulamos boxShadow em ambos os temas
  const darkTheme = {
    ...prismOneDark,
    'pre[class*="language-"]': {
      ...prismOneDark['pre[class*="language-"]'],
      boxShadow: 'none',
    },
  };

  const lightTheme = {
    ...prismOneLight,
    'pre[class*="language-"]': {
      ...prismOneLight['pre[class*="language-"]'],
      boxShadow: 'none',
    },
  };

  const codeStyle = {
    padding: '1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    overflowX: 'auto',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Decodificador JWT
      </h2>

      <div className="mb-4">
        <label
          htmlFor="jwt-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Cole seu Token JWT:
        </label>
        <div className="
          shadow appearance-none border rounded-md w-full
          py-2 px-3 bg-gray-800 text-white placeholder:text-gray-400
          focus-within:outline-none focus-within:ring-2
          focus-within:ring-blue-500 focus-within:border-transparent
          min-h-[100px] font-mono
        ">
          <HighlightedTextarea
            id="jwt-input"
            value={token}
            onChange={handleTokenChange}
            placeholder="Cole o seu JSON Web Token aqui..."
          />
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Erro na Decodificação</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {token && !error && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Header
              </h3>
              <CopiarConteúdo texto={jsonHeader} />
            </div>
            <SyntaxHighlighter
              language="json"
              style={darkMode ? darkTheme : lightTheme}
              customStyle={codeStyle}
            >
              {jsonHeader}
            </SyntaxHighlighter>
          </div>

          {/* Payload */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Payload
              </h3>
              <CopiarConteúdo texto={jsonPayload} />
            </div>
            <SyntaxHighlighter
              language="json"
              style={darkMode ? darkTheme : lightTheme}
              customStyle={codeStyle}
            >
              {jsonPayload}
            </SyntaxHighlighter>
          </div>

          {/* Signature */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Signature
              </h3>
              <CopiarConteúdo texto={signature} />
            </div>
            <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-sm text-gray-700 dark:text-gray-300 overflow-x-auto font-mono">
              {signature}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default JwtDecoder;
