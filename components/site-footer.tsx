import { Camera, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { club, externalLinkProps } from "@/lib/club-data";

const linkClass =
  "inline-flex items-center gap-1.5 underline-offset-4 hover:text-white hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-white/70 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-heading text-2xl tracking-wide text-white">
            {club.name} <span className="text-primary">·</span>{" "}
            <span className="text-white/70">{club.tagline}</span>
          </p>
          <address className="inline-flex items-start gap-1.5 not-italic">
            <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            {club.venue}
          </address>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          <li>
            <a href={club.instagram} {...externalLinkProps} className={linkClass}>
              <Camera className="size-3.5" aria-hidden="true" />
              Instagram {club.instagramHandle}
            </a>
          </li>
          <li>
            <a href={club.whatsapp} {...externalLinkProps} className={linkClass}>
              <MessageCircle className="size-3.5" aria-hidden="true" />
              WhatsApp community
            </a>
          </li>
          <li>
            <a href={club.suPage} {...externalLinkProps} className={linkClass}>
              <ExternalLink className="size-3.5" aria-hidden="true" />
              UCL Students&apos; Union club page
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
