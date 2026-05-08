import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { sendToWhatsapp } from "@/utils/whatsapp";
import { useEffect, useMemo, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaClock, FaStar } from "react-icons/fa";

const categories = [
  "All",
  ...Array.from(new Set(services.map((s) => s.category))),
];

type SpecialMedia = {
  type: "image" | "video";
  url: string;
};

const Services = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [location, setLocation] = useState<"delhi" | "outsideDelhi">("delhi");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedSpecialMedia, setSelectedSpecialMedia] =
    useState<SpecialMedia | null>(null);
  const [visibleThumbRows, setVisibleThumbRows] = useState(1);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardsRef = useRef<Record<number, HTMLDivElement | null>>({});

  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartScrollRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const [mobilePaused, setMobilePaused] = useState(false);

    // Mobile auto-scroll
// Universal auto-scroll (all screens)
  useEffect(() => {
    const track = scrollTrackRef.current;
    if (!track) return;

    const interval = setInterval(() => {
      if (mobilePaused) return;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 1;
      }
    }, 12);

    return () => clearInterval(interval);
  }, [mobilePaused])
  const getDisplayPrice = (service: (typeof services)[number]) =>
    location === "delhi" ? service.delhiPrice : service.outsideDelhiPrice;

  const getServiceImages = (service: (typeof services)[number]) => {
    const imgs = service.images && service.images.length > 0 ? service.images : [service.image];
    return imgs.filter((img): img is string => Boolean(img && img.trim()));
  };
  const getServiceVideos = (service: (typeof services)[number]) =>
    (service.videos ?? []).filter((video): video is string =>
      Boolean(video && video.trim()),
    );

  const filtered =
    activeCategory === "All"
      ? Object.values(
          services.reduce(
            (acc, service) => {
              if (!acc[service.category]) {
                acc[service.category] = service; // take first per category
              }
              return acc;
            },
            {} as Record<string, (typeof services)[number]>,
          ),
        )
      : services.filter((s) => s.category === activeCategory);
  const isSpecialCategoryView = activeCategory !== "All";

  const specialCategoryMedia = useMemo(() => {
    const imgs = filtered.flatMap((service) =>
      getServiceImages(service).map((url) => ({ type: "image" as const, url })),
    );
    const videos = filtered.flatMap((service) =>
      getServiceVideos(service).map((url) => ({ type: "video" as const, url })),
    );
    const unique = new Map<string, SpecialMedia>();
    [...imgs, ...videos].forEach((item) => unique.set(`${item.type}:${item.url}`, item));
    return Array.from(unique.values());
  }, [filtered]);
  const specialPrimaryService = filtered[0];
  const specialCategoryMinPrice =
    filtered.length > 0
      ? Math.min(...filtered.map((s) => getDisplayPrice(s)))
      : 0;
  const specialCategoryMaxPrice =
    filtered.length > 0
      ? Math.max(...filtered.map((s) => getDisplayPrice(s)))
      : 0;
  const isSinglePriceSpecialCategory =
    activeCategory === "Party" || activeCategory === "Bridal";

  useEffect(() => {
    if (!isSpecialCategoryView) return;
    setSelectedSpecialMedia(
      specialCategoryMedia[0] ?? { type: "image", url: "/placeholder.svg" },
    );
    setVisibleThumbRows(1);
  }, [activeCategory, isSpecialCategoryView]);

  useEffect(() => {
    if (!isSpecialCategoryView) return;
    if (!selectedSpecialMedia && specialCategoryMedia.length > 0) {
      setSelectedSpecialMedia(specialCategoryMedia[0]);
    }
  }, [isSpecialCategoryView, selectedSpecialMedia, specialCategoryMedia]);

  const thumbsPerRow = 10;
  const maxThumbRows = Math.max(
    1,
    Math.ceil(specialCategoryMedia.length / thumbsPerRow),
  );
  const visibleThumbs = specialCategoryMedia.slice(
    0,
    visibleThumbRows * thumbsPerRow,
  );

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
  animation: scroll 20s linear infinite;
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

        {/* Grid / Special Category Showcase */}
        {isSpecialCategoryView ? (
          <section className="rounded-3xl border border-[#b9872e]/20 bg-gradient-to-b from-[#fffdfa] to-[#fff7ea] p-4 md:p-8 shadow-[0_20px_45px_rgba(24,17,5,0.1)]">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.15)]">
                  {selectedSpecialMedia?.type === "video" ? (
                    <video
                      src={selectedSpecialMedia.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[240px] md:h-[600px] object-cover object-[center_20%] "
                    />
                  ) : (
                    <img
                      src={selectedSpecialMedia?.url || "/placeholder.svg"}
                      alt={`${activeCategory} showcase`}
                      className="w-full h-[240px] md:h-[600px] object-cover object-[center_20%] "
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-black/35 backdrop-blur-sm">
                    {specialCategoryMedia.length} Media in {activeCategory}
                  </span>
                </div>
                {specialCategoryMedia.length > 1 && (
                  <>
                  <div className="mt-3 grid grid-cols-5 md:grid-cols-10 gap-2">
                    {visibleThumbs.map((media, i) => (
                      <button
                        key={`${activeCategory}-gallery-${media.type}-${i}`}
                        type="button"
                        onClick={() => setSelectedSpecialMedia(media)}
                        className={`rounded-lg border overflow-hidden transition-all ${
                          selectedSpecialMedia?.url === media.url &&
                          selectedSpecialMedia?.type === media.type
                            ? "border-[#b9872e] ring-2 ring-[#b9872e]/30"
                            : "border-[#b9872e]/20"
                        }`}
                        aria-label={`Show ${activeCategory} media ${i + 1}`}
                      >
                        {media.type === "video" ? (
                          <video
                            src={media.url}
                            className="h-16 md:h-20 w-full object-cover"
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={media.url}
                            alt={`${activeCategory} look ${i + 1}`}
                            className="h-16 md:h-20 w-full object-cover object-[center_5%]"
                            loading="lazy"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  {visibleThumbRows < maxThumbRows && (
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setVisibleThumbRows((prev) => prev + 1)}
                        className="text-xs md:text-sm font-semibold px-4 py-2 rounded-lg border border-[#b9872e]/35 text-[#8b6520] hover:bg-[#b9872e]/10 transition"
                      >
                        Show More
                      </button>
                      <button
                        type="button"
                        onClick={() => setVisibleThumbRows(maxThumbRows)}
                        className="text-xs md:text-sm font-semibold px-4 py-2 rounded-lg border border-[#b9872e]/35 text-[#8b6520] hover:bg-[#b9872e]/10 transition"
                      >
                        Show All
                      </button>
                    </div>
                  )}
                  </>
                )}
              </div>

              <div>
                <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-semibold text-[#b9872e]">
                  Special Service
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-[#2f2415] mt-2">
                  {activeCategory} Makeup Collection
                </h2>
                <p className="text-[#5e5140] mt-3 leading-relaxed">
                  {specialPrimaryService?.description ||
                    `Premium ${activeCategory.toLowerCase()} looks crafted to match your event vibe with luxury products and lasting finish.`}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#b9872e]/10 text-[#815d1e] border border-[#b9872e]/25">
                    {filtered.length} Service Options
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2f2415]/10 text-[#2f2415] border border-[#2f2415]/20">
                    ₹
                    {(isSinglePriceSpecialCategory
                      ? specialCategoryMinPrice
                      : specialCategoryMinPrice
                    ).toLocaleString()}
                    {!isSinglePriceSpecialCategory &&
                    specialCategoryMaxPrice !== specialCategoryMinPrice
                      ? ` - ₹${specialCategoryMaxPrice.toLocaleString()}`
                      : ""}
                  </span>
                </div>

                <div className="mt-6 space-y-3 max-h-[280px] overflow-y-auto pr-1 hide-scrollbar">
                  {filtered.map((service) => (
                    <div
                      key={`special-row-${service.id}`}
                      className="rounded-xl border border-[#b9872e]/20 bg-white/80 px-4 py-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-[#2f2415]">
                            {service.name}
                          </h3>
                          <p className="text-xs text-[#6b5b45] mt-1 flex items-center gap-1.5">
                            <FaClock size={11} style={{ color: "#b9872e" }} />
                            {service.duration}
                          </p>
                        </div>
                        {!isSinglePriceSpecialCategory && (
                          <p className="font-display text-base text-[#2f2415] font-semibold">
                            ₹{getDisplayPrice(service).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (!specialPrimaryService) return;
                    sendToWhatsapp({
                      ...specialPrimaryService,
                      name: `${activeCategory} Makeup Collection`,
                      description: `Interested in ${activeCategory} services. Please share details for all available looks.`,
                      price: specialCategoryMinPrice,
                    });
                  }}
                  className="mt-6 w-full md:w-auto px-7 py-3 rounded-xl text-sm font-semibold
text-white shadow-md transition-all duration-300 hover:-translate-y-[1px] active:scale-95
border border-[#d8c08a]/30 flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #b9872e 0%, #a87a26 100%)",
                  }}
                >
                  <BsWhatsapp size={16} className="drop-shadow-sm" />
                  Book {activeCategory} Service
                </button>
              </div>
            </div>
          </section>
        ) : (
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
                  } ${activeCategory === "All" ? "cursor-pointer" : ""}`}
                  onClick={() => {
                    if (activeCategory !== "All") return;
                    setActiveCategory(service.category);
                  }}
                >
                  {/* Image */}
                  <div className="service-image-strip">
                    {(activeCategory === "All"
                      ? [service.image || getServiceImages(service)[0]].filter(Boolean)
                      : getServiceImages(service)
                    ).map((img, imgIndex) => (
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
                      onClick={(e) => {
                        e.stopPropagation();
                        sendToWhatsapp({
                          ...service,
                          price: getDisplayPrice(service),
                        });
                      }}
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
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: "#4A4A4A" }}>
              No services found in this category
            </p>
          </div>
        )}
      </main>
      {/* ================= OUR BRANDS ================= */}
<section className="md:mt-24 px-6">
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
            {/* Left Arrow */}
{/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 flex items-center justify-center
                text-[#b9872e] transition-all duration-300
                hover:text-[#e0c168] active:scale-95"
              onClick={() => {
                if (!scrollTrackRef.current) return;
                scrollTrackRef.current.scrollLeft -= 230;
              }}
              aria-label="Scroll left"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 flex items-center justify-center
                text-[#b9872e] transition-all duration-300
                hover:text-[#e0c168] active:scale-95"
              onClick={() => {
                if (!scrollTrackRef.current) return;
                scrollTrackRef.current.scrollLeft += 230;
              }}
              aria-label="Scroll right"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Universal auto-scrolling + draggable track */}
            <div
              ref={scrollTrackRef}
              className="flex gap-8 md:gap-14 items-center py-6 px-10
                overflow-x-auto
                scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseEnter={() => setMobilePaused(true)}
              onMouseLeave={() => setMobilePaused(false)}
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
                touchStartScrollRef.current = scrollTrackRef.current?.scrollLeft ?? 0;
                isDraggingRef.current = false;
                setMobilePaused(true);
              }}
              onTouchMove={(e) => {
                if (!scrollTrackRef.current) return;
                const delta = touchStartXRef.current - e.touches[0].clientX;
                if (Math.abs(delta) > 5) isDraggingRef.current = true;
                scrollTrackRef.current.scrollLeft = touchStartScrollRef.current + delta;
              }}
              onTouchEnd={() => {
                isDraggingRef.current = false;
                setTimeout(() => setMobilePaused(false), 1200);
              }}
            >
              {[
                "/brands (2).jpeg",
                "/brand (3).jpg",
                "/brands (4).jpeg",
                "/brands (5).jpeg",
                "/brands (6).jpeg",
                "/brands (7).jpeg",
                "/brands (9).jpeg",
                "/brands (10).jpeg",
                // duplicate set for infinite loop
                "/brands (2).jpeg",
                "/brand (3).jpg",
                "/brands (4).jpeg",
                "/brands (5).jpeg",
                "/brands (6).jpeg",
                "/brands (7).jpeg",
                "/brands (9).jpeg",
                "/brands (10).jpeg",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 min-w-[170px] md:min-w-[210px] h-[130px] md:h-[150px]
                    flex items-center justify-center
                    bg-white rounded-2xl
                    border border-[#b9872e]/25
                    shadow-[0_15px_35px_rgba(185,135,46,0.15)]
                    transition-all duration-500
                    hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(185,135,46,0.25)]"
                >
                  <img
                    src={logo}
                    alt="brand"
                    className="h-[120px] md:h-[140px] w-auto object-cover object-[center_20%]
                      opacity-90 group-hover:opacity-100
                      transition duration-500"
                  />
                </div>
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
