import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import aerialNight from "@/Gallery/02-gallery-02.jpg";
import greenBg from "@/assets/Green BG.jpg";
import creamBg from "@/assets/Cream BG.png";

// Updated, actual project imagery
import masterBedroom from "@/assets/Clubhouse.png";

// Full gallery images (29)
import gallery01 from "@/Gallery/01-gallery-01.jpg";
import gallery02 from "@/Gallery/02-gallery-02.jpg";
import gallery03 from "@/Gallery/03-gallery-03.jpg";
import gallery05 from "@/Gallery/05-gallery-05.jpg";
import gallery06 from "@/Gallery/06-gallery-06.jpg";
import gallery07 from "@/Gallery/07-gallery-07.jpg";
import gallery08 from "@/Gallery/08-gallery-08.jpg";
import gallery09 from "@/Gallery/09-gallery-09.jpg";
import gallery11 from "@/Gallery/11-gallery-11.jpg";
import gallery12 from "@/Gallery/12-gallery-12.jpg";
import gallery13 from "@/Gallery/13-gallery-13.jpg";

import gallery15 from "@/Gallery/15-gallery-15.jpg";
import gallery16 from "@/Gallery/16-gallery-16.jpg";
import gallery17 from "@/Gallery/17-gallery-17.jpg";
import gallery18 from "@/Gallery/18-gallery-18.jpg";
import gallery19 from "@/Gallery/19-gallery-19.jpg";
import gallery20 from "@/Gallery/20-gallery-20.jpg";

const galleryImages = [
  { image: gallery01, title: "Evening Tower Balconies" },
  { image: gallery02, title: "Sculpted Palm Court Water Feature" },
  { image: gallery03, title: "Pergola Seating Promenade" },
  { image: gallery05, title: "Indoor Table Tennis Lounge" },
  { image: gallery06, title: "Billiards Table Top View" },
  { image: gallery07, title: "Billiards Lounge with Bar Seating" },
  { image: gallery08, title: "Banquet Hall Table Setup" },
  { image: gallery09, title: "State-of-the-Art Fitness Studio" },
  { image: gallery11, title: "Community Entrance Boulevard" },
  { image: gallery12, title: "Pool Deck with Tower Backdrop" },
  { image: gallery13, title: "Outdoor Fitness Equipment Lawn" },
  { image: gallery15, title: "Cricket Practice Nets" },
  { image: gallery16, title: "Lily Pond Water Garden" },
  { image: gallery17, title: "Open-Air Yoga & Meditation Deck" },
  { image: gallery18, title: "Double-Height Lobby Lounge" },
  { image: gallery19, title: "Skyline View Dining Lounge" },
  { image: gallery20, title: "Luxury Living-Dining Suite" },
];

const GalleryPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % galleryImages.length;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Gallery */}
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
                GALLERY
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: A Journey Through Your Future Home - White BG */}
        <section className="py-10 md:py-20 lg:py-24  overflow-hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative border-4 border-luxury-gold rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={masterBedroom} 
                  alt="Master Bedroom Suite" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded">
                  <p className="font-serif text-white text-sm sm:text-base md:text-lg lg:text-xl">Clubhouse</p>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 md:space-y-6 text-center lg:text-left px-2 md:px-0">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-gold uppercase leading-tight">
                OUR CLUBHOUSE
                </h2>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-tight">
                THE HEARTBEAT OF COMMUNITY LIVING
                </h2>
                <div className="space-y-4 md:space-y-5">
                  <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  Step into a world of indulgence at our grand 16,000 sq.ft. luxury clubhouse
                  with 50+ modern amenities.
                  </p>
                  <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  A three-level retreat of recreation and lifestyle. From the glow of terrace
barbecues to the laughter in the games lounge, from the gym's vibrant energy
to the calm of indoor courts and yoga decks. Our clubhouse stands as the true
pulse of The Clan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Essence of the clan - Green BG Gallery */}
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
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-luxury-gold uppercase">
                THE ESSENCE OF THE CLAN
              </h2>
              <p className="mt-4 max-w-3xl mx-auto font-sans text-sm sm:text-base md:text-lg text-green-800">
                Explore every angle of your future community through a curated visual journey&mdash;from grand entrances 
                and landscaped avenues to vibrant amenity zones and serene interiors.
              </p>
            </div>

            {/* Masonry-style responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              {galleryImages.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold cursor-pointer border-3 border-luxury-gold/70 hover:border-luxury-gold transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 sm:h-40 md:h-44 lg:h-48 xl:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-xl">
                    <p className="w-full px-2 pb-2 text-left font-serif text-xs sm:text-sm text-white/90">
                      {item.title}
                    </p>
                  </div>
                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox overlay */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-2xl sm:text-3xl font-light transition-colors z-50"
              aria-label="Close gallery preview"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-luxury-gold/80 flex items-center justify-center text-white text-xl sm:text-2xl transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>

            <div 
              className="max-w-6xl w-full mx-12 sm:mx-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[activeIndex].image}
                alt={galleryImages[activeIndex].title}
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="mt-4 text-center font-serif text-base sm:text-lg md:text-xl text-white">
                {galleryImages[activeIndex].title}
              </p>
              <p className="mt-2 text-center text-sm text-white/60">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-luxury-gold/80 flex items-center justify-center text-white text-xl sm:text-2xl transition-colors"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        )}

        {/* Section 4: Contact Us */}
        <Contact />
      </main>

      {/* Section 5: Footer */}
      <FooterBar />
    </div>
  );
};

export default GalleryPage;

