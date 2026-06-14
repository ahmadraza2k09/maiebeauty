import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { INSTAGRAM, WHATSAPP } from "@/lib/services";
import logoPlain from "@/assets/logo-plain.png.asset.json";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative mt-32 pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 gradient-lavender opacity-50 -z-10" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(154,123,199,0.18),transparent_70%)] -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div>
            <img src={logoPlain.url} alt="Maie Ibarra" className="h-20 w-auto -ml-3" />
            <p className="mt-4 max-w-xs text-sm text-foreground/70 leading-relaxed">{t("footer.tagline")}</p>
            <div className="flex gap-3 mt-6">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass-lavender flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full glass-lavender flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-5">{t("footer.nav")}</h4>
            <ul className="space-y-3 font-display text-2xl">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/prices" className="hover:text-primary transition-colors">{t("nav.prices")}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-5">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li>WhatsApp · +1 (903) 921 4854</li>
              <li>Texas, USA</li>
              <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-primary">@maie.beautymx</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()} Maie Ibarra. {t("footer.rights")}</span>
          <span className="font-display italic text-base text-primary/80">Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
