import React, { useState, useRef } from 'react';
import { Bot, Cpu, Zap, Compass, Activity, ArrowUpRight } from 'lucide-react';

interface GasuSystemGridProps {
  className?: string;
  compact?: boolean;
  interactive?: boolean;
  activeModuleId?: string;
  onSelectModule?: (id: string) => void;
}

/**
 * ELEMENTO VISUAL FIRMA: GASU SYSTEM GRID
 *
 * Composición abstracta y geométrica inspirada en los cuatro módulos del isotipo:
 * 1. ROBOTICS (Brazo)
 * 2. CONTROL (Engranaje / PLC)
 * 3. POWER (Circuitos / Potencia)
 * 4. ENGINEERING (Soluciones / Medida)
 *
 * Incluye coordenadas técnicas, indicadores de pulso, esquinas de precisión y
 * microinteracción suave al movimiento del cursor en desktop.
 */
export const GasuSystemGrid: React.FC<GasuSystemGridProps> = ({
  className = '',
  compact = false,
  interactive = true,
  activeModuleId,
  onSelectModule,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // máx 6px a cada lado
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const modules = [
    {
      id: 'robotics',
      tag: '01 / ROBOTICS',
      title: 'Cinemática & Celda',
      coord: 'J1-J6 · 19.04°N',
      icon: Bot,
      status: 'SYSTEM READY',
      color: 'border-[#606166]/40 bg-[#06243d]/80 text-[#E7EAED]',
      accent: '#606166',
    },
    {
      id: 'control',
      tag: '02 / CONTROL',
      title: 'Automatización & PLC',
      coord: 'BUS / PROFINET · RUN',
      icon: Cpu,
      status: 'LOGIC SYNCHRONIZED',
      color: 'border-[#003A70] bg-[#003A70]/25 text-[#F8FAFB]',
      accent: '#003A70',
    },
    {
      id: 'power',
      tag: '03 / POWER',
      title: 'Infraestructura Eléctrica',
      coord: '480V / 3Φ · 60Hz',
      icon: Zap,
      status: 'DISTRIBUTION STABLE',
      color: 'border-[#003A70] bg-[#003A70]/25 text-[#F8FAFB]',
      accent: '#003A70',
    },
    {
      id: 'engineering',
      tag: '04 / ENGINEERING',
      title: 'Soporte & Mantenimiento',
      coord: 'PUEBLA HUB · MX',
      icon: Compass,
      status: 'FIELD ACTIVE',
      color: 'border-[#606166]/40 bg-[#06243d]/80 text-[#E7EAED]',
      accent: '#606166',
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {/* Marco perimetral técnico con marcas de coordenadas */}
      <div className="relative p-3 sm:p-5 rounded-xl border border-white/10 bg-[#041F35]/90 backdrop-blur-md shadow-2xl">
        {/* Esquinas técnicas */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#003A70]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#003A70]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#003A70]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#003A70]" />

        {/* Encabezado técnico del marco */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono-tech text-[10px] tracking-wider text-white/50">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            GASU SYSTEM ARCHITECTURE // 4 QUADRANTS
          </span>
          <span className="hidden sm:inline">PUEBLA IND. ZONE</span>
        </div>

        {/* Grid 2x2 modular */}
        <div className={`grid grid-cols-2 ${compact ? 'gap-2' : 'gap-3 sm:gap-4'}`}>
          {modules.map((m) => {
            const Icon = m.icon;
            const isSelected = activeModuleId === m.id;

            return (
              <div
                key={m.id}
                onClick={() => onSelectModule && onSelectModule(m.id)}
                className={`relative rounded-lg p-3 sm:p-4 border transition-all duration-200 group ${
                  m.color
                } ${
                  isSelected ? 'ring-2 ring-blue-400/80 scale-[1.02]' : 'hover:border-blue-400/60 hover:bg-[#072a48]'
                } ${interactive ? 'cursor-pointer' : ''}`}
              >
                {/* Micro-etiqueta superior */}
                <div className="flex items-center justify-between text-[10px] font-mono-tech tracking-wider text-white/60 mb-2">
                  <span>{m.tag}</span>
                  <Activity className="w-3 h-3 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Icono + Título */}
                <div className="flex items-start gap-2.5 my-1.5">
                  <div className="p-1.5 rounded bg-white/10 text-white shrink-0 group-hover:text-blue-300 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight leading-tight">
                      {m.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-mono-tech text-blue-200/60 mt-0.5">
                      {m.coord}
                    </p>
                  </div>
                </div>

                {/* Microindicador de estado */}
                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono-tech text-white/40">
                  <span className="truncate">{m.status}</span>
                  <span className="text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Circuito de bus inferior decorativo */}
        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono-tech text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-500" />
            <span>TOPOLOGY: DISTRIBUTED CONTROL</span>
          </div>
          <span className="text-blue-300/80">LAT: 19.0414° // LON: -98.2063°</span>
        </div>
      </div>
    </div>
  );
};
