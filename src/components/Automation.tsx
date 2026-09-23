import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { Cpu, Activity, Play, CheckCircle, Database, Network } from 'lucide-react';

export const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'telemetry' | 'safety'>('topology');

  return (
    <section className="py-20 lg:py-28 bg-[#041F35] text-white relative overflow-hidden">
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#07579A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Copy y Filosofía de Control */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel text="CONTROL / AUTOMATIZACIÓN" theme="dark" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
              Más control. Más información. Procesos mejor conectados.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Desde una necesidad puntual de mantenimiento hasta la integración de sistemas de automatización, el objetivo es desarrollar soluciones coherentes con la operación de cada planta.
            </p>

            {/* Puntos destacados con iconografía técnica */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded bg-blue-500/20 text-blue-300 shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Integración de arquitecturas de campo
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Interconexión fiable entre instrumentos, sensores, actuadores y controladores lógicos programables (PLCs).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded bg-blue-500/20 text-blue-300 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Visualización y diagnóstico oportuno
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Interfaces hombre-máquina (HMI) diseñadas con claridad ergonómica para facilitar la labor de los operadores y técnicos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Interfaz Visual Abstracta de Monitoreo Industrial */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/15 bg-[#031726]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Esquinas técnicas decorativas */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400" />

              {/* Barra superior de estado de la consola industrial */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 font-mono-tech text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-medium">ESTADO: OPERACIÓN ACTIVA</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-[11px]">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>BUS INDUSTRIAL SINCRONIZADO</span>
                </div>
              </div>

              {/* Controles de vista interactiva */}
              <div className="flex items-center gap-2 mb-6 p-1 bg-white/5 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('topology')}
                  className={`flex-1 py-1.5 px-3 rounded text-center transition-colors font-mono-tech ${
                    activeTab === 'topology'
                      ? 'bg-[#003A70] text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Diagrama de Bus
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`flex-1 py-1.5 px-3 rounded text-center transition-colors font-mono-tech ${
                    activeTab === 'telemetry'
                      ? 'bg-[#003A70] text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Señales E/S
                </button>
                <button
                  onClick={() => setActiveTab('safety')}
                  className={`flex-1 py-1.5 px-3 rounded text-center transition-colors font-mono-tech ${
                    activeTab === 'safety'
                      ? 'bg-[#003A70] text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Lógica de Seguridad
                </button>
              </div>

              {/* Esquema dinámico de monitoreo */}
              <div className="p-4 sm:p-6 rounded-xl bg-[#06243d]/60 border border-white/10 relative">
                {activeTab === 'topology' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-tech text-blue-300">
                      <span>PLC MAESTRO [CPU-315]</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Play className="w-3 h-3 fill-emerald-400" /> RUN MODE
                      </span>
                    </div>

                    {/* Esquema SVG interactivo de nodos y conexiones de red */}
                    <div className="py-2">
                      <svg viewBox="0 0 400 120" className="w-full h-auto" fill="none">
                        {/* Líneas de bus principales */}
                        <path d="M 50 60 L 350 60" stroke="#003A70" strokeWidth="3" />
                        <path d="M 50 60 L 350 60" stroke="#60A5FA" strokeWidth="1" strokeDasharray="6 4" />

                        {/* Derivaciones a nodos de campo */}
                        <path d="M 80 60 L 80 20" stroke="#606166" strokeWidth="1.5" />
                        <path d="M 170 60 L 170 100" stroke="#606166" strokeWidth="1.5" />
                        <path d="M 260 60 L 260 20" stroke="#606166" strokeWidth="1.5" />
                        <path d="M 330 60 L 330 100" stroke="#606166" strokeWidth="1.5" />

                        {/* Nodos */}
                        <circle cx="80" cy="20" r="10" fill="#003A70" stroke="#60A5FA" strokeWidth="1.5" />
                        <text x="80" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">HMI</text>

                        <circle cx="170" cy="100" r="10" fill="#606166" stroke="#93C5FD" strokeWidth="1.5" />
                        <text x="170" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">VFD</text>

                        <circle cx="260" cy="20" r="10" fill="#003A70" stroke="#60A5FA" strokeWidth="1.5" />
                        <text x="260" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">ROBOT</text>

                        <circle cx="330" cy="100" r="10" fill="#606166" stroke="#93C5FD" strokeWidth="1.5" />
                        <text x="330" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">I/O</text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono-tech text-slate-400 border-t border-white/10">
                      <div>REDUNDANCIA: HABILITADA</div>
                      <div className="text-right text-blue-300">PROTOCOL: PROFINET / MODBUS</div>
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div className="space-y-3 font-mono-tech text-xs">
                    <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                      <span>CANAL E/S</span>
                      <span>ASIGNACIÓN</span>
                      <span>CONDICIÓN</span>
                    </div>
                    {[
                      { channel: 'DI_0.0', desc: 'Botonera Marcha / Paro', status: 'CERRADO (OK)' },
                      { channel: 'DI_0.1', desc: 'Barrera de Seguridad', status: 'HABILITADA' },
                      { channel: 'AQ_1.0', desc: 'Consigna Frecuencia VFD', status: '60.0 Hz' },
                      { channel: 'DQ_0.4', desc: 'Válvula Neumática Actuador', status: 'ACTIVA' },
                    ].map((item) => (
                      <div key={item.channel} className="flex justify-between items-center text-white/80 py-1">
                        <span className="text-blue-400 font-semibold">{item.channel}</span>
                        <span className="text-slate-300 text-[11px]">{item.desc}</span>
                        <span className="text-emerald-400 text-[11px]">{item.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'safety' && (
                  <div className="space-y-3 font-mono-tech text-xs">
                    <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded text-emerald-300 text-[11px] flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Circuito de parada de emergencia en condiciones seguras</span>
                    </div>
                    <div className="space-y-1.5 text-slate-400 text-[11px]">
                      <div className="flex justify-between">
                        <span>RELÉ DE SEGURIDAD PILZ/SICK:</span>
                        <span className="text-white">CANAL DUAL ACTIVO</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ENCLAVAMIENTO PUERTA CELDA:</span>
                        <span className="text-white">BLOQUEO MAGNÉTICO OK</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RESET MANUAL DE LÍNEA:</span>
                        <span className="text-white">REQUERIDO POR PROCEDIMIENTO</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pie técnico del módulo */}
              <div className="mt-4 flex items-center justify-between text-[10px] font-mono-tech text-slate-500">
                <span>REVISIÓN DE INGENIERÍA // PUEBLA</span>
                <span className="text-blue-400">ESTÁNDAR IEC 61131-3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
