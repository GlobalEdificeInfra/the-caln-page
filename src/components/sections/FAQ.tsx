import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import creamBg from "@/assets/Cream BG.png";

const faqs = [
  {
    question: "What Is The Total Land Area Of The Clan By Global Edifice?",
    answer: "The total area of The Clan is 3.5 Acres."
  },
  {
    question: "Where Is The Clan Located?",
    answer: "It is located near Abhaya Circle, Sarjapur - close to major IT Hubs, and proximity to nearby Universities, Cafes and Shopping malls."
  },
  {
    question: "What Are The Key Amenities At The Clan?",
    answer: "The Clan offers 30+ curated amenities including a clubhouse, swimming pool, gymnasium, children's play area, landscaped gardens, indoor games room, and 24/7 security with CCTV surveillance."
  },
  {
    question: "How Many Apartments Are There In The Clan By Global Edifice?",
    answer: "The Clan has luxurious yet affordable 257 units."
  },
  {
    question: "What Type Of Configurations Are There In The Clan?",
    answer: "2BED: 1131 - 1451 sq.ft and 3BED: 1244 - 1826 sq.ft thoughtfully planned units."
  },
  {
    question: "What Is The RERA Registration Number Of The Clan By Global Edifice?",
    answer: "The RERA Registration number of The Clan is PRM/KA/1251/308/PR/091025/008153"
  },
  {
    question: "What Makes The Clan By Global Edifice Stand Out?",
    answer: "The Clan is more than a collection of homes, it's a harmony of space, soul, and belonging. Here, walls don't just divide, they define privacy, balconies don't open to views, they open to life. Spread across 60% open spaces, every corner breathes freedom and every path connects hearts. Indulge in 30+ Curated Amenities and live the extraordinary life."
  }
];

const FAQ = () => {
  return (
    <section
      className="py-12 md:py-24 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-green-800">
            YOUR QUERIES, <span className="text-luxury-gold">GRACEFULLY ANSWERED</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/30 bg-transparent px-2 md:px-4"
            >
              <AccordionTrigger className="font-serif text-sm sm:text-base md:text-lg text-left hover:text-green-800 py-4 md:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

