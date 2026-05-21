import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import aerialNight from "@/Gallery/25-gallery-25.jpg";
import locationMap from "@/assets/Clan-Location Map.png";
import greenBg from "@/assets/Green BG.jpg";
import creamBg from "@/assets/Cream BG.png";

// Location icons
import icon1 from "@/icons/1.png";
import icon2 from "@/icons/2.png";
import icon3 from "@/icons/3.png";
import icon4 from "@/icons/4.png";
import icon5 from "@/icons/5.png";

const LocationPage = () => {
  const locationCategories = [
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

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />

      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Location */}
        <section
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${aerialNight})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                LOCATION
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Know Your Neighbourhood - Green BG */}
        <section
          className="py-10 md:py-20 lg:py-24 overflow-visible"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            {/* Header Text - Show first on mobile */}
          

            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">
              {/* Left - Map (Desktop only) */}
              <div className="hidden lg:block relative">
                <div className="sticky top-24 w-full">
                  <img
                    src={locationMap}
                    alt="Location Map"
                    className="w-full h-auto object-contain rounded-md "
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 px-2 md:px-0">
                {/* Header - Desktop only (mobile shown above) */}
                <div className="hidden lg:block">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold">
                  AT THE CROSSROADS OF 
                    GROWTH AND CONVENIENCE.
                  </h2>
                  <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-left mt-4">
                  Where Sarjapur’s evolving skyline meets seamless connectivity, The Clan places you right
amidst innovation, opportunity, and effortless access to the city’s finest hubs.

                  </p>
                </div>

                {/* Accordion Categories */}
                <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                  {locationCategories.map((category, index) => (
                    <details
                      key={index}
                      className="group border-b border-white/20 pb-3 md:pb-4"
                    >
                      <summary className="flex justify-between items-center cursor-pointer font-serif text-base sm:text-lg md:text-xl font-bold text-luxury-gold hover:text-luxury-gold/80 transition-colors py-3 md:py-4 list-none">
                        <span>{category.title}</span>
                        <span className="text-xl md:text-2xl text-white group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 font-sans text-xs sm:text-sm md:text-base text-white/90 pl-0">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Next Big Address - Cream/White BG */}
        <section
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
            {/* Title Section */}
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold">
                THE NEXT BIG ADDRESS
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-foreground mt-3 md:mt-4">
                Where Sarjapur's Progress Finds Home.
              </p>
            </div>

            {/* Planning Items with Icons - 2 Column Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {/* Item 1: Proposed STRR */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img src={icon1} alt="STRR" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                      Proposed STRR
                    </h3>
                    <h4 className="font-sans text-xs md:text-sm font-semibold text-green-800">
                      (Satellite Town Ring Road)
                    </h4>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  The upcoming STRR will enhance connectivity, linking major hubs around Bangalore by boosting real estate value in the Sarjapura region.
                </p>
              </div>

              {/* Item 2: SWIFT City */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img src={icon2} alt="SWIFT City" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                      SWIFT City in Sarjapur
                    </h3>
                    <h4 className="font-sans text-xs md:text-sm font-semibold text-green-800">
                      (1000-Acre SEZ)
                    </h4>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  A massive government-planned Special Economic Zone (SEZ) aims at supporting startups and driving economic growth. This positions Sarjapura as a prime investment destination.
                </p>
              </div>

              {/* Item 3: Growing IT & Commercial Hub */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img src={icon3} alt="IT Hub" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                      Growing IT & Commercial Hub
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  Sarjapura is surrounded by tech parks, co-working spaces, and multiple IT Sectors, making it a prime investment hotspot along with convenience.
                </p>
              </div>

              {/* Item 4: Metro Phase 3A */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img src={icon4} alt="Metro" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                      Metro Phase 3A, Red Line
                    </h3>
                    <h4 className="font-sans text-xs md:text-sm font-semibold text-green-800">
                      Sarjapura to Hebbal
                    </h4>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  The proposed metro extension will provide seamless public transport, and improve accessibility by reducing commute time for residents.
                </p>
              </div>

              {/* Item 5: Green & Sustainable Development */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/40 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-luxury-green border-4 border-luxury-gold flex items-center justify-center shadow-lg">
                      <img src={icon5} alt="Green Development" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold">
                      Green & Sustainable Development
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  Government initiatives include parks, open spaces, and eco-friendly infrastructure to enhance the quality of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact Us */}
        <Contact />
      </main>

      {/* Section 5: Footer */}
      <FooterBar />
    </div>
  );
};

export default LocationPage;
