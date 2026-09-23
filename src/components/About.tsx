import React from 'react';
import { SectionLabel } from './SectionLabel';
import { Bot, Cpu, Zap, Settings, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const quadrants = [
    {
      num: '01',
      title: 'Robótica',
      color: 'bg-[#606166] text-white',
      desc: 'Integración, trayectorias y optimización de celdas robotizadas en procesos productivos.',
      icon: Bot,
    },
    {
      num: '02',
      title: 'Control',
      color: 'bg-[#003A70] text-white',
      desc: 'Lógica secuencial, PLCs, interfaces HMI y sincronización de señales críticas.',
      icon: Settings,
    },
    {
      num: '03',
      title: 'Electricidad',
      color: 'bg-[#003A70] text-white',
      desc: 'Distribución en media y baja tensión, tableros de control y seguridad operativa.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Automatización',
      color: 'bg-[#606166] text-white',
      desc: 'Sistemas interconectados para monitoreo, estabilidad operativa y reducción de fallas.',
      icon: Cpu,
    },
  ];

  return (
    <section id="empresa" className="py-20 lg:py-28 bg-[#F8FAFB] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Editorial */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel number="01" text="GASU SISTEMAS INDUSTRIALES" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
              Soluciones técnicas pensadas para operaciones que no pueden detenerse.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#606166] leading-relaxed">
              <p>
                GASU Sistemas Industriales integra ingeniería, servicio técnico y automatización para ayudar a empresas industriales a mantener, optimizar y modernizar sus operaciones.
              </p>
              <p>
                Cada proyecto parte de las necesidades reales de la planta, su infraestructura y sus procesos, buscando soluciones técnicamente viables y adaptadas a cada entorno.
              </p>
            </div>

            {/* Principios operativos clave */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                'Enfoque en piso de planta y continuidad operativa',
                'Intervenciones técnicas estructuradas y normadas',
                'Capacidad de integración multidisciplinaria',
                'Base operativa en Puebla con atención regional',
              ].map((principle) => (
                <div key={principle} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#252A30]">
                  <CheckCircle2 className="w-4 h-4 text-[#003A70] shrink-0 mt-0.5" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs font-mono-tech text-slate-400 border-t border-slate-200">
              * Nota: Síntesis de visión preliminar sujeta a validación técnica con la dirección de GASU.
            </div>
          </div>

          {/* Columna Derecha: Gráfico Modular derivado del Isotipo */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <span className="font-mono-tech text-xs tracking-wider text-slate-400 uppercase">
                  LENGUAJE MODULAR // ISOTIPO GASU
                </span>
                <span className="font-mono-tech text-xs text-[#003A70] font-semibold">
                  4 PILARES TÉCNICOS
                </span>
              </div>

              {/* Grid 2x2 que recrea la identidad visual del logo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quadrants.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="p-5 rounded-xl border border-slate-200/80 bg-[#F8FAFB] hover:border-[#003A70]/50 hover:bg-white transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shadow-xs`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono-tech text-xs text-slate-400 font-medium">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#041F35] mb-1.5 group-hover:text-[#003A70] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#606166] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono-tech">
                <span>MATRIZ MULTIDISCIPLINARIA</span>
                <span className="text-[#003A70]">PRECISIÓN EN PLANTA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
