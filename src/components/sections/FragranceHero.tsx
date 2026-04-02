"use client";

import { motion } from "motion/react";
import type { Fragrance } from "@/lib/data";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function FragranceHero({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  const isJupitor = fragrance.slug === "jupitor";

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-primary px-6 pt-20">
      {/* Atmospheric glow — warm for Jupitor, cool for Pluto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isJupitor
            ? "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,135,77,0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(42,45,94,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Family label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-4 text-[11px] font-light tracking-[0.25em] uppercase sm:text-xs"
          style={{ color: fragrance.palette.primary }}
        >
          {fragrance.details.family}
        </motion.p>

        {/* Fragrance name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="font-display font-light leading-none text-text-light"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            letterSpacing: "0.12em",
          }}
        >
          {fragrance.name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="my-6 h-px w-16 origin-center sm:my-8 sm:w-24"
          style={{ backgroundColor: `${fragrance.palette.primary}66` }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="max-w-xs text-base font-light leading-relaxed text-text-muted sm:max-w-sm sm:text-lg"
        >
          {fragrance.tagline}
        </motion.p>

        {/* Hero description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="mt-6 max-w-md text-sm font-light leading-[1.8] text-text-muted/70 sm:text-base"
        >
          {fragrance.heroDescription}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8, ease }}
        className="absolute bottom-8 flex flex-col items-center gap-2 sm:bottom-10"
      >
        <span className="text-[10px] font-light tracking-[0.2em] uppercase text-text-muted/40">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-text-muted/20"
        />
      </motion.div>
    </section>
  );
}
