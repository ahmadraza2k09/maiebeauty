import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict: Dict = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.about": { es: "Sobre Mi", en: "About" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.prices": { es: "Precios", en: "Prices" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.book": { es: "Reservar", en: "Book Now" },

  "hero.eyebrow": { es: "Maie Ibarra · Beauty Studio", en: "Maie Ibarra · Beauty Studio" },
  "hero.title": { es: "Citas Disponibles", en: "Appointments Open" },
  "hero.sub": {
    es: "Builder Gel · Dual System · Pedicure · Lash Lifting · Lashes · Eyebrow Lamination",
    en: "Builder Gel · Dual System · Pedicure · Lash Lifting · Lashes · Eyebrow Lamination",
  },
  "hero.cta1": { es: "Reservar Ahora", en: "Book Now" },
  "hero.cta2": { es: "Ver Servicios", en: "View Services" },
  "hero.scroll": { es: "Desliza para explorar", en: "Scroll to explore" },

  "home.philosophy.eyebrow": { es: "Filosofía", en: "Philosophy" },
  "home.philosophy.title": { es: "Belleza esculpida con intención.", en: "Beauty sculpted with intention." },
  "home.philosophy.body": {
    es: "Cada cita es un ritual privado. Manos precisas, productos premium y un estudio diseñado para que salgas sintiéndote inolvidable.",
    en: "Every appointment is a private ritual. Precise hands, premium products and a studio designed so you leave feeling unforgettable.",
  },

  "home.signature.title": { es: "Servicios Insignia", en: "Signature Services" },
  "home.signature.sub": { es: "Una selección de los rituales más solicitados del estudio.", en: "A selection of the studio's most requested rituals." },
  "home.signature.cta": { es: "Explorar todos los servicios", en: "Explore all services" },

  "home.gallery.title": { es: "Galería del Estudio", en: "Studio Gallery" },
  "home.gallery.sub": { es: "Trabajo real, manos reales, resultados editoriales.", en: "Real work, real hands, editorial results." },

  "home.cta.title": { es: "Tu cita te está esperando.", en: "Your appointment is waiting." },
  "home.cta.sub": { es: "Reserva en menos de un minuto vía WhatsApp.", en: "Book in under a minute via WhatsApp." },
  "home.cta.btn": { es: "Comenzar Reserva", en: "Start Booking" },

  "about.eyebrow": { es: "Sobre Mi", en: "About Me" },
  "about.title": { es: "Magda Ibarra", en: "Magda Ibarra" },
  "about.subtitle": { es: "Artista de belleza · Texas, USA", en: "Beauty artist · Texas, USA" },
  "about.bio1": {
    es: "Soy Magda, o Maie como me conocen mis clientas. Detrás de esta cuenta hay una mujer obsesionada con el detalle, la higiene y la belleza que se siente tan bien como se ve.",
    en: "I am Magda, or Maie as my clients know me. Behind this account is a woman obsessed with detail, hygiene and beauty that feels as good as it looks.",
  },
  "about.bio2": {
    es: "Trabajo con productos premium y técnicas que respetan tu uña natural, tus pestañas y tu piel. Cada cita es un espacio íntimo donde el tiempo se detiene.",
    en: "I work with premium products and techniques that respect your natural nail, your lashes and your skin. Each appointment is an intimate space where time stops.",
  },
  "about.exp.title": { es: "Experiencia", en: "Experience" },
  "about.exp.body": { es: "Más de cinco años especializada en uñas esculpidas, extensiones de pestañas y laminado de cejas.", en: "Over five years specialized in sculpted nails, lash extensions and brow lamination." },
  "about.phil.title": { es: "Filosofía", en: "Philosophy" },
  "about.phil.body": { es: "Belleza limpia, duradera y personalizada. Sin atajos.", en: "Clean, lasting and personalized beauty. No shortcuts." },

  "services.eyebrow": { es: "Servicios", en: "Services" },
  "services.title": { es: "El Menú Completo", en: "The Full Menu" },
  "services.sub": { es: "Cada servicio diseñado para realzar tu belleza natural.", en: "Every service designed to enhance your natural beauty." },
  "services.from": { es: "Desde", en: "From" },
  "services.reserve": { es: "Reservar", en: "Reserve" },

  "prices.eyebrow": { es: "Precios", en: "Prices" },
  "prices.title": { es: "Tarifas Transparentes", en: "Transparent Pricing" },
  "prices.sub": { es: "Sin sorpresas. Sin costos ocultos. Solo belleza honesta.", en: "No surprises. No hidden fees. Just honest beauty." },
  "prices.all": { es: "Todo", en: "All" },
  "prices.nails": { es: "Uñas", en: "Nails" },
  "prices.pedicure": { es: "Pedicure", en: "Pedicure" },
  "prices.lashes": { es: "Pestañas", en: "Lashes" },
  "prices.brows": { es: "Cejas", en: "Eyebrows" },

  "contact.eyebrow": { es: "Contacto", en: "Contact" },
  "contact.title": { es: "Conversemos", en: "Let's Talk" },
  "contact.sub": { es: "Estoy a un mensaje de distancia.", en: "I'm one message away." },
  "contact.form.name": { es: "Nombre", en: "Name" },
  "contact.form.phone": { es: "Teléfono", en: "Phone" },
  "contact.form.email": { es: "Email", en: "Email" },
  "contact.form.message": { es: "Mensaje", en: "Message" },
  "contact.form.send": { es: "Enviar Mensaje", en: "Send Message" },
  "contact.form.success": { es: "Mensaje enviado. Te respondo pronto.", en: "Message sent. I'll reply soon." },
  "contact.info.location": { es: "Ubicación", en: "Location" },
  "contact.info.hours": { es: "Horario", en: "Hours" },
  "contact.info.hours.value": { es: "Martes a Sábado · 10am a 7pm", en: "Tuesday to Saturday · 10am to 7pm" },

  "reserve.eyebrow": { es: "Sistema de Reservas", en: "Reservation System" },
  "reserve.title": { es: "Reserva tu Ritual", en: "Book Your Ritual" },
  "reserve.step": { es: "Paso", en: "Step" },
  "reserve.of": { es: "de", en: "of" },
  "reserve.s1.title": { es: "Elige tu servicio", en: "Choose your service" },
  "reserve.s2.title": { es: "Fecha y hora", en: "Date and time" },
  "reserve.s3.title": { es: "Tus datos", en: "Your information" },
  "reserve.s4.title": { es: "Confirma tu cita", en: "Confirm appointment" },
  "reserve.next": { es: "Continuar", en: "Continue" },
  "reserve.back": { es: "Atrás", en: "Back" },
  "reserve.edit": { es: "Editar", en: "Edit" },
  "reserve.confirm": { es: "Confirmar Reserva", en: "Confirm Reservation" },
  "reserve.fullname": { es: "Nombre Completo", en: "Full Name" },
  "reserve.whatsapp": { es: "Número de WhatsApp", en: "WhatsApp Number" },
  "reserve.notes": { es: "Notas o preguntas", en: "Notes or questions" },
  "reserve.selectDate": { es: "Selecciona una fecha", en: "Select a date" },
  "reserve.selectTime": { es: "Selecciona una hora", en: "Select a time" },
  "reserve.service": { es: "Servicio", en: "Service" },
  "reserve.date": { es: "Fecha", en: "Date" },
  "reserve.time": { es: "Hora", en: "Time" },
  "reserve.name": { es: "Nombre", en: "Name" },

  "footer.tagline": { es: "Belleza esculpida con intención.", en: "Beauty sculpted with intention." },
  "footer.nav": { es: "Navegación", en: "Navigation" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict | string) => string };
const LangCtx = createContext<Ctx>({ lang: "es", setLang: () => {}, t: (k) => String(k) });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("maie-lang") as Lang | null) : null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("maie-lang", l);
  };
  const t = (k: string) => (dict[k] ? dict[k][lang] : k);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
