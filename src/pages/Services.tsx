import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { sendToWhatsapp } from "@/utils/whatsapp";
import { useEffect, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaClock, FaStar } from "react-icons/fa";

const categories = [
  "All",
  ...Array.from(new Set(services.map((s) => s.category))),
];

const Services = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [location, setLocation] = useState<"delhi" | "outsideDelhi">("delhi");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardsRef = useRef<Record<number, HTMLDivElement | null>>({});

  const getDisplayPrice = (service: (typeof services)[number]) =>
    location === "delhi" ? service.delhiPrice : service.outsideDelhiPrice;

  const getServiceImages = (service: (typeof services)[number]) => {
    if (service.images && service.images.length > 0) return service.images;
    return [service.image];
  };

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  // Re-observe whenever filtered list changes
  useEffect(() => {
    setVisibleCards(new Set());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setVisibleCards((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    // Small delay so DOM updates before we observe
    const timer = setTimeout(() => {
      Object.values(cardsRef.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeCategory]); // re-run on category change

  const animationVariants = [
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "fadeInRight",
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
        .fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }

        /* KEY FIX: card content uses absolute positioning for hover overlay
           so it never affects the card's height in the grid */
        .service-card {
          position: relative;
          height: 240px; /* fixed height â€” grid rows stay stable */
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          transition: box-shadow 0.3s;
        }
        .service-card:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
        }
        .service-image-strip {
          position: absolute;
          inset: 0;
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .service-image-strip::-webkit-scrollbar {
          display: none;
        }
        .service-image-item {
          width: 100%;
          height: 100%;
          flex: 0 0 100%;
          scroll-snap-align: start;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.5s ease;
        }
        .service-card:hover .service-image-item {
          transform: scale(1.08);
        }
        /* Overlay panel slides up from bottom on hover */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
          transition: background 0.3s;
        }
        .service-card:hover .card-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
        }
.card-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.6rem;   /* smaller */
  z-index: 10;
}

@media (min-width: 768px) {
  .card-bottom {
    padding: 1.5rem;
  }
}
.card-desc {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.45s ease, opacity 0.35s ease;
}

/* desktop hover */
.service-card:hover .card-desc {
  max-height: 120px;
  opacity: 1;
}

/* mobile fixed layout */
@media (max-width: 768px) {
  .card-desc {
    max-height: 40px;
    opacity: 1;
  }

  .card-desc p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
        .service-card:hover .card-desc {
          max-height: 120px;
          opacity: 1;
        }
        .card-btn {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
          pointer-events: none;
        }
        .service-card:hover .card-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
          @keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 15s linear infinite;
}
  @media (min-width: 768px) {
  .service-card {
    height: 380px;  /* desktop */
  }
}
  .hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.price-animate {
  color: #ffffff;
  position: relative;
  animation: priceFade 0.35s ease;
}

.price-animate::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 100%;
  background: #b9872e;
  transform: scaleX(0);
  transform-origin: left;
  animation: underlineGrow 0.35s ease forwards;
}

@keyframes priceFade {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underlineGrow {
  to {
    transform: scaleX(1);
  }
}
      `}</style>

      <Header />
      <main className="px-6 py-16 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-16 text-center">
          <p
            className="font-body text-sm tracking-[0.2em] uppercase mb-3 font-semibold"
            style={{ color: "#b9872e" }}
          >
            Premium Services
          </p>
          <h1
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ color: "#000000" }}
          >
            Elevate Your Experience
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A4A4A" }}>
            Discover our curated collection of world-class services designed to
            exceed your expectations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white shadow-lg"
                    : "border-2 text-gray-700 hover:border-[#b9872e] hover:text-[#b9872e]"
                }`}
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#b9872e" }
                    : { borderColor: "#E5E5E5" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="inline-flex rounded-full border border-[#E5E5E5] p-[3px] bg-white">
              <button
                onClick={() => setLocation("delhi")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  location === "delhi" ? "text-white" : "text-[#4A4A4A]"
                }`}
                style={
                  location === "delhi"
                    ? { backgroundColor: "#b9872e" }
                    : { backgroundColor: "transparent" }
                }
              >
                Delhi
              </button>

              <button
                onClick={() => setLocation("outsideDelhi")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  location === "outsideDelhi" ? "text-white" : "text-[#4A4A4A]"
                }`}
                style={
                  location === "outsideDelhi"
                    ? { backgroundColor: "#b9872e" }
                    : { backgroundColor: "transparent" }
                }
              >
                Outside Delhi
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          className="
  grid grid-cols-2 gap-4
  max-h-[520px] overflow-y-auto hide-scrollbar
  md:grid-cols-2 lg:grid-cols-3
  md:max-h-none md:overflow-visible
"
        >
          {filtered.map((service, index) => {
            const animationClass =
              animationVariants[index % animationVariants.length];
            const isVisible = visibleCards.has(service.id.toString());

            return (
              <div
                key={`${activeCategory}-${service.id}`} // force remount on category change
                ref={(el) => {
                  cardsRef.current[service.id] = el;
                }}
                data-id={service.id}
                className={`service-card ${
                  isVisible ? animationClass : "opacity-0"
                }`}
              >
                {/* Image */}
                <div className="service-image-strip">
                  {getServiceImages(service).map((img, imgIndex) => (
                    <img
                      key={`${service.id}-${imgIndex}`}
                      src={img}
                      alt={`${service.name} ${imgIndex + 1}`}
                      className="service-image-item"
                      loading="lazy"
                    />
                  ))}
                </div>

                {/* Overlay */}
                <div className="card-overlay" />

                {/* Badges */}
                <div className="absolute top-4 right-2 z-10">
                  <span
                    className="inline-block text-gray-900 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
                    style={{ backgroundColor: "#b92e6f" }}
                  >
                    {service.category}
                  </span>
                </div>
                {service.popular && (
                  <div className="absolute top-4 left-2 z-10 hidden md:block">
                    <span
                      className="inline-flex items-center gap-1 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
                      style={{ backgroundColor: "#b9872e" }}
                    >
                      <FaStar size={12} fill="currentColor" />
                      POPULAR
                    </span>
                  </div>
                )}

                {/* Bottom content */}
                <div className="card-bottom">
                  <h3 className="font-display text-lg md:text-2xl text-white font-semibold leading-tight mb-1">
                    {service.name}
                  </h3>

                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <FaClock size={13} style={{ color: "#b9872e" }} />
                      <span className="text-gray-300 text-[11px] md:text-xs font-medium">
                        {service.duration}
                      </span>
                    </div>
                    <p
                      key={location}
                      className="price-animate font-display text-sm md:text-xl font-semibold"
                    >
                      ₹{getDisplayPrice(service).toLocaleString()}
                    </p>
                  </div>

                  {/* Description â€” slides in on hover via CSS only */}
                  <div className="card-desc">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Button â€” fades in on hover via CSS only */}
                  <button
                    onClick={() =>
                      sendToWhatsapp({
                        ...service,
                        price: getDisplayPrice(service),
                      })
                    }
                    className="card-btn w-full px-6 py-2.5 rounded-lg text-sm font-semibold 
  flex items-center justify-center gap-2 
  text-white shadow-md 
  transition-all duration-300 
  hover:-translate-y-[1px] active:scale-95
  border border-[#d8c08a]/30"
                    style={{
                      background: "linear-gradient(135deg, #b9872e, #a17829)",
                    }}
                  >
                    <BsWhatsapp size={16} className="drop-shadow-sm" />
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: "#4A4A4A" }}>
              No services found in this category
            </p>
          </div>
        )}
      </main>
      {/* ================= OUR BRANDS ================= */}
      <section className="mt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.25em] uppercase font-body mb-3"
              style={{ color: "#b9872e" }}
            >
              Luxury Brands
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-[#2f2415]">
              Our Professional Kit
            </h2>
          </div>

          {/* Brands */}
          <div className="relative overflow-hidden">
            <div className="flex gap-20 animate-scroll items-center py-6">
              {[
                // "/brands (1).jpeg",
                "/brands (2).jpeg",
                "/brand (3).jpg",
                "/brands (4).jpeg",
                "/brands (5).jpeg",
                "/brands (6).jpeg",
                "/brands (7).jpeg",
                // "/brands (8).jpeg",
                "/brands (9).jpeg",
                "/brands (10).jpeg",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="group min-w-[210px] h-[150px] flex items-center justify-center
  bg-white rounded-2xl
  border border-[#b9872e]/25
  shadow-[0_15px_35px_rgba(185,135,46,0.15)]
  transition-all duration-500
  hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(185,135,46,0.25)]"
                >
                  <img
                    src={logo}
                    alt="brand"
                    className="h-[140px] w-auto object-cover object-[center_20%]
    opacity-90 group-hover:opacity-100
    transition duration-500"
                  />
                </div>
              ))}

              {/* Duplicate for smooth infinite scroll */}
              {[
                // "/brands (1).jpeg",
                "/brands (2).jpeg",
                "/brand (3).jpg",
                "/brands (4).jpeg",
                "/brands (5).jpeg",
                "/brands (6).jpeg",
                "/brands (7).jpeg",
                // "/brands (8).jpeg",
                "/brands (9).jpeg",
                "/brands (10).jpeg",
              ].map((logo, i) => (
                <img
                  key={"dup" + i}
                  src={logo}
                  className="max-h-12 opacity-40"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
