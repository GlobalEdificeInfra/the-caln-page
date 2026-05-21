import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import UnitPlans from "./pages/UnitPlans";
import GalleryPage from "./pages/Gallery";
import ProjectStatus from "./pages/ProjectStatus";
import LocationPage from "./pages/Location";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import EnquireNow from "@/components/EnquireNow";
import ConversalesWidget from "@/components/ConversalesWidget";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <EnquireNow />
        <FloatingWhatsAppButton />
        <ConversalesWidget />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/unit-plans" element={<UnitPlans />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/project-status" element={<ProjectStatus />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
