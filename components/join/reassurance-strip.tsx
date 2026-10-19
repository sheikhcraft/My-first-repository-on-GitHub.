import { Dumbbell, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Never boxed? Perfect.",
    body: "Beginner and intermediate sessions are for people who\u2019ve never boxed or competed.",
  },
  {
    icon: ShieldCheck,
    title: "No sparring unless you want it",
    body: "Beginner and intermediate sessions are skill practice only. Sparring is squad-only.",
  },
  {
    icon: Dumbbell,
    title: "Train your way",
    body: "Push hard or just train for fun and fitness.",
  },
];

export function ReassuranceStrip() {
  return (
    <section aria-label="What to expect" className="grid gap-4 md:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <article
          key={title}
          className="rounded-xl border border-white/10 bg-card p-5"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70 text-pretty">{body}</p>
        </article>
      ))}
    </section>
  );
}
