import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const prop1 = "/images/prop-1.jpg";
const prop2 = "/images/prop-2.jpg";
const prop3 = "/images/prop-3.jpg";
const prop4 = "/images/prop-4.jpg";
import { GoldButton, OutlineButton, PageHero, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy a Home in Los Angeles | Rachel Zeng Real Estate" },
      {
        name: "description",
        content:
          "Browse luxury homes in Beverly Hills, Malibu, Santa Monica and Downtown LA. Private showings and off-market opportunities with Rachel Zeng.",
      },
      { property: "og:title", content: "Find Your Dream Home in Los Angeles" },
      {
        property: "og:description",
        content: "Curated LA luxury listings plus off-market inventory. Request a private showing.",
      },
    ],
  }),
  component: BuyPage,
});

const LISTINGS = [
  {
    img: prop1,
    price: "$4,295,000",
    title: "Traditional Estate",
    hood: "Beverly Hills",
    beds: 5,
    baths: 5.5,
    sqft: "5,120",
    type: "Single-family",
  },
  {
    img: prop2,
    price: "$7,850,000",
    title: "Oceanfront Contemporary",
    hood: "Malibu",
    beds: 4,
    baths: 4,
    sqft: "3,880",
    type: "Single-family",
  },
  {
    img: prop3,
    price: "$2,650,000",
    title: "Mid-Century Courtyard Home",
    hood: "Santa Monica",
    beds: 3,
    baths: 2.5,
    sqft: "2,240",
    type: "Single-family",
  },
  {
    img: prop4,
    price: "$1,795,000",
    title: "Skyline Penthouse",
    hood: "Downtown LA",
    beds: 2,
    baths: 2.5,
    sqft: "1,960",
    type: "Condo",
  },
];

const TYPES = ["All types", "Single-family", "Condo"];
const HOODS = ["All neighborhoods", "Beverly Hills", "Malibu", "Santa Monica", "Downtown LA"];
const PRICES = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under $3M", min: 0, max: 3_000_000 },
  { label: "$3M – $5M", min: 3_000_000, max: 5_000_000 },
  { label: "$5M+", min: 5_000_000, max: Infinity },
];

const BUY_STEPS = [
  {
    number: 1,
    title: "Finding Your Agent",
    subtitle: "Start with the right fit",
    body: [
      "Buying property is one of the biggest financial decisions you'll make, and the agent guiding you through it matters more than most people realize. The right fit understands the neighborhoods and submarkets you're targeting, negotiates with confidence, and knows how to surface opportunities that never make it to the open market. For buyers considering a fixer, a development play, or a property that needs renovation or entitlement work, working with someone who has real hands-on development experience makes a meaningful difference — not just in finding the right property, but in knowing what it will actually take to bring it to its full potential.",
      "With over a decade of experience across land acquisition, investment sales, and development, I bring a builder's perspective to every transaction — not just a broker's. That means I'm not only helping you find a property that checks the boxes on paper; I'm helping you understand what you're really buying, what it's worth today, and what it could be worth tomorrow. From our very first conversation, my goal is to understand your priorities, your timeline, and what 'the right property' actually means for you, so every recommendation I make going forward is grounded in your specific goals rather than a generic search.",
    ],
    image: "/images/steps/1-step.webp",
  },
  {
    number: 2,
    title: "Getting Pre-Approved",
    subtitle: "Know your numbers before you look",
    body: [
      "Before touring a single property, it pays to understand exactly what you can afford and how a lender views your financial picture. A strong pre-approval does more than set a budget — it signals to sellers that you're a serious, qualified buyer, which matters enormously in competitive situations where multiple offers are common. Buyers who skip this step often fall in love with a property only to find out later that their financing doesn't line up, and that kind of setback is entirely avoidable with the right preparation up front.",
      "I work closely with a network of trusted lenders and can help connect you with financing options suited to your goals, whether that's a straightforward conventional purchase or something more complex like bridge financing or a 1031 exchange. Getting pre-approved early also gives us a clearer picture of your true purchasing power, which shapes how we approach the search from day one — so you're not wasting time on properties that don't actually fit, and you're ready to move quickly the moment the right one appears.",
    ],
    image: "/images/steps/2-step.webp",
  },
  {
    number: 3,
    title: "Touring Properties",
    subtitle: "Look with a strategic eye",
    body: [
      "Once your criteria and budget are clear, the search begins in earnest. This is where the real work happens — sorting through listings, scheduling tours, and narrowing in on what actually fits your goals versus what simply looks good in photos. I look beyond the surface of a listing, evaluating lot condition, zoning, potential upside, and any red flags that could affect value or timeline down the road, so you're making decisions with a full picture rather than a partial one.",
      "Whether you're searching for a primary residence, an investment property, or raw land with development potential, every tour is an opportunity to sharpen what you're really looking for. I encourage an open mind early in the process — sometimes the property that ends up being the right one doesn't match the original wish list exactly, and touring enough properties with a discerning eye is often what reveals that. I'm with you at every showing, asking the questions that matter and flagging anything worth a second look before you get too attached.",
    ],
    image: "/images/steps/3-step.webp",
  },
  {
    number: 4,
    title: "Making an Offer",
    subtitle: "Position yourself to win",
    body: [
      "A strong offer is about more than price. Terms, contingencies, timing, and how the offer is presented can all influence whether it's accepted — especially in a competitive market where sellers may be fielding multiple offers at once. I craft offers designed to stand out to sellers while still protecting your interests, drawing on years of negotiation experience to find the right balance between assertiveness and risk.",
      "This is often the moment where preparation pays off most visibly. A well-structured offer tells the seller a story — that you're serious, qualified, and easy to work with — and that story can matter just as much as the number attached to it. I take the time to understand what each seller is likely prioritizing, whether that's speed, certainty, or flexibility on move-out timing, and structure your offer accordingly so it has the best possible chance of getting accepted without you overpaying or taking on unnecessary risk.",
    ],
    image: "/images/steps/4-step.webp",
  },
  {
    number: 5,
    title: "Opening Escrow",
    subtitle: "The transaction officially begins",
    body: [
      "Once your offer is accepted, escrow opens and the clock starts on inspections, disclosures, and contingency deadlines. This stage requires careful coordination — missing a deadline or overlooking a disclosure can create real complications later, and the details here matter far more than most buyers realize going in. It's also the point where the transaction starts to feel real, and having steady guidance through the process makes a meaningful difference in how smooth it feels.",
      "I stay closely involved throughout escrow, managing timelines and communicating with all parties — your lender, the escrow officer, the listing agent, and any inspectors or contractors involved — so nothing falls through the cracks. My job during this stage is to keep the process moving forward while giving you clear visibility into what's happening and what's coming next, so there are no surprises along the way.",
    ],
    image: "/images/steps/5-step.webp",
  },
  {
    number: 6,
    title: "Finalizing Financing",
    subtitle: "Lock in your loan",
    body: [
      "With inspections and disclosures underway, your lender moves toward final loan approval. This is often where deals hit friction — appraisal issues, underwriting requests, or last-minute documentation needs can all slow things down, and buyers who aren't prepared for this stage sometimes find it the most stressful part of the entire process. Staying ahead of these details is one of the most valuable things I can do for you at this point.",
      "I coordinate directly with your lender and escrow officer to keep financing on track and flag potential issues before they become obstacles. If an appraisal comes in lower than expected or underwriting requests additional documentation, I help you navigate the response quickly so momentum isn't lost. The goal throughout this stage is simple: keep everything moving so that by the time we reach closing, financing is a formality rather than a scramble.",
    ],
    image: "/images/steps/6-step.webp",
  },
  {
    number: 7,
    title: "Closing Day",
    subtitle: "From contract to keys",
    body: [
      "The final walkthrough, the last round of paperwork, and then — the property is yours. Closing day is the culmination of everything that came before it, and after weeks of coordination, negotiation, and careful attention to detail, it's genuinely one of the most rewarding parts of this work for me.",
      "I make sure every detail is accounted for so the transition is smooth and stress-free, from confirming the final walkthrough goes well to making sure funds, signatures, and keys all come together without a hitch. And even after closing, I remain a resource — whether that's a question about the property down the line or a referral for a trusted contractor, my involvement doesn't end the moment the deal closes.",
    ],
    image: "/images/steps/7-step.webp",
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
    "Finding Your Agent": ["Finding Your", "Agent"],
    "Getting Pre-Approved": ["Getting", "Pre-Approved"],
    "Touring Properties": ["Touring", "Properties"],
    "Making an Offer": ["Making an", "Offer"],
    "Opening Escrow": ["Opening", "Escrow"],
    "Finalizing Financing": ["Finalizing", "Financing"],
    "Closing Day": ["Closing", "Day"],
  };

  return customLabels[title] ?? [title];
};

function toNumber(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function BuyPage() {
  const [type, setType] = useState(TYPES[0]!);
  const [hood, setHood] = useState(HOODS[0]!);
  const [price, setPrice] = useState(PRICES[0]!.label);
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = BUY_STEPS[activeStep];
  const paragraphs = normalizeParagraphs(currentStep.body);

  const filtered = useMemo(() => {
    const band = PRICES.find((p) => p.label === price)!;
    return LISTINGS.filter(
      (l) =>
        (type === TYPES[0] || l.type === type) &&
        (hood === HOODS[0] || l.hood === hood) &&
        toNumber(l.price) >= band.min &&
        toNumber(l.price) <= band.max,
    );
  }, [type, hood, price]);

  const selectCls =
    "h-12 w-full border border-border bg-card px-3 text-sm outline-none focus:border-accent";

  return (
    <>
      <PageHero
        eyebrow="Buy"
        title="Find Your Dream Home in Los Angeles"
        subtitle="Curated listings across Beverly Hills, Malibu, Santa Monica, Brentwood, Silver Lake and Downtown LA — plus quiet inventory that never reaches the MLS."
      />

      <section className="border-y border-border bg-[#f6f6f6] text-[#1a1a1a]">
        <div className="mx-auto max-w-6xl px-3 py-0 sm:px-6">
          <div className="flex items-center justify-between border-b border-[#d9d5d0] bg-[#f6f6f6] px-4 py-2 sm:px-6">
            {BUY_STEPS.map((step, index) => {
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
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="h-[260px] w-full max-w-[420px] object-cover shadow-[0_18px_45px_rgba(0,0,0,0.04)] lg:h-[290px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 border border-border bg-secondary p-5 sm:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Property type
            </span>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectCls}>
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Neighborhood
            </span>
            <select value={hood} onChange={(e) => setHood(e.target.value)} className={selectCls}>
              {HOODS.map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Price
            </span>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className={selectCls}>
              {PRICES.map((p) => (
                <option key={p.label}>{p.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {filtered.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <article className="group h-full border border-border bg-card">
                <div className="overflow-hidden">
                  <img
                    src={l.img}
                    alt={`${l.title} in ${l.hood}, Los Angeles`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="font-serif text-2xl text-primary">{l.price}</p>
                  <h2 className="mt-1 text-base font-medium">{l.title}</h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {l.hood}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-5 border-t border-border pt-4 text-sm text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-accent" /> {l.beds} bd
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-accent" /> {l.baths} ba
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Maximize className="h-4 w-4 text-accent" /> {l.sqft} sq ft
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No sample listings match those filters — Rachel has additional inventory available on
            request.
          </p>
        ) : null}
      </section>

      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionTitle
            eyebrow="Off-market"
            title="A third of Rachel's transactions never hit the MLS."
            intro="Many LA sellers list privately to protect their privacy. Buyers working with Rachel see those homes first — often before any public marketing begins."
            center
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GoldButton to="/contact">Contact Rachel for a Private Showing</GoldButton>
            <OutlineButton to="/sell" className="text-primary">
              Selling instead?
            </OutlineButton>
          </div>
        </div>
      </section>
    </>
  );
}
