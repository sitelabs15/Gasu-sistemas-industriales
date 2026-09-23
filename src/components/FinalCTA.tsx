import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const FinalCTA: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-24 bg-[#003A70] text-white relative overflow-hidden">
      {/* Circuitos decorativos sutiles basados en el cuadrante 3 del isotipo */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 50 L 200 50 L 250 100 L 800 100" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M 100 200 L 400 200 L 450 150 L 1200 150" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <circle cx="250" cy="100" r="6" fill="#FFFFFF" />
        <circle cx="450" cy="150" r="6" fill="#FFFFFF" />
      </svg>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-mono-tech text-xs tracking-widest uppercase text-blue-200 block">
            HABLEMOS DE TU PROYECTO INDUSTRIAL
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
            ¿Tienes un reto técnico en planta?
          </h2>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
            Cuéntanos qué necesitas y revisemos juntos el alcance de tu proyecto, requerimientos de maquinaria o necesidad de personal técnico.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-[#003A70] font-bold text-sm hover:bg-blue-50 transition-all shadow-lg group whitespace-nowrap"
            >
              <span>Solicitar evaluación</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={companyData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/40 text-white font-semibold text-sm hover:bg-white/10 hover:border-white transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono-tech text-blue-200/70">
            {companyData.schedule} · Atención a plantas en Puebla y zona industrial
          </div>
        </div>
      </div>
    </section>
  );
};
