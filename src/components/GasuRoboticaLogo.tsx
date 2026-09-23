import React from 'react';

interface GasuRoboticaLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark';
}

/**
 * LOGOTIPO SUBMARCA: GASU ROBÓTICA
 *
 * Vectorizado con precisión de ingeniería industrial:
 * - Isotipo: Cuadrante único azul con brazo robótico articulado de 6 ejes
 * - Tipografía geométrica nítida: "GASU" + Doble línea técnica + "ROBÓTICA"
 */
export const GasuRoboticaLogo: React.FC<GasuRoboticaLogoProps> = ({
  className = '',
  height = 54,
  variant = 'dark',
}) => {
  const isLight = variant === 'light';
  const blueColor = isLight ? '#38BDF8' : '#003A70';
  const gColor = isLight ? '#FFFFFF' : '#003A70';
  const asuColor = isLight ? '#E2E8F0' : '#4A5568';
  const roboticaColor = isLight ? '#38BDF8' : '#003A70';
  const quadBg = isLight ? '#0369A1' : '#003A70';

  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 320 78"
        height="100%"
        className="w-auto max-h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GASU Robótica"
      >
        {/* ISOTIPO ROBÓTICA (Cuadrante único de 68x68 con esquinas redondeadas) */}
        <g id="isotipo-robotica" transform="translate(4, 5)">
          <rect x="0" y="0" width="68" height="68" rx="12" fill={quadBg} />
          
          {/* Brazo Robótico Articulado a Gran Escala con Detalles Mecánicos */}
          <g transform="translate(4, 4)">
            {/* Pedestal y Base */}
            <rect x="12" y="52" width="28" height="4.5" rx="2" fill="#FFFFFF" />
            <path d="M 16 52 L 20 45 L 32 45 L 36 52 Z" fill="#FFFFFF" />
            
            {/* Eje J1 (Torreta de rotación) */}
            <circle cx="26" cy="43" r="5" fill="#FFFFFF" />
            <circle cx="26" cy="43" r="2" fill={quadBg} />
            
            {/* Brazo Principal J2 (Inclinado) */}
            <path d="M 24 41 L 37 21 L 42 24.5 L 29 44.5 Z" fill="#FFFFFF" />
            
            {/* Actuador / Pistón hidráulico */}
            <line x1="26" y1="36" x2="35" y2="28" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            
            {/* Articulación de codo J3 */}
            <circle cx="39" cy="23" r="4.8" fill="#FFFFFF" />
            <circle cx="39" cy="23" r="2" fill={quadBg} />
            
            {/* Antebrazo J4 horizontal */}
            <path d="M 39 20.5 L 51 20.5 L 51 25.5 L 39 25.5 Z" fill="#FFFFFF" />
            
            {/* Muñeca J5 y Cabezal */}
            <circle cx="51" cy="23" r="3" fill="#FFFFFF" />
            <rect x="53" y="19" width="4" height="8" rx="1" fill="#FFFFFF" />
            
            {/* Herramienta / Gripper terminal (Pinza neumática) */}
            <path d="M 57 18 L 60 18 L 60 21 M 57 28 L 60 28 L 60 25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" fill="none" />
          </g>
        </g>

        {/* TIPOGRAFÍA: GASU + DOBLE LÍNEA + ROBÓTICA */}
        <g id="texto-robotica" transform="translate(84, 0)">
          {/* Marca Principal GASU */}
          <text
            x="0"
            y="35"
            fontFamily="'Space Grotesk', 'Inter', -apple-system, sans-serif"
            fontSize="36"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            <tspan fill={gColor}>G</tspan>
            <tspan fill={asuColor} dx="-1">ASU</tspan>
          </text>

          {/* Trazo conector característico */}
          <path
            d="M 54 38 L 115 38"
            stroke={asuColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Doble línea técnica de ingeniería */}
          <line x1="0" y1="46" x2="225" y2="46" stroke={blueColor} strokeWidth="1.5" strokeOpacity="0.9" />
          <line x1="0" y1="50" x2="225" y2="50" stroke={blueColor} strokeWidth="1.5" strokeOpacity="0.9" />

          {/* Submarca ROBÓTICA */}
          <text
            x="1"
            y="68"
            fontFamily="'Space Grotesk', 'Inter', -apple-system, sans-serif"
            fontSize="18.5"
            fontWeight="800"
            letterSpacing="0.25em"
            fill={roboticaColor}
          >
            ROBÓTICA
          </text>
        </g>
      </svg>
    </div>
  );
};
