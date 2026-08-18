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

function toNumber(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function BuyPage() {
  const [type, setType] = useState(TYPES[0]!);
  const [hood, setHood] = useState(HOODS[0]!);
  const [price, setPrice] = useState(PRICES[0]!.label);

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
