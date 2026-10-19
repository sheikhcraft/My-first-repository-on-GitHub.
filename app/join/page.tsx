import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JourneyTimeline } from "@/components/journey-timeline";
import { JoinLinks, WhatsAppButton } from "@/components/join-links";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Your path in UCL Boxing",
  description:
    "From a free taster to the competition squad — see how you progress at UCL Boxing and join the WhatsApp for session times.",
};

export default function JoinPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden px-6 pt-8 pb-14 sm:pt-10 sm:pb-20">
        <Image
          src="/gym-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background"
        />
        <div className="mx-auto max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            UCL Boxing
          </Link>
          <h1 className="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-white text-balance sm:text-8xl">
            Your path in UCL Boxing
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75 text-pretty">
            Everyone starts in the same place. Here&apos;s how you go from your
            first session to fight night.
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 pb-16">
        <section aria-label="Progression timeline">
          <JourneyTimeline />
        </section>
        <JoinLinks />
      </main>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/90 p-4 backdrop-blur sm:hidden">
        <WhatsAppButton />
      </div>
    </>
  );
}
