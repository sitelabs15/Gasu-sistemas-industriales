import React from 'react';
import { SectionLabel } from './SectionLabel';
import { projectsData } from '../data/projects';
import { Cpu, Zap, Bot, ArrowUpRight, FolderLock } from 'lucide-react';

export const Projects: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Automatización')) return Cpu;
    if (category.includes('Eléctrica')) return Zap;
    return Bot;
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFB] relative border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Cabecera */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <SectionLabel number="05" text="REGISTRO DE PROYECTOS" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
            Ingeniería aplicada en campo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#606166] leading-relaxed">
            Estructura preparada para documentar casos de éxito, problemática inicial, solución técnica desarrollada y resultados obtenidos en piso de producción.
          </p>
        </div>

        {/* Grid de Casos de Estudio Demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between group hover:border-[#003A70] hover:shadow-md transition-all duration-300"
              >
                {/* Contenedor Visual de Blueprint Técnico */}
                <div className="relative h-48 bg-[#041F35] p-5 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-tech-grid-dark opacity-60 pointer-events-none" />

                  {/* Visual esquemático de fondo */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 300 150">
                    <line x1="20" y1="20" x2="280" y2="130" stroke="#003A70" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="150" cy="75" r="40" stroke="#07579A" strokeWidth="1" />
                    <rect x="130" y="55" width="40" height="40" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                  </svg>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-8 h-8 rounded bg-white/10 text-blue-300 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono-tech text-[10px] text-white/50 tracking-wider">
                      {project.code}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono-tech text-[10px] mb-1">
                      <FolderLock className="w-3 h-3" />
                      <span>{project.tag}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white truncate">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Cuerpo de la ficha de proyecto */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#041F35] mb-2 group-hover:text-[#003A70] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#606166] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tabla de Parámetros Técnicos */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 font-mono-tech text-[11px]">
                    {project.technicalFields.map((field) => (
                      <div key={field.label} className="flex justify-between items-center text-slate-600">
                        <span className="text-slate-400">{field.label}:</span>
                        <span className="text-slate-700 font-medium text-right">{field.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Aviso de confidencialidad y preparación de datos */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tech text-slate-400">
                    <span>STATUS: POR VALIDAR</span>
                    <span className="text-[#003A70] font-semibold flex items-center gap-1">
                      GASU REPO <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota aclaratoria al pie de proyectos */}
        <div className="mt-8 text-center text-xs font-mono-tech text-slate-500 max-w-2xl mx-auto">
          * Plantilla de proyectos representativos sin datos inventados. Al recibir el material fotográfico y fichas autorizadas de GASU, se incorporarán directamente los casos verificados.
        </div>
      </div>
    </section>
  );
};
