import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Automation } from './components/Automation';
import { Robotics } from './components/Robotics';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Differentiators } from './components/Differentiators';
import { Coverage } from './components/Coverage';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { ClientChecklistModal } from './components/ClientChecklistModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFB] text-[#252A30] antialiased selection:bg-[#003A70] selection:text-white">
      {/* Navegación Superior Fija */}
      <Header onOpenChecklist={() => setChecklistModalOpen(true)} />

      {/* Contenido Principal */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onSelectSolution={() => {
          document.querySelector('#soluciones')?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 2. Franja de Capacidades Clave */}
        <CapabilityStrip />

        {/* 3. Sección Sobre GASU */}
        <About />

        {/* 4. Soluciones Industriales (Bento Grid) */}
        <Services />

        {/* 5. Sección de Automatización y Control (Dark theme) */}
        <Automation />

        {/* 6. Sección de GASU Robótica */}
        <Robotics />

        {/* 7. Sectores Industriales Atendidos */}
        <Industries />

        {/* 8. Metodología de Trabajo en Planta */}
        <Process />

        {/* 9. Fichas Técnicas de Proyectos */}
        <Projects />

        {/* 10. Criterio Operativo y Diferenciadores */}
        <Differentiators />

        {/* 11. Cobertura Geográfica (Puebla y Región) */}
        <Coverage />

        {/* 12. Llamado a la Acción Principal */}
        <FinalCTA />

        {/* 13. Formulario y Canales de Contacto */}
        <Contact onOpenPrivacy={() => setPrivacyModalOpen(true)} />
      </main>

      {/* Pie de Página */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenChecklist={() => setChecklistModalOpen(true)}
      />

      {/* Modales Informativos */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <ClientChecklistModal
        isOpen={checklistModalOpen}
        onClose={() => setChecklistModalOpen(false)}
      />
    </div>
  );
}
