import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

export default function FragranceInterlude({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  const isJupitor = fragrance.slug === "jupitor";

  return (
    <section className="relative h-[50vh] min-h-[320px] overflow-hidden sm:h-[60vh]">
      {/* Atmospheric gradient unique to each fragrance */}
      <div
        className="absolute inset-0"
        style={{
          background: isJupitor
            ? "linear-gradient(180deg, #0B1026 0%, #1a1520 30%, #2a1a18 50%, #1a1520 70%, #0B1026 100%)"
            : "linear-gradient(180deg, #0B1026 0%, #0e1230 30%, #151840 50%, #0e1230 70%, #0B1026 100%)",
        }}
      />

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${0.5 + (i % 3) * 0.5}px`,
              height: `${0.5 + (i % 3) * 0.5}px`,
              opacity: 0.08 + (i % 4) * 0.05,
              top: `${(i * 14.3) % 100}%`,
              left: `${(i * 21.7) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Centered quote */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <FadeIn>
          <blockquote
            className="max-w-md text-center font-display text-xl font-light leading-relaxed text-text-light/50 sm:max-w-lg sm:text-2xl md:text-3xl"
            style={{ letterSpacing: "0.03em" }}
          >
            {isJupitor
              ? "A fragrance should feel like sunlight you carry with you."
              : "Some things are felt long before they are understood."}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
