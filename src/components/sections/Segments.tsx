import { useRef } from "react";
import managedSpacesImg from "@/Gallery/02-gallery-02.jpg";
import facilityMgmtImg from "@/Gallery/03-gallery-03.jpg";
import residentialImg from "@/Gallery/10-gallery-10.jpg";
import commercialImg from "@/Gallery/21-gallery-21.jpg";
import hospitalityImg from "@/Gallery/25-gallery-25.jpg";

type SegmentItem = {
  title: string;
  image: string;
};

const items: SegmentItem[] = [
  { title: "MANAGED SPACES", image: managedSpacesImg },
  { title: "FACILITY MANAGEMENT", image: facilityMgmtImg },
  { title: "RESIDENTIAL", image: residentialImg },
  { title: "COMMERCIAL", image: commercialImg },
  { title: "HOSPITALITY", image: hospitalityImg },
];

const Segments = () => {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const node = scroller.current;
    if (!node) return;
    const step = node.clientWidth * 0.8;
    node.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] relative">
        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={() => scrollBy("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white hover:bg-white/20 transition"
        >
          <span className="text-2xl">‹</span>
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white hover:bg-white/20 transition"
        >
          <span className="text-2xl">›</span>
        </button>

        <style>{`
          /* Hide horizontal scrollbar for the segments scroller */
          .segments-scroller {
            scrollbar-width: none; /* Firefox */
          }
          .segments-scroller::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
        `}</style>
        <div
          ref={scroller}
          className="segments-scroller flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="relative min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] xl:min-w-[24%] snap-start"
            >
              <img
                src={it.image}
                alt={it.title}
                className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover rounded-md"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 md:bottom-5 left-4 md:left-6 right-4 md:right-6">
                <p className="font-serif text-white text-lg sm:text-xl md:text-2xl drop-shadow">
                  {it.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;


