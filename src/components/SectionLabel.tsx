import React from 'react';

interface SectionLabelProps {
  number?: string;
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * Indicador de sección editorial y técnico
 * Cumple con la regla anti-slop: sin pseudocódigo '//' forzado, con tipografía nítida y jerarquía clara.
 */
export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  text,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase mb-3 ${className}`}>
      {number && (
        <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-[#003A70]'}`}>
          {number}
        </span>
      )}
      {number && <span className={isDark ? 'text-white/30' : 'text-[#606166]/40'}>·</span>}
      <span className={isDark ? 'text-white/70' : 'text-[#606166]'}>
        {text}
      </span>
      <div className={`h-[1px] w-6 ${isDark ? 'bg-blue-400/30' : 'bg-[#003A70]/30'}`} />
    </div>
  );
};
