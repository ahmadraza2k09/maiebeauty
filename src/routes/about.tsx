import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { FloatingOrbs, Reveal, SectionEyebrow, Sparkle } from "@/components/Luxe";
import portrait from "@/assets/about-magda.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Sobre Mi · Maie Ibarra" }] }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal>
          <div className="lg:col-span-6 relative lg:sticky lg:top-28">
            <div className="relative skeu-card rounded-[2.5rem] p-3">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <motion.img
                  src={portrait.url}
                  alt="Magda Maie Ibarra"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <Sparkle className="absolute -bottom-4 -left-4" size={36} />
              <div className="absolute -top-5 -right-5 skeu-card rounded-2xl px-5 py-3">
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Beauty Artist</div>
                <div className="font-display italic text-xl text-primary">Maie</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal><SectionEyebrow>{t("about.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-6xl lg:text-7xl leading-[0.95]">
              <span className="italic font-light">Hola, soy</span>
              <span className="block gradient-text">Magda</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-foreground/60">{t("about.subtitle")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">{t("about.bio1")}</p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">{t("about.bio2")}</p>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">{t("about.bio3")}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">{t("about.bio4")}</p>
          </Reveal>
          <Reveal delay={0.46}>
            <p className="mt-6 font-display italic text-2xl text-primary">{t("about.bio5")}</p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <Reveal delay={0.5}>
              <div className="skeu-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{t("about.exp.title")}</div>
                <p className="mt-3 font-display text-xl leading-snug">{t("about.exp.body")}</p>
              </div>
            </Reveal>
            <Reveal delay={0.58}>
              <div className="skeu-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{t("about.phil.title")}</div>
                <p className="mt-3 font-display text-xl leading-snug">{t("about.phil.body")}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.66}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/reservar" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3 text-sm uppercase tracking-[0.25em] hover:scale-[1.02] transition-transform">
                Reservar cita
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3 text-sm uppercase tracking-[0.25em] hover:bg-foreground/5 transition-colors">
                Ver servicios
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
