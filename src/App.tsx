import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const PAGE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Professional Makeup Artist",
    description:
      "Book Anuraag Kaushik for bridal, engagement, party, and fashion makeup with premium products and a modern finish.",
  },
  "/services": {
    title: "Makeup Services",
    description:
      "Explore bridal, occasion, and premium makeup services by Anuraag Kaushik with transparent pricing and tailored looks.",
  },
  "/checkout": {
    title: "Checkout",
    description:
      "Confirm your makeup booking details and complete checkout for Anuraag Kaushik's professional makeup services.",
  }, 
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with Anuraag Kaushik for bookings, bridal inquiries, collaborations, and makeup service consultations.",
  },
  "/about-us": {
    title: "About",
    description:
      "Learn about Anuraag Kaushik's artistry, signature style, and experience in luxury bridal and editorial makeup.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Read how Anuraag Kaushik handles, stores, and protects your personal information and booking details.",
  },
  "/terms-of-service": {
    title: "Terms of Service",
    description:
      "Review booking terms, policies, and service conditions for Anuraag Kaushik's makeup services.",
  },
};

const BRAND_NAME = "Anuraag Kaushik";

const RouteSeoUpdater = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = PAGE_SEO[pathname] ?? {
      title: "Page Not Found",
      description: "The page you are looking for could not be found.",
    };

    document.title = `${seo.title} | ${BRAND_NAME}`;

    const upsertMeta = (
      selector: string,
      key: "name" | "property",
      value: string,
      content: string,
    ) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(key, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    upsertMeta('meta[name="description"]', "name", "description", seo.description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", `${seo.title} | ${BRAND_NAME}`);
    upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", `${seo.title} | ${BRAND_NAME}`);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteSeoUpdater />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about/about-us" element={<Navigate to="/about-us" replace />} />
            <Route path="/about/our-story" element={<Navigate to="/about-us" replace />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
