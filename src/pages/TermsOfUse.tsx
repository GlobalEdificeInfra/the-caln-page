import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import creamBg from "@/assets/Cream BG.png";

type TermsSection = {
  title: string;
  body: string[];
};

const termsSections: TermsSection[] = [
  {
    title: "About Us",
    body: [
      "www.globaledifice.com is a site operated by Global Edifice and its group companies (that is, its affiliates, subsidiaries, ultimate holding company and its subsidiaries).",
      "Throughout the terms we use phrases such as “we”, “our”, “us”, or “Global Edifice”.",
    ],
  },
  {
    title: "Terms of Use",
    body: [
      "These terms of use (together with the documents referred to in them) set out the terms on which you may make use of our website whether as a guest or a registered user.",
      "By proceeding to use our site you confirm that you have read, understood and accepted these terms which shall continue to be the binding agreement between you and Global Edifice.",
    ],
  },
  {
    title: "Changes to Terms of Use",
    body: [
      "We may revise these terms from time to time and the revised terms will be deemed to apply at the relevant time in respect of your registration and use of our sites.",
      "Please check this page from time to time so as to take notice of any changes we make as they are binding on you.",
    ],
  },
  {
    title: "Accuracy of Information",
    body: [
      "We may update our site from time to time, and may change the content at any time. Although we make reasonable efforts to update the information on our sites, we make no representations, warranties or guarantees that the content on our sites is accurate, complete or up to date.",
      "The content on our sites is provided for general information only and is not intended to amount to advice on which you should rely.",
    ],
  },
  {
    title: "Accessing Our Websites",
    body: [
      "Our sites are made available free of charge. If you are provided with a user identification code, password or other piece of security information, you must treat such information as confidential.",
      "You must not misuse our sites by knowingly introducing viruses or other malicious or technologically harmful material. We will report any such breach to the relevant law enforcement authorities.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    body: [
      "We are the owners or the licensees of all intellectual property rights in our sites, and in the material published on them. You must not use any part of the content on our sites for commercial purposes without obtaining a licence to do so from us.",
      "If you print off, copy or download any part of our sites in breach of these terms of use, your right to use our sites will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our sites or any content on them, whether express or implied.",
      "We will not be liable to any user for any loss or damage arising under or in connection with use of, or inability to use, our sites.",
    ],
  },
  {
    title: "Links",
    body: [
      "Where our sites contain links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as endorsement by us of those linked websites.",
    ],
  },
  {
    title: "Applicable Law",
    body: [
      "These terms of use, their subject matter and their formation, are governed by Indian law. You and we both agree that the courts of Karnataka, India will have exclusive jurisdiction.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have any queries regarding our terms of use, the practices of this site, or your dealings with this site, please email info@globaledifice.com.",
    ],
  },
];

const TermsOfUse = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="pt-16 md:pt-20 overflow-hidden">
        <section
          className="py-12 md:py-20"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 space-y-8">
            <div className="text-center space-y-4">
              <p className="font-serif text-xl md:text-2xl text-luxury-gold tracking-widest uppercase">
                Terms of Use
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                Welcome to Global Edifice
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Please read these terms of use carefully before using this site. By accessing or using
                the site you acknowledge that you have read, understood and accepted these terms.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 bg-white">
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 space-y-8">
            {termsSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h2 className="font-serif text-2xl md:text-3xl text-luxury-green font-semibold">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterBar />
    </div>
  );
};

export default TermsOfUse;

