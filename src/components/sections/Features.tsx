import greenBg from "@/assets/Green BG.jpg";
import swimmingPoolIcon from "@/icons/Swimming Pool.png";;
import yogaIcon from "@/icons/Yoga & Aerobics.png";
import gymIcon from "@/icons/Gymnasium.png";
import indoorGamesIcon from "@/icons/Indoor games.png";
import seniorCitizensIcon from "@/icons/Senior citizen's Seating Area.png";
import terraceBarbequeIcon from "@/icons/Terrace Barbeque.png";
import lotusPondIcon from "@/icons/Lotus Pond.png";
import kidsPlayAreaIcon from "@/icons/Kid's Play Area.png";
import outdoorGamesIcon from "@/icons/Outdoor Games.png";
import gazebosIcon from "@/icons/Gazebo.png";



const features = [
  { icon: swimmingPoolIcon, title: "Swimming Pool" },
  { icon: yogaIcon, title: "Yoga & Aerobics" },
  { icon: gymIcon, title: "Gymnasium" },
  { icon: indoorGamesIcon, title: "Indoor Games" },
  { icon: seniorCitizensIcon, title: "Senior Citizens Park" },
  { icon: outdoorGamesIcon, title: "Outdoor Games" },
  { icon: terraceBarbequeIcon, title: "Terrace Barbeque" },
  { icon: kidsPlayAreaIcon, title: "Kids Play Area" },
  { icon: lotusPondIcon, title: "Lotus Pond" },
  { icon: gazebosIcon, title: "Gazebo" }
];

const Features = () => {
  return (
    <section
      className="py-20 text-primary-foreground overflow-hidden"
      style={{
        backgroundImage: `url(${greenBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed">
            AN ENCLAVE OF <span className="text-luxury-gold">EXQUISITE AMENITIES</span>,<br /> A SANCTUARY OF BELONGING.
          </h2>
          <div className="h-1 w-28 bg-luxury-gold mx-auto mt-6 mb-8" />
          <p className="font-sans text-base md:text-lg text-primary-foreground/90 max-w-5xl mx-auto">
          Thoughtfully curated and soulfully designed, every amenity at The Clan reflects a balance of
          leisure and life. From rejuvenating wellness corners to lively play zones and peaceful greens,
          each space invites you to unwind, connect, and belong.

          </p>
          
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 py-2 md:py-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-luxury-gold/90 bg-white/5">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                <h3 className="font-serif text-sm md:text-lg lg:text-xl">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
