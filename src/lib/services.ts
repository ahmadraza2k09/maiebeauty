import nailsHorror from "@/assets/nails-horror.jpg";
import nailsFloral from "@/assets/nails-floral.jpg";
import nailsGold from "@/assets/nails-gold.jpg";
import pedicure from "@/assets/pedicure.jpg";
import lashLift from "@/assets/lash-lift.jpg";
import lightVolume from "@/assets/light-volume.jpg";
import volume from "@/assets/volumen-new.jpg";
import wetEffect from "@/assets/wet-effect-new.jpg";
import browLam from "@/assets/brow-lamination.jpg";
import classicLashes from "@/assets/classic-lashes.jpg";
import hybridsLashes from "@/assets/hybrids-lashes.jpg";


export type ServiceCategory = "nails" | "pedicure" | "lashes" | "brows";

export type Service = {
  id: string;
  category: ServiceCategory;
  name: { es: string; en: string };
  description: { es: string; en: string };
  price: number;
  image: string;
  variants?: { label: { es: string; en: string }; price: number | string }[];
};

export const services: Service[] = [
  {
    id: "builder-gel",
    category: "nails",
    name: { es: "Builder Gel", en: "Builder Gel" },
    description: {
      es: "Builder Gel fortalece y niveliza la uña natural para un acabado elegante y duradero.",
      en: "Builder Gel strengthens and levels the natural nail for an elegant, long-lasting finish.",
    },
    price: 40,
    image: nailsGold,
    variants: [
      { label: { es: "Sobre uña natural", en: "On natural nail" }, price: 40 },
      { label: { es: "Corta", en: "Short" }, price: 50 },
      { label: { es: "Mediana", en: "Medium" }, price: 60 },
      { label: { es: "Larga", en: "Long" }, price: 70 },
    ],
  },
  {
    id: "dual-system",
    category: "nails",
    name: { es: "Dual System", en: "Dual System" },
    description: { es: "Extensiones esculpidas con acabado de cristal.", en: "Sculpted extensions with a crystal finish." },
    price: 50,
    image: nailsFloral,
  },
  {
    id: "designs",
    category: "nails",
    name: { es: "Diseños", en: "Nail Art" },
    description: { es: "Desde básicos hasta arte editorial sobre tus uñas.", en: "From basic to editorial art on your nails." },
    price: 10,
    image: nailsHorror,
    variants: [
      { label: { es: "Básico", en: "Basic" }, price: "10–15" },
      { label: { es: "Medio", en: "Medium" }, price: "20–25" },
      { label: { es: "Elaborado", en: "Elaborate" }, price: "30–50" },
    ],
  },
  {
    id: "pedicure",
    category: "pedicure",
    name: { es: "Pedicura", en: "Pedicure" },
    description: {
      es: "Tratamiento de pies con limpieza, corte y limado de uñas, cuidado de cutículas, exfoliación e hidratación para pies renovados.",
      en: "Foot care and beauty treatment with cleaning, nail trimming and shaping, cuticle care, exfoliation, and hydration for refreshed, healthy feet.",
    },
    price: 65,
    image: pedicure,
    variants: [
      { label: { es: "Pedicura completa", en: "Full pedicure" }, price: 65 },
      { label: { es: "Cuadratura de uñas", en: "Square shaping" }, price: 10 },
      { label: { es: "French", en: "French" }, price: 10 },
      { label: { es: "Diseño básico", en: "Basic design" }, price: "10–15" },
    ],
  },
  {
    id: "classic-lashes",
    category: "lashes",
    name: { es: "Classic Lashes", en: "Classic Lash Extensions" },
    description: {
      es: "La técnica classic aplica una extensión a cada pestaña natural (1:1). Ideal para un look elegante y natural con mayor largo.",
      en: "The classic technique applies one extension to each natural lash (1:1). Ideal for a natural, elegant look with added length.",
    },
    price: 80,
    image: classicLashes,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 80 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 40 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 60 },
    ],
  },
  {
    id: "hybrid-lashes",
    category: "lashes",
    name: { es: "Hybrid Lashes", en: "Hybrid Lash Extensions" },
    description: {
      es: "La técnica hybrid combina classic y volume para un resultado más definido, con densidad y un balance entre natural y glamour.",
      en: "The hybrid technique combines classic and volume lashes for a fuller, more defined effect that balances natural beauty and glamour.",
    },
    price: 100,
    image: hybridsLashes,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 100 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 50 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 75 },
    ],
  },
  {
    id: "wet-effect",
    category: "lashes",
    name: { es: "Wet Effect", en: "Wet Effect" },
    description: { es: "Pestañas mojadas, look glossy y moderno.", en: "Wet lash look, glossy and modern." },
    price: 100,
    image: wetEffect,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 100 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 50 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 75 },
    ],
  },
  {
    id: "light-volume",
    category: "lashes",
    name: { es: "Light Volume", en: "Light Volume" },
    description: { es: "Volumen sutil, ligero y dramático a la vez.", en: "Subtle volume, light and dramatic at once." },
    price: 120,
    image: lightVolume,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 120 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 60 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 90 },
    ],
  },
  {
    id: "volume",
    category: "lashes",
    name: { es: "Volume Lashes", en: "Volume Lash Extensions" },
    description: {
      es: "La técnica volume usa abanicos ultraligeros aplicados a cada pestaña natural para mayor densidad, profundidad y un look sofisticado.",
      en: "The volume technique uses ultra-light lash fans applied to each natural lash for greater density, depth, and a dramatic look.",
    },
    price: 130,
    image: volume,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 130 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 65 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 100 },
    ],
  },
  {
    id: "lash-lift",
    category: "lashes",
    name: { es: "Lash Lift", en: "Lash Lift" },
    description: {
      es: "Tratamiento que eleva y curva las pestañas desde la raíz, creando una apariencia más larga y definida. Resultados de 6 a 8 semanas.",
      en: "A treatment that lifts and curls natural lashes from the root, creating a longer, more defined appearance. Results last 6 to 8 weeks.",
    },
    price: 45,
    image: lashLift,
    variants: [
      { label: { es: "Lash Lift", en: "Lash Lift" }, price: 45 },
      { label: { es: "Lash Lift más Tinte", en: "Lash Lift plus Tint" }, price: 60 },
    ],
  },
  {
    id: "brow-lam",
    category: "brows",
    name: { es: "Laminado de Cejas", en: "Brow Lamination" },
    description: {
      es: "El laminado de cejas alinea y fija los vellos en la dirección deseada para una apariencia más llena, definida y pulida.",
      en: "Brow lamination aligns and sets hairs in the desired direction for a fuller, more defined, neatly groomed brow look.",
    },
    price: 30,
    image: browLam,
    variants: [
      { label: { es: "Laminado", en: "Lamination" }, price: 30 },
      { label: { es: "Laminado más Tinte", en: "Lamination plus Tint" }, price: 45 },
    ],
  },
];

export const WHATSAPP = "19039214854";
export const INSTAGRAM = "https://www.instagram.com/maie.beautymx";
