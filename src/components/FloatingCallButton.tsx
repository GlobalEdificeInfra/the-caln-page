import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+918884689689"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#3d4f5f] hover:bg-[#2d3f4f] text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
    >
      <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center">
        <Phone className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-base font-semibold tracking-wide">+91-941 161 4444</span>
        <span className="font-sans text-xs text-white/70 uppercase tracking-wider">Call to Book Now</span>
      </div>
    </a>
  );
};

export default FloatingCallButton;

