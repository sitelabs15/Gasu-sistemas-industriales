import React from 'react';
import { SectionLabel } from './SectionLabel';
import { MessageSquareCode, Sliders, Layers, Factory } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'Atención técnica directa',
      desc: 'Comunicación técnica sin rodeos comerciales: dialogamos de ingeniero a ingeniero para comprender con exactitud la falla, el requerimiento o la mejora deseada en piso de planta.',
      icon: MessageSquareCode,
    },
    {
      num: '02',
      title: 'Soluciones adaptadas',
      desc: 'Cada entorno industrial presenta condiciones particulares de espacio, cadencia y normatividad. No forzamos paquetes genéricos, sino soluciones concebidas para su infraestructura.',
      icon: Sliders,
    },
    {
      num: '03',
      title: 'Capacidad de integración',
      desc: 'Habilidad de enlazar la potencia eléctrica, el control lógico de PLCs, la instrumentación de sensores y la cinemática robótica desde una misma responsabilidad técnica.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'Enfoque industrial y continuidad',
      desc: 'Entendemos el costo crítico que representa cada minuto de paro en línea. Diseñamos e intervenimos bajo criterios de confiabilidad, seguridad y rápida respuesta en campo.',
      icon: Factory,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-14 lg:mb-16">
          <SectionLabel number="06" text="CRITERIO OPERATIVO" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
            Ingeniería orientada a resolver, no a complicar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#606166] leading-relaxed">
            Priorizamos la viabilidad técnica, la claridad documental y el apego a las normas de seguridad de cada planta industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.num}
                className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-[#F8FAFB] hover:border-[#003A70] hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#003A70] group-hover:bg-[#003A70] group-hover:text-white group-hover:border-[#003A70] transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-tech text-xs text-slate-400 font-bold">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#041F35] mb-3 group-hover:text-[#003A70] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#606166] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between font-mono-tech text-[11px] text-slate-400">
                  <span>RESPALDO TÉCNICO</span>
                  <span className="text-[#003A70]">GASU</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
