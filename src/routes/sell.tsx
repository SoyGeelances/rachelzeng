import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Handshake, Home, Megaphone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  GoldButton,
  OutlineButton,
  PageHero,
  SectionTitle,
  StatGrid,
} from "@/components/site";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell Your Home in Los Angeles | Rachel Zeng Real Estate" },
      {
        name: "description",
        content:
          "Rachel Zeng's LA listings sell for 103% of list price in an average of 12 days. Request a free, data-backed home valuation.",
      },
      { property: "og:title", content: "Sell Your Home with Confidence — Rachel Zeng" },
      {
        property: "og:description",
        content: "103% of list price. 12 days on market. Get your free LA home valuation.",
      },
    ],
  }),
  component: SellPage,
});

const BENEFITS = [
  {
    icon: Handshake,
    title: "Negotiation that holds price",
    body: "Multiple-offer strategy, escalation management and terms structured to protect your net — not just the headline number.",
  },
  {
    icon: Megaphone,
    title: "Marketing with reach",
    body: "Editorial photography, film, print and a Sotheby's global network that puts your home in front of qualified luxury buyers.",
  },
  {
    icon: Home,
    title: "Block-level local knowledge",
    body: "Live pricing data by street and neighborhood across the Westside, the coast and the Eastside hills.",
  },
  {
    icon: Sparkles,
    title: "A seamless process",
    body: "Staging, contractors, inspections and escrow coordinated end to end. Prep costs fronted, paid at close.",
  },
];

const STEPS = [
  { title: "Consultation", body: "A walkthrough and pricing analysis of comparable sales from the last 90 days." },
  { title: "Preparation", body: "Staging, paint, repairs and photography — managed and funded up front." },
  { title: "Listing", body: "A coordinated launch timed to peak buyer traffic, with broker previews." },
  { title: "Negotiation", body: "Offer review, counters and escrow management through to closing." },
];

function SellPage() {
  const [form, setForm] = useState({ address: "", name: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const inputCls =
    "h-12 w-full border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.address.trim()) next["address"] = "Please enter your property address.";
    if (!form.name.trim()) next["name"] = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next["email"] = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ address: "", name: "", email: "" });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Sell"
        title="Sell Your Home with Confidence"
        subtitle="Rachel's Los Angeles listings close at 103% of list price in an average of 12 days on market."
      >
        <div className="flex flex-wrap gap-3">
          <GoldButton href="#valuation">Get Your Home Valuation</GoldButton>
          <OutlineButton to="/contact" className="text-primary-foreground">
            Contact Rachel
          </OutlineButton>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <StatGrid
          items={[
            { value: "103%", label: "Of list price" },
            { value: "12", label: "Avg. days on market" },
            { value: "$750M+", label: "Career volume" },
            { value: "Top 1%", label: "Of LA agents" },
          ]}
        />
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Why Rachel" title="Four reasons sellers net more." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full border border-border bg-card p-7">
                  <b.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle eyebrow="Process" title="Four steps from first call to closing." />
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="border-t-2 border-accent pt-5">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="valuation" className="border-t border-border bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Free valuation</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Find out what your property is worth.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              A block-level pricing analysis of comparable Los Angeles sales, delivered within 24
              hours. No obligation, no automated estimate.
            </p>
          </div>
          <form noValidate onSubmit={submit} className="space-y-4">
            <div>
              <input
                value={form.address}
                maxLength={200}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Property address"
                aria-label="Property address"
                className={inputCls}
              />
              {errors["address"] ? (
                <p className="mt-1 text-xs text-accent">{errors["address"]}</p>
              ) : null}
            </div>
            <div>
              <input
                value={form.name}
                maxLength={100}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                aria-label="Your name"
                className={inputCls}
              />
              {errors["name"] ? <p className="mt-1 text-xs text-accent">{errors["name"]}</p> : null}
            </div>
            <div>
              <input
                type="email"
                value={form.email}
                maxLength={255}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email address"
                aria-label="Email address"
                className={inputCls}
              />
              {errors["email"] ? <p className="mt-1 text-xs text-accent">{errors["email"]}</p> : null}
            </div>
            <GoldButton type="submit" className="w-full">
              Get Your Home Valuation
            </GoldButton>
            {sent ? (
              <p className="flex items-center gap-2 text-sm text-accent">
                <Check className="h-4 w-4" /> Thank you — your valuation arrives within 24 hours.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
