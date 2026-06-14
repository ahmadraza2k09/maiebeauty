import nailsHorror from "@/assets/nails-horror.jpg.asset.json";
import nailsFloral from "@/assets/nails-floral.jpg.asset.json";
import nailsGold from "@/assets/nails-gold.jpg.asset.json";
import pedicure from "@/assets/pedicure.jpg.asset.json";
import lashesNatural from "@/assets/lashes-natural.jpg.asset.json";
import lashesCateye from "@/assets/lashes-cateye.jpg.asset.json";

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
    description: { es: "Refuerzo natural sobre tu uña, ligero y duradero.", en: "Natural reinforcement on your nail, light and lasting." },
    price: 40,
    image: nailsGold.url,
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
    image: nailsFloral.url,
  },
  {
    id: "designs",
    category: "nails",
    name: { es: "Diseños", en: "Nail Art" },
    description: { es: "Desde básicos hasta arte editorial sobre tus uñas.", en: "From basic to editorial art on your nails." },
    price: 10,
    image: nailsHorror.url,
    variants: [
      { label: { es: "Básico", en: "Basic" }, price: "10–15" },
      { label: { es: "Medio", en: "Medium" }, price: "20–25" },
      { label: { es: "Elaborado", en: "Elaborate" }, price: "30–50" },
    ],
  },
  {
    id: "pedicure",
    category: "pedicure",
    name: { es: "Pedicura Rusa", en: "Russian Pedicure" },
    description: { es: "Limpieza profunda de talón, exfoliación, hidratación y gel a un color.", en: "Deep heel cleansing, exfoliation, hydration and one color gel." },
    price: 65,
    image: pedicure.url,
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
    name: { es: "Classic Lashes", en: "Classic Lashes" },
    description: { es: "Una extensión por pestaña, efecto natural y elegante.", en: "One extension per lash, natural and elegant effect." },
    price: 80,
    image: lashesNatural.url,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 80 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 40 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 60 },
    ],
  },
  {
    id: "hybrid-lashes",
    category: "lashes",
    name: { es: "Hybrid Lashes", en: "Hybrid Lashes" },
    description: { es: "Mezcla de classic y volumen para densidad balanceada.", en: "Mix of classic and volume for balanced density." },
    price: 100,
    image: lashesCateye.url,
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
    image: lashesNatural.url,
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
    image: lashesCateye.url,
    variants: [
      { label: { es: "Aplicación", en: "Full set" }, price: 120 },
      { label: { es: "Relleno 2 semanas", en: "Fill 2 weeks" }, price: 60 },
      { label: { es: "Relleno 3 semanas", en: "Fill 3 weeks" }, price: 90 },
    ],
  },
  {
    id: "volume",
    category: "lashes",
    name: { es: "Volume Lashes", en: "Volume Lashes" },
    description: { es: "Máximo impacto con abanicos hechos a mano.", en: "Maximum impact with handmade fans." },
    price: 130,
    image: lashesCateye.url,
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
    description: { es: "Levantamiento natural de tus propias pestañas.", en: "Natural lift of your own lashes." },
    price: 45,
    image: lashesNatural.url,
    variants: [
      { label: { es: "Lash Lift", en: "Lash Lift" }, price: 45 },
      { label: { es: "Lash Lift más Tinte", en: "Lash Lift plus Tint" }, price: 60 },
    ],
  },
  {
    id: "brow-lam",
    category: "brows",
    name: { es: "Laminado de Cejas", en: "Brow Lamination" },
    description: { es: "Cejas peinadas, abundantes y editoriales.", en: "Brushed up, full and editorial brows." },
    price: 30,
    image: lashesNatural.url,
    variants: [
      { label: { es: "Laminado", en: "Lamination" }, price: 30 },
      { label: { es: "Laminado más Tinte", en: "Lamination plus Tint" }, price: 45 },
    ],
  },
];

export const WHATSAPP = "19039214854";
export const INSTAGRAM = "https://www.instagram.com/maie.beautymx";
