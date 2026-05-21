import creamBg from "@/assets/Cream BG.png";
import lifestyleShowcase from "@/assets/Website Image for GE.png";
import globalEdificeLogo from "@/assets/GE.png";

const Lifestyle = () => {
  return (
    <section
      className="py-12 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
          <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-luxury-gold">GLOBAL EDIFICE </span> <br />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800">
            EXCELLENTLY BUILT,<br />
            EXCLUSIVELY DELIVERED.
            </h2>
            <div className="h-1 w-24 bg-luxury-gold mx-auto lg:mx-0" />
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
            In the vibrant metropolis of Bengaluru, where the urban landscape is constantly being
          reimagined, Global Edifice has spent the last decade in making more than just buildings.

            </p>
            <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
            We’ve been conducting a symphony of Progress, orchestring the very fabric of modern living.
            Our work goes beyond concrete and steel. It's about composing an elevated lifestyle,
            harmonizing grand aspirations with comfort, luxury, style for the city’s residents.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={lifestyleShowcase} 
              alt="The Clan residences" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-md shadow-xl border-4 border-luxury-gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
