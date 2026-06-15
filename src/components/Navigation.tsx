import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import logoWhite from "@/assets/maie-logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/prices", key: "nav.prices" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Navigation() {
  const { t, lang, setLang } = useLang();
  const { location } = useRouterState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    // Ensure we start at the top when navigating between routes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-5 lg:px-10 transition-all duration-500 ${
        scrolled ? "" : ""
      }`}>
        <div className={`flex items-center justify-between rounded-full px-5 lg:px-7 py-3 transition-all duration-500 ${
          scrolled ? "glass-lavender shadow-soft" : "bg-transparent"
        }`}>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoWhite} alt="Maie Ibarra" className="h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-4 py-2 text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t(l.key)}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-px gradient-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-xs tracking-widest uppercase rounded-full glass-lavender p-1">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === "es" ? "gradient-primary text-white shadow-soft" : "text-foreground/60 hover:text-foreground"}`}
              >ES</button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full transition-all ${lang === "en" ? "gradient-primary text-white shadow-soft" : "text-foreground/60 hover:text-foreground"}`}
              >EN</button>
            </div>
            <Link
              to="/reservar"
              className="hidden lg:inline-flex items-center gap-2 rounded-full gradient-primary text-white text-sm font-medium px-5 py-2.5 shadow-soft hover:shadow-luxury transition-all hover:scale-[1.02]"
            >
              {t("nav.book")}
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 rounded-full glass-lavender"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-5 mt-3 rounded-3xl glass-lavender p-6 shadow-luxury"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="px-4 py-3 rounded-2xl hover:bg-white/60 font-display text-2xl">
                  {t(l.key)}
                </Link>
              ))}
              <Link to="/reservar" className="mt-3 px-5 py-3 rounded-2xl gradient-primary text-white text-center font-medium">
                {t("nav.book")}
              </Link>
              <div className="flex justify-center gap-2 mt-4 text-xs uppercase tracking-widest">
                <button onClick={() => setLang("es")} className={lang === "es" ? "text-primary font-medium" : "opacity-50"}>Español</button>
                <span className="opacity-30">·</span>
                <button onClick={() => setLang("en")} className={lang === "en" ? "text-primary font-medium" : "opacity-50"}>English</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
