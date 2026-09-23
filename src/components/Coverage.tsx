import React from 'react';
import { SectionLabel } from './SectionLabel';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { companyData } from '../data/company';

export const Coverage: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFB] relative border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Información de Operación */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel number="07" text="ÁREA DE COBERTURA" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
              Operación desde Puebla para proyectos industriales.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#606166] leading-relaxed">
              <p>
                GASU Sistemas Industriales tiene presencia en Puebla y capacidad de atención en zonas industriales de la región.
              </p>
              <p>
                Nuestra base geográfica nos permite responder con agilidad a requerimientos técnicos en corredores fabriles, parques industriales y plantas de manufactura de la zona.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 font-mono-tech text-xs">
              <div className="flex items-center gap-3 text-slate-800">
                <MapPin className="w-4 h-4 text-[#003A70] shrink-0" />
                <span className="font-semibold">{companyData.city}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Navigation className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Coordenadas de referencia: {companyData.coordinates}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Compass className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Atención a proyectos en zonas industriales de la región</span>
              </div>
            </div>

            <p className="text-xs font-mono-tech text-slate-400">
              * Nota: Los alcances foráneos o en entidades federativas colindantes se definen y evalúan caso por caso con el cliente.
            </p>
          </div>

          {/* Columna Derecha: Mapa Esquemático Vectorial Abstracto de Puebla & Región */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#041F35] text-white border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono-tech text-xs text-slate-400">
                <span>MATRIZ TERRITORIAL // PUEBLA HUB</span>
                <span className="text-blue-400">OPERACIÓN REGIONAL</span>
              </div>

              {/* Esquema Geográfico Vectorial Abstracto */}
              <div className="relative py-4 flex items-center justify-center">
                <svg viewBox="0 0 450 300" className="w-full h-auto" fill="none">
                  {/* Cuadrícula de coordenadas sutil */}
                  <line x1="50" y1="50" x2="400" y2="50" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />
                  <line x1="50" y1="150" x2="400" y2="150" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />
                  <line x1="50" y1="250" x2="400" y2="250" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />
                  <line x1="120" y1="30" x2="120" y2="270" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />
                  <line x1="225" y1="30" x2="225" y2="270" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />
                  <line x1="330" y1="30" x2="330" y2="270" stroke="#003A70" strokeWidth="0.8" strokeDasharray="3 6" />

                  {/* Silueta poligonal abstracta de la región industrial de Puebla */}
                  <polygon
                    points="120,70 190,40 290,65 370,120 380,200 320,260 210,240 140,220 90,150"
                    stroke="#07579A"
                    strokeWidth="1.5"
                    fill="#003A70"
                    fillOpacity="0.25"
                  />

                  {/* Ejes viales / Corredores de comunicación industriales */}
                  <path d="M 120 150 Q 225 140 330 150" stroke="#60A5FA" strokeWidth="2" />
                  <path d="M 225 70 L 225 240" stroke="#60A5FA" strokeWidth="2" />

                  {/* Ondas concéntricas de radio de atención desde Puebla */}
                  <circle cx="225" cy="145" r="30" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                  <circle cx="225" cy="145" r="65" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                  {/* Nodo central: Puebla */}
                  <circle cx="225" cy="145" r="7" fill="#FFFFFF" />
                  <circle cx="225" cy="145" r="3" fill="#003A70" />

                  {/* Nodos de corredores industriales en la región */}
                  <circle cx="170" cy="120" r="4" fill="#93C5FD" />
                  <circle cx="280" cy="160" r="4" fill="#93C5FD" />
                  <circle cx="230" cy="90" r="4" fill="#93C5FD" />
                  <circle cx="220" cy="210" r="4" fill="#93C5FD" />

                  {/* Etiquetas geográficas en el mapa */}
                  <text x="225" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="'Space Grotesk', sans-serif" fontWeight="bold">
                    PUEBLA (BASE OPERATIVA)
                  </text>
                  <text x="225" y="170" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace">
                    CORREDOR INDUSTRIAL
                  </text>
                  <text x="140" y="110" fill="#94A3B8" fontSize="8" fontFamily="monospace">
                    ZONA FINSA / AUTO
                  </text>
                  <text x="290" y="180" fill="#94A3B8" fontSize="8" fontFamily="monospace">
                    CORREDOR ORIENTE
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 pt-3 border-t border-white/10">
                <span>RESPUESTA TÉCNICA EN SITIO</span>
                <span className="text-blue-300">PUEBLA, MÉXICO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
