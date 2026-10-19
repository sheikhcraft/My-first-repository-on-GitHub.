import { Camera, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export const whatsappButtonClass = cn(
  buttonVariants({ size: "lg" }),
  "h-14 w-full bg-whatsapp px-6 text-base font-semibold text-black hover:bg-whatsapp/90 [&_svg:not([class*='size-'])]:size-5"
);

export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(whatsappButtonClass, className)}
    >
      <MessageCircle data-icon="inline-start" aria-hidden="true" />
      Join the WhatsApp for session times
    </a>
  );
}

export function JoinLinks() {
  return (
    <section
      aria-labelledby="join-heading"
      className="rounded-2xl border border-white/10 bg-card p-6 sm:p-10"
    >
      <h2
        id="join-heading"
        className="font-heading text-5xl tracking-wide text-white sm:text-6xl"
      >
        Join us
      </h2>
      <p className="mt-2 text-white/75">
        Session times, socials and kit news all land in the group chat first.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton className="sm:w-auto sm:flex-1" />
        <a
          href={siteConfig.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-14 w-full px-6 text-base font-semibold sm:w-auto [&_svg:not([class*='size-'])]:size-5"
          )}
        >
          <Camera data-icon="inline-start" aria-hidden="true" />
          <span className="sr-only">Instagram: </span>@{siteConfig.instagramHandle}
        </a>
      </div>
    </section>
  );
}
