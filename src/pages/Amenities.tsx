import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import creamBg from "@/assets/Cream BG.png";
import greenBg from "@/assets/Green BG.jpg";
import aerialNight from "@/banners/club_house.jpeg";
import DownloadBrochureModal from "@/components/DownloadBrochureModal";
import masterPlanImage from "@/assets/The Clan - Master Plan-without bg.jpg";

// Interior amenities imagery
import interiorLobby from "@/interiors/01-grand-entrance-lobby.jpg";
import interiorLivingDining from "@/interiors/02-luxury-living-dining.jpg";
import interiorFitnessStudio from "@/interiors/03-fitness-studio.jpg";
import interiorGamesLounge from "@/interiors/04-indoor-games-lounge.jpg";
import interiorMultipurposeHall from "@/interiors/05-banquet-multipurpose-hall.jpg";
import interiorMasterSuite from "@/interiors/06-master-bedroom-suite.jpg";

// Exterior amenities imagery
import extSunsetBoulevard from "@/exterior/01-sunset-boulevard-elevation.jpg";
import extEntranceDriveway from "@/Gallery/12-gallery-12.jpg";
import extOutdoorFitness from "@/exterior/09-outdoor-fitness-zone.jpg";
import extPlayArea from "@/exterior/10-play-area-and-sports-court.jpg";
import extClubhouse from "@/exterior/12-modern-clubhouse-exterior.jpg";
import extAerialCampus from "@/exterior/14-aerial-night-campus-view.jpg";


const Amenities = () => {
  const [selectedType, setSelectedType] = useState<"interior" | "exterior">("interior");
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const interiorAmenities = [
    { image: interiorLobby, title: "Grand Entrance Lobby" },
    { image: interiorLivingDining, title: "Luxury Living & Dining" },
    { image: interiorFitnessStudio, title: "Indoor Fitness Studio" },
    { image: interiorGamesLounge, title: "Indoor Games Lounge" },
    { image: interiorMultipurposeHall, title: "Banquet & Multipurpose Hall" },
    { image: interiorMasterSuite, title: "Master Bedroom Suite" },
  ];

  const exteriorAmenities = [
    { image: extSunsetBoulevard, title: "Sunset Boulevard Elevation" },
    { image: extEntranceDriveway, title: "Grand Arrival Driveway" },
    { image: extOutdoorFitness, title: "Outdoor Fitness Zone" },
    { image: extPlayArea, title: "Play Area & Sports Court" },
    { image: extClubhouse, title: "Modern Clubhouse Exterior" },
    { image: extAerialCampus, title: "Aerial Night Campus View" },
  ];

  const currentAmenities = selectedType === "interior" ? interiorAmenities : exteriorAmenities;

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero with Amenities Heading */}
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
                AMENITIES
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Elevate Your Everyday - White BG */}
        <section className="py-12 md:py-20 lg:py-28 bg-white overflow-hidden">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
            <div className="text-center mb-10 md:mb-14 lg:mb-20 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800 uppercase mb-4 md:mb-6">
                Elevate Your Everyday with <br/><span className="text-luxury-gold">World-Class Amenities</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed w-full max-w-6xl mx-auto">
                Experience a lifestyle where every moment is crafted for comfort, leisure, and well-being. 
                Our thoughtfully designed amenities bring together the finest elements of modern living, 
                ensuring you and your family enjoy the best of everything, right at your doorstep.
              </p>
            </div>

            {/* Highlight Amenities Grid (mix of key interior & exterior views) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6 auto-rows-fr">
              {/* Large featured image - spans 2 columns and 2 rows */}
              <div className="col-span-2 row-span-2">
                <img 
                  src={interiorLobby} 
                  alt="Grand Entrance Lobby" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              
              {/* Top right images */}
              <div className="col-span-1">
                <img 
                  src={interiorLivingDining} 
                  alt="Luxury Living & Dining" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={interiorFitnessStudio} 
                  alt="Indoor Fitness Studio" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              
              {/* Bottom right images */}
              <div className="col-span-1">
                <img 
                  src={extEntranceDriveway} 
                  alt="Grand Arrival Driveway" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="col-span-1">
                <img 
                  src={extPlayArea} 
                  alt="Play Area & Sports Court" 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Interior & Exterior Amenities - Cream BG */}
        <section 
          className="py-12 md:py-20 lg:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 md:gap-5 mb-10 md:mb-14 lg:mb-18 px-2">
              <Button
                onClick={() => setSelectedType("interior")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedType === "interior"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                Interior Amenities
              </Button>
              <Button
                onClick={() => setSelectedType("exterior")}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all ${
                  selectedType === "exterior"
                    ? "bg-luxury-green text-white hover:bg-luxury-green/90"
                    : "bg-white text-luxury-green border-2 border-luxury-green hover:bg-luxury-green/10"
                }`}
              >
                Exterior Amenities
              </Button>
            </div>

            {/* Amenities Grid - 2 rows, 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {currentAmenities.map((amenity, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={amenity.image} 
                    alt={amenity.title} 
                    className="w-full h-[280px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <p className="font-serif text-white text-base sm:text-lg md:text-xl lg:text-2xl p-4 md:p-5 lg:p-6 leading-tight">
                      {amenity.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 5: Download Brochure - Green BG */}
        <section 
          className="py-12 md:py-20 lg:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1740px] px-4 md:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto text-center px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold mb-4 uppercase">
                Your Future Unfolded
                <br/>
                <span className="text-white">Download Our Brochure</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-7 md:mb-9 lg:mb-11 max-w-3xl mx-auto">
                Discover every detail of your dream home. Download our comprehensive brochure to explore 
                floor plans, amenities, location advantages, and everything that makes The Clan extraordinary.
              </p>
              <Button 
                size="lg"
                onClick={() => setIsDownloadModalOpen(true)}
                className="bg-luxury-gold text-luxury-green-dark hover:bg-luxury-gold/90 font-semibold px-8 sm:px-10 md:px-14 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg rounded-full inline-flex items-center gap-2.5 md:gap-3.5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
        {/* Section 4: Master Plan - Cream BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden bg-white" >
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-luxury-gold uppercase">
                Master Plan
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800">
                A LANDSCAPE CRAFTED FOR EVERYDAY DISCOVERY
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <img
                src={masterPlanImage}
                alt="the clan master plan"
                className="w-full h-auto object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsImageZoomed(true)}
              />
              <p className="text-center text-sm text-muted-foreground mt-3">Click image to zoom</p>
            </div>
          </div>
        </section>

        {/* Fullscreen Image Modal */}
        {isImageZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsImageZoomed(false)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl font-light hover:text-luxury-gold transition-colors z-50"
              onClick={() => setIsImageZoomed(false)}
            >
              ×
            </button>
            <img
              src={masterPlanImage}
              alt="the clan master plan - fullscreen"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

      

        {/* Section 5: Contact Us */}
        <Contact />
      </main>

      <FooterBar />

      {/* Download Brochure Modal */}
      <DownloadBrochureModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)}
        source="Brochure Download - Amenities Page"
      />
    </div>
  );
};

export default Amenities;

