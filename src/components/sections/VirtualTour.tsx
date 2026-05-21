const VirtualTour = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-relaxed text-green-800">
            A JOURNEY THROUGH YOUR <span className="text-luxury-gold">FUTURE HOME</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4 leading-relaxed">
            Experience the luxury of your new home through our immersive virtual tour
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_18px_30px_rgba(0,0,0,0.18),0_12px_12px_rgba(0,0,0,0.14)] border-4 border-luxury-gold">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/mXMWShQepFM?rel=0&modestbranding=1"
              title="The Clan Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
