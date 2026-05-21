import { useState } from "react";
import { Button } from "@/components/ui/button";
import EnquireNow from "@/components/EnquireNow";
import creamBg from "@/assets/Cream BG.png";
import clanLogo from "@/assets/Clan-Logo-Green.png";
import plan119 from "@/plans/119.png";
import plan205 from "@/plans/205.png";

type Plan = {
  name: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image: string;
  imageLeft?: boolean;
};

const floorPlans: Plan[] = [
  {
    name: "3 BED Luxury",
    area: " 1296 - 1826 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    description:
      "Spacious and sophisticated, our 3BED homes with dual balconies and open layouts are crafted for families who value comfort and luxury. Ensuring space to connect and relax.",
    image: plan205,
    imageLeft: true,
  },
  {
    name: "2 BED Premium",
    area: "1131 - 1451 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    description:
      "Elegantly designed 2BED homes with dual balconies that invite light, air, and warmth. Perfect for young professionals, couples, and families, these spaces blend comfort with modern design.",
    image: plan119,
    imageLeft: false,
  },
];

const FloorPlans = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleFormSuccess = () => {
    setSubmitSuccess(true);
    setIsUnlocked(true); // Unlock the blurred images
    
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section
      className="py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-green-800">
            HOMES DESIGNED FOR <span className="text-luxury-gold">ELEVATED LIVING</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mt-3 md:mt-4 px-2">
            Thoughtfully planned layouts that maximize space, light, and functionality
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {floorPlans.map((plan, index) => (
            <div key={index} className="relative flex flex-col lg:grid lg:items-center gap-6 md:gap-10 lg:grid-cols-2 lg:gap-12">
              {/* vertical divider - only on desktop */}
              <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-luxury-gold/40" />

              {/* Content - Always first on mobile, alternates on desktop */}
              <div className={`text-center order-1 lg:${plan.imageLeft ? "order-2" : "order-1"}`}>
                <div className="mx-auto max-w-xl">
                  <img src={clanLogo} alt="The Clan" className="h-10 md:h-12 lg:h-14 mx-auto mb-3 md:mb-4" />
                  
                  <p className="font-sans text-sm md:text-base text-muted-foreground mt-1">
                    {plan.bedrooms} BED, {plan.area}
                  </p>
                  <p className="font-sans text-sm md:text-base lg:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed px-2">
                    {plan.description}
                  </p>
                  {!isUnlocked && !submitSuccess && (
                    <Button 
                      onClick={() => setShowForm(!showForm)}
                      className="mt-4 md:mt-6 bg-green-900 hover:bg-green-800 text-white rounded px-6 py-2"
                    >
                      <span className="font-semibold">{showForm ? "Hide Form" : "Check Prices"}</span>
                    </Button>
                  )}
                  {submitSuccess && (
                    <div className="mt-4 md:mt-6 text-green-600 font-semibold">
                      ✓ Thank you! Plans unlocked
                    </div>
                  )}
                </div>
              </div>

              {/* Image - Always second on mobile, alternates on desktop */}
              <div className={`order-2 w-full lg:${plan.imageLeft ? "order-1" : "order-2"}`}>
                <div className="mx-auto w-full max-w-[720px] rounded-md overflow-hidden relative">
                  <img 
                    src={plan.image} 
                    alt={plan.name} 
                    className={`w-full h-auto object-contain transition-all duration-700 ${isUnlocked ? "" : "blur-[6px] opacity-100"}`}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-[#F5F1E8]/40" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use EnquireNow Component */}
        <EnquireNow 
          externalOpen={showForm && !isUnlocked}
          onExternalClose={() => setShowForm(false)}
          onSuccess={handleFormSuccess}
        />
      </div>
    </section>
  );
};

export default FloorPlans;


