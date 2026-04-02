import FadeIn from "@/components/animations/FadeIn";

export default function VisualInterlude() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden md:h-[70vh]">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0B1026 0%, #111838 30%, #1a1530 60%, #0B1026 100%)",
        }}
      />

      {/* Scattered stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${0.5 + (i % 4) * 0.5}px`,
              height: `${0.5 + (i % 4) * 0.5}px`,
              opacity: 0.1 + (i % 5) * 0.06,
              top: `${(i * 13.7) % 100}%`,
              left: `${(i * 19.3) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Center text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <FadeIn>
          <p
            className="font-display text-2xl font-light leading-relaxed text-text-light/60 md:text-3xl lg:text-4xl"
            style={{ letterSpacing: "0.05em" }}
          >
            Between warmth and mystery,
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-2 font-display text-2xl font-light leading-relaxed text-text-light/60 md:text-3xl lg:text-4xl"
            style={{ letterSpacing: "0.05em" }}
          >
            there is light.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
