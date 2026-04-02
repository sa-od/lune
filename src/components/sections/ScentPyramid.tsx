import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

const layerLabels = {
  Top: { icon: "△", subtitle: "First impression — fades in minutes" },
  Heart: { icon: "◇", subtitle: "The soul — emerges after the opening" },
  Base: { icon: "▽", subtitle: "The foundation — lingers for hours" },
} as const;

export default function ScentPyramid({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  return (
    <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
              Scent Architecture
            </p>
            <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl md:text-5xl">
              The Pyramid
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12 sm:gap-16">
          {fragrance.scentPyramid.map((layer, layerIndex) => {
            const { icon, subtitle } = layerLabels[layer.label];
            return (
              <FadeIn key={layer.label} delay={layerIndex * 0.15}>
                <div className="border-t border-white/5 pt-8 sm:pt-10">
                  {/* Layer header */}
                  <div className="mb-8 flex items-center gap-3 sm:mb-10">
                    <span
                      className="text-lg"
                      style={{ color: fragrance.palette.primary }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-light tracking-[0.1em] text-text-light sm:text-2xl">
                        {layer.label} Notes
                      </h3>
                      <p className="mt-1 text-xs font-light text-text-muted/50">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Notes grid — 1 col mobile, 3 col desktop */}
                  <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
                    {layer.notes.map((note, noteIndex) => (
                      <div
                        key={note.name}
                        className="group rounded-sm border border-white/5 px-5 py-6 transition-colors duration-300 hover:border-white/10 sm:px-6 sm:py-7"
                      >
                        <p
                          className="mb-2 text-sm font-light tracking-[0.12em] uppercase sm:text-base"
                          style={{
                            color: fragrance.palette.primary,
                            opacity: 0.9 - noteIndex * 0.1,
                          }}
                        >
                          {note.name}
                        </p>
                        <p className="text-sm font-light leading-relaxed text-text-muted/70">
                          {note.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
