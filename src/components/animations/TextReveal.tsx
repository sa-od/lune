"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current?.querySelector("[data-text-reveal]");
      if (!el) return;

      const split = SplitText.create(el, {
        type: "words",
        mask: "words",
      });

      gsap.from(split.words, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.04,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Tag data-text-reveal className={className}>
        {children}
      </Tag>
    </div>
  );
}
