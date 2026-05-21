import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/banners/Banner-2.jpg";
import banner2 from "@/banners/Banner-1.jpg";
import banner3 from "@/banners/Banner-3.jpg";
import banner4 from "@/banners/Banner-4.jpg";

// Mobile banners
import mobileBanner1 from "@/banners/Mobile app banner -2.jpg";
import mobileBanner2 from "@/banners/Mobile app banner -1.jpg";
import mobileBanner3 from "@/banners/Mobile app banner -3.jpg";
import mobileBanner4 from "@/banners/Mobile app banner -4.jpg";

const Hero = () => {
  const desktopBanners = [banner1, banner2, banner3, banner4];
  const mobileBanners = [
    mobileBanner1,
    mobileBanner2,
    mobileBanner3,
    mobileBanner4,
  ];
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop carousel auto-play (30s on first slide, 3s on others)
  useEffect(() => {
    const delay = desktopIndex === 0 ? 30000 : 3000;
    const id = setTimeout(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopBanners.length);
    }, delay);
    return () => clearTimeout(id);
  }, [desktopIndex, desktopBanners.length]);

  // Mobile carousel auto-play (30s on first slide, 3s on others)
  useEffect(() => {
    const delay = mobileIndex === 0 ? 30000 : 3000;
    const id = setTimeout(() => {
      setMobileIndex((prev) => (prev + 1) % mobileBanners.length);
    }, delay);
    return () => clearTimeout(id);
  }, [mobileIndex, mobileBanners.length]);

  const prevDesktopSlide = () => {
    setDesktopIndex(
      (prev) => (prev - 1 + desktopBanners.length) % desktopBanners.length,
    );
  };

  const nextDesktopSlide = () => {
    setDesktopIndex((prev) => (prev + 1) % desktopBanners.length);
  };

  const prevMobileSlide = () => {
    setMobileIndex(
      (prev) => (prev - 1 + mobileBanners.length) % mobileBanners.length,
    );
  };

  const nextMobileSlide = () => {
    setMobileIndex((prev) => (prev + 1) % mobileBanners.length);
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] mt-16 md:h-[calc(100vh-5rem)] md:mt-20 bg-luxury-green-dark overflow-hidden">
      {/* Desktop Banners */}
      <div className="absolute inset-0 hidden md:block">
        {desktopBanners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              i === desktopIndex ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ))}
      </div>

      {/* Mobile Banners Carousel */}
      <div className="absolute inset-0 md:hidden">
        {mobileBanners.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === mobileIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Mobile Banner ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
              draggable={false}
            />

            {/* Text Overlay for first slide */}
            {i === 0 && (
              <>
                {/* Top Gradient Overlay */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-luxury-green-dark/60 via-luxury-green-dark/30 to-transparent pointer-events-none"></div>

                {/* Top Content */}
                <div className="absolute top-6 right-4 flex items-center gap-3 pointer-events-none z-10">
                  <div className="w-12 h-[2px] bg-luxury-gold font-bold"></div>
                  <span className="font-serif text-3xl text-luxury-gold italic tracking-wide drop-shadow-lg font-bold">
                    Community
                  </span>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-luxury-green-dark/90 via-luxury-green-dark/50 to-transparent pointer-events-none"></div>

                {/* Bottom Content */}
                <div className="absolute bottom-20 left-4 right-4 pointer-events-none z-10">
                  <p className="font-serif text-xl text-luxury-gold font-bold tracking-[0.1em] uppercase leading-relaxed drop-shadow-md">
                    LIVE THE LEGACY OF
                  </p>
                  <p className="font-serif text-xl text-luxury-gold font-bold tracking-[0.1em] uppercase leading-relaxed drop-shadow-md">
                    COMMUNITY LIVING.
                  </p>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Mobile Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {mobileBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === mobileIndex
                  ? "bg-luxury-gold w-6"
                  : "bg-white/50 w-2 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          aria-label="Previous slide"
          onClick={prevMobileSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-luxury-green/60 border border-luxury-gold/40 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-luxury-gold" />
        </button>

        <button
          aria-label="Next slide"
          onClick={nextMobileSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-luxury-green/60 border border-luxury-gold/40 flex items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-luxury-gold" />
        </button>
      </div>

      {/* Desktop Controls */}
      <button
        aria-label="Previous slide"
        onClick={prevDesktopSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-luxury-gold" />
      </button>

      <button
        aria-label="Next slide"
        onClick={nextDesktopSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-luxury-green/80 border border-luxury-gold/60 items-center justify-center hover:bg-luxury-green-dark/80 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-luxury-gold" />
      </button>

      {/* Desktop Carousel Dots */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-2">
        {desktopBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => setDesktopIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === desktopIndex
                ? "bg-luxury-gold w-6"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
