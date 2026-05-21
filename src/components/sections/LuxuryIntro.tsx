import interiorImage from "@/assets/Lifestyle.jpg";
import creamBg from "@/assets/Cream BG.png";

const LuxuryIntro = () => {
  return (
    <section
      className="py-16 px-4 md:px-6  lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-2 items-center">
          {/* Image Panels on LEFT */}
          <div className="relative order-2 lg:order-1">
            <div className="flex gap-4 md:gap-6 justify-center items-end">
              {/* Left Panel (left third of the single image) */}
              <div
                className="w-1/3 h-[180px] md:h-[400px] rounded-md shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '0% 55%',
                }}
              />

              {/* Center Panel (center third of the single image) - Slightly Taller */}
              <div
                className="w-1/3 h-[200px] -translate-y-4 md:h-[420px] md:-translate-y-12 rounded-md shadow-[0_16px_30px_rgba(0,0,0,0.18),0_16px_16px_rgba(0,0,0,0.14)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '50% 35%',
                }}
              />

              {/* Right Panel (right third of the single image) */}
              <div
                className="w-1/3 h-[180px] md:h-[400px] rounded-md shadow-[0_14px_28px_rgba(0,0,0,0.16),0_10px_10px_rgba(0,0,0,0.12)] overflow-hidden"
                style={{
                  backgroundImage: `url(${interiorImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '300% auto',
                  backgroundPosition: '100% 55%',
                }}
              />
            </div>
          </div>
          
          {/* Text on RIGHT */}
          <div className="space-y-5 animate-fade-in order-1 lg:order-2 lg:pl-0">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed">
            <span className="text-luxury-gold">THE CLAN</span> <br /><span className="text-green-800">WHERE COMMUNITY IS THE NEW LUXURY</span>
            </h2> 
            <div className="h-1 w-16 bg-luxury-gold" />
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            The Clan is a living ode to connection, design, and belonging, It’s where
mindful design meets meaningful living and community becomes the most beautiful form of
luxury. It welcomes families, like- minded individuals and dreamers into a serene,
nature-wrapped sanctuary far from the city’s restless hum. Discover our 2 & 3 Bed Signature
Residences, where light, space, and comfort converge. Here every brick holds intention while
every curve whispers community.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryIntro;
