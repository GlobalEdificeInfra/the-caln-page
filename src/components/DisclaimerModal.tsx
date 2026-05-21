import { Dialog, DialogContent } from "@/components/ui/dialog";
import greenBg from "@/assets/Green BG.jpg";

interface DisclaimerModalProps {
  open: boolean;
  onProceed: () => void;
}

const DisclaimerModal = ({ open, onProceed }: DisclaimerModalProps) => {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-w-[700px] p-0 border-2 border-luxury-gold overflow-hidden [&>button]:hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="p-8 md:p-12">
          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl text-center text-luxury-gold italic font-bold mb-6">
            Disclaimer
          </h2>

          {/* RERA Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1e3a4c] rounded-full flex flex-col items-center justify-center p-2 border-2 border-[#c5b07a]">
              {/* Striped semicircle top */}
              <div className="w-12 h-5 md:w-14 md:h-6 overflow-hidden mb-1">
                <div
                  className="w-full h-10 md:h-12 rounded-t-full"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, #c5b07a, #c5b07a 1px, transparent 1px, transparent 4px)",
                  }}
                />
              </div>
              <div className="text-[#c5b07a] font-serif font-bold text-sm md:text-base tracking-wider">
                RERA
              </div>
              {/* Decorative line */}
              <div className="flex items-center gap-1 my-0.5">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#c5b07a]" />
                <div className="w-8 h-[1px] bg-[#c5b07a]" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#c5b07a]" />
              </div>
              <div className="text-[#c5b07a] text-[5px] md:text-[6px] text-center leading-tight">
                REAL ESTATE
                <br />
                REGULATORY AUTHORITY
                <br />
                KARNATAKA
              </div>
            </div>
          </div>

          {/* Disclaimer Text */}
          <p className="text-center text-xs md:text-sm leading-relaxed text-luxury-gold/90 mb-6">
            The Clan abides by the Real Estate Regulatory Act (RERA). All
            information available on this website is not to be mistaken as a
            warranty of any sorts, and is purely to educate the viewers on The
            Clan. The imagery that is seen on this website may not imitate the
            genuine product and are only for show purposes. The photographs of
            the locations shown are only for reference and may be digitally
            altered. We do not claim any responsibility for the viewer making
            any decisions based purely on the information available on this
            website. We request the viewers to always make an independent
            enquiry with The Clan before making any concrete decisions. To view
            our privacy policy{" "}
            <a
              href="/privacy-policy"
              className="underline hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open("/privacy-policy", "_blank");
              }}
            >
              click here
            </a>
          </p>

          {/* Proceed Button */}
          <div className="flex justify-center">
            <button
              onClick={onProceed}
              className="font-serif text-base md:text-lg font-bold text-luxury-gold hover:text-white transition-colors underline underline-offset-4"
            >
              Proceed
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
