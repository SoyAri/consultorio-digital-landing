export interface SiteConfig {
  name: string;
  headline: string;
  description: string;
  url: string;
  crispId: string;
  crispPages: string[];
  navigation: Array<{ label: string; href: string }>;
  painPoints: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    impactLabel: string;
    impacts: Array<{ icon: string; title: string; desc: string }>;
    stat: { number: string; text: string };
    cards: Array<{ icon: string; title: string; body: string }>;
  };
  solution: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    features: Array<{
      num: string;
      icon: string;
      title: string;
      body: string;
      bullets: string[];
    }>;
  };
  benefits: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    metrics: Array<{ value: string; label: string }>;
    rolesSection: {
      title: string;
      subtitle: string;
      roles: Array<{
        icon: string;
        name: string;
        perms: string[];
      }>;
    };
    cta: {
      headline: string;
      body: string;
      btnText: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "Consultorio Digital",
  headline: "Software de Gestión para Clínicas Dentales de Élite",
  description: "Centraliza la agenda, expedientes y comunicación de tu clínica dental. Sin papel, sin WhatsApp, sin caos.",
  url: "https://consultoriodigital.io",
  crispId: "78906fea-4ba5-4f8b-a8da-df9819d60279",
  crispPages: ["/"],
  navigation: [
    { label: "El Problema", href: "#pain-points" },
    { label: "La Solución", href: "#solution" },
    { label: "Beneficios", href: "#benefits" },
  ],
  painPoints: {
    eyebrow: "¿Te suena familiar?",
    headline: "Tu clínica merece algo mejor que papel, WhatsApp y hojas de cálculo",
    subheadline: "La mayoría de clínicas dentales pequeñas pierden entre 10 y 20 minutos por paciente gestionando citas y expedientes de forma manual.",
    ctaText: "Hablar con un asesor →",
    impactLabel: "Sin Consultorio Digital, cada semana:",
    impacts: [
      { icon: "clock", title: "10–20 min perdidos", desc: "por paciente buscando expedientes" },
      { icon: "message-square", title: "Recordatorios manuales", desc: "por WhatsApp que dependen de que alguien no olvide enviarlos" },
      { icon: "calendar", title: "Citas duplicadas", desc: "por manejo en papel o Excel sin sincronización" },
      { icon: "folder", title: "Expedientes dispersos", desc: "entre papel, celular y correos sin orden" },
    ],
    stat: {
      number: "73%",
      text: "de clínicas pequeñas aún usan métodos manuales"
    },
    cards: [
      {
        icon: "calendar",
        title: "Agendas en papel y Excel",
        body: "Citas duplicadas, letra ilegible de terceros y búsquedas interminables. Cuando el cuaderno se pierde, la información del paciente desaparece contigo."
      },
      {
        icon: "message-square",
        title: "Confirmaciones por WhatsApp",
        body: "Mensajes sin respuesta, pacientes que no llegan y recordatorios manuales que dependen de que tú o tu asistente no olviden enviarlos ese día."
      },
      {
        icon: "folder",
        title: "Expedientes fragmentados",
        body: "Radiografías en el celular, notas clínicas en papel y presupuestos en correos. Nadie tiene el cuadro completo del paciente a la mano cuando lo necesita."
      }
    ]
  },
  solution: {
    eyebrow: "La solución",
    headline: "Todo lo que tu clínica necesita, en un solo lugar",
    subheadline: "Consultorio Digital centraliza tu agenda, expedientes y comunicación con pacientes. Sin papeles, sin WhatsApp, sin información dispersa.",
    features: [
      {
        num: "01",
        icon: "calendar",
        title: "Agenda digital centralizada",
        body: "Gestiona todas las citas desde una sola pantalla. Tu secretaria, tú y tus asociados ven el calendario en tiempo real. Sin llamadas, sin mensajes — las confirmaciones llegan solas.",
        bullets: [
          "Vista diaria, semanal y mensual",
          "Soporte para múltiples sillones o consultorios",
          "Bloqueo de horarios y días no disponibles"
        ]
      },
      {
        num: "02",
        icon: "activity",
        title: "Odontograma y expediente digital",
        body: "Registra diagnósticos y tratamientos directamente sobre el odontograma interactivo. El expediente completo del paciente, disponible en segundos sin buscar entre papeles.",
        bullets: [
          "Odontograma interactivo por pieza dental",
          "Notas clínicas con fecha y autor",
          "Adjunta radiografías e imágenes"
        ]
      },
      {
        num: "03",
        icon: "key",
        title: "Acceso seguro para pacientes",
        body: "Tus pacientes inician sesión con un código OTP enviado a su celular. Sin contraseñas que olvidar, sin fricción. Ellos consultan sus citas, historial y presupuestos desde su teléfono.",
        bullets: [
          "Login por código vía SMS o WhatsApp",
          "Portal del paciente personalizado",
          "Historial de citas y tratamientos"
        ]
      },
      {
        num: "04",
        icon: "bell",
        title: "Recordatorios automáticos",
        body: "El sistema avisa a tus pacientes antes de cada cita sin que nadie tenga que hacerlo manualmente. Las inasistencias se reducen desde el primer día de uso.",
        bullets: [
          "Recordatorio 24h y 1h antes de la cita",
          "Confirmación o cancelación con un tap",
          "El horario se libera automáticamente si cancelan"
        ]
      }
    ]
  },
  benefits: {
    eyebrow: "Por qué elegirnos",
    headline: "Más tiempo para tus pacientes, menos tiempo en papeleo",
    subheadline: "Las clínicas que usan Consultorio Digital reportan menos inasistencias, expedientes más completos y un flujo de trabajo más tranquilo desde el primer mes.",
    metrics: [
      { value: "-60%", label: "Inasistencias gracias a recordatorios automáticos" },
      { value: "15 min", label: "Ahorrados por cita en búsqueda de expedientes" },
      { value: "100%", label: "Digital — sin papel, sin información perdida" }
    ],
    rolesSection: {
      title: "Cada persona en tu clínica tiene su propio acceso",
      subtitle: "No más contraseñas compartidas. Cada rol ve solo lo que necesita.",
      roles: [
        {
          icon: "stethoscope",
          name: "Doctor",
          perms: [
            "Expedientes y odontogramas",
            "Agenda completa del consultorio",
            "Notas clínicas y diagnósticos",
            "Reportes de la clínica"
          ]
        },
        {
          icon: "layers",
          name: "Secretaria",
          perms: [
            "Gestión de citas y agenda",
            "Datos generales del paciente",
            "Confirmaciones y recordatorios",
            "Sin acceso a notas clínicas"
          ]
        },
        {
          icon: "shield",
          name: "Administrador",
          perms: [
            "Alta de usuarios y roles",
            "Configuración de la clínica",
            "Reportes y estadísticas",
            "Acceso total al sistema"
          ]
        },
        {
          icon: "user",
          name: "Paciente",
          perms: [
            "Sus citas programadas",
            "Historial de tratamientos",
            "Presupuestos recibidos",
            "Login sin contraseña (OTP)"
          ]
        }
      ]
    },
    cta: {
      headline: "¿Listo para modernizar tu clínica?",
      body: "Habla con nosotros hoy. Te mostramos el sistema en 15 minutos y resolvemos todas tus dudas sin compromiso.",
      btnText: "Hablar con un asesor ahora"
    }
  }
};
