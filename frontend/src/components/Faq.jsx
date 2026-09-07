import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Overline, GoldRule } from "@/components/Motion";

const Faq = ({ faqs, heading = "Frequently Asked Questions" }) => (
  <section data-testid="faq-section" className="mt-16">
    <Overline>Questions</Overline>
    <GoldRule className="mt-3 w-16" />
    <h2 className="mt-4 font-serif text-2xl sm:text-3xl text-navy">{heading}</h2>
    <Accordion type="single" collapsible className="mt-8">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-navy/10">
          <AccordionTrigger
            data-testid={`faq-trigger-${i}`}
            className="py-5 text-left font-serif text-lg text-navy hover:text-navy-light hover:no-underline"
          >
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-charcoal/85">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default Faq;
