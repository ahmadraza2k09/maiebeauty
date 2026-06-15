import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { services, WHATSAPP } from "@/lib/services";
import { FloatingOrbs, Reveal, SectionEyebrow } from "@/components/Luxe";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

type Search = { service?: string };

export const Route = createFileRoute("/reservar")({
  validateSearch: (s: Record<string, unknown>): Search => ({ service: typeof s.service === "string" ? s.service : undefined }),
  head: () => ({ meta: [{ title: "Reservar · Maie Ibarra" }] }),
  component: Reserve,
});

const TIMES = ["8:00 AM", "10:15 AM", "12:30 PM"];

const dataSchema = z.object({
  name: z.string().trim().min(2).max(80),
  whatsapp: z.string().trim().min(7).max(30),
  notes: z.string().trim().max(500).optional(),
});

function Reserve() {
  const { t, lang } = useLang();
  const { service: presel } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | null>(presel ?? null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [info, setInfo] = useState({ name: "", whatsapp: "", notes: "" });
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => { if (presel) setServiceId(presel); }, [presel]);

  const service = useMemo(() => services.find((s) => s.id === serviceId) ?? null, [serviceId]);

  const canNext = (() => {
    if (step === 0) return !!service;
    if (step === 1) return !!date && !!time;
    if (step === 2) return dataSchema.safeParse(info).success;
    return true;
  })();

  const next = () => { setErr(null); if (!canNext) { setErr("Completa el paso."); return; } setStep((s) => Math.min(3, s + 1)); };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const confirm = () => {
    if (!service || !date || !time) return;
    const dateStr = date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const msg = `Hola Maie,\n\nMe gustaría reservar una cita.\n\nServicio: ${service.name[lang]}\nFecha: ${dateStr}\nHora: ${time}\nNombre: ${info.name}\nWhatsApp: ${info.whatsapp}\nDetalles: ${info.notes || "—"}\n\nGracias.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative py-12 px-6 lg:px-10 overflow-hidden min-h-screen">
      <FloatingOrbs />
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Reveal><SectionEyebrow>{t("reserve.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 font-display text-6xl lg:text-7xl">{t("reserve.title")}</h1></Reveal>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div
                animate={{ scale: i === step ? 1.1 : 1 }}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                  i < step ? "gradient-primary text-white" : i === step ? "gradient-primary text-white shadow-luxury" : "bg-white border border-primary/20 text-foreground/40"
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </motion.div>
              {i < 3 && <div className={`w-10 lg:w-16 h-px ${i < step ? "bg-primary" : "bg-primary/20"}`} />}
            </div>
          ))}
        </div>

        <div className="skeu-card rounded-[2.5rem] p-6 lg:p-12 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {step === 0 && (
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl mb-2">{t("reserve.s1.title")}</h2>
                  <p className="text-foreground/60 text-sm mb-8">{t("reserve.step")} 1 {t("reserve.of")} 4</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s) => {
                      const active = serviceId === s.id;
                      return (
                        <motion.button
                          key={s.id} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
                          onClick={() => setServiceId(s.id)}
                          className={`text-left rounded-2xl p-3 transition-all relative ${active ? "ring-2 ring-primary shadow-luxury" : "border border-primary/15 hover:border-primary/40"}`}
                        >
                          <div className="aspect-[5/4] rounded-xl overflow-hidden mb-3">
                            <img src={s.image} alt={s.name[lang]} className="w-full h-full object-cover" />
                          </div>
                          <div className="px-1 pb-1">
                            <div className="font-display text-lg leading-tight">{s.name[lang]}</div>
                            <div className="text-xs text-primary mt-1">${s.price}+</div>
                          </div>
                          {active && (
                            <motion.div layoutId="srvchk" className="absolute top-4 right-4 w-7 h-7 rounded-full gradient-primary text-white flex items-center justify-center">
                              <Check className="w-4 h-4" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl mb-2">{t("reserve.s2.title")}</h2>
                  <p className="text-foreground/60 text-sm mb-2">{lang === "es" ? "Citas disponibles solo de lunes a viernes en las mañanas." : "Available Monday through Friday mornings only."}</p>
                  <p className="text-foreground/60 text-sm mb-8">{t("reserve.step")} 2 {t("reserve.of")} 4</p>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{t("reserve.selectDate")}</div>
                      <Calendar selected={date} onSelect={setDate} lang={lang} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{t("reserve.selectTime")}</div>
                      <div className="grid grid-cols-3 gap-2">
                        {TIMES.map((tm) => {
                          const active = time === tm;
                          return (
                            <button
                              key={tm}
                              onClick={() => setTime(tm)}
                              className={`rounded-xl px-3 py-3 text-sm transition-all ${active ? "gradient-primary text-white shadow-soft" : "bg-white border border-primary/15 hover:border-primary/40"}`}
                            >
                              {tm}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="max-w-xl mx-auto">
                  <h2 className="font-display text-3xl lg:text-4xl mb-2">{t("reserve.s3.title")}</h2>
                  <p className="text-foreground/60 text-sm mb-8">{t("reserve.step")} 3 {t("reserve.of")} 4</p>
                  <div className="space-y-5">
                    <Field label={t("reserve.fullname")} value={info.name} onChange={(v) => setInfo({ ...info, name: v })} />
                    <Field label={t("reserve.whatsapp")} value={info.whatsapp} onChange={(v) => setInfo({ ...info, whatsapp: v })} />
                    <Field label={t("reserve.notes")} value={info.notes} onChange={(v) => setInfo({ ...info, notes: v })} textarea />
                  </div>
                </div>
              )}

              {step === 3 && service && date && time && (
                <div className="max-w-xl mx-auto text-center">
                  <h2 className="font-display text-3xl lg:text-4xl mb-2">{t("reserve.s4.title")}</h2>
                  <p className="text-foreground/60 text-sm mb-8">{t("reserve.step")} 4 {t("reserve.of")} 4</p>
                  <div className="space-y-4 text-left">
                    <Row k={t("reserve.service")} v={service.name[lang]} />
                    <Row k={t("reserve.date")} v={date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} />
                    <Row k={t("reserve.time")} v={time} />
                    <Row k={t("reserve.name")} v={info.name} />
                    <Row k="WhatsApp" v={info.whatsapp} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {err && <p className="text-sm text-destructive mt-6">{err}</p>}

          <div className="mt-10 flex items-center justify-between gap-3">
            <button
              onClick={back} disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-lavender text-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> {t("reserve.back")}
            </button>
            {step < 3 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full gradient-primary text-white text-sm shadow-luxury hover:scale-[1.02] transition-transform"
              >
                {t("reserve.next")} <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={confirm}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full gradient-primary text-white text-sm shadow-luxury hover:scale-[1.02] transition-transform"
              >
                {t("reserve.confirm")} →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">{label}</label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={4} maxLength={500} className="w-full bg-white/60 border border-primary/15 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 transition-all resize-none" />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} maxLength={80} className="w-full bg-white/60 border border-primary/15 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 transition-all" />
      )}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-primary/15 pb-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">{k}</span>
      <span className="font-display text-xl text-right">{v}</span>
    </div>
  );
}

function Calendar({ selected, onSelect, lang }: { selected: Date | null; onSelect: (d: Date) => void; lang: string }) {
  const [view, setView] = useState(() => { const d = new Date(); d.setDate(1); return d; });
  const today = new Date(); today.setHours(0,0,0,0);

  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const startWeekday = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));

  const monthLabel = view.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { month: "long", year: "numeric" });
  const dayLabels = lang === "es" ? ["L","M","X","J","V","S","D"] : ["M","T","W","T","F","S","S"];

  return (
    <div className="glass-lavender rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} className="w-8 h-8 rounded-full hover:bg-white/60 flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <div className="font-display text-lg capitalize">{monthLabel}</div>
        <button onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} className="w-8 h-8 rounded-full hover:bg-white/60 flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
        {dayLabels.map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const disabled = d < today || d.getDay() === 0 || d.getDay() === 6; // only Monday-Friday

          const active = selected && d.toDateString() === selected.toDateString();
          return (
            <button
              key={i} disabled={disabled} onClick={() => onSelect(d)}
              className={`aspect-square rounded-lg text-sm transition-all ${
                active ? "gradient-primary text-white shadow-soft" :
                disabled ? "text-foreground/20 cursor-not-allowed" :
                "hover:bg-white/70 text-foreground/80"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
