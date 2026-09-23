export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  iconType: 'power' | 'control' | 'maintenance' | 'robotics' | 'personnel' | 'custom';
  featured?: boolean;
  subBrand?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ingenieria-electrica",
    number: "01",
    title: "Ingeniería eléctrica industrial",
    shortDesc: "Diseño, revisión y soporte de infraestructura eléctrica para aplicaciones industriales.",
    description: "Evaluación y desarrollo de tableros de distribución, centros de control de motores, canalizaciones, cableado estructurado de potencia y estudios de carga conforme a normatividad técnica vigente.",
    tags: ["Sistemas eléctricos", "Diagnóstico de potencia", "Integración", "Soporte en planta"],
    iconType: "power",
  },
  {
    id: "automatizacion-control",
    number: "02",
    title: "Automatización y control",
    shortDesc: "Integración de soluciones orientadas al control, monitoreo y optimización de procesos industriales.",
    description: "Programación e interconexión de PLCs, pantallas HMI, instrumentación de campo, sensores y sistemas de adquisición de señales orientados a estabilizar y elevar la repetibilidad operativa.",
    tags: ["Control secuencial", "Sensores & I/O", "Monitoreo", "Automatización"],
    iconType: "control",
    featured: true,
  },
  {
    id: "mantenimiento-soporte",
    number: "03",
    title: "Mantenimiento y soporte técnico",
    shortDesc: "Servicios técnicos orientados a mantener equipos e instalaciones trabajando de manera confiable.",
    description: "Planes de mantenimiento preventivo programado y asistencia técnica correctiva ante fallas operativas, enfocados en preservar la continuidad de líneas y maquinaria crítica.",
    tags: ["Preventivo programado", "Asistencia correctiva", "Diagnóstico electromecánico", "Soporte técnico"],
    iconType: "maintenance",
  },
  {
    id: "robotica-industrial",
    number: "04",
    title: "Robótica industrial",
    shortDesc: "Integración y soporte de soluciones robóticas para procesos industriales y automatizados.",
    description: "Evaluación de celdas robotizadas, trayectorias, manipulación, paletizado, ensamble y asistencia técnica especializada bajo la línea de especialidad GASU Robótica.",
    tags: ["Celdas robotizadas", "Integración de ejes", "Mantenimiento de robots", "Trayectorias"],
    iconType: "robotics",
    subBrand: true,
    featured: true,
  },
  {
    id: "personal-especializado",
    number: "05",
    title: "Personal técnico especializado",
    shortDesc: "Apoyo técnico para operaciones, proyectos, instalación, diagnóstico y mantenimiento industrial.",
    description: "Técnicos e ingenieros capacitados para acompañar paros programados, arranques de línea, montajes de maquinaria y refuerzo temporal de cuadrillas de planta.",
    tags: ["Cuadrillas en planta", "Arranque de líneas", "Instalación", "Soporte en sitio"],
    iconType: "personnel",
  },
  {
    id: "soluciones-especiales",
    number: "06",
    title: "Soluciones especiales",
    shortDesc: "Análisis de requerimientos y desarrollo de soluciones adaptadas a las condiciones específicas de cada proyecto.",
    description: "Desarrollo de adecuaciones técnicas, retrofits de maquinaria existente, estaciones de ensamble manual asistido y proyectos donde la solución estándar no es suficiente.",
    tags: ["Ingeniería a medida", "Retrofit de maquinaria", "Estudios de viabilidad", "Mejora continua"],
    iconType: "custom",
  },
];
