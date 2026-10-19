import type { Metadata } from "next";
import { ContactCards } from "@/components/contact/contact-cards";
import { TeamGrid } from "@/components/contact/team-grid";
import { FindUs } from "@/components/contact/find-us";
import { Faq } from "@/components/contact/faq";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact UCL Boxing",
  description:
    "Questions about training, membership or competing? Message UCL Boxing by email, Instagram or WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-6 pt-12 pb-20 sm:pt-16">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-heading text-6xl leading-[0.9] tracking-wide text-white text-balance sm:text-8xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75 text-pretty">
            Questions about training, membership or competing? Message us. We&apos;re friendly.
          </p>
        </div>
        <ContactCards />
      </div>
      <TeamGrid />
      <FindUs />
      <Faq />
      <ContactForm />
    </main>
  );
}
