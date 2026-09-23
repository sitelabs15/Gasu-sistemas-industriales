import React from 'react';
import { GasuLogo } from './GasuLogo';
import { companyData } from '../data/company';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenChecklist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenChecklist }) => {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#031726] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Columna 1: Marca (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GasuLogo variant="light" height={44} showSubtitle={true} />

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Ingeniería, automatización, mantenimiento y soluciones técnicas para la industria. Base operativa en Puebla con cobertura regional.
            </p>

            <div className="pt-2 font-mono-tech text-xs text-slate-400">
              <span>GASU SISTEMAS INDUSTRIALES · PUEBLA, MÉXICO</span>
            </div>
          </div>

          {/* Columna 2: Soluciones (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono-tech text-xs font-semibold text-blue-400 tracking-wider uppercase">
              Soluciones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#soluciones" onClick={scrollTo('#soluciones')} className="hover:text-white transition-colors">
                  Ingeniería eléctrica
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={scrollTo('#soluciones')} className="hover:text-white transition-colors">
                  Automatización y control
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={scrollTo('#soluciones')} className="hover:text-white transition-colors">
                  Mantenimiento técnico
                </a>
              </li>
              <li>
                <a href="#robotica" onClick={scrollTo('#robotica')} className="hover:text-white transition-colors">
                  Robótica industrial
                </a>
              </li>
              <li>
                <a href="#soluciones" onClick={scrollTo('#soluciones')} className="hover:text-white transition-colors">
                  Personal especializado
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Navegación (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono-tech text-xs font-semibold text-blue-400 tracking-wider uppercase">
              Empresa
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#inicio" onClick={scrollTo('#inicio')} className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#empresa" onClick={scrollTo('#empresa')} className="hover:text-white transition-colors">
                  Sobre GASU
                </a>
              </li>
              <li>
                <a href="#sectores" onClick={scrollTo('#sectores')} className="hover:text-white transition-colors">
                  Sectores industriales
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={scrollTo('#contacto')} className="hover:text-white transition-colors">
                  Contacto & Cotizaciones
                </a>
              </li>
              {onOpenChecklist && (
                <li>
                  <button
                    onClick={onOpenChecklist}
                    className="text-blue-300 hover:text-white transition-colors font-mono-tech text-xs text-left"
                  >
                    Dossier para GASU
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Columna 4: Contacto (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono-tech text-xs font-semibold text-blue-400 tracking-wider uppercase">
              Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-mono-tech">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{companyData.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors">
                  {companyData.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{companyData.schedule}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
          <div>
            © {companyData.copyrightYear} {companyData.name}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline"
            >
              Aviso de privacidad
            </button>
            <span className="text-slate-600">·</span>
            <span>Puebla, México</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
