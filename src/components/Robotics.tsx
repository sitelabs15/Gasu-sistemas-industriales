import React from 'react';
import { SectionLabel } from './SectionLabel';
import { GasuRoboticaLogo } from './GasuRoboticaLogo';
import { ArrowUpRight, Cpu, Layers, CheckCircle2, RotateCw } from 'lucide-react';

export const Robotics: React.FC = () => {
  const areas = [
    {
      number: '01',
      title: 'Integración',
      tag: 'Incorporación',
      desc: 'Evaluación e incorporación de soluciones robotizadas adaptadas a la cadencia y geometría del producto.',
      items: [
        'Análisis de cinemática y alcance en celda',
        'Diseño de interfaces mecánicas y garras (EOAT)',
        'Sincronización con transportadores y periféricos',
        'Validación de tiempos de ciclo teóricos',
      ],
    },
    {
      number: '02',
      title: 'Soporte',
      tag: 'Asistencia en Planta',
      desc: 'Diagnóstico y asistencia técnica para sistemas existentes ante averías mecánicas, eléctricas o de software.',
      items: [
        'Ajuste de puntos y reprogramación de trayectorias',
        'Calibración y recuperación de ceros de ejes (mastering)',
        'Diagnóstico de servomotores y cableado de potencia',
        'Mantenimiento preventivo de articulaciones',
      ],
    },
    {
      number: '03',
      title: 'Optimización',
      tag: 'Rendimiento',
      desc: 'Mejoras orientadas a rendimiento, repetibilidad, mitigación de colisiones y suavidad en la operación.',
      items: [
        'Reducción de micro-paros por holguras',
        'Optimización de curvas de aceleración y desaceleración',
        'Mejora de seguridades perimetrales y de acceso',
        'Acompañamiento a operadores en arranques',
      ],
    },
  ];

  return (
    <section id="robotica" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Cabecera con Logotipo de la Submarca */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16 pb-8 border-b border-slate-200">
          <div className="space-y-4 max-w-3xl">
            <SectionLabel text="LÍNEA DE ESPECIALIZACIÓN" />
            <div className="py-1">
              <GasuRoboticaLogo height={46} variant="dark" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
              Robótica aplicada a procesos industriales.
            </h2>
            <p className="text-base sm:text-lg text-[#606166] leading-relaxed">
              Soluciones orientadas a incorporar, mantener o mejorar sistemas robotizados dentro de diferentes procesos productivos.
            </p>
          </div>

          <div className="lg:text-right shrink-0">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#003A70] text-white font-semibold text-xs sm:text-sm hover:bg-[#07579A] transition-colors shadow-xs"
            >
              <span>Consultar aplicación robótica</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Visual Central de Celda Robótica & Cinemática */}
        <div className="mb-16 p-6 sm:p-10 rounded-2xl bg-[#F8FAFB] border border-slate-200 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Diagrama Cinemático del Brazo Robótico de 6 Ejes */}
            <div className="lg:col-span-7 relative">
              <div className="p-4 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 font-mono-tech text-xs text-slate-400">
                  <span>CINEMÁTICA ARTICULADA // 6 GRADOS DE LIBERTAD</span>
                  <span className="text-[#003A70] font-semibold">TRAYECTORIA PRECISA</span>
                </div>

                {/* Ilustración Técnica Vectorial del Brazo Robótico */}
                <div className="relative py-4 flex items-center justify-center">
                  <svg viewBox="0 0 500 280" className="w-full h-auto max-h-[300px]" fill="none">
                    {/* Plano de referencia de piso */}
                    <line x1="40" y1="250" x2="460" y2="250" stroke="#CBD5E1" strokeWidth="2" />
                    <line x1="20" y1="250" x2="480" y2="250" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 6" />

                    {/* Pedestal y Base del Robot (J1) */}
                    <rect x="100" y="220" width="80" height="30" rx="4" fill="#606166" />
                    <circle cx="140" cy="220" r="16" fill="#003A70" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="140" y="224" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace">J1</text>

                    {/* Brazo Inferior (J2 a J3) */}
                    <path d="M 140 220 L 230 110" stroke="#003A70" strokeWidth="16" strokeLinecap="round" />
                    <circle cx="230" cy="110" r="14" fill="#606166" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="230" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace">J2</text>

                    {/* Actuador hidráulico/neumático auxiliar */}
                    <line x1="150" y1="190" x2="200" y2="135" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />

                    {/* Brazo Superior / Antebrazo (J3 a J4-J5) */}
                    <path d="M 230 110 L 350 130" stroke="#606166" strokeWidth="12" strokeLinecap="round" />
                    <circle cx="350" cy="130" r="12" fill="#003A70" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="350" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">J3/J4</text>

                    {/* Muñeca y Herramienta End-Effector (J5 y J6) */}
                    <path d="M 350 130 L 410 180" stroke="#003A70" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="410" cy="180" r="10" fill="#606166" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="410" y="183" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace">J5</text>

                    {/* Pinza / Herramienta industrial */}
                    <rect x="415" y="180" width="15" height="6" fill="#252A30" />
                    <path d="M 430 174 L 445 174 L 445 192 L 430 192" stroke="#003A70" strokeWidth="3" fill="none" />

                    {/* Arco de envolvente de trabajo (Working Envelope) */}
                    <path d="M 140 70 A 180 180 0 0 1 430 250" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <text x="320" y="60" fill="#0284C7" fontSize="9" fontFamily="monospace">ENVOLVENTE TRIDIMENSIONAL</text>

                    {/* Coordenadas de posición TCP */}
                    <circle cx="445" cy="183" r="3" fill="#EF4444" />
                    <text x="390" y="210" fill="#252A30" fontSize="9" fontFamily="monospace" fontWeight="bold">PUNTO TCP [X,Y,Z]</text>
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs font-mono-tech text-slate-500">
                  <span>SEGURIDAD PERIMETRAL: ENCLAVAMIENTO CATEGORÍA 4</span>
                  <span className="text-[#003A70]">REPETIBILIDAD ±0.03 mm</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Especificaciones de Capacidad */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono-tech text-xs font-semibold text-[#003A70] tracking-wider uppercase block">
                ALCANCE DE LA DIVISIÓN ROBÓTICA
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#041F35] leading-tight">
                Integración, mantenimiento correctivo y optimización de trayectorias.
              </h3>
              <p className="text-sm text-[#606166] leading-relaxed">
                Acompañamos a los equipos de producción para asegurar que el robot trabaje en sincronía armónica con el resto de la maquinaria, evitando holguras, colisiones o desprogramaciones durante el turno.
              </p>

              <div className="pt-2 space-y-2.5">
                {[
                  'Mantenimiento de ejes y sustitución de grasas/sellos',
                  'Restauración de backup de software y coordenadas de herramienta',
                  'Adecuación para nuevas variantes de piezas (tooling change)',
                  'Integración de barreras fotoeléctricas y escáneres de zona',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003A70] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Las 3 Áreas de Servicio de GASU Robótica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area) => (
            <div
              key={area.number}
              className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-[#F8FAFB] hover:border-[#003A70] hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-xs text-[#003A70] font-bold">
                    ÁREA {area.number}
                  </span>
                  <span className="font-mono-tech text-[11px] text-slate-400">
                    {area.tag}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#041F35] mb-2 group-hover:text-[#003A70] transition-colors">
                  {area.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#606166] leading-relaxed mb-5">
                  {area.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  {area.items.map((it) => (
                    <div key={it} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#003A70] font-bold">·</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-[#003A70]">
                <span>Solicitar diagnóstico</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
