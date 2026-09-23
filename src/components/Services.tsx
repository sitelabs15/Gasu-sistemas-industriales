import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { servicesData, ServiceItem } from '../data/services';
import { Zap, Cpu, Wrench, Bot, Users, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GasuRoboticaLogo } from './GasuRoboticaLogo';

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (type: ServiceItem['iconType']) => {
    switch (type) {
      case 'power':
        return Zap;
      case 'control':
        return Cpu;
      case 'maintenance':
        return Wrench;
      case 'robotics':
        return Bot;
      case 'personnel':
        return Users;
      case 'custom':
        return Layers;
      default:
        return Cpu;
    }
  };

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
    if (onSelectService) onSelectService(service);
  };

  return (
    <section id="soluciones" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <SectionLabel number="02" text="SOLUCIONES INDUSTRIALES" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
            Capacidad técnica para diferentes necesidades industriales.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#606166] leading-relaxed">
            Servicios modulares de ingeniería desarrollados para responder tanto a intervenciones puntuales como a proyectos integrales de automatización y mantenimiento.
          </p>
        </div>

        {/* Bento Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.iconType);
            const isLarge = service.id === 'automatizacion-control' || service.id === 'robotica-industrial';

            return (
              <div
                key={service.id}
                onClick={() => handleOpenDetail(service)}
                className={`group relative rounded-xl border border-slate-200 bg-[#F8FAFB] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#003A70] hover:bg-white hover:shadow-lg cursor-pointer ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Esquina técnica activa en hover */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-[#003A70] transition-colors duration-200 rounded-tr" />

                <div>
                  {/* Fila Superior: Número, Submarca o Icono */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#003A70] group-hover:bg-[#003A70] group-hover:text-white group-hover:border-[#003A70] transition-all duration-200 group-hover:translate-x-1 shrink-0 shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-tech text-xs text-slate-400 font-semibold">
                        SOL // {service.number}
                      </span>
                    </div>

                    {service.subBrand && (
                      <div className="px-2.5 py-1 rounded bg-[#003A70]/10 text-[#003A70] font-mono-tech text-[10px] font-bold tracking-wider uppercase">
                        DIVISIÓN ESPECIALIZADA
                      </div>
                    )}
                  </div>

                  {/* Submarca gráfica si aplica */}
                  {service.subBrand && (
                    <div className="mb-4">
                      <GasuRoboticaLogo height={32} variant="dark" />
                    </div>
                  )}

                  {/* Título de la Solución */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#041F35] tracking-tight mb-3 group-hover:text-[#003A70] transition-colors">
                    {service.title}
                  </h3>

                  {/* Descripción breve */}
                  <p className="text-sm sm:text-base text-[#606166] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Zona Inferior: Tags desglosados (sin píldoras pesadas, texto limpio con separadores) y CTA */}
                <div className="pt-5 border-t border-slate-200/80">
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-[#606166] mb-4">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tag} className="inline-flex items-center">
                        <span className="font-mono-tech text-[11px] text-slate-500">{tag}</span>
                        {tIdx < service.tags.length - 1 && (
                          <span className="mx-2 text-slate-300 select-none">/</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-[#003A70]">
                    <span>Ver alcance técnico</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal / Ficha Técnica Expandible al hacer clic en un servicio */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <span className="font-mono-tech text-xs text-slate-400">
                FICHA TÉCNICA // SOLUCIÓN {selectedService.number}
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-semibold"
                aria-label="Cerrar ficha técnica"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-[#041F35]">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="bg-[#F8FAFB] p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="font-mono-tech text-xs text-[#003A70] font-semibold block uppercase">
                  Alcances y Componentes Típicos:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#003A70] shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <span className="text-xs font-mono-tech text-slate-400">
                  Ubicación: Puebla, México y corredor industrial
                </span>
                <a
                  href="#contacto"
                  onClick={() => {
                    setSelectedService(null);
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#003A70] text-white rounded-lg text-xs font-semibold hover:bg-[#07579A] transition-colors text-center"
                >
                  Consultar sobre este servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
