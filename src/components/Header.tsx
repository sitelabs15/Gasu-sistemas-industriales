import React, { useState, useEffect } from 'react';
import { GasuLogo } from './GasuLogo';
import { navLinks, companyData } from '../data/company';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenChecklist?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChecklist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
            : 'bg-transparent border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Zona 1: Marca / Logotipo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="GASU Sistemas Industriales - Volver al inicio"
          >
            <GasuLogo
              variant={isScrolled ? 'auto' : 'light'}
              height={isScrolled ? 36 : 40}
              showSubtitle={true}
            />
          </a>

          {/* Zona 2: 4-6 Enlaces de Navegación Limpios */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors duration-200 relative group py-1 ${
                  isScrolled
                    ? 'text-[#252A30] hover:text-[#003A70]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003A70] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zona 3: 1-2 Acciones Principales */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenChecklist && (
              <button
                onClick={onOpenChecklist}
                className={`text-xs font-mono-tech px-2.5 py-1.5 rounded border transition-colors ${
                  isScrolled
                    ? 'border-slate-300 text-[#606166] hover:bg-slate-100'
                    : 'border-white/20 text-white/70 hover:bg-white/10'
                }`}
                title="Ver checklist para presentación comercial con GASU"
              >
                Dossier Validación
              </button>
            )}

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-tight transition-all duration-200 shadow-xs group ${
                isScrolled
                  ? 'bg-[#003A70] text-white hover:bg-[#07579A]'
                  : 'bg-white text-[#041F35] hover:bg-blue-50'
              }`}
            >
              <span>Solicitar evaluación</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Botón Hamburger Móvil */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[#252A30] hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil Sofisticado */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#041F35]/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden text-white animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <GasuLogo variant="light" height={40} showSubtitle={true} />
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xl font-medium text-white/90 hover:text-white flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="font-mono-tech text-xs text-blue-400">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-200/70">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{companyData.city}</span>
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-[#003A70] text-white font-semibold text-sm hover:bg-[#07579A] transition-colors"
            >
              <span>Solicitar evaluación</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {onOpenChecklist && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklist();
                }}
                className="w-full py-2.5 px-4 rounded-lg border border-white/20 text-xs font-mono-tech text-white/70 hover:bg-white/10 text-center"
              >
                Dossier de Validación para GASU
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
