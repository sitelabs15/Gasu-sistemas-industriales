/**
 * CASOS Y PROYECTOS DEMOSTRATIVOS (PLACEHOLDERS DE ALTA FIDELIDAD)
 *
 * REGLA ESTRICTA DE CREDIBILIDAD INDUSTRIAL:
 * No se inventan clientes, marcas ni métricas falsas.
 * Estas fichas estructuradas sirven como plantilla lista para que GASU incorpore
 * su portafolio real, fichas técnicas y material fotográfico de campo.
 */

export interface ProjectCase {
  id: string;
  category: string;
  tag: string;
  code: string;
  title: string;
  summary: string;
  placeholderNotice: string;
  technicalFields: { label: string; value: string }[];
  isPlaceholder: boolean;
}

export const projectsData: ProjectCase[] = [
  {
    id: "caso-automatizacion",
    category: "Automatización & Control",
    tag: "Integración de Sistemas",
    code: "CASE_STUDY_PLACEHOLDER // AUTO-01",
    title: "Proyecto de automatización de procesos",
    summary: "Espacio reservado para documentar alcance, problemática, solución implementada y resultados obtenidos en piso de producción.",
    placeholderNotice: "Espacio reservado para proyecto real provisto por GASU",
    technicalFields: [
      { label: "Alcance", value: "Por documentar con el cliente" },
      { label: "Disciplina", value: "Automatización, HMI & Sensores" },
      { label: "Ubicación", value: "Planta industrial en Puebla / Región" },
      { label: "Estado", value: "Listo para carga de material fotográfico" },
    ],
    isPlaceholder: true,
  },
  {
    id: "caso-electrico",
    category: "Ingeniería Eléctrica",
    tag: "Infraestructura & Potencia",
    code: "CASE_STUDY_PLACEHOLDER // ELEC-02",
    title: "Intervención de ingeniería eléctrica industrial",
    summary: "Caso por incorporar con información técnica, diagramas unifilares y material fotográfico oficial proporcionado por GASU.",
    placeholderNotice: "Caso por incorporar con información oficial de GASU",
    technicalFields: [
      { label: "Alcance", value: "Modernización de distribución y tableros" },
      { label: "Disciplina", value: "Media/Baja Tensión & Protección" },
      { label: "Ubicación", value: "Sector manufactura / metalmecánico" },
      { label: "Estado", value: "Pendiente de validación de ficha técnica" },
    ],
    isPlaceholder: true,
  },
  {
    id: "caso-robotica",
    category: "Robótica Industrial",
    tag: "GASU Robótica",
    code: "CASE_STUDY_PLACEHOLDER // ROBO-03",
    title: "Aplicación y celda de robótica industrial",
    summary: "Proyecto por documentar con especificaciones cinemáticas, alcance de trayectoria, seguridad perimetral y soporte de puesta en marcha.",
    placeholderNotice: "Proyecto por documentar con especificaciones técnicas",
    technicalFields: [
      { label: "Alcance", value: "Integración o reacondicionamiento de celda" },
      { label: "Disciplina", value: "Cinemática de robot, seguridades y PLC" },
      { label: "Ubicación", value: "Línea de ensamble automatizado" },
      { label: "Estado", value: "Estructura preparada para fotos de celda" },
    ],
    isPlaceholder: true,
  },
];
