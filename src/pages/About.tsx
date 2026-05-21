import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import creamBg from "@/assets/Cream BG.png";
import greenBg from "@/assets/Green BG.jpg";
import aerialNight from "@/exterior/08-evening-skyline-panorama.jpg";
import aboutLifestyleImage from "@/Gallery/10-gallery-10.jpg";
import mainExteriorView from "@/exterior/04-evening-facade-illuminated.jpg";

import { MapPin, Ruler, Trees, Building2 } from "lucide-react";

const About = () => {

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />

      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Hero Section with Background Image */}
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
                ABOUT US
              </h1>
            </div>
          </div>
        </section>

        {/* Tapestry Section - Green BG */}
        <section
          className="py-16 md:py-24 lg:py-32 overflow-hidden relative"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mx-auto w-full max-w-[1640px] px-4 md:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
              {/* Left Side - Single Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  {/* Decorative border accent */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-luxury-gold/30 to-luxury-gold/10 rounded-2xl blur-xl" />
                  <img
                    src={mainExteriorView}
                    alt="The Clan evening facade illuminated"
                    className="relative w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-luxury-gold/70"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                {/* Title Section */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold">
                    A TAPESTRY OF TIMELESS <br />
                    <span className="text-white">ARCHITECTURE
                    & BELONGING</span>
                  </h2>
                </div>
                
                {/* Content Paragraphs */}
                <div className="space-y-5 md:space-y-6">
                  <p className="font-sans text-base md:text-lg lg:text-lg text-white/90 leading-relaxed">
                    Beyond its skyline, The Clan reflects something far more exquisite, capturing the rhythm of togetherness, and the quiet comfort of belonging among neighbours who feel like family.
                  </p>
                  
                  <p className="font-sans text-base md:text-lg lg:text-lg text-white/90 leading-relaxed">
                    Its 2 & 3 Bed signature residences blend contemporary elegance with the timeless comfort of community, creating a seamless harmony between luxury and life.
                  </p>
                  
                  <p className="font-sans text-base md:text-lg lg:text-lg text-white font-medium leading-relaxed">
                    Here, community becomes an experience not just an address.
                  </p>
                </div>

                {/* Stats Box - Enhanced */}
                <div className="border-2 border-luxury-gold/40 rounded-2xl p-10 md:p-14 lg:p-16 bg-white/10 backdrop-blur-md shadow-xl mt-10 w-full mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-luxury-gold/30">
                    {/* Stat 1 */}
                    <div className="text-center pt-6 sm:pt-0 group sm:pr-10">
                      <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-3 text-luxury-gold whitespace-nowrap">
                        3.5 Acres
                      </div>
                      <div className="font-sans text-sm md:text-base text-white/80 uppercase tracking-widest font-semibold">
                        LAND AREA
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center pt-6 sm:pt-0 sm:px-10 group">
                      <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-3 text-luxury-gold whitespace-nowrap">
                        257
                      </div>
                      <div className="font-sans text-sm md:text-base text-white/80 uppercase tracking-widest font-semibold">
                        SIGNATURE RESIDENCES
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center pt-6 sm:pt-0 sm:pl-10 group">
                      <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-3 text-luxury-gold whitespace-nowrap">
                        G+9 Floors
                      </div>
                      <div className="font-sans text-sm md:text-base text-white/80 uppercase tracking-widest font-semibold">
                        STRUCTURE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Life Section */}
        <section className="relative overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Background Image - Right Side - Extended Height */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-0 right-0 w-0 lg:w-[45%] h-[120%]"
              style={{
                backgroundImage: `url(${aboutLifestyleImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
              }}
            />
          </div>
          
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-8 lg:px-12">
            {/* Title - Top spacing with more padding */}
            <div className="pt-20 md:pt-24 lg:pt-32 mb-6 md:mb-8 lg:mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800">
                DESIGNED FOR <span className="text-luxury-gold">LIFE</span>
              </h2>
            </div>

            {/* Spacer to push cards to 40% of image height */}
            <div className="h-[8vh] lg:h-[12vh]"></div>

            {/* 4 Cards Grid with more gap and centered */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 pb-16 md:pb-20 lg:pb-24">
              {/* Card 1 - The Sarjapur Advantage */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-luxury-gold/40">
                <div className="bg-luxury-green-dark px-4 py-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-gold/90 flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-luxury-green-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-normal text-white/80">
                   The Sarjapura Advantage
                  </h3>
                </div>
                <div className="bg-white px-4 py-4 min-h-[180px]">
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <li>• Where progress meets peace with quick access to Wipro, RGA Tech Park, and Outer Ring Road.</li>
                    <li>• Close to leading schools, hospitals, and lifestyle avenues.</li>
                    <li>• Future-ready location with STRR, Swift City and Metro Phase 3A connectivity.</li>
                    <li>• Backed by trust, transparency, and complete legal clarity.</li>
                  </ul>
                </div>
              </div>

              {/* Card 2 - Thoughtful by Design */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-luxury-gold/40">
                <div className="bg-luxury-green-dark px-4 py-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-gold/90 flex items-center justify-center mx-auto mb-2">
                    <Ruler className="w-6 h-6 md:w-7 md:h-7 text-luxury-green-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-normal text-white/80">
                    Thoughtful by Design
                  </h3>
                </div>
                <div className="bg-white px-4 py-4 min-h-[180px]">
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <li>• <span className="font-semibold">60% </span>open spaces with landscaped greens and serene walkways.</li>
                    <li>• Zero common walls for unmatched privacy.</li>
                    <li>• Vastu-compliant layouts that balance energy and comfort.</li>
                    <li>• Dual balconies that open up to light, air, and views.</li>
                  </ul>
                </div>
              </div>

              {/* Card 3 - The Flow of Community */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-luxury-gold/40">
                <div className="bg-luxury-green-dark px-4 py-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-gold/90 flex items-center justify-center mx-auto mb-2">
                    <Trees className="w-6 h-6 md:w-7 md:h-7 text-luxury-green-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-normal text-white/80">
                    The Flow of Community
                  </h3>
                </div>
                <div className="bg-white px-4 py-4 min-h-[180px]">
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <li>• A masterplan inspired by nature's rhythm — open, connected, alive.</li>
                    <li>• Spaces that spark connection and nurture belonging.</li>
                    <li>• Dedicated zones for wellness, play, and shared joy.</li>
                  </ul>
                </div>
              </div>

              {/* Card 4 - Beyond the Everyday */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-luxury-gold/40">
                <div className="bg-luxury-green-dark px-4 py-5 text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-gold/90 flex items-center justify-center mx-auto mb-2">
                    <Building2 className="w-6 h-6 md:w-7 md:h-7 text-luxury-green-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-normal text-white/80">
                    Beyond the Ordinary
                  </h3>
                </div>
                <div className="bg-white px-4 py-4 min-h-[180px]">
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <li>• <span className="font-semibold">16,000 sq.ft.</span> clubhouse for leisure, fitness, and celebration.</li>
                    <li>• <span className="font-semibold">50+ </span>curated amenities for wellness, play, and relaxation.</li>
                    <li>• Sunlit pools, recreation decks, and green escapes.</li>
                    <li>• Smart living systems for ease and comfort.</li>
                    <li>• Sustainable design where luxury meets responsibility.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Us Section */}
        <Contact />
      </main>

      <FooterBar />
    </div>
  );
};

export default About;
