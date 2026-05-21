import { useEffect, useState } from "react";
import interiorImage from "@/Gallery/20-gallery-20.jpg";
import exteriorImage from "@/Gallery/12-gallery-12.jpg";
import amenitiesImage from "@/Gallery/07-gallery-07.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: interiorImage, number: "01", label: "Interior" },
    { image: exteriorImage, number: "02", label: "Exterior" },
    { image: amenitiesImage, number: "03", label: "Amenities" },
  ];

  // Auto-slide effect for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-24 bg-[#f5f1e8] overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-green-800">
            A GLIMPSE INTO THE LIFE YOU <span className="text-luxury-gold">DESERVE</span>
          </h2>
        </div>

         {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="relative">
                  {/* Number and Label Above Image */}
                  <div className="relative flex items-start text-left mb-2 select-none h-16">
                    <span className="font-serif text-7xl leading-none text-luxury-green/20 absolute">
                      {slide.number}
                    </span>
                    <span className="font-sans text-sm text-luxury-green relative z-10 mt-7 ml-2">
                      {slide.label}
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-luxury-green w-6"
                    : "bg-luxury-green/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {/* Interior */}
          <div className="cursor-pointer">
            <div className="relative flex items-start text-left mb-3 select-none h-20">
              <span className="font-serif text-8xl leading-none text-luxury-green/20 absolute">01</span>
              <span className="font-sans text-base text-luxury-green relative z-10 mt-10 ml-3">Interior</span>
            </div>
            <div className="overflow-hidden rounded-md group">
              <img
                src={interiorImage}
                alt="Interior"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Exterior */}
          <div className="cursor-pointer md:translate-y-6 lg:translate-y-12">
            <div className="relative flex items-start text-left mb-3 select-none h-20">
              <span className="font-serif text-8xl leading-none text-luxury-green/20 absolute">02</span>
              <span className="font-sans text-base text-luxury-green relative z-10 mt-10 ml-3">Exterior</span>
            </div>
            <div className="overflow-hidden rounded-md group">
              <img
                src={exteriorImage}
                alt="Exterior"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Amenities */}
          <div className="cursor-pointer">
            <div className="relative flex items-start text-left mb-3 select-none h-20">
              <span className="font-serif text-8xl leading-none text-luxury-green/20 absolute">03</span>
              <span className="font-sans text-base text-luxury-green relative z-10 mt-10 ml-3">Amenities</span>
            </div>
            <div className="overflow-hidden rounded-md group">
              <img
                src={amenitiesImage}
                alt="Amenities"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
