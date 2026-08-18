import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const portrait = "/images/rachel-portrait.jpg";
import {
  GoldButton,
  METRICS,
  PageHero,
  SectionTitle,
  StatGrid,
  TESTIMONIALS,
} from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rachel Zeng | Luxury Realtor, Los Angeles" },
      {
        name: "description",
        content:
          "15+ years, $750M+ closed, Top 1% of LA agents. Rachel Zeng offers concierge-level service across Beverly Hills, Malibu, Santa Monica and the Westside.",
      },
      { property: "og:title", content: "About Rachel Zeng | Luxury Realtor, Los Angeles" },
      {
        property: "og:description",
        content: "15+ years and $750M+ in Los Angeles luxury sales. Meet Rachel Zeng.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Los Angeles specialist, not a generalist."
        subtitle="Sotheby's International Realty affiliate serving Beverly Hills, Malibu, Santa Monica, Brentwood, Silver Lake and the Hollywood Hills."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1fr] md:items-center">
        <Reveal>
          <img
            src={portrait}
            alt="Rachel Zeng, luxury real estate agent in Los Angeles"
            width={900}
            height={1120}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionTitle eyebrow="Meet Rachel" title="Fifteen years. One city. Every detail." />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Rachel Zeng has spent more than fifteen years representing buyers and sellers across
              Los Angeles&rsquo; most competitive neighborhoods, closing over $750 million in career
              sales volume and ranking in the top 1% of agents citywide.
            </p>
            <p>
              Her market expertise is block-level: she tracks pricing, inventory and buyer behavior
              from Malibu&rsquo;s coastline to the Hollywood Hills, so pricing decisions are based
              on live data rather than last quarter&rsquo;s comps.
            </p>
            <p>
              Every client works directly with Rachel — not a junior associate. Staging, marketing,
              inspections, negotiations and escrow are managed personally, with a deliberately small
              client roster.
            </p>
            <p>
              As a Sotheby&rsquo;s International Realty affiliate, her listings reach a global
              network of qualified luxury buyers, backed by editorial-grade photography, film and
              private broker previews.
            </p>
          </div>
          <div className="mt-8">
            <GoldButton to="/contact">Contact Rachel</GoldButton>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <StatGrid items={METRICS} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Testimonials" title="What clients say" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between border border-border bg-card p-7">
                <div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed">“{t.quote}”</blockquote>
                </div>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <GoldButton to="/contact">Contact Rachel</GoldButton>
        </div>
      </section>
    </>
  );
}
