import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { services, type ServiceCategory } from "@/lib/services";
import { Reveal, SectionEyebrow, FloatingOrbs } from "@/components/Luxe";

export const Route = createFileRoute("/prices")({
  head: () => ({ meta: [{ title: "Precios · Maie Ibarra" }] }),
  component: Prices,
});

const cats: { key: ServiceCategory | "all"; tkey: string }[] = [
  { key: "all", tkey: "prices.all" },
  { key: "nails", tkey: "prices.nails" },
  { key: "pedicure", tkey: "prices.pedicure" },
  { key: "lashes", tkey: "prices.lashes" },
  { key: "brows", tkey: "prices.brows" },
];

function Prices() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<ServiceCategory | "all">("all");
  const list = filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <section className="relative py-16 px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <Reveal><SectionEyebrow>{t("prices.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 font-display text-6xl lg:text-8xl leading-[0.95]">{t("prices.title")}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-foreground/70">{t("prices.sub")}</p></Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {cats.map((c) => {
              const active = filter === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`relative px-5 py-2.5 rounded-full text-sm uppercase tracking-widest transition-all ${
                    active ? "text-white" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {active && <motion.span layoutId="pricetab" className="absolute inset-0 rounded-full gradient-primary shadow-soft" />}
                  <span className="relative">{t(c.tkey)}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {list.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="skeu-card rounded-3xl p-6 lg:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{t(`prices.${s.category}`)}</div>
                    <h3 className="font-display text-3xl mt-2">{s.name[lang]}</h3>
                    <p className="text-sm text-foreground/60 mt-2 max-w-xl">{s.description[lang]}</p>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] uppercase tracking-widest text-foreground/50">{t("services.from")}</div>
                    <div className="font-display text-4xl gradient-text">${s.price}</div>
                  </div>
                </div>
                {s.variants && (
                  <div className="mt-6 pt-6 border-t border-primary/15 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {s.variants.map((v, vi) => (
                      <div key={vi} className="flex items-baseline justify-between gap-3 text-sm">
                        <span className="text-foreground/75">{v.label[lang]}</span>
                        <span className="font-medium text-primary">${v.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
