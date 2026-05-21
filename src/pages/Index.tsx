import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import LuxuryIntro from "@/components/sections/LuxuryIntro";
import Features from "@/components/sections/Features";
import FloorPlans from "@/components/sections/FloorPlans";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import VirtualTour from "@/components/sections/VirtualTour";
import Lifestyle from "@/components/sections/Lifestyle";
import Calculator from "@/components/sections/Calculator";
import GetInTouch from "@/components/sections/GetInTouch";
import Contact from "@/components/sections/Contact";
import FooterBar from "@/components/sections/FooterBar";
import EnquireNow from "@/components/EnquireNow";
import DisclaimerModal from "@/components/DisclaimerModal";

const Index = () => {
  const [showAutoEnquire, setShowAutoEnquire] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasShownPopup = sessionStorage.getItem("clan_enquire_shown");

    if (!hasShownPopup) {
      // Show popup after 4 seconds
      const timer = setTimeout(() => {
        setShowAutoEnquire(true);
        sessionStorage.setItem("clan_enquire_shown", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Footer visibility detection for disclaimer
  useEffect(() => {
    const hasShownDisclaimer = sessionStorage.getItem("clan_disclaimer_shown");

    if (hasShownDisclaimer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User has scrolled to footer, show disclaimer
            setShowDisclaimer(true);
            sessionStorage.setItem("clan_disclaimer_shown", "true");
            // Disconnect observer after showing
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCloseAutoEnquire = () => {
    setShowAutoEnquire(false);
  };

  const handleDisclaimerProceed = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      {/* Hero section - handles its own padding for header */}
      <Hero />
      <main className="overflow-x-hidden w-full">
        <LuxuryIntro />
        <Features />
        <VirtualTour />
        <FloorPlans />
        <Gallery />
        <Location />
        <FAQ />

        <Lifestyle />

        <Calculator />
        <GetInTouch />
        <Contact />
      </main>

      <div ref={footerRef}>
        <FooterBar />
      </div>

      {/* Disclaimer Modal - Shows when user scrolls to footer */}
      <DisclaimerModal
        open={showDisclaimer}
        onProceed={handleDisclaimerProceed}
      />

      {/* Auto Enquire Popup - Shows after 4 seconds on first visit */}
      <EnquireNow
        externalOpen={showAutoEnquire}
        onExternalClose={handleCloseAutoEnquire}
      />
    </div>
  );
};

export default Index;
