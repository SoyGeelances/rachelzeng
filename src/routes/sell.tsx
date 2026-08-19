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

const SELLING_STEPS = [
  {
    number: 1,
    title: "Choosing Your Listing Agent",
    subtitle: "The foundation of a successful sale",
    body: [
      "Selecting the right agent to sell your property is arguably the most important decision in the entire process — it can be the difference between a top-dollar sale and leaving money on the table, especially in a shifting market where conditions can turn from a seller's advantage to a buyer's advantage quickly. Your property isn't just an asset; for most sellers, it's also deeply personal, tied to memories and milestones, and getting the sale right requires an agent who understands both the financial stakes and the emotional weight involved.",
      "With a background spanning residential sales, investment sales, and development across Southern California and the Bay Area, I bring both market expertise and a strategic eye to positioning your property for the strongest possible outcome. From our first conversation, I take the time to understand your goals — whether that's maximizing price, minimizing time on market, or navigating a more complex situation like an inherited property — and build a plan around what matters most to you.",
    ],
    image:
      "/images/steps/1-step.webp",
  },
  {
    number: 2,
    title: "Preparing Your Property",
    subtitle: "Set the stage for top dollary",
    body: [
      "First impressions drive value, and the preparation that happens before a property ever hits the market often determines how it performs once it's listed. Before going live, I walk through what will move the needle most — targeted repairs, staging, decluttering, or in some cases more substantial improvements that meaningfully boost return. Not every upgrade is worth the investment, and part of my job is helping you prioritize the changes that actually pay off at sale versus the ones that simply cost time and money without moving the price.",
      "This stage also includes coordinating any vendors or contractors needed to get the property show-ready, from cleaners and stagers to handymen and landscapers. I have experience helping sellers navigate these decisions, and I bring that judgment to every recommendation so your resources go toward what buyers will actually notice and value.",
    ],
    image:
      "images/steps/2-step.webp",
  },
  {
    number: 3,
    title: "Pricing Strategy",
    subtitle: "Data-driven, not guesswork",
    body: [
      "Pricing a property correctly from day one is one of the most important levers in a successful sale. Price too high and a listing can sit and lose momentum, developing a stale reputation that makes buyers wonder what's wrong with it; price too low and you leave money on the table before negotiations even begin. Getting this number right requires more than a quick glance at recent sales — it requires a deep understanding of the specific submarket your property sits in.",
      "I build pricing strategy around current comparable sales, absorption trends, and buyer demand in your specific submarket — not a generic formula pulled from broad citywide averages. This often means looking closely at what's currently active, what's pending, and what's actually closing, along with any unique characteristics of your property that could shift its value up or down relative to comparable sales. The result is a pricing strategy grounded in real data and calibrated to create urgency among the right buyers.",
    ],
    image:
      "images/steps/3-step.webp",
  },
  {
    number: 4,
    title: "Marketing & Exposure",
    subtitle: "Get in front of the right buyers",
    body: [
      "A great listing needs more than a sign in the yard. From professional photography and compelling listing copy to targeted digital promotion and broker outreach, I build a marketing plan designed to create real competition for your property — because competition is what drives price. The goal at this stage is exposure: making sure the widest possible pool of qualified buyers and their agents know your property exists and understand why it's worth a look.",
      "This means leveraging the MLS alongside targeted digital campaigns, direct outreach to agents with active buyers in your price range and area, and, where appropriate, broker previews and open houses that generate momentum. Every property is different, and I tailor the marketing approach to what will resonate most with the buyer pool most likely to be interested — whether that's an owner-user, an investor, or a developer.",
    ],
    image:
      "images/steps/4-step.webp",
  },
  {
    number: 5,
    title: "Reviewing Offers",
    subtitle: "Evaluate beyond the number",
    body: [
      "When offers come in, the highest price isn't always the strongest offer. Financing terms, contingencies, proposed timelines, and buyer qualification all factor into which offer actually gets to the closing table without complications — and a lower offer from a well-qualified, all-cash buyer can sometimes be a far better outcome than a higher offer that carries significant financing risk.",
      "I walk you through every offer in detail, breaking down not just the price but the terms behind it, so you can make a fully informed decision rather than simply chasing the highest number on paper. This often involves reaching out directly to buyers' agents to better understand the strength and seriousness of each offer, giving you a clearer sense of which one is genuinely most likely to close smoothly and on schedule.",
    ],
    image:
      "images/steps/5-step.webp",
  },
  {
    number: 6,
    title: "Negotiating Terms",
    subtitle: "Protect your bottom line",
    body: [
      "Once you've selected an offer, the real negotiation often begins — inspection requests, repair credits, and contingency terms all get worked out during this phase, and this is frequently where deals can either stay on track or start to unravel. Buyers may come back with requests following inspections, and how those conversations are handled can significantly affect your net proceeds and your stress level along the way.",
      "I negotiate on your behalf with a clear focus on protecting your equity and keeping the transaction moving forward, drawing on years of experience to know which requests are reasonable, which are worth pushing back on, and how to keep the deal on track without unnecessary concessions. My goal throughout this stage is to advocate firmly for your interests while keeping the relationship with the buyer's side constructive, since a cooperative transaction tends to close more smoothly than an adversarial one.",
    ],
    image:
      "images/steps/6-step.webp",
  },
  {
    number: 7,
    title: "Closing Escrow",
    subtitle: "Cross the finish line",
    body: [
      "From final walkthroughs to the last signatures, this final stretch of escrow is where all the earlier work comes together. Loose ends get tied up, remaining documentation gets finalized, and the timeline moves toward a defined closing date. It's a stage that requires attention to detail, since even small oversights here can cause delays right at the finish line.",
      "I stay closely involved through this final stretch to make sure nothing is missed and the sale closes smoothly and on schedule — putting the proceeds, and the next chapter, in your hands. And once the transaction closes, I remain available as a resource, whether that's a question about the sale down the line or guidance on what comes next.",
    ],
    image:
      "images/steps/7-step.webp",
  },
];

const normalizeParagraphs = (body: string | string[]) => {
  if (Array.isArray(body)) return body;
  return body
    .split(/\n\s*\n|\.\s+(?=[A-Z])/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
};

const getStepLabel = (title: string) => {
  const customLabels: Record<string, string[]> = {
    "Choosing Your Listing Agent": ["Choosing Your", "Listing Agent"],
    "Preparing Your Property": ["Preparing Your", "Property"],
    "Pricing Strategy": ["Pricing", "Strategy"],
    "Marketing & Exposure": ["Marketing &", "Exposure"],
    "Reviewing Offers": ["Reviewing", "Offers"],
    "Negotiating Terms": ["Negotiating", "Terms"],
    "Closing Escrow": ["Closing", "Escrow"],
  };

  return customLabels[title] ?? [title];
};

function SellPage() {
  const [form, setForm] = useState({ address: "", name: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = SELLING_STEPS[activeStep];
  const paragraphs = normalizeParagraphs(currentStep.body);

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

      <section className="border-y border-border bg-[#f6f6f6] text-[#1a1a1a]">
        <div className="mx-auto max-w-6xl px-3 py-0 sm:px-6">
          <div className="flex items-center justify-between border-b border-[#d9d5d0] bg-[#f6f6f6] px-4 py-2 sm:px-6">
            {SELLING_STEPS.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="group flex min-w-0 flex-1 flex-col items-center justify-center pt-4 pb-2 text-center transition-all"
                  aria-pressed={isActive}
                >
                  <span
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-all",
                      isActive
                        ? "border-[#b78a4a] bg-[#b78a4a] text-white shadow-sm"
                        : "border-[#d9d5d0] bg-white text-[#1a1a1a] group-hover:border-[#b78a4a]",
                    ].join(" ")}
                  >
                    {step.number}
                  </span>
                  <span
                    className={[
                      "hidden md:block mt-3 max-w-[110px] text-[10px] font-medium uppercase leading-tight tracking-[0.08em] min-h-[25px]",
                      isActive ? "text-[#1a1a1a]" : "text-[#4a4a4a]",
                    ].join(" ")}
                  >
                    {getStepLabel(step.title).map((line, indexLine) => (
                      <span key={`${step.title}-${indexLine}`} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="pr-0 lg:pr-8">
              <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight text-[#1a1a1a]">
                {currentStep.title}
              </h3>
              <p className="mt-3 text-base italic text-[#444]">{currentStep.subtitle}</p>

              <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-[#222]">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              {currentStep.image ? (
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="h-[260px] w-full max-w-[420px] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.04)] lg:h-[290px]"
                />
              ) : (
                <div
                  className="flex h-[260px] w-full max-w-[390px] items-center justify-center text-[12rem] font-light leading-none tracking-[-0.08em] text-transparent lg:h-[290px]"
                  style={{ WebkitTextStroke: "1px rgba(17, 17, 17, 0.35)" }}
                >
                  {String(currentStep.number).padStart(2, "0")}
                </div>
              )}
            </div>
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
