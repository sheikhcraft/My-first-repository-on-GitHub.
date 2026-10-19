import { Clock, MapPin, Navigation } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { club, externalLinkProps } from "@/lib/club-data";

export function FindUs() {
  const query = encodeURIComponent(club.venue);

  return (
    <section
      aria-labelledby="find-us-heading"
      className="grid overflow-hidden rounded-2xl border border-white/10 bg-card md:grid-cols-2"
    >
      <div className="flex flex-col p-6 sm:p-8">
        <h2 id="find-us-heading" className="font-heading text-4xl tracking-wide text-white sm:text-5xl">
          Find us
        </h2>
        <address className="mt-4 flex items-start gap-2 not-italic text-white/85">
          <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          {club.venue}
        </address>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          {...externalLinkProps}
          className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 self-start px-6 font-semibold hover:bg-primary/90")}
        >
          <Navigation data-icon="inline-start" aria-hidden="true" />
          Get directions
        </a>
        <p className="mt-auto flex items-start gap-2 border-t border-white/10 pt-5 text-sm text-white/70 max-md:mt-8">
          <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Arriving in London after the taster period? We can arrange a one-off taster. Just message us.
          </span>
        </p>
      </div>
      <iframe
        title={`Map of ${club.venue}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full border-0 grayscale-[0.4] md:h-full md:min-h-80"
      />
    </section>
  );
}
