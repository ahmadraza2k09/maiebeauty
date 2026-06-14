import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { Reveal, SectionEyebrow, FloatingOrbs } from "@/components/Luxe";
import { INSTAGRAM, WHATSAPP } from "@/lib/services";
import { Instagram, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contacto · Maie Ibarra" }] }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(5).max(1000),
});

function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) { setErr("Revisa los campos."); return; }
    const text = encodeURIComponent(
      `Hola Maie, soy ${form.name}. ${form.message}\nTel: ${form.phone} · Email: ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section className="relative py-16 px-6 lg:px-10 overflow-hidden">
      <FloatingOrbs />
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><SectionEyebrow>{t("contact.eyebrow")}</SectionEyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 font-display text-6xl lg:text-8xl">{t("contact.title")}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-foreground/70">{t("contact.sub")}</p></Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="space-y-4">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="block skeu-card rounded-3xl p-6 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white"><MessageCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">WhatsApp</div>
                    <div className="font-display text-2xl">+1 (903) 921 4854</div>
                  </div>
                </div>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="block skeu-card rounded-3xl p-6 hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white"><Instagram className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">Instagram</div>
                    <div className="font-display text-2xl">@maie.beautymx</div>
                  </div>
                </div>
              </a>
              <div className="skeu-card rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{t("contact.info.location")}</div>
                    <div className="font-display text-2xl">Texas, USA</div>
                  </div>
                </div>
              </div>
              <div className="skeu-card rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white"><Clock className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{t("contact.info.hours")}</div>
                    <div className="font-display text-xl">{t("contact.info.hours.value")}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="skeu-card rounded-[2rem] p-8 space-y-5">
              {(["name","phone","email"] as const).map((f) => (
                <div key={f}>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">{t(`contact.form.${f}`)}</label>
                  <input
                    type={f === "email" ? "email" : "text"}
                    value={form[f]}
                    onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                    required maxLength={f === "email" ? 160 : 80}
                    className="w-full bg-white/60 border border-primary/15 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">{t("contact.form.message")}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required rows={5} maxLength={1000}
                  className="w-full bg-white/60 border border-primary/15 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all resize-none"
                />
              </div>
              {err && <p className="text-sm text-destructive">{err}</p>}
              {sent && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-sm text-primary">{t("contact.form.success")}</motion.p>}
              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="w-full rounded-full gradient-primary text-white py-4 text-sm uppercase tracking-[0.3em] shadow-luxury">
                {t("contact.form.send")}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
