import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { FloatingOrbs, Reveal, SectionEyebrow, Sparkle } from "@/components/Luxe";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Sobre Mi · Maie Ibarra" }] }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="lg:col-span-5 relative">
            <div className="relative skeu-card rounded-[2.5rem] p-3 max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img src={portrait.url} alt="Magda Maie Ibarra" className="w-full h-full object-cover" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path id="cir" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text className="text-[14px] uppercase tracking-[0.3em] fill-primary font-medium">
                    <textPath href="#cir">Maie Ibarra · Beauty Studio · Texas · </textPath>
                  </text>
                </svg>
              </motion.div>
              <Sparkle className="absolute -bottom-4 -left-4" size={36} />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal><SectionEyebrow>{t("about.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-6xl lg:text-8xl leading-[0.95]">
              <span className="italic font-light">Magda</span>
              <span className="block gradient-text">Ibarra</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-foreground/60">{t("about.subtitle")}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">{t("about.bio1")}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">{t("about.bio2")}</p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <Reveal delay={0.35}>
              <div className="skeu-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{t("about.exp.title")}</div>
                <p className="mt-3 font-display text-2xl leading-snug">{t("about.exp.body")}</p>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="skeu-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{t("about.phil.title")}</div>
                <p className="mt-3 font-display text-2xl leading-snug">{t("about.phil.body")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
