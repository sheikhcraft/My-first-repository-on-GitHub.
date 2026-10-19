import { Check, Info } from "lucide-react";

const items = [
  "Comfortable sportswear",
  "Water",
  "Boxing gloves, if you have them",
];

export function WhatToBring() {
  return (
    <section
      aria-labelledby="bring-heading"
      className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
    >
      <h2 id="bring-heading" className="font-heading text-4xl tracking-wide text-white sm:text-5xl">
        What to bring
      </h2>
      <ul className="mt-5 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-white/85">
            <Check className="size-5 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/70">
        <p className="flex items-start gap-2">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="font-semibold text-white">Hand wraps are required</span> after the taster period.
          </span>
        </p>
        <p className="pl-6 font-semibold text-white">Nothing needed for your taster.</p>
      </div>
    </section>
  );
}
