import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "What is Winds?",
      a: "Winds is a Blade Ball toolkit with controls for parrying, spam, detection alerts, visual options, and client customization."
    },
    {
      q: "What game does Winds support?",
      a: "Blade Ball is the primary officially presented game. Other games are currently being tested for stability and may receive support later."
    },
    {
      q: "Does Winds require a key?",
      a: "Yes. The current free script requires a key to run."
    },
    {
      q: "How long do the keys last?",
      a: "There is currently a 12-hour key option (via Linkvertise) and a 6-hour key option (via Lootlabs)."
    },
    {
      q: "Where can I purchase Winds?",
      a: "Use the listed official payment links in the Pricing section (SellAuth or FluxMarket)."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Winds.</p>
        </div>

        <Accordion type="single" collapsible className="w-full text-center">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base sm:text-lg text-center justify-center gap-3">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-center">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
