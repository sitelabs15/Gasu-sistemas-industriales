export interface ChecklistCategory {
  category: string;
  items: string[];
}

export const gasuChecklist: ChecklistCategory[] = [
  {
    category: "Identidad Corporativa & Datos Legales",
    items: [
      "Nombre o razón social oficial completa",
      "RFC / Razón social fiscal si se requiere en facturas o footer",
      "Año de fundación y reseña histórica verificada",
      "Misión, visión o enfoque operativo formal",
      "Logo oficial en formato vectorial (SVG / AI / PDF de alta resolución)",
      "Manual de identidad gráfica si está disponible",
      "Aviso de privacidad legal definitivo para protección de datos personales",
    ],
  },
  {
    category: "Servicios & Alcance Técnico",
    items: [
      "Catálogo exhaustivo de servicios técnicos ofrecidos",
      "Servicios prioritarios o con mayor demanda en planta",
      "Tipos de mantenimiento industrial ejecutados (preventivo, predictivo, correctivo)",
      "Capacidades específicas de automatización (arquitecturas de control, SCADA, redes industriales)",
      "Marcas y plataformas de PLCs / HMIs que maneja el equipo",
      "Servicios especializados de GASU Robótica (marcas de robots, soldadura, paletizado, etc.)",
      "Alcance y modalidad del personal técnico especializado (cuadrillas en sitio, apoyo por proyecto)",
    ],
  },
  {
    category: "Certificaciones, Alianzas & Normativas",
    items: [
      "Certificaciones técnicas y del personal (STPS, DC-3, NOMs, etc.)",
      "Normativas industriales bajo las cuales diseñan o instalan",
      "Alianzas o integraciones de marcas de automatización y robótica confirmadas",
      "Diferenciadores técnicos reales frente a competidores en Puebla",
    ],
  },
  {
    category: "Casos de Éxito & Material Fotográfico",
    items: [
      "Fotografías en alta resolución de instalaciones, tableros y celdas robotizadas",
      "Fotografías del equipo de ingenieros y técnicos en campo (con equipo de seguridad)",
      "Fichas de 3 a 6 proyectos representativos con problemática, solución y resultados",
      "Marcas o clientes industriales con autorización expresa para mención pública",
      "Testimonios o referencias comerciales verificables",
    ],
  },
  {
    category: "Canales de Contacto Oficiales",
    items: [
      "Teléfono directo de oficina y conmutador",
      "Número de WhatsApp comercial para cotizaciones urgentes",
      "Cuentas de correo departamentales (cotizaciones, soporte, administración)",
      "Domicilio físico o parque industrial donde se ubican sus talleres/oficinas en Puebla",
      "Horarios de atención regulares y esquema de emergencias en planta",
      "Enlaces a perfiles oficiales en LinkedIn y redes industriales",
      "Nombre y cargo del responsable comercial o de ingeniería",
    ],
  },
];
