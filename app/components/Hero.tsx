"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/app/lib/gsap";
import PerfumeBottle from "./PerfumeBottle";
import Logo from "./Logo";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const jupiterBottleRef = useRef<SVGSVGElement>(null);
  const plutoBottleRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(titleRef.current, {
        scale: 0.3,
        opacity: 0,
        rotateX: 40,
        y: 60,
        duration: 1.6,
        ease: "power4.out",
      })
        .from(
          lineRef.current,
          { scaleX: 0, duration: 0.8, ease: "power2.inOut" },
          "-=0.7"
        )
        .from(
          subtitleRef.current,
          { y: 25, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          jupiterBottleRef.current,
          {
            x: -250,
            opacity: 0,
            rotation: -20,
            scale: 0.7,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          plutoBottleRef.current,
          {
            x: 250,
            opacity: 0,
            rotation: 20,
            scale: 0.7,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=1.1"
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.5 },
          "-=0.2"
        );

      // Floating bottles
      gsap.to(jupiterBottleRef.current, {
        y: -18,
        rotation: -3,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(plutoBottleRef.current, {
        y: -18,
        rotation: 3,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
      });

      // Scroll-triggered exit parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          if (titleRef.current) {
            gsap.set(titleRef.current, {
              y: -120 * p,
              opacity: 1 - p * 1.2,
              scale: 1 - p * 0.15,
            });
          }
          if (jupiterBottleRef.current) {
            gsap.set(jupiterBottleRef.current, {
              x: -350 * p,
              opacity: 1 - p * 1.5,
            });
          }
          if (plutoBottleRef.current) {
            gsap.set(plutoBottleRef.current, {
              x: 350 * p,
              opacity: 1 - p * 1.5,
            });
          }
          if (scrollIndicatorRef.current) {
            gsap.set(scrollIndicatorRef.current, {
              opacity: Math.max(0, 0.4 - p * 2),
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Radial glow behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(100,50,150,0.3) 0%, rgba(50,30,100,0.1) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Bottles */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2 sm:px-6 md:px-12 lg:px-24 xl:px-36">
        <PerfumeBottle
          ref={jupiterBottleRef}
          variant="jupiter"
          className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 glow-amber opacity-75"
        />
        <PerfumeBottle
          ref={plutoBottleRef}
          variant="pluto"
          className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 glow-teal opacity-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center" style={{ perspective: "1000px" }}>
        <div
          ref={titleRef}
          className="mb-4 will-change-transform flex justify-center"
        >
          <Logo
            showText
            color="#d4a853"
            className="w-[280px] sm:w-[360px] md:w-[450px] lg:w-[550px] glow-gold"
          />
        </div>

        <div
          ref={lineRef}
          className="w-24 sm:w-32 md:w-48 h-px mx-auto mb-5 sm:mb-6 origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4a853, transparent)",
          }}
        />

        <p
          ref={subtitleRef}
          className="text-[0.65rem] sm:text-xs md:text-sm tracking-[0.35em] sm:tracking-[0.45em] text-white/50 font-light uppercase mb-10 sm:mb-12"
        >
          Jupiter&nbsp;&nbsp;&middot;&nbsp;&nbsp;Pluto
        </p>

        <div ref={ctaRef}>
          <button
            className="cta-button"
            onClick={() => {
              document
                .getElementById("jupiter")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover Your Universe
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
