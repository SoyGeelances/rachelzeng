import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, GoldButton, PageHero } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rachel Zeng | Los Angeles Realtor" },
      {
        name: "description",
        content:
          "Schedule a consultation with Rachel Zeng. Call (310) 555-1234 or send a message about buying or selling in Los Angeles.",
      },
      { property: "og:title", content: "Work With Rachel — Contact" },
      {
        property: "og:description",
        content: "Schedule a private consultation about buying or selling in Los Angeles.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const inputCls =
    "h-12 w-full border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next["name"] = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next["email"] = "A valid email is required.";
    if (form.phone && !/^[0-9+()\-.\s]{7,20}$/.test(form.phone.trim()))
      next["phone"] = "Please enter a valid phone number.";
    if (!form.message.trim()) next["message"] = "Please tell Rachel how she can help.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Work With Rachel"
        subtitle="Whether you're buying, selling or simply exploring the Los Angeles market, every conversation starts with Rachel directly."
      >
        <GoldButton href={CONTACT.phoneHref}>Call Now: {CONTACT.phone}</GoldButton>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <form noValidate onSubmit={submit} className="space-y-5">
          <h2 className="font-serif text-2xl">Send a message</h2>
          <div>
            <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Name *
            </label>
            <input
              id="name"
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputCls}
              placeholder="Your full name"
            />
            {errors["name"] ? <p className="mt-1 text-xs text-destructive">{errors["name"]}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputCls}
              placeholder="you@email.com"
            />
            {errors["email"] ? <p className="mt-1 text-xs text-destructive">{errors["email"]}</p> : null}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              maxLength={20}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputCls}
              placeholder="(310) 555-0000"
            />
            {errors["phone"] ? <p className="mt-1 text-xs text-destructive">{errors["phone"]}</p> : null}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-border bg-card p-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
              placeholder="Tell Rachel about your timeline, neighborhood and goals."
            />
            {errors["message"] ? (
              <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>
            ) : null}
          </div>
          <GoldButton type="submit">Schedule a Consultation</GoldButton>
          {sent ? (
            <p className="flex items-center gap-2 text-sm text-accent">
              <Check className="h-4 w-4" /> Thank you — Rachel will reply within one business day.
            </p>
          ) : null}
        </form>

        <div>
          <h2 className="font-serif text-2xl">Contact details</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={CONTACT.phoneHref} className="hover:text-accent">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {CONTACT.address}
            </li>
          </ul>

          <div
            role="img"
            aria-label="Map of Rachel Zeng's Beverly Hills office location"
            className="mt-8 flex aspect-4/3 w-full items-center justify-center border border-border bg-secondary"
          >
            <div className="text-center">
              <MapPin className="mx-auto h-7 w-7 text-accent" />
              <p className="mt-3 text-sm font-medium">Beverly Hills Office</p>
              <p className="mt-1 text-xs text-muted-foreground">Map coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
