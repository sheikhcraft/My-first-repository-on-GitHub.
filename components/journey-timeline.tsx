import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Step = {
  id?: string;
  emoji: string;
  level: string;
  title: string;
  description: string;
  badge: string;
  highlighted?: boolean;
};

const steps: Step[] = [
  {
    emoji: "👋",
    level: "Taster",
    title: "Where it starts",
    description:
      "Drop into any beginner or intermediate session. No kit, no experience.",
    badge: "Always free",
    highlighted: true,
  },
  {
    emoji: "🥊",
    level: "Beginner",
    title: "Get to Know",
    description: "Learn the punches, footwork and fundamentals.",
    badge: "Membership",
  },
  {
    emoji: "💪",
    level: "Intermediate",
    title: "Get to Grow",
    description: "Build fitness, cardio and strength.",
    badge: "Membership",
  },
  {
    id: "squad",
    emoji: "🔥",
    level: "Squad",
    title: "Get to Show",
    description:
      "Train hard, spar with the team, compete in inter-uni sessions.",
    badge: "Invite only",
  },
  {
    emoji: "🏆",
    level: "Competition",
    title: "Get in the Ring",
    description: "Get licensed and fight in front of hundreds.",
    badge: "Invite only",
  },
];

export function JourneyTimeline() {
  return (
    <ol className="relative flex flex-col gap-6">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li
            key={step.level}
            id={step.id}
            className="relative flex scroll-mt-24 gap-4 sm:gap-6"
          >
            <div className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className={cn(
                  "z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 text-xl sm:size-14 sm:text-2xl",
                  step.highlighted
                    ? "border-primary bg-primary shadow-lg shadow-primary/40"
                    : "border-white/20 bg-card"
                )}
              >
                {step.emoji}
              </span>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-12 bottom-[-1.5rem] w-0.5 sm:top-14",
                    step.highlighted
                      ? "bg-gradient-to-b from-primary to-white/15"
                      : "bg-white/15"
                  )}
                />
              )}
            </div>

            <article
              className={cn(
                "flex-1 rounded-xl border p-5 sm:p-6",
                step.highlighted
                  ? "border-primary bg-primary/10 ring-1 ring-primary/40"
                  : "border-white/10 bg-card"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  {step.level}
                </p>
                <Badge
                  className={cn(
                    "uppercase tracking-wide",
                    step.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "border-white/20 bg-transparent text-white/80"
                  )}
                  variant={step.highlighted ? "default" : "outline"}
                >
                  {step.badge}
                </Badge>
              </div>
              <h3 className="mt-2 font-heading text-3xl tracking-wide text-white sm:text-4xl">
                {step.title}
              </h3>
              <p className="mt-1 text-white/75 text-pretty">
                {step.description}
              </p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
