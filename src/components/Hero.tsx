import React from 'react';
import { ArrowUpRight, ChevronRight, Activity, MapPin } from 'lucide-react';
import { GasuSystemGrid } from './GasuSystemGrid';
import { companyData } from '../data/company';

interface HeroProps {
  onSelectSolution?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSolution }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectSolution) {
      onSelectSolution();
    } else {
      document.querySelector('#soluciones')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] min-h-[760px] bg-[#041F35] text-white flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Fondo técnico con cuadrícula y gradientes sutiles */}
      <div className="absolute inset-0 bg-tech-grid-dark pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#07579A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[400px] h-[400px] bg-[#003A70]/25 rounded-full blur-3xl pointer-events-none" />

      {/* SVG decorativo de circuito técnico tenue */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#07579A" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="30%" y1="10%" x2="30%" y2="90%" stroke="#07579A" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="75%" y1="10%" x2="75%" y2="90%" stroke="#07579A" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="30%" cy="20%" r="4" fill="#07579A" />
        <circle cx="75%" cy="20%" r="4" fill="#07579A" />
      </svg>

      {/* Contenedor Principal (1440px max) */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Columna Izquierda: Copy y Conversión (7 cols en desktop) */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Eyebrow con indicador animado */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="font-mono-tech text-[11px] sm:text-xs font-medium tracking-wider text-blue-200/90 uppercase">
              INGENIERÍA · AUTOMATIZACIÓN · SERVICIO INDUSTRIAL
            </span>
          </div>

          {/* H1 Principal con tipografía Space Grotesk */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
            Ingeniería que mantiene la industria{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-sky-200 font-extrabold">
              en movimiento.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-[620px]">
            Diseñamos, integramos y damos soporte a soluciones eléctricas, de automatización, mantenimiento y robótica para entornos industriales.
          </p>

          {/* CTAs de acción directa */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#041F35] font-semibold text-sm hover:bg-slate-100 transition-all duration-200 shadow-md group whitespace-nowrap"
            >
              <span>Solicitar una evaluación</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#soluciones"
              onClick={scrollToSolutions}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/25 text-white font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200 whitespace-nowrap"
            >
              <span>Explorar soluciones</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </a>
          </div>

          {/* Microcopy con ubicación precisa y honestidad industrial */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Puebla, México · Atención a proyectos industriales</span>
          </div>
        </div>

        {/* Columna Derecha: Composición Visual Abstracta de Ingeniería (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Fondo técnico de iluminación */}
          <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-400/5 rounded-2xl pointer-events-none" />

          {/* Contenedor del Sistema GASU */}
          <div className="w-full max-w-[500px] relative">
            {/* Etiquetas técnicas en esquinas */}
            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#041F35] border border-white/20 rounded font-mono-tech text-[9px] text-blue-300 z-20">
              SYS // CONTROL & PRECISION
            </div>
            <div className="absolute -bottom-3 right-4 px-2 py-0.5 bg-[#041F35] border border-white/20 rounded font-mono-tech text-[9px] text-white/50 z-20">
              COORD // 19.0414°N · 98.2063°W
            </div>

            {/* Elemento Visual Firma: GASU System Grid */}
            <GasuSystemGrid />

            {/* Barra de telemetría estética sutil decorativa */}
            <div className="mt-3 px-4 py-2 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-white/60">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-blue-400" />
                INDUSTRIAL ENGINEERING PLATFORM
              </span>
              <span className="text-blue-400">REV. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
