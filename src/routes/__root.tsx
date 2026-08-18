import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Check } from "lucide-react";

import { CONTACT } from "@/components/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Keep the app client-side only; no SSR hooks are needed.
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-lg leading-tight tracking-tight sm:text-xl">
            <div className="mx-auto max-h-[60px] w-full">
              <img src="/images/logo-rachel-zeng.webp" alt="logo Rachel Zeng" className="h-full w-auto max-h-[60px] object-contain" />
            </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground after:w-full" }}
              className="relative text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-foreground hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/60 py-3 text-sm uppercase tracking-[0.16em] text-muted-foreground last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Rachel Zeng Real Estate</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            {CONTACT.address}
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            <a href={CONTACT.phoneHref} className="hover:text-accent">
              {CONTACT.phone}
            </a>
            <br />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
              {CONTACT.email}
            </a>
          </p>
          <Link
            to="/sell"
            className="mt-4 inline-block text-sm text-accent underline underline-offset-4"
          >
            Find out what your property is worth
          </Link>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
            Sign up for my newsletter
          </p>
          <p className="mt-3 text-sm text-primary-foreground/70">
            LA market updates, off-market listings and pricing trends — once a month.
          </p>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const value = email.trim();
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
                setError("Please enter a valid email address.");
                setDone(false);
                return;
              }
              setError("");
              setDone(true);
              setEmail("");
            }}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              maxLength={255}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email address"
              className="h-11 flex-1 border border-primary-foreground/25 bg-transparent px-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/45 focus:border-accent"
            />
            <button
              type="submit"
              className="h-11 bg-accent px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-all hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
          {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
          {done ? (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-accent">
              <Check className="h-3.5 w-3.5" /> You're subscribed.
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl space-y-2 px-6 py-6 text-[11px] leading-relaxed text-primary-foreground/50">
          <p>
            Information deemed reliable but not guaranteed. Sample listings and statistics are for
            demonstration purposes only. Equal Housing Opportunity. DRE #02034567. Sotheby's
            International Realty affiliate.
          </p>
          <p>© {new Date().getFullYear()} Rachel Zeng Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
