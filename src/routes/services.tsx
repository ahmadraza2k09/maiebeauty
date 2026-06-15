import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import { Reveal, SectionEyebrow, FloatingOrbs } from "@/components/Luxe";
import { useEffect } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Servicios · Maie Ibarra" }] }),
  component: Services,
});

function Services() {
  const { t, lang } = useLang();

  // Ensure component renders even if data loads slowly
  useEffect(() => {
    // Verify services are available
    if (!services || services.length === 0) {
      console.warn("Services not available yet");
    }
  }, []);

  // Graceful fallback if services aren't loaded
  if (!services || services.length === 0) {
    return (
      <section className="relative py-16 px-6 lg:px-10 overflow-hidden">
        <FloatingOrbs />
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-foreground/60">Cargando servicios...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal><SectionEyebrow>{t("services.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 font-display text-6xl lg:text-8xl leading-[0.95]">{t("services.title")}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-foreground/70">{t("services.sub")}</p></Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <motion.article whileHover={{ y: -8 }} className="group skeu-card rounded-[2rem] p-3 h-full flex flex-col">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img 
                    src={s.image} 
                    alt={s.name?.[lang] || s.name?.en || "Service"} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest">{t(`prices.${s.category}`) || s.category}</div>
                </div>
                <div className="px-4 pt-5 pb-4 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight">{s.name?.[lang] || s.name?.en || "Service"}</h3>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-widest text-foreground/50">{t("services.from") || "from"}</div>
                      <div className="font-display text-xl gradient-text">${s.price}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{s.description?.[lang] || s.description?.en || ""}</p>
                  <Link
                    to="/reservar" search={{ service: s.id }}
                    className="mt-auto pt-5 inline-flex items-center justify-between gap-2 text-sm group-hover:text-primary transition-colors"
                  >
                    <span className="uppercase tracking-[0.2em] text-xs">{t("services.reserve") || "Reserve"}</span>
                    <span className="w-9 h-9 rounded-full gradient-primary text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
