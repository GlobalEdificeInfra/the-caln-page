import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import creamBg from "@/assets/Cream BG.png";

type PolicySection = {
  title: string;
  body: string[];
};

const policySections: PolicySection[] = [
  {
    title: "Privacy Policy",
    body: [
      'Global Edifice and its group companies (that is, our subsidiaries, our ultimate holding company and its subsidiaries) ("we", "our", "us", or "Global Edifice") are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.globaledifice.com, or any other of our websites to which this privacy policy applies ("Sites") or otherwise providing us with information you are accepting and consenting to the practices described in this policy.',
    ],
  },
  {
    title: "Personal Identification Information",
    body: [
      "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.",
    ],
  },
  {
    title: "Non-Personal Identification Information",
    body: [
      "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means the type of connection to our Sites, such as the operating system and the Internet service providers utilised and other similar information.",
    ],
  },
  {
    title: "Web Browser Cookies",
    body: [
      'Our Site may use "cookies" to enhance User experience. User\'s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert the Users when cookies are being sent. If they do so, note that some parts of the Site may not function properly. This is a standard operating procedure that is used across the internet.',
    ],
  },
  {
    title: "How We Use Collected Information",
    body: [
      "Global Edifice may collect and use User's personal information for the following purposes:",
      "To improve customer service: Information provided by Users helps us respond to the customer service requests and support needs, more efficiently.",
      "To personalise User experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.",
      "To improve our Site: We may use feedback provided by the User/s to improve our products and services.",
      "To run a promotion, contest, survey or other Site feature.",
      "To send the User/s information they agreed to receive about topics of interest to them.",
      "To send periodic emails.",
    ],
  },
  {
    title: "How we protect User's information",
    body: [
      "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure or destruction of User's personal information and data stored on our Site. As with data security, there are limits to its effectiveness and we indemnify ourselves in the event of an attack that is difficult to defend against. We also will do our best to retrieve any data that is lost as per available resources.",
    ],
  },
  {
    title: "Sharing personal information of Users",
    body: [
      "We do not sell, trade, or rent User's personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding User's with our subsidiaries, our business partners, trusted affiliates and advertisers for the purposes outlined above.",
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    body: [
      "Global Edifice shall update this privacy policy at its sole discretion. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. The Users hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.",
    ],
  },
  {
    title: "Your Acceptance of these Terms",
    body: [
      "By using this Site, the Users signify their acceptance of this policy as may be modified from time to time. Users are advised not to access this site if they do not agree to our privacy policy. The above mentioned privacy policy shall be applicable to the information and data collected by our call centres as well.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have any queries regarding our Terms of Use, the practices of this site, or your dealings with this site, please email your queries at info@globaledifice.com",
      "Thank you for visiting our websites.",
    ],
  },
];

const PrivacyPolicy = () => {
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
                Privacy Policy
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
                Welcome to Global Edifice
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                Please read these terms of use carefully before using this site.
                By accessing or using the site you acknowledge that you have
                read, understood and accepted these terms.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 bg-white">
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 space-y-8">
            {policySections.map((section) => (
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

export default PrivacyPolicy;
