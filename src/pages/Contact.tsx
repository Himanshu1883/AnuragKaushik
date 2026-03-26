import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaInstagram } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const bgImages = [
    "/bridal.jpg",
    "/celeb.jpg",
    "/prewed.jpeg",
    "/con1.jpg",
    "/con2.jpg",
    "/con3.jpg",
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Header with fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="pt-20">
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════ */}
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{ background: "#b9872e" }}
        >
          {/* ── DESKTOP image layout (md+) ── */}
          <div className="hidden md:block absolute inset-0">
            {/* Left full-height strip with tint */}
            <div className="absolute top-0 left-0 h-full w-[22%]">
              <img
                src={bgImages[0]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Right full-height strip with tint */}
            <div className="absolute top-0 right-0 h-full w-[22%]">
              <img
                src={bgImages[3]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Top-center arch portrait with tint */}
            <div
              className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-b-[50%]"
              style={{ top: 0, width: "21%", height: "48%" }}
            >
              <img
                src={bgImages[1]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Bottom-left arch portrait with tint */}
            <div
              className="absolute overflow-hidden rounded-t-[50%]"
              style={{ bottom: 0, left: "23%", width: "19%", height: "46%" }}
            >
              <img
                src={bgImages[4]}
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Bottom-right arch portrait with tint */}
            <div
              className="absolute overflow-hidden rounded-t-[50%]"
              style={{ bottom: 0, right: "23%", width: "19%", height: "44%" }}
            >
              <img
                src={bgImages[5]}
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Cinematic overlays */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 68% 65% at 50% 50%, transparent 15%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.60) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 55% at 50% 52%, rgba(0,0,0,0.45) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,135,46,0.18) 0%, transparent 50%, rgba(185,135,46,0.12) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 18%, rgba(0,0,0,0.22) 30%, rgba(0,0,0,0.22) 70%, transparent 82%)",
              }}
            />
          </div>

          {/* ── MOBILE image layout (< md) ── */}
          <div className="md:hidden absolute inset-0">
            {/* Base warm fill */}
            <div
              className="absolute inset-0"
              style={{ background: "#2a1a06" }}
            />

            {/* Left half portrait with tint */}
            <div className="absolute top-0 left-0 w-1/2 h-full">
              <img
                src={bgImages[0]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
            </div>

            {/* Right half portrait with tint */}
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src={bgImages[3]}
                alt=""
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
            </div>

            {/* Dark overlay so text is readable */}
            <div className="absolute inset-0 bg-black/70" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(185,135,46,0.15) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Hero text */}
          <div className="relative z-20 text-center px-4 sm:px-6 w-full max-w-3xl mx-auto">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 sm:mb-12 px-2">
              Let's bring your vision to life. Reach out for bookings,
              collaborations, or any inquiries.
            </p>
          </div>

          {/* Bottom fade into next section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #0d0a06)",
            }}
          />
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — CONTACT FORM + INFO
        ═══════════════════════════════════════════ */}
<section className="relative bg-[#fff9ed] py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10">
  {/* Subtle grain texture overlay */}
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.02]"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
    }}
  />

  {/* Ambient gold glow top-center */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at center, rgba(185,135,46,0.08) 0%, transparent 70%)",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Section label */}
    <div className="text-center mb-10 sm:mb-14">
      <div className="inline-flex items-center gap-3">
        <div className="w-8 sm:w-12 h-px bg-[#b9872e]/60" />
        <span className="font-body text-xs tracking-[0.25em] uppercase text-[#b9872e]">
          Reach Out
        </span>
        <div className="w-8 sm:w-12 h-px bg-[#b9872e]/60" />
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
      {/* Contact Form */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#e8dfcc] overflow-hidden">
        <div className="relative z-10 mb-6 sm:mb-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#2f2415] tracking-tight">
            Send a Message
          </h2>
          <p className="font-body text-[#7d6a4d] text-sm mt-2">
            I'll get back to you within 24 hours
          </p>
        </div>

        <div className="relative z-10 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <Input
              placeholder="Your Name"
              style={{
                backgroundColor: "#fef9ef",
                borderColor: "#e8dfcc",
                color: "#2f2415",
              }}
              className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent h-12 sm:h-14 text-sm sm:text-base rounded-xl sm:rounded-2xl placeholder:text-[#b4a07e]"
            />
            <Input
              placeholder="Phone Number"
              style={{
                backgroundColor: "#fef9ef",
                borderColor: "#e8dfcc",
                color: "#2f2415",
              }}
              className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent h-12 sm:h-14 text-sm sm:text-base rounded-xl sm:rounded-2xl placeholder:text-[#b4a07e]"
            />
          </div>

          <Input
            placeholder="Email Address"
            style={{
              backgroundColor: "#fef9ef",
              borderColor: "#e8dfcc",
              color: "#2f2415",
            }}
            className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent h-12 sm:h-14 text-sm sm:text-base rounded-xl sm:rounded-2xl placeholder:text-[#b4a07e]"
          />

          <Input
            placeholder="Event Date (optional)"
            style={{
              backgroundColor: "#fef9ef",
              borderColor: "#e8dfcc",
              color: "#2f2415",
            }}
            className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent h-12 sm:h-14 text-sm sm:text-base rounded-xl sm:rounded-2xl placeholder:text-[#b4a07e]"
          />

          <Textarea
            placeholder="Tell us about your event and requirements..."
            rows={4}
            style={{
              backgroundColor: "#fef9ef",
              borderColor: "#e8dfcc",
              color: "#2f2415",
            }}
            className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent text-sm sm:text-base rounded-xl sm:rounded-2xl resize-y min-h-[120px] sm:min-h-[140px] placeholder:text-[#b4a07e]"
          />

          <Button
            className="w-full py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wider hover:scale-[1.02] active:scale-[0.985] transition-all duration-300 shadow-md"
            style={{
              backgroundColor: "#b9872e",
              color: "#ffffff",
            }}
          >
            Send Inquiry
          </Button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 border border-[#e8dfcc] overflow-hidden">
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <a
              href="tel:+919625272041"
              className="group flex items-start gap-4 sm:gap-5 hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f5ede1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#b9872e] transition-all duration-300 border border-[#e8dfcc]">
                <FiPhone
                  size={18}
                  className="text-[#b9872e] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <div className="text-xs font-body tracking-[0.125em] text-[#b4a07e] mb-1">
                  PHONE
                </div>
                <div className="font-medium text-base sm:text-lg text-[#2f2415]">
                  +91 96252 72041
                </div>
              </div>
            </a>

            <a
              href="mailto:hello@anuraagkaushik.com"
              className="group flex items-start gap-4 sm:gap-5 hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f5ede1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#b9872e] transition-all duration-300 border border-[#e8dfcc]">
                <FiMail
                  size={18}
                  className="text-[#b9872e] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <div className="text-xs font-body tracking-[0.125em] text-[#b4a07e] mb-1">
                  EMAIL
                </div>
                <div className="font-medium text-base sm:text-lg text-[#2f2415] break-all">
                  hello@anuraagkaushik.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f5ede1] flex items-center justify-center flex-shrink-0 border border-[#e8dfcc]">
                <FiMapPin size={18} className="text-[#b9872e]" />
              </div>
              <div>
                <div className="text-xs font-body tracking-[0.125em] text-[#b4a07e] mb-1">
                  STUDIO LOCATION
                </div>
                <div className="font-medium text-base sm:text-lg text-[#2f2415]">
                  New Delhi, India
                </div>
                <p className="text-xs sm:text-sm text-[#b4a07e] mt-1">
                  Available for travel worldwide
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/anuraagkaushik_92"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 sm:gap-5 hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#f5ede1] flex items-center justify-center flex-shrink-0 group-hover:bg-[#b9872e] transition-all duration-300 border border-[#e8dfcc]">
                <FaInstagram
                  size={18}
                  className="text-[#b9872e] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <div className="text-xs font-body tracking-[0.125em] text-[#b4a07e] mb-1">
                  INSTAGRAM
                </div>
                <div className="font-medium text-base sm:text-lg text-[#2f2415]">
                  @anuraagkaushik
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-[#e8dfcc] overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-px h-7 sm:h-8 bg-[#b9872e]" />
              <h4 className="font-display text-xl sm:text-2xl text-[#2f2415] tracking-tight">
                Booking Note
              </h4>
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-[#7d6a4d]">
              For bridal bookings, we recommend reaching out at least
              2-3 months in advance. A complimentary trial session is
              included with all bridal packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
