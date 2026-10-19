import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { comparison } from "@/lib/club-data";

type Column = (typeof comparison)["gym"];

function ComparisonColumn({ column, featured }: { column: Column; featured?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col p-6",
        featured ? "bg-primary/10" : "bg-white/[0.02]"
      )}
    >
      <h3
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.2em]",
          featured ? "text-primary" : "text-white/60"
        )}
      >
        {column.title}
      </h3>
      <p className="mt-2 font-heading text-4xl tracking-wide text-white">{column.price}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {column.points.map((point) => (
          <li key={point.label} className="flex items-center gap-2.5 text-white/85">
            {point.included ? (
              <Check className="size-5 shrink-0 text-emerald-400" aria-hidden="true" />
            ) : (
              <X className="size-5 shrink-0 text-primary" aria-hidden="true" />
            )}
            <span className="sr-only">{point.included ? "Yes:" : "No:"}</span>
            {point.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Comparison() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="overflow-hidden rounded-2xl border border-white/10 bg-card"
    >
      <h2 id="comparison-heading" className="sr-only">
        How we compare to a commercial gym
      </h2>
      <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
        <ComparisonColumn column={comparison.gym} />
        <ComparisonColumn column={comparison.club} featured />
      </div>
      <p className="border-t border-white/10 bg-primary px-6 py-4 text-center font-semibold text-primary-foreground text-balance">
        {comparison.callout}
      </p>
    </section>
  );
}
