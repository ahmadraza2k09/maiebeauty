import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import { FloatingOrbs, Reveal, SectionEyebrow, Sparkle } from "@/components/Luxe";
import nailsGold from "@/assets/nails-gold.jpg.asset.json";
import volume from "@/assets/volume.jpg.asset.json";
import wetEffect from "@/assets/wet-effect.jpg.asset.json";
import lashLift from "@/assets/lash-lift.jpg.asset.json";
import whyMaiePortrait from "@/assets/why-maie-portrait.jpg.asset.json";
import { Plus, Minus, Star, Sparkles, ShieldCheck, Heart, Clock } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const signature = services.slice(0, 6);

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
              <span className="block italic font-light text-foreground/80">{lang === "es" ? "Realza tu" : "Reveal your"}</span>
              <span className="block gradient-text">{lang === "es" ? "Belleza Natural" : "Natural Beauty"}</span>
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

            {/* tiny trust row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-xs text-foreground/60"
            >
              <div className="flex items-center gap-1.5">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                <span className="ml-1">5.0 · 200+ {lang === "es" ? "reseñas" : "reviews"}</span>
              </div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> {lang === "es" ? "Higiene clínica" : "Clinical hygiene"}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {lang === "es" ? "Mar–Sáb 10a–7p" : "Tue–Sat 10a–7p"}</div>
            </motion.div>
          </motion.div>

          {/* Hero visual collage */}
          <motion.div style={{ y: y2 }} className="lg:col-span-5 relative h-[520px] lg:h-[640px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute top-0 right-0 w-64 lg:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxury skeu-card p-2"
            >
              <img src={volume.url} alt="Volume lashes" className="w-full h-full object-cover rounded-[1.7rem]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="absolute bottom-0 left-0 w-56 lg:w-72 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-luxury skeu-card p-2 animate-float"
            >
              <img src={nailsGold.url} alt="Luxury nails" className="w-full h-full object-cover rounded-[1.7rem]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute top-[42%] left-[22%] w-40 lg:w-48 aspect-square rounded-full overflow-hidden shadow-luxury border-4 border-white hidden md:block"
            >
              <img src={wetEffect.url} alt="Wet effect" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 right-2 glass-lavender rounded-2xl px-4 py-3 shadow-luxury max-w-[180px]"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <div className="text-[10px] uppercase tracking-widest text-primary">{lang === "es" ? "Hoy disponible" : "Today open"}</div>
              </div>
              <div className="font-display text-sm mt-1">{lang === "es" ? "3 horarios premium" : "3 premium slots"}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-6 overflow-hidden border-y border-primary/10 bg-gradient-to-r from-transparent via-[rgba(243,237,255,0.5)] to-transparent">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 font-display text-2xl lg:text-3xl text-foreground/70 italic"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              {t("marquee.text")} <Sparkles className="w-4 h-4 text-primary not-italic" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* STATS */}
      <section className="relative py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: "500+", l: t("stats.clients") },
            { n: "5+", l: t("stats.years") },
            { n: "12", l: t("stats.services") },
            { n: "5.0★", l: t("stats.rating") },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="skeu-card rounded-3xl p-7 text-center hover-lift">
                <div className="font-display text-5xl lg:text-6xl gradient-text">{s.n}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal><SectionEyebrow>{t("home.philosophy.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl lg:text-7xl leading-[1.05] text-balance">{t("home.philosophy.title")}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">{t("home.philosophy.body")}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {signature.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.1}>
                <motion.div whileHover={{ y: -10 }} className="group relative skeu-card rounded-[2rem] p-3 overflow-hidden">
                  <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden relative">
                    <img src={s.image} alt={s.name[lang]} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest">{t(`prices.${s.category}`)}</div>
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

      {/* WHY MAIE */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[460px]">
            <Reveal>
              <div className="absolute inset-0 skeu-card rounded-[2.5rem] p-3 rotate-[-3deg]">
                <img src={lashLift.url} alt="Lash detail" className="w-full h-full object-cover rounded-[2rem]" />
              </div>
            </Reveal>
            <Sparkle className="absolute -top-4 -right-4" size={40} />
          </div>
          <div className="lg:col-span-7">
            <Reveal><SectionEyebrow>{t("why.eyebrow")}</SectionEyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl lg:text-6xl text-balance">{t("why.title")}</h2></Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, t: t("why.1.t"), b: t("why.1.b") },
                { icon: <Sparkles className="w-5 h-5" />, t: t("why.2.t"), b: t("why.2.b") },
                { icon: <Heart className="w-5 h-5" />, t: t("why.3.t"), b: t("why.3.b") },
                { icon: <Clock className="w-5 h-5" />, t: t("why.4.t"), b: t("why.4.b") },
              ].map((x, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="skeu-card rounded-2xl p-5 h-full hover-lift">
                    <div className="w-10 h-10 rounded-xl gradient-primary text-white flex items-center justify-center">{x.icon}</div>
                    <h3 className="mt-4 font-display text-xl">{x.t}</h3>
                    <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{x.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Reveal><SectionEyebrow>{t("process.eyebrow")}</SectionEyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl lg:text-6xl text-balance">{t("process.title")}</h2></Reveal>
            <Reveal delay={0.2}><p className="mt-5 max-w-xl mx-auto text-foreground/70">{t("process.sub")}</p></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1,2,3,4].map((n, i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="relative skeu-card rounded-3xl p-7 h-full">
                  <div className="font-display text-7xl gradient-text opacity-30 leading-none">0{n}</div>
                  <h3 className="mt-4 font-display text-2xl">{t(`process.${n}.t`)}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{t(`process.${n}.b`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Reveal><SectionEyebrow>{t("testimonials.eyebrow")}</SectionEyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl lg:text-6xl text-balance">{t("testimonials.title")}</h2></Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {["testimonials.1","testimonials.2","testimonials.3","testimonials.4"].map((k, i) => (
              <Reveal key={k} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="skeu-card rounded-3xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5">
                    {[0,1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="mt-4 text-foreground/80 leading-relaxed italic font-display text-lg">"{t(k)}"</p>
                  <div className="mt-auto pt-5 flex items-center gap-3 border-t border-primary/15 mt-5">
                    <div className="w-10 h-10 rounded-full gradient-primary text-white flex items-center justify-center font-display">{["A","M","L","V"][i]}</div>
                    <div>
                      <div className="text-sm font-medium">{["Ana R.", "María G.", "Lucia P.", "Valeria S."][i]}</div>
                      <div className="text-[10px] uppercase tracking-widest text-foreground/50">{lang === "es" ? "Cliente verificada" : "Verified client"}</div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

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

function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const items = [1,2,3,4];
  return (
    <section className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Reveal><SectionEyebrow>{t("faq.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl lg:text-6xl">{t("faq.title")}</h2></Reveal>
        </div>
        <div className="space-y-3">
          {items.map((n, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={n} delay={i * 0.05}>
                <div className="skeu-card rounded-2xl overflow-hidden">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-display text-xl lg:text-2xl">{t(`faq.${n}.q`)}</span>
                    <span className="w-9 h-9 rounded-full gradient-primary text-white flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-foreground/70 leading-relaxed">{t(`faq.${n}.a`)}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
