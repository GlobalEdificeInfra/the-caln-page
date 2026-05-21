import Header from "@/components/Header";
import greenBg from "@/assets/Green BG.jpg";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const ProjectInfo = () => {
  return (
    <div className="min-h-screen bg-black text-primary-foreground">
      <Header />
      {/* Top banner just for visual consistency */}
      <section
        className="pt-20 md:pt-28 pb-10"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-5xl text-center md:text-left">
            Project Information
          </h1>
          <p className="font-sans text-base md:text-lg opacity-90 mt-2 max-w-3xl">
            Official address, statutory details and quick links relevant to The Clan by Global
            Edifice.
          </p>
        </div>
      </section>

      {/* Information strip content */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <p className="font-sans text-sm md:text-base opacity-80 text-center md:text-left">
            The Clan by Global Edifice: VQ5W+3VM, Bagalur – Sarjapur Rd, Sarjapura, Bengaluru,
            Karnataka – 562 125. PRM/KA/1251/308/PR/091025/008153. Available at
            <a
              href="https://rera.karnataka.gov.in"
              target="_blank"
              rel="noreferrer"
              className="underline ml-1"
            >
              https://rera.karnataka.gov.in
            </a>
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-luxury-gold text-luxury-gold"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>

          <div className="mt-6 text-center md:text-right text-xs opacity-70">
            <a className="mx-2 hover:underline" href="#">
              Terms & Conditions
            </a>
            <a className="mx-2 hover:underline" href="#">
              Disclaimer
            </a>
            <a className="mx-2 hover:underline" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectInfo;


