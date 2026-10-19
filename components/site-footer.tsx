import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 pt-10 pb-28 sm:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-start sm:justify-between">
        <p className="font-heading text-2xl tracking-wide text-white">
          {siteConfig.name}
        </p>
        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={siteConfig.suClubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white underline-offset-4 hover:underline"
          >
            UCL Students&apos; Union club page
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
          <address className="inline-flex items-center gap-1.5 not-italic">
            <MapPin className="size-3.5" aria-hidden="true" />
            {siteConfig.venueAddress}
          </address>
        </div>
      </div>
    </footer>
  );
}
