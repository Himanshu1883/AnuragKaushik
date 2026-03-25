import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const whatsappNumber = "+918765972595"; // with country code

  const getWhatsappLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <>
      <footer className="mt-10 flex min-h-screen w-full items-stretch border-t border-[#d8c08a]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,239,207,0.98))] px-0 py-6 text-[#2f2415] sm:px-0 sm:py-8 lg:px-0">
        <div className="flex w-full flex-1 flex-col justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex flex-1 flex-col justify-between">
            <div className="overflow-hidden rounded-[2.4rem] border border-[#d8c08a]/40 bg-[radial-gradient(circle_at_top_left,rgba(241,217,139,0.3),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(249,239,207,0.86),rgba(255,248,235,0.94))] px-5 py-7 shadow-[0_18px_50px_rgba(150,115,38,0.10)] sm:px-7 sm:py-9 lg:px-10 lg:py-12">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                <div className="max-w-4xl">
                  <p className="font-body text-[0.68rem] uppercase tracking-[0.28em] text-[#a93d2b] sm:text-xs">
                    Let&apos;s Create Your Signature Look
                  </p>
                  <h2 className="mt-3 max-w-4xl font-display text-[2.4rem] leading-[0.92] text-[#2f2415] sm:text-[3.5rem] lg:text-[4.75rem]">
                    Bring your bridal vision into focus.
                  </h2>
                  <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-[#655438] sm:text-base">
                    From intimate bridal mornings to camera-ready occasion glam,
                    the experience is designed to feel polished, calm, and
                    completely tailored to you.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 xl:justify-end">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(185,135,46,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a17829] sm:px-8"
                  >
                    View Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={getWhatsappLink("Hi, I want to book bridal makeup.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[#b9872e]/25 bg-white/70 px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#6a4f1f] transition hover:-translate-y-0.5 hover:border-[#a93d2b]/35 hover:text-[#a93d2b] sm:px-8"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-[#d8c08a]/45 pt-7 sm:mt-8 sm:pt-8" />

            <div className="grid min-h-[38vh] grid-cols-1 gap-10 pb-6 pt-4 lg:min-h-[42vh] lg:grid-cols-[1.2fr_1.8fr] lg:gap-12 xl:gap-16">
              <div
                className="animate-fade-in min-w-0"
                style={{ animationDelay: "40ms", animationFillMode: "both" }}
              >
                <h3 className="font-display text-[2.5rem] leading-none text-[#2f2415] sm:text-[2.8rem]">
                  Anuraag Kaushik
                </h3>
                <p className="mt-5 max-w-md font-body text-[1rem] leading-8 text-[#655438] sm:text-[1.08rem]">
                  Bridal, editorial, and celebrity makeup with refined,
                  camera-ready finishing.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-[1fr_1fr_1.1fr]">
                <div
                  className="animate-fade-in min-w-0"
                  style={{ animationDelay: "90ms", animationFillMode: "both" }}
                >
                  <h4 className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#a93d2b]">
                    Contact
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5 text-[1rem] text-[#655438]">
                      <MapPin className="h-4.5 w-4.5 text-[#a93d2b]" /> New
                      Delhi, India
                    </li>
                    <li className="flex items-center gap-2.5 text-[1rem] text-[#655438]">
                      <Phone className="h-4.5 w-4.5 text-[#a93d2b]" /> +91 98765
                      43210
                    </li>
                    <li className="flex items-center gap-2.5 text-[1rem] text-[#655438]">
                      <Mail className="h-4.5 w-4.5 text-[#a93d2b]" />{" "}
                      hello@anuraagkaushik.com
                    </li>
                  </ul>
                </div>

                <div
                  className="animate-fade-in min-w-0"
                  style={{ animationDelay: "140ms", animationFillMode: "both" }}
                >
                  <h4 className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#a93d2b]">
                    Quick Links
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Services", href: "/services" },
                      { label: "About", href: "/about/our-story" },
                      { label: "Contact", href: "/contact" },
                      { label: "Blog", href: "/blog" },
                      { label: "Portfolio", href: "/portfolio" },
                      { label: "Privacy Policy", href: "/privacy-policy" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          className="font-body text-[1rem] text-[#655438] transition duration-300 hover:translate-x-1 hover:text-[#a93d2b]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="animate-fade-in min-w-0"
                  style={{ animationDelay: "190ms", animationFillMode: "both" }}
                >
                  <h4 className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#a93d2b]">
                    Social
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { label: "Instagram", Icon: Instagram },
                      { label: "YouTube", Icon: Youtube },
                      { label: "Facebook", Icon: Facebook },
                      { label: "LinkedIn", Icon: Instagram },
                      { label: "TikTok", Icon: Youtube },
                    ].map(({ label, Icon }) => (
                      <a
                        key={label}
                        href="#"
                        className="group inline-flex w-fit items-center gap-2.5 rounded-lg border border-[#b9872e]/12 bg-white/45 px-3.5 py-2.5 text-[1rem] text-[#655438] transition duration-300 hover:-translate-y-0.5 hover:border-[#a93d2b]/25 hover:text-[#a93d2b]"
                      >
                        <Icon className="h-[1.05rem] w-[1.05rem] transition duration-300 group-hover:scale-110" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-[#d8c08a]/40 bg-white/70 p-4">
                    <p className="mb-2 text-[0.88rem] font-semibold text-[#655438]">
                      Stay in the loop with exclusive bridal tips and style
                      news.
                    </p>
                    <form className="flex gap-2">
                      <input
                        type="email"
                        aria-label="Subscribe email"
                        placeholder="Your email"
                        className="w-full rounded-md border border-[#d8c08a]/40 bg-white p-2 text-[0.9rem] text-[#2f2415] outline-none focus:border-[#a93d2b]"
                      />
                      <button
                        type="submit"
                        className="rounded-md bg-[#a93d2b] px-3 py-2 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#8c2a1e]"
                      >
                        Join
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-[#d8c08a]/35 pt-5 sm:mt-10">
            <div className="flex flex-col items-center justify-between gap-2 text-xs uppercase tracking-[0.16em] text-[#8d7855] sm:flex-row">
              <p>&copy; 2026 Anuraag Kaushik. All rights reserved.</p>
              <p>Luxury Beauty Direction</p>
            </div>
          </div>
        </div>
      </footer>
      <a
        href={getWhatsappLink("Hi, I'm interested in your makeup services")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-5 py-3 text-white shadow-[0_14px_40px_rgba(169,61,43,0.32)] transition-all duration-300 hover:scale-105 whatsapp-float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5"
          fill="currentColor"
        >
          <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.65.86 5.11 2.33 7.11L4 29l7.04-2.28a11.96 11.96 0 005 .97c6.63 0 12.04-5.41 12.04-12.04S22.67 3 16.04 3zm0 21.85c-1.7 0-3.37-.46-4.82-1.33l-.34-.2-4.18 1.35 1.37-4.07-.22-.35a9.83 9.83 0 01-1.5-5.16c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 012.88 6.95c0 5.42-4.41 9.83-9.83 9.83z" />
        </svg>
        Book Now
      </a>
    </>
  );
};

export default Footer;
