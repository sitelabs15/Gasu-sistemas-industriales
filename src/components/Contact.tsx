import React, { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { companyData } from '../data/company';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactProps {
  onOpenPrivacy?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoProyecto: 'Automatización',
    mensaje: '',
    aceptaPrivacidad: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor ingresa tu nombre.');
      return;
    }
    if (!formData.empresa.trim()) {
      setErrorMsg('Por favor ingresa el nombre de tu empresa o planta.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!formData.telefono.trim()) {
      setErrorMsg('Por favor ingresa un número telefónico de contacto.');
      return;
    }
    if (!formData.mensaje.trim()) {
      setErrorMsg('Por favor describe brevemente el requerimiento o proyecto.');
      return;
    }
    if (!formData.aceptaPrivacidad) {
      setErrorMsg('Debes aceptar el aviso de privacidad para enviar la solicitud.');
      return;
    }

    setIsSubmitting(true);
    // Simulación de envío de formulario B2B
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda: Información de Contacto Demo y Canales */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="08" text="CONTACTO DIRECTO" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041F35] tracking-tight leading-[1.15] text-balance">
              Inicia una evaluación técnica con nuestro equipo.
            </h2>

            <p className="text-base text-[#606166] leading-relaxed">
              Analizamos tus requerimientos técnicos en planta para proponerte soluciones viables, tiempos de ejecución y estimaciones de inversión.
            </p>

            {/* Fichas de canales de contacto con datos centralizados */}
            <div className="space-y-4 pt-2 font-mono-tech text-xs">
              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-slate-200 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#003A70] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">UBICACIÓN PRINCIPAL</span>
                  <span className="font-semibold text-slate-800 text-sm font-sans">{companyData.name}</span>
                  <p className="text-slate-600 mt-0.5">{companyData.city}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-slate-200 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#003A70] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">TELÉFONO & WHATSAPP</span>
                  <a href={`tel:${companyData.phone}`} className="font-semibold text-slate-800 hover:text-[#003A70] text-sm font-sans">
                    {companyData.phoneDisplay}
                  </a>
                  <p className="text-slate-500 mt-0.5 text-[11px]">(Atención a proyectos en planta)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-slate-200 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#003A70] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">CORREO ELECTRÓNICO</span>
                  <a href={`mailto:${companyData.email}`} className="font-semibold text-slate-800 hover:text-[#003A70] text-sm font-sans">
                    {companyData.email}
                  </a>
                  <p className="text-slate-500 mt-0.5 text-[11px]">Recepción de cotizaciones y solicitudes</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFB] border border-slate-200 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#003A70] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">HORARIO DE ATENCIÓN</span>
                  <span className="font-semibold text-slate-800 text-sm font-sans">{companyData.schedule}</span>
                  <p className="text-slate-500 mt-0.5 text-[11px]">Puebla, México (Zona Centro)</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs font-mono-tech text-blue-900">
              * Datos de contacto de demostración para el prototipo comercial de GASU Sistemas Industriales.
            </div>
          </div>

          {/* Columna Derecha: Formulario de Solicitud de Evaluación */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#F8FAFB] border border-slate-200 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <span className="font-mono-tech text-xs text-slate-500 font-semibold uppercase">
                  SOLICITUD DE EVALUACIÓN TÉCNICA
                </span>
                <span className="font-mono-tech text-xs text-[#003A70]">
                  GASU // FORMS
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#041F35]">
                    Solicitud Registrada Exitosamente
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido la información de tu proyecto para <strong>{formData.empresa}</strong>. Un ingeniero técnico de GASU se pondrá en contacto al correo <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nombre: '',
                        empresa: '',
                        email: '',
                        telefono: '',
                        tipoProyecto: 'Automatización',
                        mensaje: '',
                        aceptaPrivacidad: false,
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#003A70] text-white text-xs font-semibold hover:bg-[#07579A] transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Empresa o Planta *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ej. Planta Manufactura Puebla"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Correo electrónico corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+52 (222) ..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipoProyecto" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tipo de proyecto o disciplina *
                    </label>
                    <select
                      id="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors"
                    >
                      <option value="Ingeniería eléctrica">Ingeniería eléctrica industrial</option>
                      <option value="Automatización">Automatización y control (PLCs, HMIs)</option>
                      <option value="Mantenimiento">Mantenimiento y soporte técnico</option>
                      <option value="Robótica">Robótica industrial (GASU Robótica)</option>
                      <option value="Personal técnico">Personal técnico especializado</option>
                      <option value="Otro">Solución especial / Otro requerimiento</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Descripción del requerimiento o problema en planta *
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describa brevemente la máquina, proceso, tipo de falla o alcance técnico deseado..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003A70] focus:ring-1 focus:ring-[#003A70] transition-colors resize-y"
                    />
                  </div>

                  {/* Checkbox de Aviso de Privacidad */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="aceptaPrivacidad"
                      checked={formData.aceptaPrivacidad}
                      onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#003A70] focus:ring-[#003A70]"
                    />
                    <label htmlFor="aceptaPrivacidad" className="text-xs text-slate-600 leading-normal">
                      He leído y acepto el{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#003A70] underline font-medium hover:text-[#07579A]"
                      >
                        aviso de privacidad
                      </button>
                      . Entiendo que mis datos serán tratados exclusivamente con fines de contacto técnico.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#003A70] text-white font-semibold text-sm hover:bg-[#07579A] transition-colors shadow-xs flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Procesando solicitud...</span>
                      ) : (
                        <>
                          <span>Enviar solicitud de evaluación</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
