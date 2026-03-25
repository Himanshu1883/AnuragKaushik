import anuraagImage from "@/assets/anuraag-kaushik.jpg";
import bridalMakeupImage from "@/assets/bridal-makeup.jpg";
import celebrityMakeupImage from "@/assets/celebrity-makeup.jpg";
import editorialMakeupImage from "@/assets/editorial-makeup.jpg";
import receptionMakeupImage from "@/assets/reception-makeup.jpg";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { ArrowRight, Camera, Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Index = () => {
  const { addToCart } = useCart();
  const popularServices = services.filter((s) => s.popular);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const statsSectionRef = useRef<HTMLDivElement | null>(null);
  const beautySectionRef = useRef<HTMLDivElement | null>(null);
  const chooseSectionRef = useRef<HTMLDivElement | null>(null);
  const worksSectionRef = useRef<HTMLDivElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isBeautyVisible, setIsBeautyVisible] = useState(false);
  const [isChooseVisible, setIsChooseVisible] = useState(false);
  const [isWorksVisible, setIsWorksVisible] = useState(false);
  const [servicesHover, setServicesHover] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const [servicesHoverTop, setServicesHoverTop] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const suppressGlobalCursor = (enabled: boolean) => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("hide-global-cursor", enabled);
  };

  useEffect(() => {
    return () => suppressGlobalCursor(false);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Brides Styled",
      kicker: "Bridal Archive",
      detail:
        "Refined bridal finishes across intimate mornings and large-scale celebrations.",
      image: bridalMakeupImage,
    },
    {
      value: "8+",
      label: "Years Experience",
      kicker: "Built Over Time",
      detail:
        "Built through luxury bookings, editorial sets, and high-pressure event timelines.",
      image: editorialMakeupImage,
    },
    {
      value: "50+",
      label: "Celebrity Clients",
      kicker: "Trusted Presence",
      detail:
        "Trusted for elevated camera-ready work where polish and precision both matter.",
      image: celebrityMakeupImage,
    },
    {
      value: "4.9",
      label: "Average Rating",
      kicker: "Client Response",
      detail:
        "Consistently praised for calm artistry, skin finish, and long-wear comfort.",
      image: receptionMakeupImage,
    },
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "Luxury Skin Prep",
      desc: "Fresh, radiant skin preparation that keeps makeup luminous from first look to final touch-up.",
    },
    {
      icon: Camera,
      title: "Editorial Finish",
      desc: "Balanced tones, soft sculpting, and camera-ready detailing designed for high-definition moments.",
    },
    {
      icon: Heart,
      title: "Signature Personalization",
      desc: "Each face chart is tailored to your features, outfit palette, skin texture, and comfort level.",
    },
  ];

  const chooseReasons = [
    {
      title: "Calm, Guided Experience",
      desc: "Every booking is managed with a composed pace, clear communication, and a finish plan tailored to the event flow.",
      stat: "Timely Setup",
    },
    {
      title: "Camera-Ready Precision",
      desc: "Looks are balanced for natural daylight, indoor lighting, and close-up photography without losing softness.",
      stat: "Photo Balanced",
    },
    {
      title: "Feature-Led Customization",
      desc: "Skin texture, outfit palette, jewelry, and personal comfort all shape the final makeup direction.",
      stat: "Tailored Finish",
    },
  ];

  const collage = {
    leftTop: "/WhatsApp Image 2026-03-25 at 3.01.23 PM.jpeg",
    leftBottom: "/WhatsApp Image 2026-03-25 at 3.00.41 PM.jpeg",
    centerTop: "/WhatsApp Image 2026-03-25 at 3.01.01 PM.jpeg",
    centerBottom: "/WhatsApp Image 2026-03-25 at 3.00.28 PM.jpeg",
    rightTop: "/WhatsApp Image 2026-03-25 at 3.00.41 PM (1).jpeg",
    rightBottom: "/WhatsApp Image 2026-03-24 at 9.02.27 PM.jpeg",
    bottomOne: "/WhatsApp Image 2026-03-24 at 7.17.56 PM.jpeg",
    bottomTwo: "/WhatsApp Image 2026-03-24 at 5.38.05 PM.jpeg",
    bottomThree: "/WhatsApp Image 2026-03-24 at 5.38.07 PM (1).jpeg",
  };

  const beautyNotes = [
    "Skin-first glow balanced for real life and close-up photography.",
    "Color stories tailored to outfit tones, jewelry, and venue lighting.",
    "Soft structure that enhances features without masking expression.",
  ];

  useEffect(() => {
    const node = heroContentRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.28,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = statsSectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStatsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.24,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = beautySectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBeautyVisible(entry.isIntersecting);
      },
      {
        threshold: 0.22,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = chooseSectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChooseVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = worksSectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWorksVisible(entry.isIntersecting);
      },
      {
        threshold: 0.14,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = worksSectionRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".works-card"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            entry.target.classList.remove("is-revealed");
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf2] text-[#2f2415]">
      <Header />

      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fffdf7_0%,#f7eed2_100%)] md:min-h-[92vh]">
          <img
            src={anuraagImage}
            alt="Anuraag Kaushik - Makeup Artist"
            className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-top opacity-25 sm:opacity-40 md:w-[52%] md:opacity-100"
          />
          {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,252,244,0.97)_0%,rgba(255,249,231,0.94)_46%,rgba(173,123,55,0.18)_68%,rgba(88,20,20,0.12)_100%)]" /> */}
          <div className="absolute left-[-8rem] top-[-4rem] -z-10 h-72 w-72 rounded-full bg-[#f0d98a]/35 blur-3xl" />
          <div className="absolute bottom-[-5rem] left-[14%] -z-10 h-64 w-64 rounded-full bg-[#d0472f]/10 blur-3xl" />
          <div className="absolute right-[8%] top-[12%] -z-10 hidden h-44 w-44 rounded-full border border-[#b9872e]/25 md:block" />

          <div className="mx-auto flex w-full max-w-8xl items-center px-4 py-14 sm:px-6 md:min-h-[92vh] md:px-12 md:py-16 lg:px-8">
            <div
              ref={heroContentRef}
              className={`hero-reveal max-w-2xl px-1 sm:px-3 md:px-6 ${
                isHeroVisible ? "is-visible" : ""
              }`}
            >
              <p
                className="hero-reveal-item mb-5 font-body text-sm uppercase tracking-[0.35em] text-[#a93d2b]"
                style={{ ["--delay" as string]: "80ms" }}
              >
                Luxury Bridal Makeup Artist
              </p>
              <h1
                className="hero-reveal-item font-display text-[3.4rem] leading-[0.94] text-[#2f2415] sm:text-5xl md:text-7xl lg:text-[6.5rem]"
                style={{ ["--delay" as string]: "220ms" }}
              >
                Bridal beauty,
                <br />
                <span className="bg-gradient-to-r from-[#7a5417] via-[#c2952f] to-[#e0c168] bg-clip-text text-transparent italic px-2">
                  gilded with quiet drama
                </span>
              </h1>
              <p
                className="hero-reveal-item mt-5 max-w-xl cursor-pointer font-body text-base font-light leading-7 text-[#5b4a2e] transition hover:border-[#a93d2b]/35 hover:text-[#a93d2b] sm:text-lg sm:leading-8 md:mt-6 md:text-xl"
                style={{ ["--delay" as string]: "360ms" }}
              >
                Signature bridal artistry with radiant skin, expressive eyes,
                and a soft sculpted finish designed to look elegant in person,
                in portraits, and through every celebration.
              </p>

              <div
                className="hero-reveal-item mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
                style={{ ["--delay" as string]: "500ms" }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(185,135,46,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a17829] sm:px-8 sm:text-sm"
                >
                  Book Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about/our-story"
                  className="inline-flex items-center rounded-full border border-[#b9872e]/30 bg-white/70 px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.18em] text-[#6a4f1f] transition hover:border-[#a93d2b]/35 hover:text-[#a93d2b] sm:px-8 sm:text-sm"
                >
                  Learn More
                </Link>
              </div>

              <div
                className="hero-reveal-item mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                style={{ ["--delay" as string]: "660ms" }}
              >
                {[
                  "Soft bridal beauty with modern polish",
                  "Camera-ready skin with elegant definition",
                  "Luxury studio and on-location sessions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="animate-fade-in rounded-[1.75rem] border border-[#b9872e]/12 bg-white/72 p-4 shadow-[0_18px_45px_rgba(130,99,32,0.10)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#a93d2b]/18 hover:bg-[#fffaf0]"
                    style={{
                      animationDelay: `${index * 180}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <p className="font-body text-sm leading-6 text-[#4d3e24] hover:text-[#a93d2b] transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 hidden rounded-[1.9rem] border border-[#b9872e]/20 bg-white/78 p-5 text-[#2f2415] shadow-[0_18px_45px_rgba(130,99,32,0.14)] backdrop-blur md:block lg:right-12 lg:p-6">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[#a93d2b]">
              Signature Style
            </p>
            <p className="mt-2 font-display text-3xl text-[#7a5417]">
              Golden Soft Glam
            </p>
            <p className="mt-3 font-body text-sm text-[#5b4a2e]">
              Bridal / Reception / Occasion
            </p>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-5 md:px-8 md:py-10 lg:px-5">
          <div
            ref={statsSectionRef}
            className={`stats-shell mx-auto w-full max-w-[1520px] rounded-[2.6rem] border border-[#b9872e]/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(250,242,211,0.97),rgba(255,250,239,0.92))] p-4 shadow-[0_22px_55px_rgba(150,115,38,0.10)] backdrop-blur md:p-6 ${
              isStatsVisible ? "is-visible" : ""
            }`}
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
              <div
                className="stats-panel relative overflow-hidden rounded-[2rem] border border-[#b9872e]/12 bg-[radial-gradient(circle_at_top_left,rgba(241,217,139,0.34),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(245,233,193,0.96))] p-7"
                style={{ ["--delay" as string]: "0ms" }}
              >
                <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-[#b9872e]/15" />
                <p className="font-body text-[0.72rem] uppercase tracking-[0.32em] text-[#a93d2b]">
                  At a Glance
                </p>
                <h3 className="mt-4 max-w-xs font-display text-[2.2rem] leading-none text-[#2f2415] sm:text-4xl">
                  Crafted numbers with luxury detail.
                </h3>
                <p className="mt-5 max-w-sm font-body text-sm leading-7 text-[#6c5937]">
                  A broader view of the experience behind the brush: volume,
                  longevity, recognition, and the consistency clients return
                  for.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#b9872e]/15 bg-white/55 px-4 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b9872e]" />
                  <span className="font-body text-[0.68rem] uppercase tracking-[0.28em] text-[#7a5417]">
                    Luxury bridal direction
                  </span>
                </div>
              </div>

              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stats-tile group relative overflow-hidden rounded-[2rem] border border-[#b9872e]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(248,238,206,0.92))]"
                  style={{ ["--delay" as string]: `${140 + i * 110}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e6cf86] via-[#b9872e] to-[#a93d2b]" />
                  <div className="relative aspect-[0.95/1.05] overflow-hidden">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1.5deg]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,36,21,0.04),rgba(47,36,21,0.7))]" />
                    <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 font-body text-[0.58rem] uppercase tracking-[0.28em] text-white backdrop-blur">
                        {stat.kicker}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/18 text-white backdrop-blur transition duration-500 group-hover:rotate-[12deg] group-hover:bg-[#a93d2b]/55">
                        <Star className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <p className="font-display text-5xl leading-none text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 font-body text-[0.7rem] uppercase tracking-[0.24em] text-white/82">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                  <div className="relative px-6 py-6">
                    <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[#f2db8f]/20 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-[#d0472f]/12" />
                    <p className="max-w-[18rem] font-body text-sm leading-6 text-[#6c5937] transition duration-500 group-hover:text-[#4f3e21]">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-12 md:px-8 lg:px-10">
          <div
            ref={beautySectionRef}
            className={`beauty-band mx-auto grid w-full max-w-[1460px] gap-5 rounded-[2.8rem] border border-[#b9872e]/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(249,240,208,0.9),rgba(255,250,239,0.82))] p-5 shadow-[0_24px_60px_rgba(150,115,38,0.10)] lg:grid-cols-[1.05fr_1.4fr] lg:p-7 ${
              isBeautyVisible ? "is-visible" : ""
            }`}
          >
            <div
              className="beauty-panel relative overflow-hidden rounded-[2.2rem] border border-[#b9872e]/12 bg-[radial-gradient(circle_at_top_left,rgba(240,216,129,0.25),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(243,228,183,0.9))] p-7 lg:p-9"
              style={{ ["--delay" as string]: "0ms" }}
            >
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-[#b9872e]/12" />
              <p className="font-body text-sm uppercase tracking-[0.28em] text-[#a93d2b]">
                Beauty Direction
              </p>
              <h2 className="mt-4 max-w-md font-display text-[2.4rem] leading-[0.96] text-[#2f2415] md:text-5xl">
                Makeup that feels elevated, feminine, and unmistakably bespoke.
              </h2>
              <p className="mt-5 max-w-lg font-body text-[0.98rem] leading-7 text-[#5b4a2e] md:mt-6 md:text-lg md:leading-8">
                The visual language is intentionally soft and polished: luminous
                skin, romantic color stories, and clean finishing details that
                complement bridalwear, occasion looks, and editorial concepts
                without overpowering the person wearing them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Radiant Finish", "Tailored Tones", "Camera Balance"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#b9872e]/15 bg-white/55 px-4 py-2 font-body text-[0.68rem] uppercase tracking-[0.24em] text-[#7a5417]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div
              className="beauty-grid grid gap-4 md:grid-cols-[1.1fr_0.9fr]"
              style={{ ["--delay" as string]: "130ms" }}
            >
              <div className="beauty-card relative overflow-hidden rounded-[2.2rem] border border-[#b9872e]/12 bg-white/70 p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ead894] via-[#b9872e] to-[#a93d2b]" />
                <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-[#a93d2b]">
                  Signature Approach
                </p>
                <div className="mt-6 space-y-5">
                  {beautyNotes.map((note, index) => (
                    <div
                      key={note}
                      className="beauty-note flex items-start gap-4 rounded-[1.4rem] border border-[#b9872e]/10 bg-[#fffaf0]/70 px-4 py-4"
                      style={{ ["--delay" as string]: `${220 + index * 90}ms` }}
                    >
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff3cc,#e4c56a)] font-body text-xs font-semibold text-[#7a5417]">
                        0{index + 1}
                      </span>
                      <p className="font-body text-sm leading-7 text-[#5d4928]">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="beauty-card relative overflow-hidden rounded-[2.2rem] border border-[#b9872e]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(245,233,193,0.94))] p-7">
                <div className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-[#f0d98a]/20 blur-2xl" />
                <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-[#a93d2b]">
                  Finish Profile
                </p>
                <div className="mt-6 space-y-6">
                  {[
                    { label: "Skin Luminosity", value: "Soft-glow" },
                    { label: "Structure", value: "Refined contour" },
                    { label: "Mood", value: "Modern romantic" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="beauty-metric border-b border-[#b9872e]/10 pb-4 last:border-b-0 last:pb-0"
                      style={{
                        ["--delay" as string]: `${250 + index * 100}ms`,
                      }}
                    >
                      <p className="font-body text-[0.68rem] uppercase tracking-[0.24em] text-[#9a845f]">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-3xl text-[#2f2415]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-[#a93d2b]">
                  Signature Services
                </p>
                <h2 className="font-display text-4xl text-[#2f2415] md:text-5xl">
                  Most Requested Looks
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 font-body text-sm uppercase tracking-[0.18em] text-[#7a5417] transition hover:text-[#a93d2b]"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {popularServices.map((service) => (
                <div
                  key={service.id}
                  className="group overflow-hidden rounded-[2rem] border border-[#b9872e]/12 bg-white/88 shadow-[0_24px_55px_rgba(150,115,38,0.10)] transition-all hover:-translate-y-1 hover:border-[#a93d2b]/18 hover:shadow-[0_28px_65px_rgba(150,115,38,0.16)]"
                >
                  <div className="aspect-[4/4.8] overflow-hidden bg-[#f8f0d9]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 font-body text-xs uppercase tracking-[0.22em] text-[#a93d2b]">
                      {service.category}
                    </p>
                    <h3 className="mb-2 font-display text-3xl leading-none text-[#2f2415]">
                      {service.name}
                    </h3>
                    <p className="mb-5 font-body text-sm font-light leading-7 text-[#7d6a4d] line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-end justify-between gap-4 border-t border-[#e7d8ad] pt-5">
                      <div>
                        <span className="font-display text-2xl text-[#7a5417]">
                          Rs. {service.price.toLocaleString()}
                        </span>
                        <span className="ml-2 font-body text-xs uppercase tracking-[0.18em] text-[#7d6a4d]">
                          {service.duration}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          addToCart({
                            id: service.id,
                            name: service.name,
                            price: service.price,
                            image: service.image,
                            category: service.category,
                          })
                        }
                        className="rounded-full bg-[#2f2415] px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a93d2b]"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(255,253,247,0.78),rgba(247,238,210,0.98))] px-4 py-16 md:px-8 lg:px-10">
          <div
            ref={chooseSectionRef}
            className={`choose-band mx-auto w-full max-w-[1480px] rounded-[3rem] border border-[#d8c08a]/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(252,244,217,0.92),rgba(255,249,238,0.86))] p-5 shadow-[0_28px_70px_rgba(150,115,38,0.12)] backdrop-blur md:p-7 ${
              isChooseVisible ? "is-visible" : ""
            }`}
            onMouseEnter={() => suppressGlobalCursor(true)}
            onMouseLeave={() => suppressGlobalCursor(false)}
          >
            <div className="grid gap-5">
              <Link
                to="/services"
                className="choose-media-strip group relative block overflow-hidden rounded-[2.5rem] border border-[#b9872e]/14 bg-[#2f2415]"
                style={{ ["--delay" as string]: "0ms" }}
                aria-label="View services"
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setServicesHoverTop({
                    visible: true,
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                }}
                onMouseEnter={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setServicesHoverTop({
                    visible: true,
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                  suppressGlobalCursor(true);
                }}
                onMouseLeave={() => {
                  setServicesHoverTop((prev) => ({ ...prev, visible: false }));
                  suppressGlobalCursor(false);
                }}
              >
                <div
                  className={`pointer-events-none absolute z-20 transition duration-300 ${
                    servicesHoverTop.visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: servicesHoverTop.x,
                    top: servicesHoverTop.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-black/24 blur-lg" />
                    <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border border-white/15 bg-black/24 backdrop-blur-md md:h-16 md:w-16">
                      <span className="font-semibold text-[0.875rem] leading-none tracking-[-0.01em] text-[#e6ba55] md:text-[0.875rem]">
                        Services
                      </span>
                      {/* <span className="mt-1 font-body text-[0.38rem] font-semibold tracking-[0.08em] text-white/75">
                        Click
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="grid h-[300px] gap-px bg-[#2f2415] sm:h-[320px] md:h-[260px] lg:h-[450px] lg:grid-cols-[1fr_1fr_0.72fr]">
                  <video
                    src="/discussion.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[300px] w-full object-cover object-[center_20%] sm:h-[320px] md:h-[260px] lg:h-[450px]"
                  />
                  <video
                    src="/WhatsApp Video 2026-03-24 at 7.17.58 PM.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[300px] w-full object-cover object-[center_20%] sm:h-[320px] md:h-[260px] lg:h-[450px]"
                  />
                  <div className="grid h-[300px] grid-rows-2 gap-px sm:h-[320px] md:h-[260px] lg:h-[450px]">
                    <img
                      src="/WhatsApp Image 2026-03-24 at 9.02.22 PM.jpeg"
                      alt="Bridal preparation moment"
                      className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                    />
                    <img
                      src="/WhatsApp Image 2026-03-24 at 9.02.26 PM.jpeg"
                      alt="Refined makeup close-up"
                      className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,36,21,0.1),rgba(47,36,21,0.72))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-2 font-body text-[0.55rem] uppercase tracking-[0.22em] text-white backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-[0.62rem] sm:tracking-[0.28em]">
                  Why Clients Choose Him
                </div>
                <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 sm:inset-x-5 sm:bottom-5 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-[18rem] sm:max-w-2xl lg:max-w-3xl">
                    <p className="font-display text-[1.65rem] leading-[0.95] text-white sm:text-[2rem] md:text-4xl lg:text-[2.8rem]">
                      A finish that photographs beautifully, wears comfortably,
                      and feels personal from start to end.
                    </p>
                    <p className="mt-2 max-w-[17rem] font-body text-[0.88rem] leading-6 text-white/92 sm:mt-3 sm:max-w-xl sm:text-sm sm:leading-6 md:max-w-2xl md:leading-7">
                      Real prep moments, real finish shots, and a calm workflow
                      that turns makeup into a complete luxury service.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 self-start sm:gap-3 lg:self-auto">
                    {["Prep", "Precision", "Finish"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-white/16 bg-white/10 px-3 py-2.5 text-center backdrop-blur sm:rounded-[1.2rem] sm:px-4 sm:py-3"
                      >
                        <p className="font-body text-[0.5rem] uppercase tracking-[0.18em] text-white/72 sm:text-[0.62rem] sm:tracking-[0.26em]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>

              <Link
                to="/services"
                className="group relative block overflow-hidden rounded-[2.3rem] xl:h-[450px]"
                aria-label="View services"
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setServicesHover({
                    visible: true,
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                }}
                onMouseEnter={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setServicesHover({
                    visible: true,
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                  suppressGlobalCursor(true);
                }}
                onMouseLeave={() => {
                  setServicesHover((prev) => ({ ...prev, visible: false }));
                  suppressGlobalCursor(false);
                }}
              >
                <div
                  className={`pointer-events-none absolute z-20 transition duration-300 ${
                    servicesHover.visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    left: servicesHover.x,
                    top: servicesHover.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-black/24 blur-lg" />
                    <div className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border border-white/15 bg-black/24 backdrop-blur-md md:h-16 md:w-16">
                      <span className="font-semibold text-[0.875rem] leading-none tracking-[-0.01em] text-[#a93d2b] md:text-[0.875rem]">
                        Services
                      </span>
                      {/* <span className="mt-1 font-body text-[0.38rem] font-semibold tracking-[0.08em] text-white/75">
                        Click
                      </span> */}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 transition duration-500 group-hover:scale-[0.992] md:grid-cols-2 xl:h-[450px] xl:grid-cols-[0.88fr_0.62fr_1fr]">
                  <div
                    className="choose-copy relative flex min-h-[340px] flex-col overflow-hidden rounded-[2.4rem] border border-[#b9872e]/14 bg-[radial-gradient(circle_at_top_left,rgba(241,217,139,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,232,192,0.92))] p-5 sm:p-6 md:col-span-2 md:min-h-[360px] md:p-7 xl:h-[450px] xl:min-h-0 xl:col-span-1"
                    style={{ ["--delay" as string]: "120ms" }}
                  >
                    {/* <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-[#b9872e]/14" /> */}
                    <p className="mb-2 font-body text-[0.72rem] uppercase tracking-[0.28em] text-[#a93d2b]">
                      Why Choose Anuraag Kaushik
                    </p>
                    <h2 className="max-w-md font-display text-[2rem] leading-[0.95] text-[#2f2415] sm:text-[2.25rem] md:text-[2.6rem] xl:text-[2.9rem]">
                      Luxury service, modern finish, and a process built around
                      you.
                    </h2>
                    <p className="mt-3 max-w-lg font-body text-[0.92rem] leading-6 text-[#5b4a2e] sm:text-[0.95rem] sm:leading-7">
                      This is not only about the final glam. It is about timing,
                      skin prep, decision-making, lighting awareness, and a look
                      that still feels like you.
                    </p>
                    <div className="mt-5 grid flex-1 content-start gap-2.5 sm:grid-cols-2">
                      {[
                        { value: "Skin-first", label: "Finish Philosophy" },
                        { value: "Event-aware", label: "Execution Style" },
                        { value: "Luxury calm", label: "Client Experience" },
                      ].map((item, index) => (
                        <div
                          key={item.label}
                          className="choose-chip rounded-[1.15rem] border border-[#b9872e]/12 bg-white/55 px-4 py-3"
                          style={{
                            ["--delay" as string]: `${180 + index * 90}ms`,
                          }}
                        >
                          <p className="font-display text-[1.45rem] leading-none text-[#7a5417]">
                            {item.value}
                          </p>
                          <p className="mt-1 font-body text-[0.58rem] uppercase tracking-[0.18em] text-[#8a7757]">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="choose-proof-card relative min-h-[340px] overflow-hidden rounded-[2.4rem] border border-[#b9872e]/14 bg-white/72 md:min-h-[360px] xl:h-full xl:min-h-0"
                    style={{ ["--delay" as string]: "220ms" }}
                  >
                    <div className="grid h-full grid-rows-2">
                      <img
                        src="/WhatsApp Image 2026-03-24 at 9.02.27 PM.jpeg"
                        alt="Finished bridal makeup look"
                        className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                      />
                      <img
                        src="/WhatsApp Image 2026-03-24 at 5.38.07 PM.jpeg"
                        alt="Close-up makeup finish"
                        className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(47,36,21,0.02),rgba(47,36,21,0.76))] p-5">
                      <p className="font-body text-[0.66rem] uppercase tracking-[0.26em] text-white/74">
                        Finished Result
                      </p>
                      <p className="mt-2 font-display text-3xl text-white">
                        Polished in person, refined in every frame.
                      </p>
                    </div>
                  </div>

                  <div
                    className="choose-proof-card relative min-h-[340px] overflow-hidden rounded-[2.4rem] border border-[#b9872e]/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(246,235,197,0.94))] p-4 sm:p-5 md:min-h-[360px] xl:h-full xl:min-h-0"
                    style={{ ["--delay" as string]: "300ms" }}
                  >
                    <div className="absolute -right-8 top-4 h-20 w-20 rounded-full bg-[#f0d98a]/18 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-[#d0472f]/12" />
                    <p className="font-body text-[0.62rem] uppercase tracking-[0.24em] text-[#a93d2b]">
                      Client Journey
                    </p>
                    <div className="mt-4 space-y-2 sm:space-y-2.5">
                      {chooseReasons.map((item, i) => (
                        <div
                          key={item.title}
                          className="choose-reason flex items-start gap-3 rounded-[1.2rem] border border-[#b9872e]/10 bg-white/55 px-3.5 py-3"
                          style={{ ["--delay" as string]: `${360 + i * 90}ms` }}
                        >
                          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff3cf,#e5c466)] font-body text-[0.65rem] font-semibold text-[#7a5417]">
                            0{i + 1}
                          </span>
                          <div>
                            <p className="font-display text-[1.55rem] leading-none text-[#2f2415]">
                              {item.title}
                            </p>
                            <p className="mt-1 font-body text-[0.88rem] leading-5 text-[#6c5937]">
                              {item.desc}
                            </p>
                            <p className="mt-1.5 font-body text-[0.56rem] uppercase tracking-[0.2em] text-[#9a845f]">
                              {item.stat}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:py-16 md:px-8 md:py-20 lg:px-10">
          <div
            ref={worksSectionRef}
            className={`works-band mx-auto w-full max-w-[1500px] rounded-[3rem] border border-[#d8c08a]/45 bg-[linear-gradient(140deg,rgba(255,255,255,0.82),rgba(252,244,217,0.94),rgba(255,249,236,0.86))] p-5 shadow-[0_30px_80px_rgba(150,115,38,0.12)] md:p-7 ${
              isWorksVisible ? "is-visible" : ""
            }`}
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[#a93d2b]">
                  Our Works
                </p>
                <h2 className="mt-3 font-display text-[2.5rem] leading-[0.96] text-[#2f2415] sm:text-5xl md:text-6xl">
                  A Living Collage of Signature Looks
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#b9872e]/22 bg-white/60 px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-[#7a5417] transition hover:border-[#a93d2b]/30 hover:text-[#a93d2b]"
              >
                Explore Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid items-start grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="grid content-start self-start gap-4">
                <article
                  className="works-card works-card-left group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "0ms" }}
                >
                  <img
                    src={collage.leftTop}
                    alt="Bridal portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
                <article
                  className="works-card works-card-left group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "160ms" }}
                >
                  <img
                    src={collage.leftBottom}
                    alt="Groom styling portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
                <article
                  className="works-card works-card-left relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "420ms" }}
                >
                  <img
                    src={collage.bottomOne}
                    alt="Bridal styling detail"
                    className="h-[240px] w-full object-cover object-[center_20%] md:h-[280px]"
                  />
                </article>
              </div>

              <div className="grid content-start self-start gap-4">
                <article
                  className="works-card works-card-featured group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/20 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "80ms" }}
                >
                  <img
                    src={collage.centerTop}
                    alt="Center bridal hero portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
                <article
                  className="works-card group relative rounded-[1.7rem] border border-[#d8c08a]/55 bg-[linear-gradient(150deg,rgba(255,255,255,0.92),rgba(247,236,212,0.97))] p-8 text-center"
                  style={{ ["--delay" as string]: "240ms" }}
                >
                  <p className="font-display text-[3.2rem] leading-none text-[#2f2415] sm:text-6xl">
                    Take a look
                  </p>
                  <p className="mt-2 font-display text-[3.2rem] leading-none text-[#2f2415] sm:text-6xl">
                    at my work!
                  </p>
                  <Link
                    to="/services"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f23e77] px-10 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#d93467]"
                  >
                    Portfolio
                  </Link>
                </article>
                <article
                  className="works-card works-card-right group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "320ms" }}
                >
                  <img
                    src={collage.centerBottom}
                    alt="Evening bridal portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
              </div>

              <div className="grid content-start self-start gap-4">
                <article
                  className="works-card works-card-right group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "120ms" }}
                >
                  <img
                    src={collage.rightTop}
                    alt="Bridal side portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
                <article
                  className="works-card works-card-right group relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "280ms" }}
                >
                  <img
                    src={collage.rightBottom}
                    alt="Couple portrait"
                    className="h-[260px] w-full object-cover object-[center_20%] md:h-[310px]"
                  />
                </article>
                <article
                  className="works-card works-card-right relative overflow-hidden rounded-[1.7rem] border border-[#b9872e]/12 bg-[#2f2415]"
                  style={{ ["--delay" as string]: "580ms" }}
                >
                  <img
                    src={collage.bottomThree}
                    alt="Final bridal portrait"
                    className="h-[240px] w-full object-cover object-[center_20%] md:h-[280px]"
                  />
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;