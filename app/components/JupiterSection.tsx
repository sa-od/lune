"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import PerfumeBottle from "./PerfumeBottle";

const scentNotes = [
  "Woody",
  "Amber",
  "Fresh Spicy",
  "Aromatic",
  "Earthy",
  "Mossy",
  "Warm Spicy",
  "Smoky",
];

export default function JupiterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const crackRef = useRef<HTMLDivElement>(null);
  const embersRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "40% 50%",
          scrub: 1,
        },
      });

      tl.from(crackRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.3,
      })
        .from(
          bottleRef.current,
          {
            y: 250,
            opacity: 0,
            scale: 0.7,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .from(
          taglineRef.current,
          { opacity: 0, y: 15, duration: 0.2 },
          "-=0.3"
        )
        .from(
          titleRef.current,
          { x: -100, opacity: 0, duration: 0.4, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          descRef.current,
          { y: 40, opacity: 0, duration: 0.3 },
          "-=0.2"
        )
        .from(
          ".jupiter-note",
          {
            scale: 0,
            opacity: 0,
            duration: 0.15,
            stagger: 0.04,
          },
          "-=0.1"
        )
        .from(
          embersRef.current,
          { opacity: 0, duration: 0.3 },
          "-=0.5"
        )
        .from(
          ".jupiter-cta",
          { y: 20, opacity: 0, duration: 0.2 },
          "-=0.1"
        );

      // Bottle parallax float on scroll
      gsap.to(bottleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        rotation: 4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Generate ember particles with deterministic positions
  const embers = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    width: 2 + (i % 4),
    left: (i * 4.1 + 3) % 100,
    color: i % 2 === 0 ? "#ff6b2b" : "#e8a317",
    duration: 3 + (i % 5),
    delay: (i * 0.4) % 4,
  }));

  return (
    <section
      id="jupiter"
      ref={sectionRef}
      className="relative min-h-screen bg-jupiter-gradient overflow-hidden"
    >
      {/* Ember particles */}
      <div
        ref={embersRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {embers.map((e) => (
          <div
            key={e.id}
            className="absolute rounded-full"
            style={{
              width: e.width + "px",
              height: e.width + "px",
              left: e.left + "%",
              bottom: "-10px",
              background: `radial-gradient(circle, ${e.color}, transparent)`,
              animation: `ember-rise ${e.duration}s ease-out ${e.delay}s infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Ground crack effect */}
      <div
        ref={crackRef}
        className="absolute bottom-0 left-0 right-0 h-px origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, #ff6b2b44 20%, #e8a31788 50%, #ff6b2b44 80%, transparent 95%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-jupiter-brown/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        {/* Bottle */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-52 h-52 md:w-80 md:h-80 rounded-full bg-jupiter-amber/8 blur-3xl" />
          </div>
          <PerfumeBottle
            ref={bottleRef}
            variant="jupiter"
            className="w-32 sm:w-40 md:w-48 lg:w-56 relative z-10 glow-amber will-change-transform"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg text-center lg:text-left">
          <p
            ref={taglineRef}
            className="text-jupiter-amber/50 text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase mb-3 font-light"
          >
            Eau de Parfum
          </p>

          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 will-change-transform"
            style={{
              background:
                "linear-gradient(135deg, #e8a317 0%, #f0d48a 40%, #d4a853 60%, #c4651a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Jupiter
          </h2>

          <p
            ref={descRef}
            className="text-white/45 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
          >
            Born from the heart of ancient forests. A symphony of smoky amber
            and warm spice, wrapped in dark mossy earth. Jupiter ignites the
            primal elegance within.
          </p>

          {/* Scent notes */}
          <div
            ref={notesRef}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {scentNotes.map((note) => (
              <span
                key={note}
                className="jupiter-note scent-note text-jupiter-amber/60 border-jupiter-amber/15 hover:border-jupiter-amber/50 hover:bg-jupiter-amber/8"
              >
                {note}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 jupiter-cta">
            <button className="cta-button !border-jupiter-amber !text-jupiter-amber hover:!bg-jupiter-amber/8">
              Explore Jupiter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
