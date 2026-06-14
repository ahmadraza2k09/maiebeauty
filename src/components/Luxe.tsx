import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(207,184,245,0.45),transparent_70%)]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(176,148,229,0.35),transparent_70%)]"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(243,237,255,0.7),transparent_70%)]"
      />
    </div>
  );
}

export function Sparkle({ className = "", size = 24, delay = 0 }: { className?: string; size?: number; delay?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="url(#sg)" />
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#cfb8f5" />
          <stop offset="1" stopColor="#9a7bc7" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary/80">
      <span className="w-8 h-px bg-primary/50" />
      {children}
      <span className="w-8 h-px bg-primary/50" />
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 30 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
