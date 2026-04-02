import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

export default function Accords({ fragrance }: { fragrance: Fragrance }) {
  return (
    <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
              Character
            </p>
            <h2 className="font-display text-3xl font-light text-bg-primary sm:text-4xl">
              Key Accords
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-4 sm:gap-5">
          {fragrance.accords.map((accord, i) => {
            const width = 95 - i * 12;
            return (
              <FadeIn key={accord} delay={i * 0.1} direction="left">
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Bar */}
                  <div
                    className="h-8 rounded-sm transition-all duration-500 sm:h-10"
                    style={{
                      width: `${width}%`,
                      backgroundColor: fragrance.palette.primary,
                      opacity: 0.8 - i * 0.12,
                    }}
                  />
                  {/* Label */}
                  <span className="shrink-0 text-xs font-light tracking-[0.12em] uppercase text-bg-primary/60 sm:text-sm">
                    {accord}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
