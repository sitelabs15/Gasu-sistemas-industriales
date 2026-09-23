import React from 'react';
import { Zap, Cpu, Wrench, Bot, ShieldCheck } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { label: 'Ingeniería eléctrica', icon: Zap },
    { label: 'Automatización', icon: Cpu },
    { label: 'Mantenimiento', icon: Wrench },
    { label: 'Robótica', icon: Bot },
    { label: 'Soporte técnico', icon: ShieldCheck },
  ];

  return (
    <div className="relative z-20 bg-white border-y border-slate-200 shadow-xs py-4 lg:py-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs sm:text-sm font-semibold tracking-tight text-[#252A30]">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded bg-[#F8FAFB] border border-slate-200 flex items-center justify-center text-[#003A70] group-hover:bg-[#003A70] group-hover:text-white group-hover:border-[#003A70] transition-colors duration-200 shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display tracking-tight text-slate-800">
                    {item.label}
                  </span>
                </div>

                {/* Separador técnico sutil entre elementos en pantallas medianas y grandes */}
                {index < capabilities.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
