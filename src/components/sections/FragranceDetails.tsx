import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import type { Fragrance } from "@/lib/data";

export default function FragranceDetails({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  const details = [
    { label: "Size", value: fragrance.details.size },
    { label: "Concentration", value: fragrance.details.concentration },
    { label: "Family", value: fragrance.details.family },
  ];

  return (
    <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        {/* Product details */}
        <FadeIn>
          <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
            Details
          </p>
          <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl">
            {fragrance.name}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
            {details.map((detail) => (
              <div key={detail.label}>
                <p className="text-[11px] font-light tracking-[0.2em] uppercase text-text-muted/50 sm:text-xs">
                  {detail.label}
                </p>
                <p className="mt-1 text-base font-light text-text-light sm:text-lg">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.2}>
          <div className="mx-auto my-12 h-px w-16 bg-white/10 sm:my-14" />
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.25}>
          <p className="mb-8 text-base font-light leading-relaxed text-text-muted">
            Experience {fragrance.name} for yourself.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button href="/contact">Request a Sample</Button>
            <Button href="/contact" variant="outline">
              Find Near You
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
