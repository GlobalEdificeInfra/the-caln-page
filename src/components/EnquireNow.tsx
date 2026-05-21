import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Download } from "lucide-react";
import { toast } from "sonner";
import clanLogo from "@/assets/Clan.png";
import DownloadBrochureModal from "@/components/DownloadBrochureModal";
import { submitLeadForm } from "@/lib/paramantra";

interface EnquireNowProps {
  externalOpen?: boolean;
  onExternalClose?: () => void;
  onSuccess?: () => void;
}

const EnquireNow = ({
  externalOpen,
  onExternalClose,
  onSuccess,
}: EnquireNowProps = {}) => {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Modal should open if either external control says open OR internal state says open
  const isEnquireModalOpen = externalOpen || isEnquireOpen;

  const handleEnquireClose = () => {
    // Close both internal state and call external close if provided
    setIsEnquireOpen(false);
    if (onExternalClose) {
      onExternalClose();
    }
  };

  const openEnquireModal = () => {
    setIsEnquireOpen(true);
  };

  const openDownloadModal = () => {
    setIsDownloadOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLeadForm({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        source: "Enquiry Form",
      });

      toast.success("Thank you! We'll contact you soon.");
      setFormData({ name: "", email: "", phoneNumber: "" });

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        setIsEnquireOpen(false);
        if (onExternalClose) {
          onExternalClose();
        }
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Enquire Now Button - Fixed on right edge - Desktop Only */}
      <button
        onClick={openEnquireModal}
        aria-label="Enquire Now"
        type="button"
        className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-[60] px-2.5 py-2 bg-luxury-green-dark text-luxury-gold text-xs border-l border-luxury-gold/60 rounded-l-md shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors tracking-wide cursor-pointer"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        ENQUIRE NOW
      </button>

      {/* Download Brochure Button - Mobile (bottom right, above bottom bar) */}
      <button
        onClick={openDownloadModal}
        aria-label="Download Brochure"
        type="button"
        className="lg:hidden fixed right-4 bottom-24 z-50 w-12 h-12 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green transition-colors flex items-center justify-center border-2 border-luxury-gold/60"
      >
        <Download className="w-5 h-5" />
      </button>

      {/* Download Brochure Button - Desktop (bottom right corner) */}
      <button
        onClick={openDownloadModal}
        aria-label="Download Brochure"
        type="button"
        className="hidden lg:flex fixed right-6 bottom-24 z-50 w-14 h-14 bg-luxury-green-dark text-luxury-gold rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:bg-luxury-green hover:scale-110 transition-all duration-300 items-center justify-center border-2 border-luxury-gold/60"
      >
        <Download className="w-6 h-6" />
      </button>

      {/* Enquire Now Modal */}
      {isEnquireModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleEnquireClose();
            }
          }}
        >
          <div className="relative bg-luxury-green rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={handleEnquireClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="text-center mb-6">
              <img
                src={clanLogo}
                alt="The Clan"
                className="h-12 md:h-16 mx-auto mb-4"
              />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-gold mb-2">
                ENQUIRE NOW
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Share your details and we'll get back to you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="enquire-name"
                >
                  Full Name *
                </Label>
                <Input
                  id="enquire-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-full bg-white/10 border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="enquire-email"
                >
                  Email Address *
                </Label>
                <Input
                  id="enquire-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-full bg-white/10 border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  className="text-sm font-medium text-white"
                  htmlFor="enquire-phone"
                >
                  Phone Number *
                </Label>
                <Input
                  id="enquire-phone"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="rounded-full bg-white/10 border-white/30 text-white placeholder:text-white/70 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                  placeholder="+919876543210"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark py-3 rounded-full font-semibold transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "SUBMIT ENQUIRY"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Download Brochure Modal */}
      <DownloadBrochureModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </>
  );
};

export default EnquireNow;
