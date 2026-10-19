import type { Metadata } from "next";
import Image from "next/image";
import { JourneyTimeline } from "@/components/journey-timeline";
import { SectionHeading } from "@/components/section-heading";
import { ReassuranceStrip } from "@/components/join/reassurance-strip";
import { Timetable } from "@/components/join/timetable";
import { Pricing } from "@/components/join/pricing";
import { Comparison } from "@/components/join/comparison";
import { HowToJoin } from "@/components/join/how-to-join";
import { WhatToBring } from "@/components/join/what-to-bring";

export const metadata: Metadata = {
  title: "Join UCL Boxing — timetable, pricing and how to start",
  description:
    "From a free taster to the competition squad. See the weekly timetable, membership pricing and how to join UCL Boxing in 4 steps.",
};

export default function JoinPage() {
  return (
    <main className="flex-1">
      <div className="relative isolate overflow-hidden px-6 pt-12 pb-14 sm:pt-16 sm:pb-20">
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
        <div className="mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-heading text-6xl leading-[0.9] tracking-wide text-white text-balance sm:text-8xl">
            Your path in UCL Boxing
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75 text-pretty">
            Everyone starts in the same place. Here&apos;s how you go from your
            first session to fight night.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-20">
        <ReassuranceStrip />

        <section aria-labelledby="path-heading">
          <SectionHeading id="path-heading" eyebrow="Progression" title="Your path" />
          <div className="max-w-3xl">
            <JourneyTimeline />
          </div>
        </section>

        <Timetable />
        <Pricing />
        <Comparison />
        <HowToJoin />
        <WhatToBring />
      </div>
    </main>
  );
}
