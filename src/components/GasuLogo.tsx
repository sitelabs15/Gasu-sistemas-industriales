import React from 'react';

interface GasuLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  height?: number | string;
  showSubtitle?: boolean;
}

/**
 * LOGOTIPO OFICIAL GASU SISTEMAS INDUSTRIALES
 *
 * Vectorizado con precisión milimétrica de ingeniería:
 * - Isotipo de 4 cuadrantes 2x2:
 *   [1] Gris: Robótica industrial
 *   [2] Azul: Mecánica / Control (Engranaje)
 *   [3] Azul: Electrónica / Potencia (Circuitos PCB)
 *   [4] Gris: Energía / Electricidad (Rayo de alta tensión)
 * - Tipografía geométrica de alta fidelidad:
 *   G en Azul Corporativo + ASU en Gris Grafito Industrial
 *   Subtítulo "SISTEMAS INDUSTRIALES" perfectamente proporcionado y alineado
 */
export const GasuLogo: React.FC<GasuLogoProps> = ({
  variant = 'auto',
  className = '',
  height = 44,
  showSubtitle = true,
}) => {
  const isLight = variant === 'light'; // Para fondos oscuros (#041F35, etc.)
  
  // Colores calibrados según fondo
  const blueColor = isLight ? '#38BDF8' : '#003A70';
  const gColor = isLight ? '#FFFFFF' : '#003A70';
  const asuColor = isLight ? '#E2E8F0' : '#4A5568';
  const subtitleColor = isLight ? '#93C5FD' : '#003A70';
  const grayQuadColor = isLight ? '#475569' : '#606166';
  const blueQuadColor = isLight ? '#0369A1' : '#003A70';

  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 350 82"
        height="100%"
        className="w-auto max-h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GASU Sistemas Industriales"
      >
        {/* ======================================================== */}
        {/* ISOTIPO: 4 CUADRANTES 2x2 (34x34 cada uno, gap 4px)     */}
        {/* Total Isotipo: 72x72px                                  */}
        {/* ======================================================== */}
        <g id="isotipo" transform="translate(4, 5)">
          {/* CUADRANTE 1: ROBÓTICA (Gris Superior Izquierdo) */}
          <rect x="0" y="0" width="34" height="34" rx="6" fill={grayQuadColor} />
          <g transform="translate(0, 0)">
            {/* Base de montaje del robot */}
            <rect x="7" y="27" width="14" height="2.5" rx="1" fill="#FFFFFF" />
            {/* Torreta giratoria */}
            <ellipse cx="14" cy="25" rx="4.5" ry="2.5" fill="#FFFFFF" />
            <circle cx="14" cy="23" r="2.8" fill="#FFFFFF" />
            {/* Brazo primario (inclinado a 50°) */}
            <path d="M 13 22 L 20 12 L 22.5 13.8 L 15.5 23.8 Z" fill="#FFFFFF" />
            {/* Articulación de codo */}
            <circle cx="21" cy="13" r="2.6" fill="#FFFFFF" />
            {/* Cilindro / Actuador */}
            <line x1="14" y1="19" x2="19" y2="15" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
            {/* Antebrazo horizontal */}
            <path d="M 21 12 L 28 12 L 28 14.2 L 21 14.2 Z" fill="#FFFFFF" />
            {/* Muñeca y gripper */}
            <circle cx="28" cy="13.1" r="1.5" fill="#FFFFFF" />
            <path d="M 29.5 11 L 31.5 11 L 31.5 15.2 L 29.5 15.2 Z" fill="#FFFFFF" />
            <path d="M 31.5 10.2 L 33 10.2 L 33 12 M 31.5 16 L 33 16 L 33 14.2" stroke="#FFFFFF" strokeWidth="1" fill="none" />
          </g>

          {/* CUADRANTE 2: CONTROL & ENGRANAJE (Azul Superior Derecho) */}
          <rect x="38" y="0" width="34" height="34" rx="6" fill={blueQuadColor} />
          <g transform="translate(55, 17)">
            {/* 8 Dientes de precisión simétricos */}
            <rect x="-2.2" y="-12" width="4.4" height="24" rx="1" fill="#FFFFFF" />
            <rect x="-2.2" y="-12" width="4.4" height="24" rx="1" transform="rotate(45)" fill="#FFFFFF" />
            <rect x="-2.2" y="-12" width="4.4" height="24" rx="1" transform="rotate(90)" fill="#FFFFFF" />
            <rect x="-2.2" y="-12" width="4.4" height="24" rx="1" transform="rotate(135)" fill="#FFFFFF" />
            {/* Aro exterior */}
            <circle cx="0" cy="0" r="9.2" fill="#FFFFFF" />
            {/* Orificio central / Eje con chavetero */}
            <circle cx="0" cy="0" r="4.6" fill={blueQuadColor} />
            <rect x="-1" y="-5.2" width="2" height="2.5" fill={blueQuadColor} />
          </g>

          {/* CUADRANTE 3: CIRCUITOS PCB (Azul Inferior Izquierdo) */}
          <rect x="0" y="38" width="34" height="34" rx="6" fill={blueQuadColor} />
          <g stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Pista 1: Escalonada arriba */}
            <path d="M 5 46 L 14 46 L 19 50 L 25 50" />
            {/* Pista 2: Línea central */}
            <path d="M 5 55 L 22 55" />
            {/* Pista 3: Escalonada abajo */}
            <path d="M 5 64 L 12 64 L 16 60 L 25 60" />
            {/* Pads terminales (vías de circuito) */}
            <circle cx="25" cy="50" r="1.8" fill="#FFFFFF" stroke="none" />
            <circle cx="22" cy="55" r="1.8" fill="#FFFFFF" stroke="none" />
            <circle cx="25" cy="60" r="1.8" fill="#FFFFFF" stroke="none" />
            {/* Micro nodos de entrada */}
            <circle cx="5" cy="46" r="1.2" fill="#FFFFFF" stroke="none" />
            <circle cx="5" cy="55" r="1.2" fill="#FFFFFF" stroke="none" />
            <circle cx="5" cy="64" r="1.2" fill="#FFFFFF" stroke="none" />
          </g>

          {/* CUADRANTE 4: ENERGÍA / ALTA TENSIÓN (Gris Inferior Derecho) */}
          <rect x="38" y="38" width="34" height="34" rx="6" fill={grayQuadColor} />
          {/* Rayo de potencia dinámico, simétrico y definido */}
          <polygon
            points="57,44 47,56 53,56 51,66 63,53 56.5,53"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </g>

        {/* ======================================================== */}
        {/* LOGOTIPO: TIPOGRAFÍA VECTORIAL PRECISA                  */}
        {/* ======================================================== */}
        <g id="logotipo-texto" transform="translate(88, 0)">
          {/* NOMBRE PRINCIPAL: GASU */}
          <text
            x="0"
            y="47"
            fontFamily="'Space Grotesk', 'Inter', -apple-system, sans-serif"
            fontSize="45"
            fontWeight="800"
            letterSpacing="-0.025em"
          >
            <tspan fill={gColor}>G</tspan>
            <tspan fill={asuColor} dx="-1">ASU</tspan>
          </text>

          {/* Trazo conector sutil característico en la base */}
          <path
            d="M 68 50 L 142 50"
            stroke={asuColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* SUBTÍTULO: SISTEMAS INDUSTRIALES */}
          {showSubtitle && (
            <g transform="translate(1, 64)">
              <text
                x="0"
                y="0"
                fontFamily="'Space Grotesk', 'Inter', -apple-system, sans-serif"
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.22em"
                fill={subtitleColor}
              >
                SISTEMAS INDUSTRIALES
              </text>
              {/* Línea de ingeniería técnica con nodo terminal */}
              <line
                x1="0"
                y1="5"
                x2="242"
                y2="5"
                stroke={subtitleColor}
                strokeWidth="1.5"
                strokeOpacity="0.75"
              />
              <rect
                x="242"
                y="3.5"
                width="3"
                height="3"
                fill={subtitleColor}
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
