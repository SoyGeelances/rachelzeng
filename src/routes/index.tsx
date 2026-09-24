import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Phone } from "lucide-react";

const laHero = "/images/la-hero.jpg";
const rachelPortrait = "/images/rachel-zeng-portrait.webp";
const prop1 = "/images/prop-1.jpg";
const prop2 = "/images/prop-2.jpg";
const prop3 = "/images/prop-3.jpg";
const prop4 = "/images/prop-4.jpg";
import {
  CONTACT,
  Eyebrow,
  GoldButton,
  OutlineButton,
  SectionTitle,
  StatGrid,
  METRICS,
  TESTIMONIALS,
} from "@/components/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rachel Zeng | Luxury Real Estate Agent in Los Angeles" },
      {
        name: "description",
        content:
          "Rachel Zeng sells LA luxury homes for 103% of list price in an average of 12 days. $750M+ closed across Beverly Hills, Malibu and the Westside.",
      },
      { property: "og:title", content: "Rachel Zeng | Luxury Real Estate in Los Angeles" },
      {
        property: "og:description",
        content:
          "Top 1% LA Realtor. 103% of list price, 12 days on market, $750M+ in career sales. Request a private consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Buying",
    body: "Off-market access, disciplined valuation and negotiation that keeps you from overpaying in a competitive LA market.",
    to: "/buy",
  },
  {
    title: "Selling",
    body: "Concierge preparation, cinematic marketing and a launch calendar timed to peak buyer traffic across the Westside.",
    to: "/sell",
  },
  {
    title: "Advisory",
    body: "Portfolio strategy, 1031 timing and long-horizon guidance for owners holding LA property as an asset.",
    to: "/contact",
  },
];

const listings = [
  { img: prop1, name: "Beverly Hills Estate", price: "$8,950,000", meta: "5 BD · 7 BA · 8,200 SF" },
  { img: prop2, name: "Malibu Oceanfront", price: "$12,400,000", meta: "4 BD · 5 BA · 5,600 SF" },
  { img: prop3, name: "Santa Monica Modern", price: "$4,275,000", meta: "4 BD · 4 BA · 3,900 SF" },
  { img: prop4, name: "DTLA Penthouse", price: "$3,150,000", meta: "3 BD · 3 BA · 2,850 SF" },
];

const journal = [
  {
    tag: "Market Report",
    title: "Westside inventory tightens heading into fall",
    body: "Why the $3M–$6M band is moving faster than any other segment in Los Angeles right now.",
  },
  {
    tag: "Seller Guide",
    title: "The five upgrades that actually return at close",
    body: "Where staging and prep dollars pay back — and the renovations you should skip entirely.",
  },
  {
    tag: "Neighborhoods",
    title: "Buying in Beverly Hills vs. Pacific Palisades",
    body: "Land value, school boundaries and resale dynamics compared across two very different markets.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={laHero}
          alt="Luxury Los Angeles hillside home overlooking the city at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/80" />
        <div className="mx-auto max-w-6xl px-6 py-28 text-primary-foreground sm:py-36">
          <Eyebrow>Los Angeles · Top 1% of agents</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] sm:text-6xl">
            Selling LA&rsquo;s finest homes for 103% of list price — in 12 days.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75">
            Rachel Zeng represents buyers and sellers across Beverly Hills, Malibu, Santa Monica and
            the Westside with discretion, precision and $750M+ in closed volume.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <GoldButton to="/sell">
              What is my home worth <ArrowRight className="h-4 w-4" />
            </GoldButton>
            <OutlineButton to="/buy">Browse listings</OutlineButton>
          </div>
        </div>
      </section>

      <StatGrid items={METRICS} />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="A full-service practice, built for high-stakes moves."
            intro="Every client works directly with Rachel — from the first valuation call through the final signature."
          />
        </Reveal>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex h-full flex-col bg-card p-8">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to={s.to}
                  className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-accent hover:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured listings */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle eyebrow="Portfolio" title="Featured properties" />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {listings.map((l, i) => (
              <Reveal key={l.name} delay={i * 70}>
                <article className="group h-full bg-card">
                  <div className="overflow-hidden">
                    <img
                      src={l.img}
                      alt={`${l.name} in Los Angeles`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-serif text-lg">{l.name}</p>
                    <p className="mt-1 text-sm text-accent">{l.price}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{l.meta}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <OutlineButton to="/buy" className="text-foreground">
              View all listings
            </OutlineButton>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1fr] md:items-center sm:py-24">
        <Reveal>
          <img
            src={rachelPortrait}
            alt="Rachel Zeng, luxury real estate agent in Los Angeles"
            width={912}
            height={1140}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionTitle
            eyebrow="About Rachel"
            title="Real estate is one of life&rsquo;s biggest decisions — and it deserves a thoughtful strategy."
            intro="I combine local expertise, strategic negotiation, and a highly personalized approach to help buyers and sellers move forward with clarity and confidence. Every recommendation is tailored to your goals, the market, and the bigger picture behind the transaction."
          />
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>· Sotheby&rsquo;s International Realty affiliate</li>
            <li>· $750M+ in career sales volume</li>
            <li>· 103% average sale-to-list price</li>
          </ul>
          <div className="mt-8">
            <GoldButton to="/about">Meet Rachel</GoldButton>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle eyebrow="Testimonials" title="What clients say" center />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between border border-border bg-card p-7">
                  <div>
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.place}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journal teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <SectionTitle eyebrow="Journal" title="Notes on the Los Angeles market" />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {journal.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="h-full border-t border-accent/50 pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{p.tag}</p>
                <h3 className="mt-3 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <Eyebrow>Private consultation</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Let&rsquo;s talk about your next move in Los Angeles.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
            Confidential, no obligation, and always with Rachel directly.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <GoldButton to="/contact">Schedule a consultation</GoldButton>
            <OutlineButton href={CONTACT.phoneHref} className="text-primary-foreground">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </OutlineButton>
          </div>
        </div>
      </section>
    </div>
  );
}
