import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import clanLogo from "@/assets/Clan.png";
import geLogo from "@/assets/GE - LOGO Gold.png";
import greenBg from "@/assets/Green BG.jpg";
import EnquireNow from "@/components/EnquireNow";

const PRIMARY_CONTACT = {
  href: "tel:+919411614444",
  label: "941 161 4444",
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Amenities", href: "/amenities" },
    { label: "Unit Plans", href: "/unit-plans" },
    { label: "Gallery", href: "/gallery" },
    { label: "Project Status", href: "/project-status" },
    { label: "Location", href: "/location" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const handleMenuClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-luxury-green/40 backdrop-blur-sm" />
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-12 2xl:px-20 max-w-full relative z-10">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 xl:h-22 w-full">
            {/* Left Logo - The Clan */}
            <div className="flex-shrink-0">
              <a href="/" className="cursor-pointer">
                <img
                  src={clanLogo}
                  alt="The Clan - Community Living Tree"
                  className="h-8 sm:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-xs lg:text-sm xl:text-base 2xl:text-lg text-luxury-gold hover:text-luxury-gold/80 transition-colors tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right - Phone & Logo - Desktop Only */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0">
              {/* Phone Number */}
              <a
                href={PRIMARY_CONTACT.href}
                className="flex items-center gap-1.5 xl:gap-2 text-luxury-gold hover:text-luxury-gold/80 transition-colors"
              >
                <div className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-full border-2 border-luxury-gold flex items-center justify-center">
                  <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4" />
                </div>
                <span className="font-sans text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold whitespace-nowrap">
                  {PRIMARY_CONTACT.label}
                </span>
              </a>

              {/* Divider */}
              <div className="w-px h-8 xl:h-10 bg-luxury-gold/30" />

              {/* Logo */}
              <img
                src={geLogo}
                alt="Global Edifice"
                className="h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto"
              />
            </div>

            {/* Mobile Right Section - Logo & Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              {/* Global Edifice Logo - Mobile Only */}
              <img
                src={geLogo}
                alt="Global Edifice"
                className="h-16 sm:h-20 w-auto"
              />
              {/* Mobile Menu Button - 3 Gold Lines */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex flex-col gap-1 sm:gap-1.5 p-1.5 sm:p-2 hover:opacity-80 transition-opacity"
                aria-label="Open menu"
              >
                <span className="w-5 sm:w-6 h-0.5 bg-luxury-gold rounded-full"></span>
                <span className="w-5 sm:w-6 h-0.5 bg-luxury-gold rounded-full"></span>
                <span className="w-5 sm:w-6 h-0.5 bg-luxury-gold rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Bar - Call Now & Enquire Now */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-luxury-green/60 backdrop-blur-sm" />
        <div className="relative z-10 flex">
          {/* Call Now Button */}
          <a
            href={PRIMARY_CONTACT.href}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-luxury-gold font-sans font-semibold text-sm uppercase tracking-wider border-r border-luxury-gold/30 hover:bg-luxury-gold/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Get Details Button - Opens Enquire Popup */}
          <button
            onClick={() => setShowEnquirePopup(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-luxury-gold font-sans font-semibold text-sm uppercase tracking-wider hover:bg-luxury-gold/10 transition-colors"
          >
            Get Details
          </button>
        </div>
      </div>

      {/* Enquire Now Popup - Triggered from Get Details button */}
      <EnquireNow
        externalOpen={showEnquirePopup}
        onExternalClose={() => setShowEnquirePopup(false)}
      />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-luxury-green-dark/30 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
            <a href="/" className="cursor-pointer">
              <img
                src={clanLogo}
                alt="The Clan"
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col py-6 px-6 space-y-0 flex-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="font-sans text-lg text-luxury-gold hover:bg-luxury-gold/10 py-4 px-4 rounded-sm transition-colors border-b border-luxury-gold/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer Logo */}
          <div className="pb-4 8pt-0 flex justify-center">
            <img
              src={geLogo}
              alt="Global Edifice"
              className="h-20 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
