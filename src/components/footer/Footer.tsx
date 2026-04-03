import anuraagImage from "@/assets/footer.jpeg";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const whatsappNumber = "+918765972595"; // with country code

  const getWhatsappLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <>
      <footer className="mt-0 flex w-full items-stretch border-t border-[#d8c08a]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,239,207,0.98))] px-0 py-6 text-[#2f2415] sm:px-0 sm:py-8 lg:px-0">
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

            <div
              className="relative overflow-hidden rounded-[2.6rem] border border-[#d8c08a]/35 
bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(250,242,211,0.98),rgba(255,249,236,0.94))] 
px-6 py-10 lg:px-12 lg:py-12"
            >
              <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                {/* Left Image */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  {/* Left: Image */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-full bg-[#b9872e]/25 blur-3xl group-hover:scale-110 transition duration-500" />
                      <img
                        src={anuraagImage}
                        alt="Anuraag Kaushik"
                        className="relative h-60 w-60 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full 
        object-cover object-[center_20%] border-[6px] border-[#f3e1b2] 
        shadow-[0_30px_70px_rgba(150,115,38,0.22)] 
        transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2f2415]">
                      Anuraag Kaushik
                    </h3> */}

                    <p className="mt-3 max-w-xl font-body text-[0.98rem] leading-7 text-[#655438]">
                      Bridal, editorial, and celebrity makeup artist crafting
                      radiant, camera-ready looks with refined elegance and
                      modern luxury finishes.
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                      {[
                        "Bridal Specialist",
                        "HD Makeup",
                        "Destination Weddings",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase
          border border-[#b9872e]/25 text-[#7a5417] bg-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                      {/* <a
                        href={getWhatsappLink(
                          "Hi, I want to book makeup services",
                        )}
                        className="inline-flex items-center rounded-full bg-[#b9872e] px-6 py-3 
        text-xs font-semibold uppercase tracking-[0.18em] text-white 
        shadow-[0_15px_40px_rgba(185,135,46,0.28)] transition hover:bg-[#a17829]"
                      >
                        Book Now
                      </a> */}

                      <Link
                        to="/services"
                        className="inline-flex items-center rounded-full border border-[#b9872e]/25 
        bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] 
        text-[#6a4f1f] transition hover:border-[#a93d2b]/35"
                      >
                        View Services
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-between h-full">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                    {/* Left */}
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2f2415]">
                        Anuraag Kaushik
                      </h3>

                      <p className="mt-3 max-w-xl font-body text-[0.98rem] leading-7 text-[#655438]">
                        Luxury bridal and editorial makeup artist delivering
                        radiant skin, refined definition, and camera-ready
                        finishes tailored for weddings, occasions, and
                        destination events.
                      </p>

                      {/* small tags */}
                      {/* <div className="mt-5 flex flex-wrap gap-2">
                        {["Bridal", "Editorial", "Celebrity", "HD Finish"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-[10px] tracking-[0.18em] uppercase
          border border-[#b9872e]/25 text-[#7a5417] rounded-full bg-white/60"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div> */}
                    </div>

                    {/* Right */}
                    <div className="space-y-4 lg:pl-10 border-l border-[#b9872e]/20">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#a93d2b]">
                        Available For
                      </p>

                      <ul className="space-y-2 text-[#655438] text-sm">
                        <li>• Bridal Makeup</li>
                        <li>• Engagement Looks</li>
                        <li>• Reception Glam</li>
                        <li>• Destination Weddings</li>
                      </ul>

                      <div className="pt-2">
                        <a
                          href={getWhatsappLink(
                            "Hi, I want to enquire about makeup booking",
                          )}
                          className="inline-flex items-center text-xs uppercase tracking-[0.2em] 
        text-[#7a5417] hover:text-[#a93d2b] transition"
                        >
                          Enquire Now →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
                    {/* Contact */}
                    <div className="space-y-4">
                      <h4 className="font-body text-xs uppercase tracking-[0.28em] text-[#a93d2b]">
                        Contact
                      </h4>

                      <div className="flex items-center gap-3">
                        <MapPin className="text-[#a93d2b]" size={18} />
                        <span>New Delhi, India</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="text-[#a93d2b]" size={18} />
                        <span>+91 9910649876</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="text-[#a93d2b]" size={18} />
                        <span>hello@anuraagkaushik.com</span>
                      </div>
                    </div>

                    {/* Social */}
<div className="space-y-4">
  <h4 className="font-body text-xs uppercase tracking-[0.28em] text-[#a93d2b]">
    Follow
  </h4>

  <div className="flex gap-3">
    
    {/* Instagram */}
    <a 
      href="https://www.instagram.com/anuraagkaushik_92"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-[#b9872e]/20  hover:text-white transition"
    >
      <FaInstagram size={18} className="text-[#E1306C]" />
    </a>

    {/* Threads */}
    <a 
      href="https://www.threads.net/@anuraagkaushik_92"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-[#b9872e]/20  hover:text-white transition"
    >
      <FaThreads size={18} className="text-black" />
    </a>

    {/* Facebook */}
    <a 
      href="https://www.facebook.com/people/Anuraag-kaushik/61556325431403/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-[#b9872e]/20  hover:text-white transition"
    >
      <FaFacebookF size={18} className="text-[#1877F2]" />
    </a>

  </div>
</div>

                    {/* CTA */}
                    <div className="space-y-4 flex flex-col h-full">
                      <h4 className="font-body text-xs uppercase tracking-[0.28em] text-[#a93d2b]">
                        Navigate
                      </h4>

                      <div className="flex flex-wrap items-center gap-8 lg:gap-3">
                        {[
                          { label: "Home", to: "/" },
                          { label: "Services", to: "/services" },
                          // { label: "Portfolio", to: "/portfolio" },
                          { label: "About", to: "/about/our-story" },
                          { label: "Contact", to: "/contact" },
                        ].map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                              `relative font-body text-sm uppercase tracking-[0.14em] transition-all duration-300 
          ${
            isActive ? "text-[#a93d2b]" : "text-[#655438] hover:text-[#a93d2b]"
          }`
                            }
                          >
                            {({ isActive }) => (
                              <span className="relative">
                                {item.label}

                                {/* Premium underline animation */}
                                <span
                                  className={`absolute left-0 -bottom-1 h-[1px] bg-[#a93d2b] transition-all duration-300 ${
                                    isActive
                                      ? "w-full"
                                      : "w-0 group-hover:w-full"
                                  }`}
                                />
                              </span>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d8c08a]/35 pt-5 sm:mt-10">
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
        className="fixed bottom-20 left-6 z-[9997] inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-5 py-3 text-white shadow-[0_14px_40px_rgba(169,61,43,0.32)] transition-all duration-300 hover:scale-105 whatsapp-float"
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
