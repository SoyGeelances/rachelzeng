import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const CONTACT = {
  name: "Rachel Zeng",
  brokerage: "Metro Assets Inc.",
  phone: "(909) 525-0888",
  phoneHref: "tel:+19095250888",
  email: "rachelzeng730@gmail.com",
  dre: "DRE 02246814",
  brokerageDre: "DRE 01982764",
  address: "1211 Center Court Drive, Covina, CA 91724",
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{children}</p>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function GoldButton({
  to,
  href,
  children,
  type,
  className,
  onClick,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    "inline-flex h-12 items-center justify-center gap-2 bg-accent px-7 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:brightness-110 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    className,
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function OutlineButton({
  to,
  href,
  children,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = cn(
    "inline-flex h-12 items-center justify-center gap-2 border border-current px-7 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground",
    className,
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

export function StatGrid({
  items,
  tone = "light",
}: {
  items: { value: string; label: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px md:grid-cols-4",
        tone === "dark" ? "bg-primary-foreground/15" : "bg-border",
      )}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className={cn("px-4 py-9 text-center", tone === "dark" ? "bg-primary" : "bg-card")}
        >
          <p className="font-serif text-3xl text-accent sm:text-4xl">{s.value}</p>
          <p
            className={cn(
              "mt-2 text-[11px] uppercase tracking-[0.18em]",
              tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}

export const TESTIMONIALS = [
  {
    quote:
      "Rachel sold our Brentwood home for $180K over asking in nine days. Her pricing strategy and pre-market outreach were flawless.",
    name: "Michael & Anne T.",
    place: "Brentwood · Sold $3.4M",
  },
  {
    quote:
      "We competed against four offers in Silver Lake and still won — without overpaying. Rachel knew the listing agent and structured the terms perfectly.",
    name: "Sofia R.",
    place: "Silver Lake · Bought $1.85M",
  },
  {
    quote:
      "Discreet, precise, and always reachable. She handled staging, contractors and the entire escrow while we were overseas.",
    name: "David L.",
    place: "Pacific Palisades · Sold $6.2M",
  },
];

export const METRICS = [
  { value: "15+", label: "Years in LA real estate" },
  { value: "$750M+", label: "Career sales volume" },
  { value: "Top 1%", label: "Of LA agents" },
  { value: "12 days", label: "Average days on market" },
];
