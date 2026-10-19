import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/club-data";

export function Faq() {
  return (
    <section aria-labelledby="faq-heading">
      <SectionHeading id="faq-heading" eyebrow="FAQ" title="Common questions" />
      <Accordion className="rounded-xl border border-white/10 bg-card px-5">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question} className="border-white/10">
            <AccordionTrigger className="py-5 text-base font-semibold text-white hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/70">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
