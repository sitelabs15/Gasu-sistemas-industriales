import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { industriesData, IndustrySector } from '../data/industries';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';

/**
 * SECTORES INDUSTRIALES
 * Nota importante: Categorías propuestas para validación formal con el cliente GASU.
 */
export const Industries: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(industriesData[0].id);
  const activeSector = industriesData.find((s) => s.id === selectedId) || industriesData[0];

  return (
    <section id="sectores" className="py-20 lg:py-28 bg-[#F8FAFB] relative border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Cabecera */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <SectionLabel number="03" text="SECTORES PRODUCTIVOS" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
            Ingeniería adaptable a diferentes entornos productivos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#606166] leading-relaxed">
            Cada industria impone condiciones mecánicas, eléctricas y normativas particulares. Adaptamos nuestros servicios a los requerimientos específicos de cada planta.
          </p>
        </div>

        {/* Versión Desktop: Lista interactiva izquierda + Panel de especificaciones derecha */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Lista de sectores (6 cols) */}
          <div className="col-span-6 divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
            {industriesData.map((sector) => {
              const isSelected = sector.id === selectedId;

              return (
                <div
                  key={sector.id}
                  onMouseEnter={() => setSelectedId(sector.id)}
                  onClick={() => setSelectedId(sector.id)}
                  className={`p-5 transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected ? 'bg-blue-50/50 border-l-4 border-l-[#003A70]' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono-tech text-xs font-bold ${
                      isSelected ? 'text-[#003A70]' : 'text-slate-400'
                    }`}>
                      {sector.number}
                    </span>
                    <div>
                      <h3 className={`text-lg font-bold transition-colors ${
                        isSelected ? 'text-[#003A70]' : 'text-[#252A30] group-hover:text-[#003A70]'
                      }`}>
                        {sector.name}
                      </h3>
                      <p className="text-xs text-[#606166]">
                        {sector.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className={`w-5 h-5 transition-all duration-200 ${
                    isSelected ? 'text-[#003A70] translate-x-1 -translate-y-1' : 'text-slate-300 group-hover:text-slate-500'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Panel de Detalle del Sector Activo (6 cols) */}
          <div className="col-span-6 sticky top-28">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 font-mono-tech text-xs text-slate-400">
                <span>ENFOQUE INDUSTRIAL // {activeSector.number}</span>
                <span className="text-[#003A70] font-semibold">APLICACIÓN EN PLANTA</span>
              </div>

              <span className="font-mono-tech text-xs text-[#003A70] font-bold uppercase tracking-wider block mb-1">
                {activeSector.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-[#041F35] mb-4">
                {activeSector.name}
              </h3>

              <p className="text-sm sm:text-base text-[#606166] leading-relaxed mb-6">
                {activeSector.description}
              </p>

              <div className="bg-[#F8FAFB] p-5 rounded-xl border border-slate-200 mb-6 space-y-3">
                <span className="font-mono-tech text-xs text-slate-500 font-semibold block uppercase">
                  Aplicaciones frecuentes en este sector:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSector.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#003A70] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-slate-400">Prioridad:</span>
                <span className="text-[#003A70] font-semibold">{activeSector.technicalFocus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Versión Mobile / Tablet: Acordeón limpio */}
        <div className="lg:hidden space-y-3">
          {industriesData.map((sector) => {
            const isOpen = sector.id === selectedId;

            return (
              <div
                key={sector.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setSelectedId(isOpen ? '' : sector.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs font-bold text-[#003A70]">
                      {sector.number}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#252A30]">
                        {sector.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {sector.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#003A70]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 bg-[#F8FAFB] text-xs text-slate-600 space-y-3">
                    <p className="leading-relaxed">
                      {sector.description}
                    </p>
                    <div className="space-y-1.5 pt-1">
                      {sector.applications.map((app) => (
                        <div key={app} className="flex items-center gap-2 text-slate-700">
                          <span className="text-[#003A70] font-bold">·</span>
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Disclaimer editorial de honestidad comercial */}
        <div className="mt-8 text-center text-xs font-mono-tech text-slate-400">
          * Catálogo de sectores preliminar diseñado para validación y ajuste con la dirección de GASU antes del lanzamiento oficial.
        </div>
      </div>
    </section>
  );
};
