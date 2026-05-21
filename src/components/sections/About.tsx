import creamBg from "@/assets/Cream BG.png";
import greenBg from "@/assets/Green BG.jpg";
import interiorLuxury from "@/exterior/13-amenities-deck-overlook.jpg";

const About = () => {
  return (
    <section id="about" className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end"
        style={{
          backgroundImage: `url(${interiorLuxury})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Perfect Sanctuary Section */}
      <div 
        className="py-12 md:py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${creamBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img 
                src={interiorLuxury} 
                alt="Interior" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                YOUR PERFECT <span className="text-luxury-gold">SANCTUARY</span>,<br />
                DESIGNED WITH OUR<br />
                <span className="text-luxury-green">EXPERTISE</span>.
              </h2>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                At The Clan, we believe in creating spaces that resonate with your aspirations. 
                Every detail is thoughtfully crafted to offer not just a home, but a lifestyle 
                that reflects elegance, comfort, and belonging.
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                With our expertise in architectural excellence and commitment to quality, we 
                transform dreams into reality, one home at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Designed for Life Section */}
      <div 
        className="py-12 md:py-20 lg:py-24 text-primary-foreground overflow-hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                DESIGNED FOR <span className="text-luxury-gold">LIFE</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-6 rounded-md">
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-luxury-gold">
                    The Clan Advantages
                  </h3>
                  <ul className="space-y-2 font-sans text-sm md:text-base text-left">
                    <li>• 15 Mins to International Airport</li>
                    <li>• Fully-gated Gn+1 Ecosystem</li>
                    <li>• Close to leading Software, Adtech, Amazon, Flipkart, SAP, EY, KPMG</li>
                    <li>• Premium Amenities</li>
                    <li>• Close to upcoming landmarks, such as the Aerospace Park, TCs, etc</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative order-1 lg:order-2">
              <img 
                src={interiorLuxury} 
                alt="Luxury Interior" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-md shadow-xl"
              />
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid sm:grid-cols-2 gap-6 md:gap-8">
            {/* Lifestyle Amenities */}
            <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-6 md:p-8 rounded-md">
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-luxury-gold text-center">
                Lifestyle Amenities
              </h3>
              <ul className="space-y-2 font-sans text-sm md:text-base">
                <li>• Comprehensively 3bhk Balconies</li>
                <li>• Extra-Large Bedroom Floor plans</li>
                <li>• Massive Dual Balconies</li>
                <li>• Water, Compliant</li>
              </ul>
            </div>

            {/* Project Features */}
            <div className="bg-luxury-green-dark/30 backdrop-blur-sm p-6 md:p-8 rounded-md">
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-luxury-gold text-center">
                Project Features
              </h3>
              <ul className="space-y-2 font-sans text-sm md:text-base">
                <li>• Inspired by thriving roots</li>
                <li>• Encourages exploration, interaction</li>
                <li>• A nature - forward</li>
                <li>• Inclusive spaces for health and physical health</li>
                <li>• Well-thought + Spirit of project</li>
                <li>• Inclusive + availability</li>
                <li>• Spaces for Business for every size project</li>
                <li>• Aesthetic zones = Spirit of project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

