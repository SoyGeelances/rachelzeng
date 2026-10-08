import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, GoldButton, PageHero } from "@/components/site";
import { WEBFORMS_CONFIG, hasWebformsConfig } from "@/lib/webforms";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rachel Zeng | Los Angeles Realtor" },
      {
        name: "description",
        content:
          "Schedule a consultation with Rachel Zeng at Metro Assets Inc. Call (909) 525-0888 or email rachelzeng730@gmail.com.",
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
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${WEBFORMS_CONFIG.scriptUrl}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = WEBFORMS_CONFIG.scriptUrl;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const inputCls =
    "h-12 w-full border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-accent";

  async function submit(e: FormEvent<HTMLFormElement>) {
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
      const formEl = e.currentTarget;
      const captchaField = formEl.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        'textarea[name="h-captcha-response"], input[name="h-captcha-response"]',
      );
      if (!captchaField || !captchaField.value.trim()) {
        setSent(false);
        setErrors({ message: "Please complete the captcha before sending." });
        return;
      }

      const payload = new FormData(formEl);
      payload.set("access_key", WEBFORMS_CONFIG.accessKey);
      payload.set("h-captcha-response", captchaField.value.trim());
      payload.set("subject", "Rachel Zeng contact form");
      payload.set("from_name", "Rachel Zeng website");
      payload.set("replyto", String(form.email).trim());
      payload.set("page_url", window.location.href);

      try {
        if (hasWebformsConfig) {
          const response = await fetch(WEBFORMS_CONFIG.endpoint, {
            method: "POST",
            body: payload,
          });
          const result = (await response.json()) as { success?: boolean };
          if (!response.ok || !result.success) {
            throw new Error("Web3Forms submission failed");
          }
        }

        setSent(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        formEl.reset();
      } catch {
        setSent(false);
        setErrors({ message: "We could not send your message right now. Please call or email Rachel directly." });
      }
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
        <form ref={formRef} noValidate onSubmit={submit} className="space-y-5" method="POST">
          <h2 className="font-serif text-2xl">Send a message</h2>
          <input type="hidden" name="access_key" value={WEBFORMS_CONFIG.accessKey} />
          <input type="hidden" name="source" value="rachelzeng.com/contact" />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Name *
            </label>
            <input
              id="name"
              name="name"
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
              name="email"
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
              name="phone"
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
              name="message"
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
          <div className="h-captcha" data-captcha="true" data-theme="light" aria-label="Security check" />
          <GoldButton type="submit">Schedule a Consultation</GoldButton>
          {sent ? (
            <p className="flex items-center gap-2 text-sm text-accent">
              <Check className="h-4 w-4" /> Thank you.
            </p>
          ) : null}
        </form>

        <div>
          <h2 className="font-serif text-2xl">Contact details</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Agent</p>
              <p className="mt-1 font-medium text-foreground">{CONTACT.name}</p>
            </li>
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
            <li>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">DRE</p>
              <p className="mt-1 text-foreground">{CONTACT.dre}</p>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-foreground">{CONTACT.brokerage}</p>
                <p>{CONTACT.address}</p>
                <p className="mt-1">{CONTACT.brokerageDre}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden border border-border bg-secondary">
            <iframe
              title="Rachel Zeng office map"
              src="https://www.google.com/maps?q=1211+Center+Court+Drive,+Covina,+CA+91724&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-4/3 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
