import React, { useState } from 'react';
import { gasuChecklist } from '../data/checklist';
import { ClipboardList, Copy, Check, X, FileText, CheckCircle2 } from 'lucide-react';

interface ClientChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientChecklistModal: React.FC<ClientChecklistModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopy = () => {
    let text = "DOSSIER DE VALIDACIÓN - REQUERIMIENTOS PARA SITIO WEB OFICIAL GASU SISTEMAS INDUSTRIALES\n\n";
    gasuChecklist.forEach((cat) => {
      text += `== ${cat.category.toUpperCase()} ==\n`;
      cat.items.forEach((item) => {
        text += `[ ] ${item}\n`;
      });
      text += "\n";
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
        {/* Encabezado */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#003A70]">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#041F35]">
                Dossier de Validación / Requerimientos para GASU
              </h3>
              <p className="text-xs font-mono-tech text-slate-500">
                Checklist de contenidos y material fotográfico para el lanzamiento oficial
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notificación explicativa */}
        <div className="px-6 pt-4">
          <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900 leading-relaxed flex items-start gap-3">
            <FileText className="w-5 h-5 text-[#003A70] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#003A70] mb-0.5">Propósito de esta herramienta comercial:</strong>
              Esta web fue diseñada como propuesta de alto nivel. Para convertirla en la versión definitiva de producción, solicita los siguientes elementos al equipo directivo de GASU Sistemas Industriales.
            </div>
          </div>
        </div>

        {/* Lista de Categorías con Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {gasuChecklist.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-2.5">
              <h4 className="font-mono-tech text-xs font-bold text-[#003A70] tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003A70]" />
                {cat.category}
              </h4>

              <div className="space-y-1.5 pl-4 border-l-2 border-slate-200">
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isChecked = !!checkedItems[key];

                  return (
                    <label
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer hover:text-slate-900 select-none py-0.5"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(key)}
                        className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-[#003A70] focus:ring-[#003A70]"
                      />
                      <span className={isChecked ? 'line-through text-slate-400' : ''}>
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Pie de modal con acciones */}
        <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F8FAFB] rounded-b-2xl">
          <div className="text-xs font-mono-tech text-slate-500 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#003A70]" />
            <span>Los datos se integran en un único archivo: <code>/src/data/company.ts</code></span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar lista estructurada</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#003A70] text-white text-xs font-semibold hover:bg-[#07579A] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
