import fbIcon from "@/icons/facebook-gold.png";
import igIcon from "@/icons/instagram-Gold.png";
import liIcon from "@/icons/linkedin-gold.png";

const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: fbIcon,
      url: "https://www.facebook.com/profile.php?id=61580168063928",
      alt: "Facebook",
    },
    {
      icon: igIcon,
      url: "https://www.instagram.com/globaledifice_theclan/",
      alt: "Instagram",
    },
    {
      icon: liIcon,
      url: "https://www.linkedin.com/company/global-edifice-top-construction-company-in-bangalore",
      alt: "LinkedIn",
    },
  ];
  return (
    <footer className="bg-black text-luxury-gold overflow-hidden pb-16 lg:pb-0">
      <div className="mx-auto w-full max-w-[1000px] px-4 md:px-8 py-4 md:py-8">
        <p className="text-center text-[10px] sm:text-sm md:text-base leading-relaxed">
          The Global Edifice The Clan: - Sy. No. 310/2, Bagalur - Sarjapur Road,
          Sarjapura, Bengaluru, Karnataka - 562 125.
          <br />
          PRM/KA/1251/308/PR/091025/008153
          <br />
          Available at RERA Website:{" "}
          <a
            href="https://rera.karnataka.gov.in"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            https://rera.gov.in
          </a>
        </p>

        <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 md:gap-3">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-8 h-8 md:w-9 md:h-9 items-center justify-center hover:opacity-70 transition-opacity"
              aria-label={social.alt}
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
      {/* separator line */}
      <div className="h-[1px] md:h-[2px] w-full bg-luxury-green/40 flex items-center justify-center" />

      {/* bottom row with copyright and links */}
      <div className="mt-2 md:mt-3 pb-2 md:pb-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-[12px] sm:text-[13px] md:text-[14px] opacity-90 px-4 md:px-16 gap-2 md:gap-0">
        <p className="text-center">
          Copyright © {currentYear} Global Edifice Infra. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2 md:space-x-3">
          <a className="hover:underline whitespace-nowrap" href="/terms-of-use">
            Terms Of Use
          </a>

          <span className="opacity-60">|</span>
          <a
            className="hover:underline whitespace-nowrap"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
