import { UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { committee } from "@/lib/club-data";

export function TeamGrid() {
  return (
    <section aria-labelledby="team-heading">
      <SectionHeading id="team-heading" eyebrow="Committee" title="Meet the team" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {committee.map((member) => {
          const isPlaceholder = !member.name;
          return (
            <li
              key={member.role}
              className={cn(
                "flex gap-4 rounded-xl border p-5",
                isPlaceholder ? "border-dashed border-white/15" : "border-white/10 bg-card"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-full font-heading text-2xl",
                  isPlaceholder ? "bg-white/5 text-white/40" : "bg-primary text-primary-foreground"
                )}
              >
                {member.name ? member.name.charAt(0) : <UserRound className="size-5" />}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {member.role}
                </p>
                <h3 className={cn("mt-1 font-semibold", isPlaceholder ? "text-white/50" : "text-white")}>
                  {member.name ?? "To be announced"}
                </h3>
                {member.bio && <p className="mt-1 text-sm text-white/70 text-pretty">{member.bio}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
