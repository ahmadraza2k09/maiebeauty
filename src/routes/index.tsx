import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import { FloatingOrbs, Reveal, SectionEyebrow, Sparkle } from "@/components/Luxe";
import nailsGold from "@/assets/nails-gold.jpg.asset.json";
import nailsFloral from "@/assets/nails-floral.jpg.asset.json";
import nailsHorror from "@/assets/nails-horror.jpg.asset.json";
import lashesCateye from "@/assets/lashes-cateye.jpg.asset.json";
import lashesNatural from "@/assets/lashes-natural.jpg.asset.json";
import pedicure from "@/assets/pedicure.jpg.asset.json";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const signature = services.slice(0, 3);
  const gallery = [nailsGold.url, lashesCateye.url, nailsFloral.url, pedicure.url, lashesNatural.url, nailsHorror.url];

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
        <FloatingOrbs />
        <Sparkle className="absolute top-32 right-[12%] hidden md:block" size={28} />
        <Sparkle className="absolute bottom-32 left-[8%] hidden md:block" size={20} delay={1.5} />
        <Sparkle className="absolute top-1/2 right-[30%] hidden lg:block" size={16} delay={2.5} />

        <motion.div style={{ opacity }} className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div style={{ y: y1 }} className="lg:col-span-7 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-6 font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.02em]"
            >
              <span className="block italic font-light text-foreground/80">Citas</span>
              <span className="block gradient-text">Disponibles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 max-w-xl text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/reservar" className="group relative inline-flex items-center gap-3 rounded-full gradient-primary text-white px-8 py-4 text-sm tracking-wide shadow-luxury overflow-hidden">
                <span className="relative z-10">{t("hero.cta1")}</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 rounded-full glass-lavender px-8 py-4 text-sm tracking-wide hover:scale-[1.02] transition-transform">
                {t("hero.cta2")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div style={{ y: y2 }} className="lg:col-span-5 relative h-[480px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute top-0 right-0 w-64 lg:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxury skeu-card p-2"
            >
              <img src={lashesCateye.url} alt="Cat eye lashes" className="w-full h-full object-cover rounded-[1.7rem]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="absolute bottom-0 left-0 w-56 lg:w-72 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxury skeu-card p-2 animate-float"
            >
              <img src={nailsGold.url} alt="Luxury nails" className="w-full h-full object-cover rounded-[1.7rem]" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-foreground/50"
        >
          <span>{t("hero.scroll")}</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <SectionEyebrow>{t("home.philosophy.eyebrow")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl lg:text-7xl leading-[1.05] text-balance">
              {t("home.philosophy.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
              {t("home.philosophy.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="relative py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <Reveal><SectionEyebrow>01 · Edit</SectionEyebrow></Reveal>
              <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl lg:text-6xl">{t("home.signature.title")}</h2></Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="max-w-md text-foreground/70">{t("home.signature.sub")}</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {signature.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="group relative skeu-card rounded-[2rem] p-3 overflow-hidden">
                  <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative">
                    <img src={s.image} alt={s.name[lang]} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="px-4 pt-5 pb-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{s.name[lang]}</h3>
                      <span className="text-xs uppercase tracking-widest text-primary">${s.price}+</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{s.description[lang]}</p>
                    <Link to="/reservar" search={{ service: s.id }} className="mt-4 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      {t("services.reserve")} <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link to="/services" className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/70 hover:text-primary transition-colors">
                {t("home.signature.cta")} <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="relative py-32 px-6 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-5xl rounded-[3rem] overflow-hidden p-12 lg:p-20 text-center skeu-card">
            <div className="absolute inset-0 gradient-lavender opacity-60 -z-10" />
            <Sparkle className="absolute top-10 left-10" size={20} />
            <Sparkle className="absolute bottom-10 right-12" size={24} delay={1} />
            <h2 className="font-display text-5xl lg:text-7xl text-balance">{t("home.cta.title")}</h2>
            <p className="mt-6 text-lg text-foreground/70">{t("home.cta.sub")}</p>
            <Link to="/reservar" className="mt-10 inline-flex items-center gap-3 rounded-full gradient-primary text-white px-10 py-5 text-base shadow-luxury hover:scale-[1.03] transition-transform">
              {t("home.cta.btn")} →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
