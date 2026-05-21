import creamBg from "@/assets/Cream BG.png";
import { MapPin, Phone, Mail } from "lucide-react";

const GetInTouch = () => {
  return (
    <section
      className="py-10 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${creamBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">
          {/* Left - Contact Details */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="px-2 md:px-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-green-800 mb-4 md:mb-6">
                GET IN <span className="text-luxury-gold">TOUCH</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                We'd love to hear from you. Whether you have a question about
                features, plans, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 px-2 md:px-0">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-green flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-green-800 mb-2">
                    Address
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    Sy. No. 310/2, Bagalur - Sarjapur Road, Sarjapura,
                    Bengaluru, Karnataka - 562 125.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-green flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-green-800 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919411614444"
                    className="font-sans text-sm md:text-base text-muted-foreground transition-colors"
                  >
                    941 161 4444
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-luxury-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-luxury-gold" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-green-800 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:Info@GlobalEdificeTheClan.in"
                    className="font-sans text-sm md:text-base text-muted-foreground transition-colors break-all"
                  >
                    Info@GlobalEdificeTheClan.in
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-luxury-green/10 backdrop-blur-sm rounded-md p-4 md:p-6 lg:p-8 mt-8">
              <h3 className="font-serif text-lg md:text-xl font-bold text-luxury-gold mb-3 md:mb-4">
                Site Office Hours
              </h3>
              <div className="space-y-2 font-sans text-sm md:text-base text-muted-foreground">
                <p className="flex justify-between gap-2">
                  <span className="font-semibold">Monday - Saturday:</span>
                  <span>10:00 AM - 6:30 PM</span>
                </p>
                <p className="flex justify-between gap-2">
                  <span className="font-semibold">Sunday:</span>
                  <span>10:00 AM - 6:30 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 rounded-xl overflow-hidden shadow-2xl border-4 border-luxury-gold/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.779236736977!2d77.7976226!3d12.8575306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73717756af67%3A0x1e0d3335cf510929!2sGlobal%20Edifice%20The%20Clan!5e0!3m2!1sen!2sin!4v1764101281718!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Edifice The Clan Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
