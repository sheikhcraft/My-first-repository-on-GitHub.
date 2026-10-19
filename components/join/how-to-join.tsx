import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { club, externalLinkProps } from "@/lib/club-data";

const steps = [
  {
    title: "Come to a free taster",
    body: "Just turn up to a beginner or intermediate session.",
  },
  {
    title: "Get membership",
    body: "Buy it on the SU shop with your UCL login.",
    link: { href: club.suShop, label: "SU shop" },
  },
  {
    title: "Book your sessions",
    body: "Each session has 30 spaces, so book on the SU What\u2019s On page in advance.",
    link: { href: club.suWhatsOn, label: "SU What\u2019s On" },
  },
  {
    title: "Join the WhatsApp",
    body: "Session times, socials and club news land here first.",
    link: { href: club.whatsapp, label: "Join the WhatsApp" },
  },
];

export function HowToJoin() {
  return (
    <section aria-labelledby="how-to-join-heading">
      <SectionHeading id="how-to-join-heading" eyebrow="Get started" title="How to join in 4 steps" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col rounded-xl border border-white/10 bg-card p-5"
          >
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-2xl text-primary-foreground"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-1 flex-1 text-sm text-white/70 text-pretty">{step.body}</p>
            {step.link && (
              <a
                href={step.link.href}
                {...externalLinkProps}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {step.link.label}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
