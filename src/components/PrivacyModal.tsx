import React from 'react';
import { companyData } from '../data/company';
import { ShieldCheck, X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
        {/* Encabezado del modal */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-blue-50 text-[#003A70]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#041F35]">
                Aviso de Privacidad (Provisional)
              </h3>
              <p className="text-xs font-mono-tech text-slate-500">
                {companyData.name} · Puebla, México
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

        {/* Contenido con scroll */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-mono-tech">
            <strong>NOTA INFORMATIVA PARA EL CLIENTE:</strong> Este texto corresponde a un formato modelo provisional. Previo a la publicación definitiva del sitio web, se integrará el documento emitido o validado formalmente por el departamento legal o fiscal de GASU Sistemas Industriales.
          </div>

          <h4 className="font-bold text-slate-900 text-sm">
            1. Identidad y Domicilio del Responsable
          </h4>
          <p>
            {companyData.name}, con domicilio operativo de referencia en {companyData.city}, es responsable del uso y protección de sus datos personales, conforme a los términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            2. Finalidades del Tratamiento
          </h4>
          <p>
            Los datos personales recabados a través de este portal web (tales como nombre, empresa, correo electrónico y teléfono) serán utilizados única y exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a sus solicitudes de cotización, diagnóstico y evaluación técnica.</li>
            <li>Establecer comunicación directa con ingenieros o encargados de proyectos en planta.</li>
            <li>Coordinar visitas técnicas o levantamientos en sitio cuando sea requerido.</li>
          </ul>

          <h4 className="font-bold text-slate-900 text-sm">
            3. No Transferencia a Terceros
          </h4>
          <p>
            {companyData.name} no vende, alquila ni transfiere datos personales a terceras partes comerciales bajo ninguna circunstancia.
          </p>

          <h4 className="font-bold text-slate-900 text-sm">
            4. Derechos ARCO
          </h4>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las condiciones de su uso (Acceso). Asimismo, puede solicitar su corrección (Rectificación), eliminación de nuestros registros (Cancelación) u oponerse a su tratamiento (Oposición) enviando una solicitud a: <span className="font-mono-tech text-[#003A70]">{companyData.email}</span>.
          </p>
        </div>

        {/* Pie del modal */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#003A70] text-white text-xs font-semibold hover:bg-[#07579A] transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
