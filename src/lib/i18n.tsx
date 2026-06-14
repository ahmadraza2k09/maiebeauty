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

  "stats.clients": { es: "Clientas felices", en: "Happy clients" },
  "stats.years": { es: "Años de experiencia", en: "Years of experience" },
  "stats.services": { es: "Servicios premium", en: "Premium services" },
  "stats.rating": { es: "Rating promedio", en: "Average rating" },

  "process.eyebrow": { es: "Proceso", en: "Process" },
  "process.title": { es: "Cuatro pasos hacia tu mejor versión", en: "Four steps toward your best self" },
  "process.sub": { es: "Una experiencia diseñada para que te enamores desde el primer mensaje.", en: "An experience designed to make you fall in love from the first message." },
  "process.1.t": { es: "Reserva", en: "Book" },
  "process.1.b": { es: "Elige servicio, fecha y hora desde tu teléfono en menos de un minuto.", en: "Pick service, date and time from your phone in under a minute." },
  "process.2.t": { es: "Consulta", en: "Consult" },
  "process.2.b": { es: "Conversamos tu estilo, tus expectativas y tu vida diaria.", en: "We discuss your style, expectations and daily life." },
  "process.3.t": { es: "Ritual", en: "Ritual" },
  "process.3.b": { es: "Te relajas mientras esculpo cada detalle con precisión y productos premium.", en: "Relax while I sculpt every detail with premium products." },
  "process.4.t": { es: "Glow", en: "Glow" },
  "process.4.b": { es: "Sales con un look que dura semanas y una nueva versión de ti.", en: "Leave with a look that lasts weeks and a new version of you." },

  "testimonials.eyebrow": { es: "Testimonios", en: "Testimonials" },
  "testimonials.title": { es: "Amadas por quienes ya las usan", en: "Loved by those who already wear them" },
  "testimonials.1": { es: "Magda transformó mi mirada por completo. Sus pestañas duran semanas y se ven como hechas para mí.", en: "Magda completely transformed my eyes. Her lashes last weeks and look made for me." },
  "testimonials.2": { es: "El detalle, la higiene y el trato. Después de probar tres salones, me quedé con ella.", en: "The detail, the hygiene and the care. After trying three salons I stayed with her." },
  "testimonials.3": { es: "Cada cita se siente como un mini spa. Sales literalmente brillando.", en: "Every appointment feels like a mini spa. You literally leave glowing." },
  "testimonials.4": { es: "Mis uñas nunca se habían visto tan limpias y duraderas. Es una artista.", en: "My nails have never looked this clean and lasting. She's an artist." },

  "why.eyebrow": { es: "Por qué Maie", en: "Why Maie" },
  "why.title": { es: "Belleza que se nota y se siente", en: "Beauty you can see and feel" },
  "why.1.t": { es: "Higiene clínica", en: "Clinical hygiene" },
  "why.1.b": { es: "Esterilización por servicio, herramientas selladas y producto premium en cada cita.", en: "Sterilization per service, sealed tools and premium product every visit." },
  "why.2.t": { es: "Diseño a la medida", en: "Tailored design" },
  "why.2.b": { es: "Cada look se diseña para tu rostro, tu estilo de vida y tu personalidad.", en: "Every look is designed for your face, lifestyle and personality." },
  "why.3.t": { es: "Resultados duraderos", en: "Lasting results" },
  "why.3.b": { es: "Técnicas que respetan tu uña natural y tus pestañas, sin daño a largo plazo.", en: "Techniques that respect your natural nails and lashes, no long-term damage." },
  "why.4.t": { es: "Experiencia íntima", en: "Intimate experience" },
  "why.4.b": { es: "Un estudio privado, sin prisas, donde el tiempo realmente se detiene.", en: "A private studio, no rush, where time truly stops." },

  "faq.eyebrow": { es: "Preguntas", en: "Questions" },
  "faq.title": { es: "Antes de tu cita", en: "Before your appointment" },
  "faq.1.q": { es: "¿Cuánto duran las extensiones de pestañas?", en: "How long do lash extensions last?" },
  "faq.1.a": { es: "Entre dos y cuatro semanas dependiendo de tu ciclo natural. Recomiendo relleno cada dos semanas.", en: "Two to four weeks depending on your natural cycle. I recommend a fill every two weeks." },
  "faq.2.q": { es: "¿El Builder Gel daña mi uña?", en: "Does Builder Gel damage my nail?" },
  "faq.2.b": { es: "No. Es justo lo contrario, refuerza la uña natural sin limarla en exceso.", en: "No. The opposite, it reinforces your natural nail without over filing." },
  "faq.2.a": { es: "No. Es justo lo contrario, refuerza la uña natural sin limarla en exceso.", en: "No. The opposite, it reinforces your natural nail without over filing." },
  "faq.3.q": { es: "¿Cómo reservo?", en: "How do I book?" },
  "faq.3.a": { es: "Desde la sección Reservar o por WhatsApp. Confirmo tu cita en minutos.", en: "From the Book section or via WhatsApp. I confirm your appointment in minutes." },
  "faq.4.q": { es: "¿Aceptas pagos con tarjeta?", en: "Do you accept card payments?" },
  "faq.4.a": { es: "Sí, acepto efectivo, tarjeta y Zelle.", en: "Yes, I accept cash, card and Zelle." },

  "marquee.text": { es: "Lashes · Builder Gel · Dual System · Pedicura Rusa · Laminado de Cejas · Lash Lift", en: "Lashes · Builder Gel · Dual System · Russian Pedicure · Brow Lamination · Lash Lift" },
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
