const WHATSAPP_NUMBER = "918951570039";
const WHATSAPP_MESSAGE =
  "Hi, I’m interested in Global Edifice The Clan project.  \nCould you please share more details?";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-[2.05rem] w-[2.05rem] shrink-0 scale-[1.14]"
    fill="currentColor"
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.49 1.34 5.02L2 22l5.1-1.31A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.19-2.95-7.09ZM12 20.31a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.03.78.81-2.95-.2-.31A8.27 8.27 0 0 1 12 3.69a8.3 8.3 0 0 1 5.89 14.2A8.24 8.24 0 0 1 12 20.31Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.28.19-.52.06-.25-.12-1.03-.38-1.96-1.2-.73-.65-1.22-1.44-1.36-1.69-.14-.24-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.06s.88 2.39 1 2.56c.12.16 1.72 2.62 4.16 3.67.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);

const FloatingWhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-24 left-4 z-[55] flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_24px_rgba(37,211,102,0.32)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] md:bottom-6 md:left-6"
    >
      <WhatsAppIcon />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
