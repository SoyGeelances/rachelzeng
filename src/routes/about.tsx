import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const portrait = "/images/rachel-zeng-portrait.webp";
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
        title="Rachel Zeng"
        subtitle="Helping You Move Forward with Confidence"
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
          <SectionTitle eyebrow="About Rachel" title="Helping You Move Forward with Confidence" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Real estate is more than a transaction—it&rsquo;s one of life&rsquo;s biggest
              milestones. I combine market expertise, strategic negotiation, and personalized service
              to help buyers and sellers achieve their goals with confidence.
            </p>
            <p>
              With experience spanning both the Bay Area and Southern California, I bring a broad
              understanding of California&rsquo;s real estate market, along with responsive
              communication, meticulous attention to detail, and an unwavering commitment to putting
              my clients first.
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
