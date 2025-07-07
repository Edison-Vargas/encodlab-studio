// src/components/ui/HighlightedTextarea.jsx

import React, { forwardRef, useRef, useLayoutEffect } from 'react';
import TokenVisual from '../TokenVisual';
import useDarkMode from '../../hooks/useDarkMode';

/**
 * HighlightedTextarea
 *
 * - Placeholder visível quando vazio.
 * - Preview colorido (TokenVisual) atrás quando há texto.
 * - Auto-ajuste de altura.
 * - SEM borda própria: quem decora é o wrapper externo.
 */
const HighlightedTextarea = forwardRef(
  ({ value, onChange, id, placeholder }, ref) => {
    const innerRef   = ref || useRef(null);
    const wrapperRef = useRef(null);
    const [darkMode] = useDarkMode();

    // Sincroniza altura
    const syncHeight = () => {
      const ta    = innerRef.current;
      const wrap  = wrapperRef.current;
      if (!ta || !wrap) return;
      ta.style.height = 'auto';
      wrap.style.height = 'auto';
      const h = ta.scrollHeight;
      ta.style.height   = `${h}px`;
      wrap.style.height = `${h}px`;
    };

    useLayoutEffect(syncHeight, [value]);

    return (
      <div ref={wrapperRef} className="relative w-full overflow-hidden">
        {value && (
          <pre
            aria-hidden="true"
            className={`
              absolute inset-0 m-0 p-2
              whitespace-pre-wrap break-words
              font-mono text-sm pointer-events-none select-none
              ${darkMode ? 'text-gray-200' : 'text-gray-800'}
            `}
          >
            <TokenVisual token={value} />
          </pre>
        )}

        <textarea
          id={id}
          ref={innerRef}
          value={value}
          onChange={e => {
            onChange(e);
            requestAnimationFrame(syncHeight);
          }}
          placeholder={placeholder}
          className={`
            relative w-full p-2 font-mono text-sm
            focus:outline-none resize-none
            ${value
              ? 'text-transparent caret-current'
              : 'text-gray-700 dark:text-gray-300'}
            bg-transparent
          `}
          style={{
            caretColor: darkMode ? '#f7fafc' : '#1e1e1e',
            lineHeight: '1.5rem',
          }}
        />
      </div>
    );
  }
);

export default HighlightedTextarea;
