import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Download } from "lucide-react";
import { toast } from "sonner";
import clanLogo from "@/assets/Clan.png";
import brochurePdf from "@/assets/The Clan E-Brochure-15 MB.pdf";
import { submitLeadForm } from "@/lib/paramantra";

interface DownloadBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const DownloadBrochureModal = ({
  isOpen,
  onClose,
  source = "Brochure Download",
}: DownloadBrochureModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLeadForm({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        source,
      });

      // Trigger the download after successful form submission
      toast.success("Thank you! Your download will start shortly.");
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = brochurePdf;
        link.download = "The-Clan-E-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 500);

      setFormData({ name: "", email: "", phoneNumber: "" });
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative bg-luxury-green rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
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
          <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/20 rounded-full flex items-center justify-center">
            <Download className="w-8 h-8 text-luxury-gold" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-gold mb-2">
            DOWNLOAD BROCHURE
          </h3>
          <p className="text-sm md:text-base text-white/90">
            Please share your details to download the brochure
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label
              className="text-sm font-medium text-white"
              htmlFor="download-name"
            >
              Full Name *
            </Label>
            <Input
              id="download-name"
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
              htmlFor="download-email"
            >
              Email Address *
            </Label>
            <Input
              id="download-email"
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
              htmlFor="download-phone"
            >
              Phone Number *
            </Label>
            <Input
              id="download-phone"
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
            className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-green-dark py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
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
                Processing...
              </span>
            ) : (
              <>
                <Download className="w-5 h-5" />
                DOWNLOAD BROCHURE
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DownloadBrochureModal;
