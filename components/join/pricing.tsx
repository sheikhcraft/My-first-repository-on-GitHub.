import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { club, externalLinkProps, pricing, sessionFee } from "@/lib/club-data";

export function Pricing() {
  return (
    <section aria-labelledby="pricing-heading">
      <SectionHeading id="pricing-heading" eyebrow="Membership" title="Pricing" />

      <ul className="grid gap-4 md:grid-cols-3">
        {pricing.map((tier) => (
          <li
            key={tier.name}
            className={cn(
              "relative flex flex-col rounded-xl border p-6",
              tier.recommended
                ? "border-primary bg-primary/10 ring-1 ring-primary/40"
                : "border-white/10 bg-card"
            )}
          >
            {tier.recommended && (
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                Recommended
              </span>
            )}
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {tier.name}
            </h3>
            <p className="mt-3 font-heading text-6xl leading-none tracking-wide text-white">
              {tier.price}
            </p>
            <p className="mt-3 text-sm text-white/70">{tier.note}</p>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>Plus {sessionFee}.</p>
        <a
          href={club.participationFund}
          {...externalLinkProps}
          className="inline-flex items-center gap-1.5 font-medium text-white underline-offset-4 hover:text-primary hover:underline"
        >
          Struggling with costs? The SU Participation Fund can help
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
