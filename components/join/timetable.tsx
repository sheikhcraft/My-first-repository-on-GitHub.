import { Clock, ExternalLink, Lock, MapPin, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import {
  club,
  externalLinkProps,
  schedule,
  type SessionLevel,
} from "@/lib/club-data";

const levelStyles: Record<SessionLevel, { label: string; className: string }> = {
  beginner: {
    label: "Beginner",
    className: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
  },
  intermediate: {
    label: "Intermediate",
    className: "border-amber-400/40 bg-amber-400/15 text-amber-300",
  },
  squad: {
    label: "Invite only",
    className: "border-primary/50 bg-primary/15 text-red-300",
  },
};

export function Timetable() {
  return (
    <section id="timetable" aria-labelledby="timetable-heading" className="scroll-mt-24">
      <SectionHeading
        id="timetable-heading"
        eyebrow="Weekly"
        title="Timetable"
        description="Book every session in advance on the SU website. Spaces go fast."
      />

      <div className="mb-6 rounded-xl border border-primary/50 bg-primary/10 p-4 text-sm text-white">
        <span className="font-semibold text-primary">New:</span>{" "}
        Women&apos;s-only boxing sessions for all levels. Check the{" "}
        <a
          href={club.whatsapp}
          {...externalLinkProps}
          className="font-semibold underline underline-offset-4 hover:text-primary"
        >
          WhatsApp
        </a>{" "}
        for times.
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {schedule.map((session) => {
          const level = levelStyles[session.level];
          const isSquad = session.level === "squad";
          return (
            <li
              key={`${session.day}-${session.time}`}
              className="flex flex-col rounded-xl border border-white/10 bg-card p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-3xl tracking-wide text-white">
                  {session.day}
                </h3>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
                    level.className
                  )}
                >
                  {isSquad && <Lock className="size-3" aria-hidden="true" />}
                  {level.label}
                </span>
              </div>
              <p className="mt-1 font-semibold text-white">{session.type}</p>
              <dl className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Time</dt>
                  <Clock className="size-4 shrink-0" aria-hidden="true" />
                  <dd>{session.time}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Venue</dt>
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  <dd>{session.venue}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Capacity</dt>
                  <Users className="size-4 shrink-0" aria-hidden="true" />
                  <dd>{session.capacity} spaces</dd>
                </div>
              </dl>
              {!isSquad && (
                <a
                  href={club.suWhatsOn}
                  {...externalLinkProps}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Book on the SU website
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
