"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";
import PerfumeBottle from "./PerfumeBottle";

const scentNotes = [
  "Aromatic",
  "Fresh Spicy",
  "Citrus",
  "Green",
  "Aldehydic",
  "Woody",
  "Lavender",
  "Marine",
];

export default function PlutoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const wavesRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "40% 50%",
          scrub: 1,
        },
      });

      tl.from(wavesRef.current, {
        x: "80%",
        opacity: 0,
        duration: 0.4,
      })
        .from(
          bottleRef.current,
          {
            y: 200,
            opacity: 0,
            scale: 0.75,
            rotation: -8,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          taglineRef.current,
          { opacity: 0, y: 15, duration: 0.2 },
          "-=0.3"
        )
        .from(
          titleRef.current,
          { x: 100, opacity: 0, duration: 0.4, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          descRef.current,
          { y: 40, opacity: 0, duration: 0.3 },
          "-=0.2"
        )
        .from(
          ".pluto-note",
          {
            scale: 0,
            opacity: 0,
            duration: 0.15,
            stagger: 0.04,
          },
          "-=0.1"
        )
        .from(
          bubblesRef.current,
          { opacity: 0, duration: 0.3 },
          "-=0.5"
        )
        .from(
          ".pluto-cta",
          { y: 20, opacity: 0, duration: 0.2 },
          "-=0.1"
        );

      // Bottle parallax
      gsap.to(bottleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        rotation: -4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Deterministic bubbles
  const bubbles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 5 + (i % 6) * 2,
    left: (i * 5.5 + 2) % 100,
    duration: 4 + (i % 5) * 1.2,
    delay: (i * 0.5) % 5,
  }));

  return (
    <section
      id="pluto"
      ref={sectionRef}
      className="relative min-h-screen bg-pluto-gradient overflow-hidden"
    >
      {/* Wave SVG overlay */}
      <div ref={wavesRef} className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-[200%] opacity-[0.07]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#0066cc">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z;
                M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,170.7C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z;
                M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z
              "
            />
          </path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] opacity-[0.04]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animation: "wave 12s ease-in-out infinite" }}
        >
          <path
            fill="#00d4aa"
            d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Bubbles */}
      <div
        ref={bubblesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full"
            style={{
              width: b.size + "px",
              height: b.size + "px",
              left: b.left + "%",
              bottom: "-20px",
              border: "1px solid rgba(0, 212, 170, 0.15)",
              background:
                "radial-gradient(circle at 30% 30%, rgba(0, 212, 170, 0.15), transparent)",
              animation: `bubble-rise ${b.duration}s ease-in ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-20 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        {/* Bottle */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-52 h-52 md:w-80 md:h-80 rounded-full bg-pluto-teal/[0.06] blur-3xl" />
          </div>
          <PerfumeBottle
            ref={bottleRef}
            variant="pluto"
            className="w-32 sm:w-40 md:w-48 lg:w-56 relative z-10 glow-teal will-change-transform"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg text-center lg:text-right">
          <p
            ref={taglineRef}
            className="text-pluto-teal/50 text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase mb-3 font-light"
          >
            Eau de Parfum
          </p>

          <h2
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 will-change-transform"
            style={{
              background:
                "linear-gradient(135deg, #00d4aa 0%, #40e8c8 35%, #0088cc 65%, #b399d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pluto
          </h2>

          <p
            ref={descRef}
            className="text-white/45 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            Drawn from the depths of celestial oceans. An alchemy of marine
            currents and citrus light, veiled in lavender mist. Pluto reveals
            the infinite freshness of the cosmos.
          </p>

          {/* Scent notes */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {scentNotes.map((note) => (
              <span
                key={note}
                className="pluto-note scent-note text-pluto-teal/60 border-pluto-teal/15 hover:border-pluto-teal/50 hover:bg-pluto-teal/8"
              >
                {note}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center lg:justify-end pluto-cta">
            <button className="cta-button !border-pluto-teal !text-pluto-teal hover:!bg-pluto-teal/8">
              Explore Pluto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
