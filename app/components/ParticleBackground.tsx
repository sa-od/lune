"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  drift: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let nebulae: Nebula[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const starCount = Math.min(
        250,
        Math.floor((canvas.width * canvas.height) / 6000)
      );
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));

      nebulae = [
        {
          x: canvas.width * 0.15,
          y: canvas.height * 0.25,
          radius: 220,
          color: "100, 40, 160",
          opacity: 0.025,
          drift: 0.12,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.55,
          radius: 280,
          color: "40, 40, 150",
          opacity: 0.02,
          drift: -0.09,
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.85,
          radius: 200,
          color: "140, 70, 40",
          opacity: 0.018,
          drift: 0.07,
        },
      ];
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Nebulae
      for (const n of nebulae) {
        const nx = n.x + Math.sin(time * 0.0001 * n.drift) * 40;
        const ny = n.y + Math.cos(time * 0.00015 * n.drift) * 25;
        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
        gradient.addColorStop(0, `rgba(${n.color}, ${n.opacity})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(
          nx - n.radius,
          ny - n.radius,
          n.radius * 2,
          n.radius * 2
        );
      }

      // Stars
      for (const star of stars) {
        const opacity =
          (Math.sin(time * star.twinkleSpeed + star.twinkleOffset) + 1) / 2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.7 + 0.1})`;
        ctx.fill();

        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 210, 255, ${opacity * 0.04})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    resize();
    animationId = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-layer" aria-hidden="true" />;
}
