import { useState } from "react";
import greenBg from "@/assets/Green BG.jpg";
import locationMap from "@/assets/Clan-Location Map.png";

type Category = { title: string; items: string[] };
const categories: Category[] = [
  {
    title: "Institutes",
    items: [
      "Azim Premji University (3 Km)",
      "Endevour International School (5 Km)",
      "Champion International School (5 Km)",
      "Wellsprings Academy (5 Km)",
      "Vartika Montessori School (5 Km)",
      "Cambridge Innovative School (5 Km)",
      "Greenwood High Sarjapur (8 Km)",
      "TISB Academy School (9 Km)",
      "Oakridge International School (9 Km)",
      "Delhi Public School (DPS) (10 Km)",
      "Christ College of Science and Management (15 Km)",
    ],
  },
  {
    title: "IT Companies",
    items: [
      "Infosys Head Quarter (2 Km)",
      "Wipro (11 Km)",
      "RGA Tech Park (13 Km)",
      "Vaishnavi Tech Park (16 Km)",
      "RMZ Ecoworld (17 Km)",
      "TCS 360 Business Park (26 Km)",
    ],
  },
  {
    title: "Hospitals",
    items: [
      "Spandana Hospital (3 Km)",
      "Swastik Hospital (7 Km)",
      "Sparsh Hospital (8 Km)",
      "Natus Women & Children Hospital (12 Km)",
      "Mother Hood Hospital (16 Km)",
      "Manipal Hospital (17 Km)",
      "Narayana Multispeciality Hospital (21 Km)",
    ],
  },
  {
    title: "Shopping",
    items: ["D-Mart (2 Km)", "Forum The Prestige City (5 Km)"],
  },
];

const AccordionItem = ({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left py-4 md:py-5 hover:text-luxury-gold/80 transition-colors border-b border-white/20 pr-12 lg:pr-20"
        style={{ maxWidth: 'calc(100% - 4rem)' }}
      >
        <span className="font-serif text-lg md:text-xl lg:text-2xl font-normal text-luxury-gold pr-6">{title}</span>
        <span className="text-2xl md:text-3xl text-white leading-none select-none transition-transform duration-300 flex-shrink-0" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>
      {open && (
        <ul className="mt-2 mb-4 md:mt-3 md:mb-5 ml-0 space-y-1.5 md:space-y-2 text-white/90 pr-8">
          {items.map((it, idx) => (
            <li key={idx} className="font-sans text-xs sm:text-sm md:text-base leading-relaxed">
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Location = () => {
  return (
    <section
      className="text-primary-foreground py-12 md:py-16 lg:py-20 overflow-visible relative min-h-[900px] md:min-h-[1000px] lg:min-h-[850px]"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12 h-full">
        <div className="grid gap-8 md:gap-10 lg:gap-0 lg:grid-cols-[50%_50%] items-start relative h-full">
          {/* Left Content */}
          <div className="w-full py-4 md:py-6 relative z-20">
            <div className="text-left mb-6 md:mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-luxury-gold">
                FROM SUBURBAN SOLITUDE TO URBAN CONNECTIVITY
              </h2>
              <p className="font-sans text-base md:text-lg text-white max-w-4xl mx-auto mt-3 md:mt-4 px-2">
                Perfectly positioned at Sarjapur, The Clan stands at the heart
                of Bengaluru's next big growth zone. With landmark projects like
                STRR, PRR, SWIFT City, and Metro Phase 3A, the neighbourhood
                promises seamless connectivity and strong future value.
              </p>
            </div>
            <div className="mt-6 md:mt-8 space-y-0">
              {categories.map((cat, i) => (
                <AccordionItem
                  key={cat.title}
                  title={cat.title}
                  items={cat.items }
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>

          {/* Right Map - Overlapping */}
          <div className="w-full flex items-start justify-end lg:absolute lg:right-0 lg:top-0 lg:w-[50%] lg:pt-4 pb-8 lg:pb-0">
            <img
              src={locationMap}
              alt="The Clan Location Map"
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
