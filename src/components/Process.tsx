import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Search, Compass, Wrench, ShieldCheck } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      copy: 'Conocemos la necesidad, proceso, equipo o situación técnica en planta mediante levantamiento en sitio.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Ingeniería',
      copy: 'Definimos una solución adecuada a los requerimientos del proyecto, presupuestos y tiempos de paro disponibles.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Implementación',
      copy: 'Ejecutamos instalación, integración, intervención electromecánica o puesta en marcha según el alcance acordado.',
      icon: Wrench,
    },
    {
      num: '04',
      title: 'Soporte',
      copy: 'Damos continuidad técnica, ajustes posteriores a la entrega y asistencia cuando el proyecto lo requiere.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <SectionLabel number="04" text="METODOLOGÍA DE TRABAJO" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
            De la necesidad técnica a una solución implementable.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#606166] leading-relaxed">
            Una secuencia de trabajo metódica enfocada en minimizar la incertidumbre, respetar las ventanas de mantenimiento y entregar resultados medibles.
          </p>
        </div>

        {/* Timeline Desktop con línea de interconexión técnica */}
        <div className="relative">
          {/* Línea horizontal de conexión de ingeniería (visible en desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0">
            <div className="h-full bg-[#003A70] w-3/4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 hover:border-[#003A70] transition-all duration-200 flex flex-col justify-between group shadow-2xs"
                >
                  <div>
                    {/* Indicador de Paso y Número */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-[#F8FAFB] border-2 border-slate-200 group-hover:border-[#003A70] group-hover:bg-[#003A70] flex items-center justify-center text-[#003A70] group-hover:text-white transition-all duration-200 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono-tech text-lg font-bold text-slate-300 group-hover:text-[#003A70] transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#041F35] mb-2 group-hover:text-[#003A70] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#606166] leading-relaxed">
                      {step.copy}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between font-mono-tech text-[11px] text-slate-400">
                    <span>FASE {idx + 1} DE 4</span>
                    <span className="text-[#003A70]">TÉCNICA</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
