import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import { submitLeadForm } from "@/lib/paramantra";
import interiorLuxury from "@/interiors/02-luxury-living-dining.jpg";
import greenBg from "@/assets/Green BG.jpg";
import creamBg from "@/assets/Cream BG.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Specification icons
import structureIcon from "@/icons/Structure.png";
import kitchenIcon from "@/icons/Kitchen.png";
import bathroomIcon from "@/icons/Bathroom.png";
import flooringIcon from "@/icons/Flooring.png";
import wallFinishIcon from "@/icons/Wall Finish.png";
import doorsWindowsIcon from "@/icons/Doors & Windows.png";

const unitPlanImages = import.meta.glob("@/unitPlans/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalizePath = (path: string) => path.replace(/\\/g, "/");

const getPlanImage = (fileName: string) => {
  const normalizedFileName = normalizePath(fileName);
  const directMatchKey = Object.keys(unitPlanImages).find((key) =>
    normalizePath(key).endsWith(`/unitPlans/${normalizedFileName}`),
  );

  if (directMatchKey) {
    return unitPlanImages[directMatchKey];
  }

  const targetStem = normalizedFileName.replace(/\.[^/.]+$/, "").toLowerCase();

  const fallbackMatchKey = Object.keys(unitPlanImages).find((key) => {
    const normalizedKey = normalizePath(key);
    const baseName = normalizedKey.substring(
      normalizedKey.lastIndexOf("/") + 1,
    );
    const baseStem = baseName.replace(/\.[^/.]+$/, "").toLowerCase();
    return baseStem.startsWith(targetStem);
  });

  if (fallbackMatchKey) {
    return unitPlanImages[fallbackMatchKey];
  }

  console.warn(`Missing unit plan asset: ${fileName}`);
  return "";
};

type PlanFilter = "all" | "2BED" | "3BED";

type Plan = {
  id: string;
  BED: Exclude<PlanFilter, "all">;
  title: string;
  description?: string;
  image: string;
};

const plans: Plan[] = [
  // 2 BED layouts
  {
    id: "2BED-107",
    BED: "2BED",
    title: "2 BED – Unit 107 (West Entry)",
    description: "Efficient 2 BED with linear kitchen and attached balcony.",
    image: getPlanImage("107.png"),
  },
  {
    id: "2BED-109",
    BED: "2BED",
    title: "2 BED – Unit 109 (West Entry)",
    description: "Well-balanced 2 BED with spacious living-dining zone.",
    image: getPlanImage("109.png"),
  },
  {
    id: "2BED-110",
    BED: "2BED",
    title: "2 BED – Unit 110 (West Entry)",
    description: "Corner 2 BED with extended deck and garden-facing views.",
    image: getPlanImage("110.png"),
  },
  {
    id: "2BED-112-study",
    BED: "2BED",
    title: "2 BED + Study – Unit 112 (West Entry)",
    description: "Premium 2 BED with dedicated study niche and wide balcony.",
    image: getPlanImage("112.png"),
  },

  // 3 BED layouts
  {
    id: "3BED-101",
    BED: "3BED",
    title: "3 BED – Unit 101 (West Entry)",
    description: "Smartly planned 3 BED with wide living-dining and balcony.",
    image: getPlanImage("101.png"),
  },
  {
    id: "2BED-102",
    BED: "2BED",
    title: "2 BED – Unit 102 (West Entry)",
    description: "Smartly planned 2 BED with wide living-dining and balcony.",
    image: getPlanImage("102.png"),
  },
  {
    id: "3BED-103",
    BED: "3BED",
    title: "3 BED – Unit 103 (West Entry)",
    description: "3 BED with compact corridors and generous balcony space.",
    image: getPlanImage("103.png"),
  },
  {
    id: "3BED-108",
    BED: "3BED",
    title: "3 BED – Unit 108 (West Entry)",
    description: "Expansive 3 BED with central living-dining spine.",
    image: getPlanImage("108.png"),
  },
  {
    id: "2BED-110",
    BED: "2BED",
    title: "2 BED – Unit 110 (West Entry)",
    description: "West-facing 2 BED with extended living-dining width.",
    image: getPlanImage("110.png"),
  },
  {
    id: "3BED-111",
    BED: "3BED",
    title: "3 BED – Unit 111 (North Entry)",
    description: "North-entry 3 BED with separate private and social zones.",
    image: getPlanImage("111.png"),
  },
  {
    id: "3BED-115",
    BED: "3BED",
    title: "3 BED – Unit 115 (East Entry)",
    description: "Dual-balcony 3 BED perfect for cross-ventilation.",
    image: getPlanImage("115.png"),
  },
  {
    id: "3BED-116",
    BED: "3BED",
    title: "3 BED – Unit 116 (East Entry)",
    description: "Corner residence with dual balconies and large dining.",
    image: getPlanImage("116.png"),
  },
  {
    id: "3BED-117",
    BED: "3BED",
    title: "3 BED – Unit 117 (East Entry)",
    description: "Long living-dining layout with twin balconies.",
    image: getPlanImage("117.png"),
  },
  {
    id: "3BED-118",
    BED: "3BED",
    title: "3 BED – Unit 118 (East Entry)",
    description: "3 BED with deep balcony and spacious master suite.",
    image: getPlanImage("118.png"),
  },
  {
    id: "3BED-119",
    BED: "3BED",
    title: "3 BED – Unit 119 (East Entry)",
    description: "Efficient 3 BED with compact circulation and balcony.",
    image: getPlanImage("119.png"),
  },
  {
    id: "3BED-119-alt",
    BED: "3BED",
    title: "3 BED – Unit 119 Alternate (East Entry)",
    description:
      "Alternate 3 BED layout of Unit 119 with reoriented living-dining.",
    image: getPlanImage("119 (1).png"),
  },
  {
    id: "3BED-120",
    BED: "3BED",
    title: "3 BED – Unit 120 (East Entry)",
    description:
      "3 BED with elongated living-dining and attached balcony deck.",
    image: getPlanImage("120.png"),
  },
  {
    id: "3BED-121",
    BED: "3BED",
    title: "3 BED – Unit 121 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("121.png"),
  },
  {
    id: "2BED-205",
    BED: "2BED",
    title: "2 BED – Unit 205 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("205.png"),
  },
  //207 2 BED west entry
  {
    id: "2BED-207",
    BED: "2BED",
    title: "2 BED – Unit 207 (West Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("207.png"),
  },
  //209 2 BED west entry
  {
    id: "2BED-209",
    BED: "2BED",
    title: "2 BED – Unit 209 (West Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("209.png"),
  },
  //210 2 BED east entry
  {
    id: "2BED-210",
    BED: "2BED",
    title: "2 BED – Unit 210 (West Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("210.png"),
  },
  //211 3 BED north entry
  {
    id: "3BED-211",
    BED: "3BED",
    title: "3 BED – Unit 211 (North Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("211.png"),
  },
  //212 2 BED west entry
  {
    id: "2BED-212",
    BED: "2BED",
    title: "2 BED – Unit 212 (West Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("212.png"),
  },
  //213 3 BED north entry
  {
    id: "3BED-213",
    BED: "3BED",
    title: "3 BED – Unit 213 (North Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("213.png"),
  },
  //214 3 BED east entry
  {
    id: "3BED-214",
    BED: "3BED",
    title: "3 BED – Unit 214 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("214.png"),
  },
  //215 3 BED east entry
  {
    id: "3BED-215",
    BED: "3BED",
    title: "3 BED – Unit 215 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("215.png"),
  },
  //216 3 BED east entry
  {
    id: "3BED-216",
    BED: "3BED",
    title: "3 BED – Unit 216 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("216.png"),
  },

  {
    id: "3BED-217",
    BED: "3BED",
    title: "3 BED – Unit 217 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("217.png"),
  },
  //218 3 BED east entry

  {
    id: "3BED-219",
    BED: "3BED",
    title: "3 BED – Unit 219 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("219.png"),
  },
  //221 3 BED east entry
  {
    id: "3BED-221",
    BED: "3BED",
    title: "3 BED – Unit 221 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("221.png"),
  },
  //222 3 BED east entry
  {
    id: "3BED-226",
    BED: "3BED",
    title: "3 BED – Unit 226 (East Entry)",
    description: "Spacious master suite with separate family bedrooms.",
    image: getPlanImage("226.png"),
  },
];

const specifications: Array<{
  title: string;
  icon: string;
  items: string[];
}> = [
  {
    title: "Structure",
    icon: structureIcon,
    items: [
      "High ceilings and robust walls (150mm/100mm) for an enduring impression of elegance and stability.",
      "Performance meets quality at The Clan.",
    ],
  },
  {
    title: "Kitchen",
    icon: kitchenIcon,
    items: [
      "Designed with efficiency at its core.",
      "Premium CP fittings from KOHLER for unmatched quality and performance.",
    ],
  },
  {
    title: "Bathroom",
    icon: bathroomIcon,
    items: [
      "Embodies both function and luxury.",
      "Sanitary ware and CP fittings by KOHLER.",
    ],
  },
  {
    title: "Flooring",
    icon: flooringIcon,
    items: [
      "High quality Vitrified double-charge tiles.",
      "Graces the foyer, living, dining, kitchen, and bedrooms for a refined finish throughout.",
    ],
  },
  {
    title: "Wall Finish",
    icon: wallFinishIcon,
    items: [
      "Toilet walls finished with glazed ceramic tiles up to false ceiling level.",
      "All internal walls with 2 coats of putty, 1 coat of primer and 2 coats of premium emulsion.",
    ],
  },
  {
    title: "Doors & Windows",
    icon: doorsWindowsIcon,
    items: [
      "UPVC framed windows and French windows elevate the master bedroom with grace and quality.",
      "Pre-hung laminated doors add a refined aesthetic.",
    ],
  },
];

const UnitPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanFilter>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasPlanAccess, setHasPlanAccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlanToView, setSelectedPlanToView] = useState<string | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange =
    (field: "name" | "phoneNumber" | "email") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handlePlanClick = (planId: string) => {
    if (!hasPlanAccess) {
      setSelectedPlanToView(planId);
      setShowModal(true);
    }
  };

  const handleUnlockPlans = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await submitLeadForm({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        source: "Unit Plans Unlock",
      });

      setHasPlanAccess(true);
      setShowModal(false);
      setFormData({ name: "", phoneNumber: "", email: "" });
      setSubmitError(null);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please retry.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredPlans =
    selectedPlan === "all"
      ? plans
      : plans.filter((plan) => plan.BED === selectedPlan);

  const plansPerSlide = 2;
  const totalSlides =
    filteredPlans.length === 0
      ? 0
      : Math.ceil(filteredPlans.length / plansPerSlide);

  useEffect(() => {
    // Reset slider when filter changes
    setCurrentSlide(0);
  }, [selectedPlan]);

  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(totalSlides - 1);
    }
  }, [totalSlides, currentSlide]);

  const startIndex = currentSlide * plansPerSlide;
  const visiblePlans =
    totalSlides === 0
      ? []
      : filteredPlans.slice(startIndex, startIndex + plansPerSlide);

  const goToPrevSlide = () => {
    if (totalSlides === 0) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    if (totalSlides === 0) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />

      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Unit Plans */}
        <section
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${interiorLuxury})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                UNIT PLANS
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Thoughtfully Designed Homes */}
        <section className="relative overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Green rectangles and Image */}
            <div className="relative lg:w-1/2 bg-white">
              {/* Green rectangles in background */}
              <div className="absolute top-0 left-0 w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-96 bg-luxury-green-dark z-0" />
              <div className="absolute bottom-0 left-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-luxury-green z-0" />

              {/* Image on top */}
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <img
                  src={interiorLuxury}
                  alt="Thoughtfully designed interior"
                  className="w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Full green background with content */}
            <div
              className="lg:w-1/2 px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-24 flex items-center"
              style={{
                backgroundImage: `url(${greenBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold mb-4">
                  BEYOND BRICK AND BEAM,
                  <span className="text-white"> LIES INTENTION</span>
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  At The Clan, every space is designed with purpose and
                  precision, where light, air, and energy flow in perfect
                  harmony. Expansive layouts invite natural sunlight to fill
                  your home, while cross ventilation ensures freshness
                  throughout the day. Each residence is meticulously aligned
                  with Vastu principles, blending spiritual balance with modern
                  comfort
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Blueprint of Your Dreams - Swirl BG */}
        <section
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800 mb-4">
                THE BLUEPRINT OF{" "}
                <span className="text-luxury-gold">YOUR DREAMS</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Explore the details of the clan's expertly crafted unit plans,
                each layout thoughtfully designed to maximise space, light and
                comfort. Discover a home that speaks to you and resonates with
                your unique lifestyle.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 px-2">
              <Button
                onClick={() => setSelectedPlan("all")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "all"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setSelectedPlan("2BED")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "2BED"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                2 BED
              </Button>
              <Button
                onClick={() => setSelectedPlan("3BED")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedPlan === "3BED"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                3 BED
              </Button>
            </div>

            {/* Show blurred plan thumbnails */}
            {visiblePlans.length > 0 && (
              <div className="space-y-6 md:space-y-8">
                <div className="relative max-w-6xl mx-auto">
                  <div className="grid gap-6 md:gap-10 md:grid-cols-2">
                    {visiblePlans.map((plan) => (
                      <div
                        key={plan.id}
                        className="space-y-3 md:space-y-4 cursor-pointer"
                        onClick={() => handlePlanClick(plan.id)}
                      >
                        <div className="relative">
                          <img
                            src={plan.image}
                            alt={plan.title}
                            className={`w-full h-auto object-contain rounded-lg transition-all ${
                              !hasPlanAccess ? "blur-sm opacity-90" : ""
                            }`}
                          />
                          {!hasPlanAccess && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button className="bg-luxury-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-luxury-green/90 transition-colors">
                                Click to View
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="text-center space-y-1">
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-green-800">
                            {plan.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalSlides > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={goToPrevSlide}
                        className="flex absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white text-luxury-green border border-luxury-green rounded-full p-2 sm:p-3 hover:bg-luxury-green hover:text-white transition-colors"
                        aria-label="Previous plans"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextSlide}
                        className="flex absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white text-luxury-green border border-luxury-green rounded-full p-2 sm:p-3 hover:bg-luxury-green hover:text-white transition-colors"
                        aria-label="Next plans"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {totalSlides > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? "bg-luxury-green w-6"
                            : "bg-luxury-green/30 w-3 hover:bg-luxury-green/60"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {totalSlides === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="font-sans text-base md:text-lg text-muted-foreground">
                  No plans available for this configuration.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Specifications - White BG */}
        <section className="py-10 md:py-20 lg:py-24 overflow-hidden bg-white">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold uppercase">
                SPECIFICATIONS
              </h2>
              <p className="mt-4 max-w-3xl mx-auto font-sans text-sm sm:text-base md:text-lg text-muted-foreground">
                Every home at The Clan is crafted with premium materials,
                thoughtful detailing and future-ready services, ensuring
                comfort, safety and longevity for your family.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
              {specifications.map((spec) => (
                <div
                  key={spec.title}
                  className="bg-gradient-to-br from-white to-luxury-cream/30 border-2 border-luxury-gold/30 rounded-xl shadow-lg p-4 md:p-5 lg:p-6 space-y-3 hover:shadow-2xl hover:border-luxury-gold/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2 md:mb-3">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img
                        src={spec.icon}
                        alt={spec.title}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-luxury-gold text-center uppercase">
                    {spec.title}
                  </h3>
                  <ul className="mt-2 space-y-2 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {spec.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Contact Form */}
        <Contact />
      </main>

      <FooterBar />

      {/* Modal Popup for Form */}
      {showModal && !hasPlanAccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="relative max-w-md w-full bg-luxury-green shadow-2xl rounded-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-gold mb-2">
                UNLOCK UNIT PLANS
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Please share your contact details to view the detailed layouts
              </p>
            </div>

            <form onSubmit={handleUnlockPlans} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-white"
                  htmlFor="modal-name"
                >
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  className="w-full rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-white"
                  htmlFor="modal-email"
                >
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="w-full rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-white"
                  htmlFor="modal-phone"
                >
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange("phoneNumber")}
                  className="w-full rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="+919876543210"
                />
              </div>
              {submitError && (
                <p className="text-sm text-red-300 bg-red-900/30 px-3 py-2 rounded-lg">
                  {submitError}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark py-3 rounded-full font-semibold transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "VIEW UNIT PLANS"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitPlans;
