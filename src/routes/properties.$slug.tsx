import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Maximize, Tag } from "lucide-react";

import { CONTACT } from "@/components/site";
import { LAND_LISTINGS } from "@/data/land-listings";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const listing = LAND_LISTINGS.find((item) => item.id === params.slug);
    if (!listing) {
      throw notFound();
    }
    return { listing };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Property unavailable | Rachel Zeng" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { listing } = loaderData;
    const title = `${listing.title}, ${listing.location} | Rachel Zeng`;
    const description = `${listing.acres} acres of vacant land in ${listing.location}, ${listing.county}. ${listing.price}.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: listing.images[0] },
      ],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { listing } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const inquirySubject = encodeURIComponent(
    `Property inquiry — ${listing.title}`,
  );

  const facts = [
    { label: "Address", value: listing.title },
    { label: "Location", value: listing.location },
    { label: "County", value: listing.county },
    { label: "Lot size", value: `${listing.acres} acres` },
    { label: "Status", value: listing.status },
    { label: "Price", value: listing.price },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Link
        to="/buy"
        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        All listings
      </Link>

      <header className="mt-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
          {listing.county}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          {listing.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {listing.location}, {listing.county}
          </span>
          <span className="inline-flex items-center gap-2">
            <Maximize className="h-4 w-4 text-accent" aria-hidden="true" />
            {listing.acres} acres
          </span>
          <span className="inline-flex items-center gap-2">
            <Tag className="h-4 w-4 text-accent" aria-hidden="true" />
            {listing.price}
          </span>
        </div>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <section>
          <div className="aspect-4/3 overflow-hidden bg-secondary">
            <img
              src={listing.images[activeImage]}
              alt={`${listing.title} — image ${activeImage + 1}`}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          {listing.images.length > 1 && (
            <ul className="mt-3 grid grid-cols-3 gap-3">
              {listing.images.map((image: string, index: number) => (
                <li key={image}>
                  <button
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === activeImage}
                    className={`block aspect-4/3 w-full overflow-hidden border transition-opacity ${
                      index === activeImage
                        ? "border-accent"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <h2 className="mt-12 font-serif text-2xl text-primary">
            About this parcel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Vacant land offering {listing.acres} acres in {listing.location},{" "}
            {listing.county}. Contact Rachel for current parcel information and
            availability.
          </p>

          <h2 className="mt-10 font-serif text-2xl text-primary">
            Property details
          </h2>
          <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-4 border-b border-border py-3"
              >
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="text-right text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-border bg-card p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
              {listing.status}
            </p>
            <h2 className="mt-3 font-serif text-2xl text-primary">
              {listing.price}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ask about this parcel, request current pricing, or get more
              information.
            </p>
            <a
              href={`mailto:${CONTACT.email}?subject=${inquirySubject}`}
              className="mt-6 inline-flex h-12 w-full items-center justify-center bg-accent px-6 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-foreground transition hover:brightness-110"
            >
              Enquire about this property
            </a>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 block text-center text-sm text-muted-foreground hover:text-accent"
            >
              Call Rachel: {CONTACT.phone}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
