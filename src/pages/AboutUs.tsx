import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState, useRef } from "react";
import { Plane } from "lucide-react";
import anuraagAboutImage from "@/assets/about.jpeg";

import bridalMakeup from "@/assets/bridal.jpg";
import receptionMakeup from "@/assets/recep.jpg";
import partyMakeup from "@/assets/party1.jpg";
import editorialMakeup from "@/assets/edit.jpg";
import engagementMakeup from "@/assets/engage.jpg";
import preweddingMakeup from "@/assets/prewed.jpeg";
import masterclassMakeup from "@/assets/masterclass-makeup.jpg";
import celebrityMakeup from "@/assets/recep2.jpg";

// Define types for stats
interface Stat {
  value: string;
  label: string;
  numericValue: number;
  isStar?: boolean;
}

const ABOUT_ANURAAG = {
  tagline: "Bridal & Fashion Glam Specialist", 
  badges: ["Delhi's #1 Bridal Makeup Artist", "Trusted by 500+ Brides"],
  description: `Anuraag Kaushik is a passionate and professional freelance makeup artist specializing in bridal and fashion glam looks. With a keen eye for detail and a deep understanding of skin tones, textures, and trends, Anuraag creates stunning transformations that enhance natural beauty while reflecting each client's unique personality.

From elegant bridal makeovers to high-fashion editorial looks, Anuraag combines creativity with precision to deliver flawless results. Known for professionalism, hygiene, and client comfort, every session is tailored to provide a luxurious and memorable experience.`,
  highlights: [
    "Specializes in Bridal Makeup",
    "Expert in Fashion & Glam Looks",
    "Personalized Makeup Sessions",
    "High-Quality Premium Products",
    "Focus on Skin-Friendly Techniques",
    "Available for Travel Worldwide",
  ],
  services: [
    "Bridal Makeup",
    "Engagement & Reception Makeup",
    "Fashion & Editorial Shoots",
    "Party & Occasion Makeup",
    "Photoshoot Makeup",
    "Makeup Consultation",
  ],
  stats: [
    { value: "500+", label: "Brides Styled", numericValue: 500 },
    { value: "8+", label: "Years Experience", numericValue: 8 },
    { value: "50+", label: "Celebrity Clients", numericValue: 50 },
    { value: "4.9★", label: "Average Rating", numericValue: 4.9, isStar: true },
  ] as Stat[],
  contact: {
    phone: "+91 9625272041",
    availability: "Available for bookings worldwide",
  },
};

// Custom hook for scroll-triggered reveals using Intersection Observer
const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-fadeup, .reveal-left, .reveal-right, .reveal-scale, .stagger-children"
    );
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// Animated Stat Component with counting animation on scroll reveal
const AnimatedStat = ({ 
  stat, 
  index, 
  hoveredStat, 
  setHoveredStat 
}: { 
  stat: Stat;
  index: number;
  hoveredStat: number | null;
  setHoveredStat: (val: number | null) => void;
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const targetValue = stat.numericValue;
  const isStar = stat.isStar;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const duration = 1500;
            const stepTime = 20;
            const increment = targetValue / (duration / stepTime);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= targetValue) {
                setCount(targetValue);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetValue]);

  const displayValue = () => {
    if (isStar) return `${count.toFixed(1)}★`;
    if (stat.label === "Years Experience") return `${count}+`;
    if (stat.label === "Celebrity Clients") return `${count}+`;
    if (stat.label === "Brides Styled") return `${count}+`;
    return count.toString();
  };

  return (
    <div
      ref={elementRef}
      onMouseEnter={() => setHoveredStat(index)}
      onMouseLeave={() => setHoveredStat(null)}
      onTouchStart={() => {
        setHoveredStat(index);
        setTimeout(() => setHoveredStat(null), 300);
      }}
      style={{
        background: hoveredStat === index ? "#2f2415" : "rgba(255,255,255,0.9)",
        border: `1px solid ${
          hoveredStat === index ? "#b9872e" : "rgba(185,135,46,0.15)"
        }`,
        borderRadius: "clamp(1rem, 4vw, 2rem)",
        padding: "clamp(1.5rem, 5vw, 2.5rem) clamp(0.8rem, 3vw, 1.5rem)",
        textAlign: "center",
        boxShadow:
          hoveredStat === index
            ? "0 20px 40px rgba(47,36,21,0.15)"
            : "0 4px 20px rgba(150,115,38,0.06)",
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        cursor: "default",
        transform: hoveredStat === index ? "translateY(-4px)" : "none",
      }}
    >
      <p
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          fontWeight: 700,
          color: hoveredStat === index ? "#e0c168" : "#7a5417",
          margin: 0,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {displayValue()}
      </p>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(0.6rem, 3vw, 0.7rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: hoveredStat === index ? "rgba(255,255,255,0.7)" : "#7d6a4d",
          margin: "0.6rem 0 0",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
};

const AboutUs = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Video 10-second loop logic
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const handleTimeUpdate = () => {
    if (video.currentTime >= 10) {
      video.currentTime = 0;
      video.play();
    }
  };

  video.addEventListener("timeupdate", handleTimeUpdate);

  // autoplay fix
  video.play().catch(() => {});

  return () => {
    video.removeEventListener("timeupdate", handleTimeUpdate);
  };
}, []);
  // Initialize scroll reveal animations
  useScrollReveal();

  // Parallax values for hero - reduced effect on mobile
  const imgScale = isMobile ? 1 + scrollY * 0.0002 : 1 + scrollY * 0.0003;
  const contentOpacity = Math.max(0, 1 - scrollY / (isMobile ? 280 : 380));
  const contentTranslate = scrollY * (isMobile ? 0.1 : 0.18);

  return (
    <div style={{ background: "#fdfaf2", color: "#2f2415", fontFamily: "'Inter', 'Georgia', serif", overflowX: "hidden" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      {/* ════════════════════════════════════════════
          FIXED FULL-BLEED HERO - Mobile Optimized
      ════════════════════════════════════════════ */}
      <section
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={anuraagAboutImage}
          alt="Anuraag Kaushik"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: isMobile ? "center 30%" : "center 20%",
            transform: `scale(${imgScale})`,
            transformOrigin: "center center",
            transition: "transform 0.05s linear",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(16,10,4,0.4) 0%, rgba(16,10,4,0.6) 50%, rgba(16,10,4,0.85) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(8,5,2,0.5) 100%)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            opacity: 0.2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: isMobile ? "0 1.2rem" : "0 1.5rem",
            opacity: contentOpacity,
            transform: `translateY(${contentTranslate}px)`,
            transition: "opacity 0.04s, transform 0.04s",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "0.6rem" : "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(224,193,104,0.85)",
              marginBottom: isMobile ? "1rem" : "1.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: isMobile ? "1.5rem" : "2rem",
                height: "1px",
                background: "rgba(224,193,104,0.5)",
              }}
            />
            {ABOUT_ANURAAG.tagline}
            <span
              style={{
                display: "inline-block",
                width: isMobile ? "1.5rem" : "2rem",
                height: "1px",
                background: "rgba(224,193,104,0.5)",
              }}
            />
          </p>

          <h1
            style={{
              fontSize: isMobile ? "clamp(2rem, 10vw, 3.5rem)" : "clamp(2.8rem, 7vw, 7rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              textShadow: "0 4px 30px rgba(0,0,0,0.4)",
              padding: isMobile ? "0 0.5rem" : 0,
            }}
          >
            Where{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg, #e0c168, #c2952f, #e0c168)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Beauty
            </em>{" "}
            Meets{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg, #e0c168, #c2952f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Artistry
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "0.85rem" : "clamp(0.95rem, 2vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.8)",
              marginBottom: isMobile ? "1.2rem" : "1.8rem",
              lineHeight: 1.6,
              maxWidth: "600px",
              padding: isMobile ? "0 0.5rem" : 0,
            }}
          >
            From bridal mornings to editorial shoots — every look is crafted to feel like you, only
            elevated.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "0.8rem" : "1.2rem",
              marginBottom: isMobile ? "1.8rem" : "2.8rem",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: isMobile ? "0 0.5rem" : 0,
            }}
          >
            {ABOUT_ANURAAG.badges.map((badge, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "0.6rem" : "0.72rem",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  {badge}
                </span>
                {i < ABOUT_ANURAAG.badges.length - 1 && (
                  <span
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "rgba(255,255,255,0.3)",
                      display: "inline-block",
                    }}
                  />
                )}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", padding: "0 1rem" }}>
            <a
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "#ffffff",
                color: "#2f2415",
                padding: isMobile ? "0.7rem 1.5rem" : "0.95rem 2.2rem",
                borderRadius: "999px",
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.7rem" : "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#b9872e";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#ffffff";
                el.style.color = "#2f2415";
                el.style.transform = "translateY(0)";
              }}
            >
              Book a Session
            </a>
            <a
              href="#story"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "transparent",
                color: "rgba(255,255,255,0.9)",
                padding: isMobile ? "0.7rem 1.5rem" : "0.95rem 2.2rem",
                borderRadius: "999px",
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.7rem" : "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(4px)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(224,193,104,0.8)";
                el.style.color = "#e0c168";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.4)";
                el.style.color = "rgba(255,255,255,0.9)";
              }}
            >
              View Works
            </a>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            opacity: contentOpacity,
            display: isMobile ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "2.5rem",
              background: "linear-gradient(to bottom, rgba(224,193,104,0.8), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.48rem",
              letterSpacing: "0.3em",
              color: "rgba(224,193,104,0.6)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SCROLLABLE BODY — slides over fixed hero
      ════════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "100vh" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* ── STATS SECTION with counting animation - Mobile Grid ── */}
        <section
          id="story"
          style={{
            background: "#fdfaf2",
            padding: isMobile ? "3rem 1rem" : "5rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-1rem",
              right: "-0.5rem",
              fontSize: isMobile ? "8rem" : "16rem",
              fontWeight: 900,
              color: "rgba(185,135,46,0.04)",
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
            }}
          >
            №
          </span>
          <div
            className="reveal-fadeup"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? "0.8rem" : "1.5rem",
            }}
          >
            {ABOUT_ANURAAG.stats.map((stat, i) => (
              <AnimatedStat
                key={i}
                stat={stat}
                index={i}
                hoveredStat={hoveredStat}
                setHoveredStat={setHoveredStat}
              />
            ))}
          </div>
        </section>

        {/* ── STORY SECTION with left/right reveals - Mobile Stack ── */}
        <section
          style={{
            padding: isMobile ? "4rem 1rem" : "7rem 2rem",
            background: "linear-gradient(170deg,#fff9ed 0%,#f7eed2 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(185,135,46,0.3)",
              userSelect: "none",
              display: isMobile ? "none" : "block",
            }}
          >
            The Story
          </div>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
              gap: isMobile ? "2.5rem" : "5rem",
              alignItems: "start",
            }}
            className="story-grid"
          >
            {/* Left column */}
            <div className="reveal-left">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#a93d2b",
                  marginBottom: "1rem",
                }}
              >
                The Philosophy
              </p>
              <h2
                style={{
                  fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.8rem)" : "clamp(2.2rem, 4.5vw, 4rem)",
                  lineHeight: 1.1,
                  fontWeight: 400,
                  color: "#2f2415",
                  margin: "0 0 1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Beauty that feels like{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(90deg,#7a5417,#c2952f)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  you — only elevated.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  lineHeight: 1.7,
                  color: "#5b4a2e",
                  fontWeight: 300,
                  marginBottom: "1.2rem",
                }}
              >
                {ABOUT_ANURAAG.description.split("\n\n")[0]}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  lineHeight: 1.7,
                  color: "#5b4a2e",
                  fontWeight: 300,
                }}
              >
                {ABOUT_ANURAAG.description.split("\n\n")[1]}
              </p>
              <blockquote
                style={{
                  margin: "2rem 0 0",
                  padding: isMobile ? "1rem 1.2rem" : "1.5rem 2rem",
                  borderLeft: "3px solid #b9872e",
                  background: "rgba(185,135,46,0.06)",
                  borderRadius: "0 1rem 1rem 0",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "1rem" : "1.25rem",
                    fontStyle: "italic",
                    color: "#7a5417",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  "Every face is a canvas. Every look, a love letter to the person wearing it."
                </p>
                <cite
                  style={{
                    display: "block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#7d6a4d",
                    marginTop: "0.6rem",
                    fontStyle: "normal",
                  }}
                >
                  — Anuraag Kaushik
                </cite>
              </blockquote>
            </div>

            {/* Right column */}
            <div className="reveal-right">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#a93d2b",
                  marginBottom: "1rem",
                }}
              >
                What Sets Us Apart
              </p>
              <div
                className="stagger-children"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {ABOUT_ANURAAG.highlights.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: isMobile ? "0.8rem 1rem" : "1rem 1.4rem",
                      background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(185,135,46,0.15)",
                      borderRadius: "0.8rem",
                      backdropFilter: "blur(4px)",
                      boxShadow: "0 2px 12px rgba(150,115,38,0.05)",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#2f2415";
                      el.style.borderColor = "#b9872e";
                      const t = el.querySelector(".hl") as HTMLElement;
                      if (t) t.style.color = "rgba(255,255,255,0.9)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.9)";
                      el.style.borderColor = "rgba(185,135,46,0.15)";
                      const t = el.querySelector(".hl") as HTMLElement;
                      if (t) t.style.color = "#2f2415";
                    }}
                  >
                    <span
                      style={{
                        width: isMobile ? "28px" : "32px",
                        height: isMobile ? "28px" : "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#b9872e,#e0c168)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: isMobile ? "0.6rem" : "0.7rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="hl"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: isMobile ? "0.85rem" : "0.9rem",
                        color: "#2f2415",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "color 0.3s",
                      }}
                    >
                      {item}
                      {i === 5 && <Plane size={isMobile ? 12 : 14} style={{ color: "#b9872e", flexShrink: 0 }} />}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION - Mobile Responsive Grid with Video Background ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Video Background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          >
            <video
              ref={videoRef}
              src="/conVid.mp4"
              autoPlay
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Dark tint overlay matching the current bg color (#2f2415) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(47, 36, 21, 0.55)"
              }}
            />
          </div>

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              // background: "#00000066",
              padding: isMobile ? "4rem 1rem" : "7rem 2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-4rem",
                right: "-4rem",
                width: isMobile ? "15rem" : "30rem",
                height: isMobile ? "15rem" : "30rem",
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(185,135,46,0.12) 0%,transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                className="reveal-fadeup"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: isMobile ? "2rem" : "3rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: isMobile ? "0.6rem" : "0.7rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase" as const,
                      color: "#b9872e",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Expertise
                  </p>
                  <h2
                    style={{
                      fontSize: isMobile ? "clamp(1.6rem, 6vw, 2.5rem)" : "clamp(2rem,4vw,3.5rem)",
                      fontWeight: 400,
                      color: "#fdfaf2",
                      margin: 0,
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Services <em style={{ fontStyle: "italic", color: "#e0c168" }}>offered</em>
                  </h2>
                </div>
                <a
                  href="/services"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "0.65rem" : "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: "#b9872e",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(185,135,46,0.4)",
                    paddingBottom: "2px",
                  }}
                >
                  View All &#8594;
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: isMobile ? "1.2rem" : "2rem",
                }}
                className="services-grid"
              >
                {ABOUT_ANURAAG.services.map((service, i) => {
                  const serviceImages: Record<string, string> = {
                    "Bridal Makeup": bridalMakeup,
                    "Engagement & Reception Makeup": engagementMakeup,
                    "Fashion & Editorial Shoots": editorialMakeup,
                    "Party & Occasion Makeup": partyMakeup,
                    "Photoshoot Makeup": celebrityMakeup,
                    "Makeup Consultation": masterclassMakeup,
                  };

                  const serviceDescriptions: Record<string, string> = {
                    "Bridal Makeup": "Complete bridal makeup with HD finish, including pre-bridal consultation and trial session.",
                    "Engagement & Reception Makeup": "Glamorous reception look with long-lasting products and airbrush finish.",
                    "Fashion & Editorial Shoots": "High-fashion editorial looks for magazines, lookbooks, and creative campaigns.",
                    "Party & Occasion Makeup": "Stunning party-ready look for any occasion — birthdays, anniversaries, or night outs.",
                    "Photoshoot Makeup": "Camera-ready makeup for professional photoshoots, celebrity events, and red carpets.",
                    "Makeup Consultation": "Personalized one-on-one consultation to understand your skin type and style preferences.",
                  };

                  const backgroundImage = serviceImages[service] ?? "";
                  const description =
                    serviceDescriptions[service] ??
                    "Professional makeup artistry tailored to your unique style and needs.";

                  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";

                    const imgContainer = el.querySelector<HTMLElement>(".image-container");
                    if (imgContainer) imgContainer.style.transform = "translateY(0)";

                    const textBlock = el.querySelector<HTMLElement>(".text-block");
                    if (textBlock) textBlock.style.transform = "translateY(0)";

                    const arrowIcon = el.querySelector<HTMLElement>(".hover-arrow-icon");
                    if (arrowIcon) {
                      arrowIcon.style.opacity = "0";
                    }
                  };

                  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

                    const imgContainer = el.querySelector<HTMLElement>(".image-container");
                    if (imgContainer) imgContainer.style.transform = "translateY(100%)";

                    const textBlock = el.querySelector<HTMLElement>(".text-block");
                    if (textBlock) textBlock.style.transform = "translateY(100%)";

                    const arrowIcon = el.querySelector<HTMLElement>(".hover-arrow-icon");
                    if (arrowIcon) {
                      arrowIcon.style.opacity = "1";
                    }
                  };

                  return (
                    <div
                      key={i}
                      className="reveal-scale service-card"
                      style={{
                        position: "relative",
                        height: isMobile ? "380px" : "420px",
                        borderRadius: "1.2rem",
                        overflow: "hidden",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s cubic-bezier(0.23,1,0.32,1)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(185,135,46,0.2)",
                      }}
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                      onTouchStart={(e) => {
                        const el = e.currentTarget;
                        const isActive = el.classList.contains("touch-active");
                        
                        if (!isActive) {
                          document.querySelectorAll<HTMLElement>(".service-card").forEach((card) => {
                            card.classList.remove("touch-active");
                            const imgContainer = card.querySelector<HTMLElement>(".image-container");
                            const textBlock = card.querySelector<HTMLElement>(".text-block");
                            const arrowIcon = card.querySelector<HTMLElement>(".hover-arrow-icon");
                            if (imgContainer) imgContainer.style.transform = "translateY(100%)";
                            if (textBlock) textBlock.style.transform = "translateY(100%)";
                            if (arrowIcon) arrowIcon.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                          });
                          
                          el.classList.add("touch-active");
                          const imgContainer = el.querySelector<HTMLElement>(".image-container");
                          const textBlock = el.querySelector<HTMLElement>(".text-block");
                          const arrowIcon = el.querySelector<HTMLElement>(".hover-arrow-icon");
                          if (imgContainer) imgContainer.style.transform = "translateY(0)";
                          if (textBlock) textBlock.style.transform = "translateY(0)";
                          if (arrowIcon) arrowIcon.style.opacity = "0";
                        } else {
                          el.classList.remove("touch-active");
                          const imgContainer = el.querySelector<HTMLElement>(".image-container");
                          const textBlock = el.querySelector<HTMLElement>(".text-block");
                          const arrowIcon = el.querySelector<HTMLElement>(".hover-arrow-icon");
                          if (imgContainer) imgContainer.style.transform = "translateY(100%)";
                          if (textBlock) textBlock.style.transform = "translateY(100%)";
                          if (arrowIcon) arrowIcon.style.opacity = "1";
                        }
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          padding: isMobile ? "1.5rem" : "2rem",
                          background: "rgba(47,36,21,0.88)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: isMobile ? "0.7rem" : "0.75rem",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase" as const,
                            color: "#b9872e",
                            display: "block",
                            marginBottom: "0.6rem",
                            fontWeight: 500,
                          }}
                        >
                          0{i + 1}
                        </span>
                        <span
                          style={{
                            fontSize: isMobile ? "1.3rem" : "1.6rem",
                            color: "#fdfaf2",
                            fontWeight: 600,
                            display: "block",
                            lineHeight: 1.2,
                            marginBottom: "0.8rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {service}
                        </span>
                        <p
                          style={{
                            fontSize: isMobile ? "0.85rem" : "0.95rem",
                            color: "rgba(253,250,242,0.85)",
                            lineHeight: 1.5,
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {description}
                        </p>
                      </div>

                      <div
                        className="image-container"
                        style={{
                          position: "absolute",
                          inset: 0,
                          transform: "translateY(100%)",
                          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          zIndex: 2,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={backgroundImage}
                          alt={service}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover" as const,
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(30,18,6,0.9) 0%, rgba(30,18,6,0.5) 40%, rgba(30,18,6,0.1) 100%)",
                          }}
                        />
                      </div>

                      <div
                        className="text-block"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          zIndex: 3,
                          padding: isMobile ? "1.5rem" : "2rem",
                          transform: "translateY(100%)",
                          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: isMobile ? "0.7rem" : "0.75rem",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase" as const,
                            color: "#e0c168",
                            display: "block",
                            marginBottom: "0.6rem",
                            fontWeight: 500,
                          }}
                        >
                          0{i + 1}
                        </span>
                        <span
                          style={{
                            fontSize: isMobile ? "1.3rem" : "1.6rem",
                            color: "#e0c168",
                            fontWeight: 600,
                            display: "block",
                            lineHeight: 1.2,
                            marginBottom: "0.8rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {service}
                        </span>
                        <p
                          style={{
                            fontSize: isMobile ? "0.85rem" : "0.95rem",
                            color: "rgba(253,250,242,1)",
                            lineHeight: 1.5,
                            margin: 0,
                            fontWeight: 400,
                          }}
                        >
                          {description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div
                        className="hover-arrow-icon"
                        style={{
                          position: "absolute",
                          bottom: "1.2rem",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 4,
                          opacity: 1,
                          transition: "opacity 0.3s ease",
                          pointerEvents: "none",
                        }}
                      >
                        <svg
                          width={isMobile ? "24" : "28"}
                          height={isMobile ? "24" : "28"}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            animation: "bounceSoft 1.5s ease-in-out infinite",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                          }}
                        >
                          <path
                            d="M12 19L12 5M12 19L5 12M12 19L19 12"
                            stroke="#b9872e"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <style>{`
              .service-card {
                -webkit-tap-highlight-color: transparent;
              }
              @keyframes bounceSoft {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(5px); }
              }
              @keyframes scrollPulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
              .reveal-fadeup {
                opacity: 0;
                transform: translateY(35px);
                transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1);
              }
              .reveal-fadeup.revealed {
                opacity: 1;
                transform: translateY(0);
              }
              .reveal-left {
                opacity: 0;
                transform: translateX(-40px);
                transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1);
              }
              .reveal-left.revealed {
                opacity: 1;
                transform: translateX(0);
              }
              .reveal-right {
                opacity: 0;
                transform: translateX(40px);
                transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1);
              }
              .reveal-right.revealed {
                opacity: 1;
                transform: translateX(0);
              }
              .reveal-scale {
                opacity: 0;
                transform: scale(0.95);
                transition: opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1), transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1);
              }
              .reveal-scale.revealed {
                opacity: 1;
                transform: scale(1);
              }
              .stagger-children > * {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1);
              }
              .stagger-children.revealed > * {
                opacity: 1;
                transform: translateY(0);
              }
              .stagger-children > *:nth-child(1) { transition-delay: 0s; }
              .stagger-children > *:nth-child(2) { transition-delay: 0.05s; }
              .stagger-children > *:nth-child(3) { transition-delay: 0.1s; }
              .stagger-children > *:nth-child(4) { transition-delay: 0.15s; }
              .stagger-children > *:nth-child(5) { transition-delay: 0.2s; }
              .stagger-children > *:nth-child(6) { transition-delay: 0.25s; }
            `}</style>
          </div>
        </section>

        {/* ── CTA SECTION - Mobile Optimized ── */}
        <section
          style={{
            padding: isMobile ? "5rem 1rem 6rem 1rem" : "8rem 2rem 10rem 2rem",
            background: "linear-gradient(135deg,#fffdf5 0%,#f4e5b8 60%,#ecdfa0 100%)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: isMobile ? "500px" : "620px",
          }}
        >
          {[1, 2, 3].map((r) => (
            <div
              key={r}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? `${r * 10}rem` : `${r * 18}rem`,
                height: isMobile ? `${r * 10}rem` : `${r * 18}rem`,
                borderRadius: "50%",
                border: `1px solid rgba(185,135,46,${0.08 / r})`,
                pointerEvents: "none",
              }}
            />
          ))}
          <div
            className="reveal-fadeup"
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.6rem" : "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: "#a93d2b",
                marginBottom: "0.8rem",
              }}
            >
              Let's Create Together
            </p>
            <h2
              style={{
                fontSize: isMobile ? "clamp(1.8rem, 8vw, 3rem)" : "clamp(2.5rem,6vw,5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#2f2415",
                margin: "0 0 1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              Your most beautiful day{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(90deg,#7a5417,#c2952f,#e0c168)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                starts here.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.9rem" : "1rem",
                lineHeight: 1.7,
                color: "#5b4a2e",
                fontWeight: 300,
                marginBottom: "2rem",
                padding: isMobile ? "0 0.5rem" : 0,
              }}
            >
              {ABOUT_ANURAAG.contact.availability} — reach out at{" "}
              <a
                href={`tel:${ABOUT_ANURAAG.contact.phone}`}
                style={{ color: "#a93d2b", textDecoration: "none", fontWeight: 500 }}
              >
                {ABOUT_ANURAAG.contact.phone}
              </a>
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", flexWrap: "wrap" }}>
              <a
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#b9872e",
                  color: "#fff",
                  padding: isMobile ? "0.8rem 1.8rem" : "1rem 2.5rem",
                  borderRadius: "999px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.7rem" : "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  textDecoration: "none",
                  boxShadow: "0 12px 30px rgba(185,135,46,0.25)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#a93d2b";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#b9872e";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Book Now &#8594;
              </a>
              <a
                href={`tel:${ABOUT_ANURAAG.contact.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#2f2415",
                  padding: isMobile ? "0.8rem 1.8rem" : "1rem 2.5rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(47,36,21,0.3)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: isMobile ? "0.7rem" : "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#a93d2b";
                  el.style.color = "#a93d2b";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(47,36,21,0.3)";
                  el.style.color = "#2f2415";
                }}
              >
                Call Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;