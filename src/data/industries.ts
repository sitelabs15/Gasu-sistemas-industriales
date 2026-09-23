/**
 * SECTORES INDUSTRIALES PROPUESTOS
 *
 * NOTA DE VALIDACIÓN REQUERIDA (PROYECTO GASU):
 * Los sectores enumerados a continuación corresponden a una categorización inicial
 * propuesta para la presentación comercial y deben ser validados formalmente
 * con la dirección de GASU antes del despliegue en producción definitiva.
 */

export interface IndustrySector {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  applications: string[];
  technicalFocus: string;
}

export const industriesData: IndustrySector[] = [
  {
    id: "manufactura",
    number: "01",
    name: "Manufactura",
    subtitle: "Líneas de ensamble y producción continua",
    description: "Intervención técnica en estaciones de manufactura, estandarización de señales de control, tableros de mando y soporte electromecánico para líneas con cadencias estrictas de producción.",
    applications: ["Estaciones de ensamble", "Sistemas de transporte", "Sincronización de señales", "Tableros de mando"],
    technicalFocus: "Estabilidad electromecánica y reducción de tiempos muertos",
  },
  {
    id: "automotriz",
    number: "02",
    name: "Automotriz y autopartes",
    subtitle: "Estándares rigurosos de precisión y trazabilidad",
    description: "Apoyo en celdas robotizadas de soldadura/manipulación, control de líneas de ensamble de componentes y mantenimiento de actuadores neumáticos, eléctricos e hidráulicos.",
    applications: ["Celdas de soldadura y pegado", "Manipulación de estampados", "Verificación con sensores", "Soporte en paros técnicos"],
    technicalFocus: "Repetibilidad cinemática y cumplimiento de tolerancias",
  },
  {
    id: "metalmecanica",
    number: "03",
    name: "Metalmecánica",
    subtitle: "Maquinaria pesada, prensas y centros de maquinado",
    description: "Mantenimiento preventivo y correctivo en prensas, cizallas, alimentadores y sistemas de control para maquinaria que opera bajo altas cargas mecánicas y vibraciones.",
    applications: ["Control de prensas", "Retrofit de tableros de potencia", "Seguridades electro-sensibles", "Diagnóstico de accionamientos"],
    technicalFocus: "Seguridad operativa en maquinaria de alta inercia",
  },
  {
    id: "alimentos",
    number: "04",
    name: "Alimentos y procesos",
    subtitle: "Ambientes controlados y envasado continuo",
    description: "Soporte en líneas de envasado, dosificación, sellado y final de línea, considerando especificaciones de protección de gabinetes e instrumentación sanitaria.",
    applications: ["Dosificación y pesaje", "Líneas de llenado y tapado", "Paletizado de cajas", "Variadores de velocidad grado IP"],
    technicalFocus: "Protección ambiental y control preciso de flujo",
  },
  {
    id: "logistica",
    number: "05",
    name: "Logística y centros de distribución",
    subtitle: "Movimiento de materiales y clasificación automatizada",
    description: "Optimización y mantenimiento en transportadores de rodillos, clasificadores (sorters), elevadores de carga y estaciones de empaque con interfaces de control eficientes.",
    applications: ["Transportadores sincronizados", "Sistemas de desvío automático", "Sensores de presencia y código", "Tableros descentralizados"],
    technicalFocus: "Rendimiento constante en transferencia de paquetes",
  },
  {
    id: "industria-general",
    number: "06",
    name: "Industria general",
    subtitle: "Servicios auxiliares y cuartos de control",
    description: "Instalaciones eléctricas industriales, bancos de capacitores, plantas de emergencia, sistemas de bombeo, compresores y automatización de procesos auxiliares de planta.",
    applications: ["Subestaciones y tableros generales", "Sistemas de bombeo y aire comprimido", "Monitoreo de consumos", "Asistencia técnica en sitio"],
    technicalFocus: "Confiabilidad en servicios auxiliares de soporte a planta",
  },
];
