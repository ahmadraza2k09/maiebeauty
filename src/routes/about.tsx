import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { FloatingOrbs, Reveal, SectionEyebrow, Sparkle } from "@/components/Luxe";
import portrait from "@/assets/about-maie-final.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Sobre Mi · Maie Ibarra" }] }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />

      {/* Hero portrait — large, centered, magazine style */}
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <SectionEyebrow>{t("about.eyebrow")}</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display leading-[0.95] text-5xl sm:text-6xl lg:text-8xl">
            <span className="italic font-light block">Hola, soy</span>
            <span className="block gradient-text">Magda</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-[11px] sm:text-xs uppercase tracking-[0.4em] text-foreground/60">
            {t("about.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="relative mt-12 sm:mt-14 mx-auto w-full max-w-2xl">
            <div className="absolute -inset-6 sm:-inset-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative skeu-card rounded-[2.5rem] p-3 sm:p-4"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <motion.img
                  src={portrait.url}
                  alt="Maie Ibarra"
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <Sparkle className="absolute -bottom-5 -left-5" size={42} />
              <Sparkle className="absolute -top-5 -right-5" size={28} delay={0.6} />
            </motion.div>
            <div className="mt-6 font-display italic text-2xl sm:text-3xl text-primary">
              Maie Ibarra
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bio — editorial column */}
      <div className="mx-auto max-w-3xl mt-16 sm:mt-20 lg:mt-24 space-y-5 sm:space-y-6 text-center">
        <Reveal delay={0.05}>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/80">{t("about.bio1")}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/80">{t("about.bio2")}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/80">{t("about.bio3")}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground/80">{t("about.bio4")}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="pt-2 font-display italic text-2xl sm:text-3xl text-primary">{t("about.bio5")}</p>
        </Reveal>
      </div>

      {/* Pillars */}
      <div className="mx-auto max-w-5xl mt-16 sm:mt-20 grid sm:grid-cols-2 gap-5 sm:gap-6">
        <Reveal delay={0.05}>
          <div className="skeu-card rounded-3xl p-6 sm:p-8 h-full">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">{t("about.exp.title")}</div>
            <p className="mt-3 font-display text-xl sm:text-2xl leading-snug">{t("about.exp.body")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="skeu-card rounded-3xl p-6 sm:p-8 h-full">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">{t("about.phil.title")}</div>
            <p className="mt-3 font-display text-xl sm:text-2xl leading-snug">{t("about.phil.body")}</p>
          </div>
        </Reveal>
      </div>

      {/* CTA */}
      <Reveal delay={0.1}>
        <div className="mt-14 sm:mt-16 flex flex-wrap justify-center gap-4">
          <Link to="/reservar" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 sm:px-9 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.25em] hover:scale-[1.03] transition-transform">
            Reservar cita
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 sm:px-9 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.25em] hover:bg-foreground/5 transition-colors">
            Ver servicios
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
