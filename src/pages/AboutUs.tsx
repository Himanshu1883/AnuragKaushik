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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
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
      { threshold: 0.5 }
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
      style={{
        background: hoveredStat === index ? "#2f2415" : "rgba(255,255,255,0.9)",
        border: `1px solid ${
          hoveredStat === index ? "#b9872e" : "rgba(185,135,46,0.15)"
        }`,
        borderRadius: "2rem",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        boxShadow:
          hoveredStat === index
            ? "0 30px 70px rgba(47,36,21,0.2)"
            : "0 8px 30px rgba(150,115,38,0.08)",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        cursor: "default",
        transform: hoveredStat === index ? "translateY(-8px) scale(1.02)" : "none",
      }}
    >
      <p
        style={{
          fontSize: "clamp(2.5rem,5vw,4rem)",
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
          fontFamily: "sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: hoveredStat === index ? "rgba(255,255,255,0.6)" : "#7d6a4d",
          margin: "0.75rem 0 0",
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

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize scroll reveal animations
  useScrollReveal();

  // Parallax values for hero
  const imgScale = 1 + scrollY * 0.0003;
  const contentOpacity = Math.max(0, 1 - scrollY / 380);
  const contentTranslate = scrollY * 0.18;

  return (
    <div style={{ background: "#fdfaf2", color: "#2f2415", fontFamily: "'Georgia', serif" }}>
      <Header />

      {/* ════════════════════════════════════════════
          FIXED FULL-BLEED HERO
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
            objectPosition: "center 20%",
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
              "linear-gradient(180deg, rgba(16,10,4,0.38) 0%, rgba(16,10,4,0.52) 45%, rgba(16,10,4,0.80) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(8,5,2,0.55) 100%)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            opacity: 0.28,
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
            padding: "0 1.5rem",
            opacity: contentOpacity,
            transform: `translateY(${contentTranslate}px)`,
            transition: "opacity 0.04s, transform 0.04s",
          }}
        >
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "rgba(224,193,104,0.85)",
              marginBottom: "1.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "2rem",
                height: "1px",
                background: "rgba(224,193,104,0.5)",
              }}
            />
            {ABOUT_ANURAAG.tagline}
            <span
              style={{
                display: "inline-block",
                width: "2rem",
                height: "1px",
                background: "rgba(224,193,104,0.5)",
              }}
            />
          </p>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "#ffffff",
              margin: "0 0 1.4rem",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
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
              fontFamily: "sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.78)",
              marginBottom: "1.8rem",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            From bridal mornings to editorial shoots — every look is crafted to feel like you, only
            elevated.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              marginBottom: "2.8rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {ABOUT_ANURAAG.badges.map((badge, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.62)",
                    textTransform: "uppercase",
                  }}
                >
                  {badge}
                </span>
                {i < ABOUT_ANURAAG.badges.length - 1 && (
                  <span
                    style={{
                      width: "1px",
                      height: "14px",
                      background: "rgba(255,255,255,0.3)",
                      display: "inline-block",
                    }}
                  />
                )}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#ffffff",
                color: "#2f2415",
                padding: "0.95rem 2.2rem",
                borderRadius: "999px",
                fontFamily: "sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#b9872e";
                el.style.color = "#fff";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 14px 40px rgba(185,135,46,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#ffffff";
                el.style.color = "#2f2415";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
              }}
            >
              Book a Session
            </a>
            <a
              href="#story"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "rgba(255,255,255,0.88)",
                padding: "0.95rem 2.2rem",
                borderRadius: "999px",
                fontFamily: "sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(224,193,104,0.6)";
                el.style.color = "#e0c168";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.3)";
                el.style.color = "rgba(255,255,255,0.88)";
              }}
            >
              View Works
            </a>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "1.8rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            opacity: contentOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "linear-gradient(to bottom, rgba(224,193,104,0.8), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "0.52rem",
              letterSpacing: "0.42em",
              color: "rgba(224,193,104,0.55)",
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
            height: "6px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* ── MARQUEE ── */}


        {/* ── STATS SECTION with counting animation ── */}
        <section
          id="story"
          style={{
            background: "#fdfaf2",
            padding: "5rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-2rem",
              right: "-1rem",
              fontSize: "16rem",
              fontWeight: 900,
              color: "rgba(185,135,46,0.05)",
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
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "1.5rem",
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

        {/* ── STORY SECTION with left/right reveals ── */}
        <section
          style={{
            padding: "7rem 2rem",
            background: "linear-gradient(170deg,#fff9ed 0%,#f7eed2 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
              fontFamily: "sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "rgba(185,135,46,0.35)",
              userSelect: "none",
            }}
          >
            The Story
          </div>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="story-grid"
          >
            {/* Left column - fade up from left */}
            <div className="reveal-left">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#a93d2b",
                  marginBottom: "1.5rem",
                }}
              >
                The Philosophy
              </p>
              <h2
                style={{
                  fontSize: "clamp(2.2rem,4.5vw,4rem)",
                  lineHeight: 1.05,
                  fontWeight: 400,
                  color: "#2f2415",
                  margin: "0 0 2rem",
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
                  fontFamily: "sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "#5b4a2e",
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                }}
              >
                {ABOUT_ANURAAG.description.split("\n\n")[0]}
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "#5b4a2e",
                  fontWeight: 300,
                }}
              >
                {ABOUT_ANURAAG.description.split("\n\n")[1]}
              </p>
              <blockquote
                style={{
                  margin: "3rem 0 0",
                  padding: "1.5rem 2rem",
                  borderLeft: "4px solid #b9872e",
                  background: "rgba(185,135,46,0.06)",
                  borderRadius: "0 1.5rem 1.5rem 0",
                }}
              >
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontStyle: "italic",
                    color: "#7a5417",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  "Every face is a canvas. Every look, a love letter to the person wearing it."
                </p>
                <cite
                  style={{
                    display: "block",
                    fontFamily: "sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#7d6a4d",
                    marginTop: "0.75rem",
                    fontStyle: "normal",
                  }}
                >
                  — Anuraag Kaushik
                </cite>
              </blockquote>
            </div>

            {/* Right column - stagger reveal from right */}
            <div className="reveal-right">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#a93d2b",
                  marginBottom: "1.5rem",
                }}
              >
                What Sets Us Apart
              </p>
              <div
                className="stagger-children"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {ABOUT_ANURAAG.highlights.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.4rem",
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(185,135,46,0.15)",
                      borderRadius: "1rem",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 4px 20px rgba(150,115,38,0.07)",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#2f2415";
                      el.style.borderColor = "#b9872e";
                      el.style.transform = "translateX(8px)";
                      const t = el.querySelector(".hl") as HTMLElement;
                      if (t) t.style.color = "rgba(255,255,255,0.9)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.8)";
                      el.style.borderColor = "rgba(185,135,46,0.15)";
                      el.style.transform = "translateX(0)";
                      const t = el.querySelector(".hl") as HTMLElement;
                      if (t) t.style.color = "#2f2415";
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#b9872e,#e0c168)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="hl"
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "0.9rem",
                        color: "#2f2415",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        transition: "color 0.3s",
                      }}
                    >
                      {item}
                      {i === 5 && <Plane size={14} style={{ color: "#b9872e", flexShrink: 0 }} />}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION with scale reveal on each card ── */}
<section
  style={{
    background: "#2f2415",
    padding: "7rem 2rem",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      top: "-8rem",
      right: "-8rem",
      width: "30rem",
      height: "30rem",
      borderRadius: "50%",
      background: "radial-gradient(circle,rgba(185,135,46,0.15) 0%,transparent 70%)",
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
        marginBottom: "3rem",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#b9872e",
            marginBottom: "0.75rem",
          }}
        >
          Expertise
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem,4vw,3.5rem)",
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
          fontFamily: "sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#b9872e",
          textDecoration: "none",
          borderBottom: "1px solid rgba(185,135,46,0.3)",
          paddingBottom: "2px",
        }}
      >
        View All →
      </a>
    </div>
    
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
      }}
      className="services-grid"
    >
      {ABOUT_ANURAAG.services.map((service, i) => {
        // Map service names to image imports
        const serviceImages: Record<string, string> = {
          "Bridal Makeup": bridalMakeup,
          "Engagement & Reception Makeup": engagementMakeup,
          "Fashion & Editorial Shoots": editorialMakeup,
          "Party & Occasion Makeup": partyMakeup,
          "Photoshoot Makeup": celebrityMakeup,
          "Makeup Consultation": masterclassMakeup,
        };
        
        const backgroundImage = serviceImages[service] || "";
        
        return (
          <div
            key={i}
            className="reveal-scale service-card"
            style={{
              position: "relative",
              height: "380px",
              borderRadius: "1.5rem",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(185,135,46,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-8px)";
              el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              
              // Image rises from bottom
              const imgContainer = el.querySelector(".image-container") as HTMLElement;
              if (imgContainer) {
                imgContainer.style.transform = "translateY(0)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
              
              // Image goes back down
              const imgContainer = el.querySelector(".image-container") as HTMLElement;
              if (imgContainer) {
                imgContainer.style.transform = "translateY(100%)";
              }
            }}
          >
            {/* Image Container - rises from bottom on hover */}
            <div
              className="image-container"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                transform: "translateY(100%)",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={backgroundImage}
                alt={service}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Dark overlay for text readability when image rises */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(47,36,21,0.85) 0%, rgba(185,135,46,0.7) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            
            {/* Content - always visible with dark background by default */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "2rem",
                transition: "all 0.3s ease",
                background: "rgba(47,36,21,0.85)", // Dark background by default
              }}
              className="card-content"
            >
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b9872e",
                  display: "block",
                  marginBottom: "0.5rem",
                  transition: "color 0.3s ease",
                }}
                className="service-number"
              >
                0{i + 1}
              </span>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: "#fdfaf2",
                  fontWeight: 500,
                  display: "block",
                  lineHeight: 1.3,
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
                className="service-title"
              >
                {service}
              </span>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  fontSize: "0.85rem",
                  color: "#b9872e",
                  opacity: 0,
                  transform: "translateX(-10px)",
                  transition: "all 0.3s ease",
                }}
                className="card-arrow"
              >
                Learn more →
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  
  <style>{`
    .service-card {
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .service-card:hover .card-content {
      background: transparent !important;
    }
    
    .service-card:hover .service-title {
      transform: translateX(4px);
      color: #e0c168;
    }
    
    .service-card:hover .service-number {
      color: #e0c168;
    }
    
    .service-card:hover .card-arrow {
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
    
    @media (max-width: 900px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem !important;
      }
      
      .service-card {
        height: 340px !important;
      }
    }
    
    @media (max-width: 560px) {
      .services-grid {
        grid-template-columns: 1fr !important;
      }
      
      .service-card {
        height: 320px !important;
      }
    }
  `}</style>
</section>

        {/* ── CTA SECTION ── */}
        <section
          style={{
            padding: "8rem 2rem",
            background: "linear-gradient(135deg,#fffdf5 0%,#f4e5b8 60%,#ecdfa0 100%)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
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
                width: `${r * 18}rem`,
                height: `${r * 18}rem`,
                borderRadius: "50%",
                border: `1px solid rgba(185,135,46,${0.1 / r})`,
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
                fontFamily: "sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#a93d2b",
                marginBottom: "1rem",
              }}
            >
              Let's Create Together
            </p>
            <h2
              style={{
                fontSize: "clamp(2.5rem,6vw,5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#2f2415",
                margin: "0 0 1.5rem",
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
                fontFamily: "sans-serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#5b4a2e",
                fontWeight: 300,
                marginBottom: "2.5rem",
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
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "#b9872e",
                  color: "#fff",
                  padding: "1rem 2.5rem",
                  borderRadius: "999px",
                  fontFamily: "sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 18px 45px rgba(185,135,46,0.28)",
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
                Book Now →
              </a>
              <a
                href={`tel:${ABOUT_ANURAAG.contact.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#2f2415",
                  padding: "1rem 2.5rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(47,36,21,0.25)",
                  fontFamily: "sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
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
                  el.style.borderColor = "rgba(47,36,21,0.25)";
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

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        
        /* Reveal animation base classes */
        .reveal-fadeup {
          opacity: 0;
          transform: translateY(45px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .reveal-fadeup.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        .reveal-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .reveal-left.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        
        .reveal-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .reveal-right.revealed {
          opacity: 1;
          transform: translateX(0);
        }
        
        .reveal-scale {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1);
        }
        .reveal-scale.revealed {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Stagger children animations */
        .stagger-children > * {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1);
        }
        .stagger-children.revealed > * {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-children > *:nth-child(1) { transition-delay: 0s; }
        .stagger-children > *:nth-child(2) { transition-delay: 0.08s; }
        .stagger-children > *:nth-child(3) { transition-delay: 0.16s; }
        .stagger-children > *:nth-child(4) { transition-delay: 0.24s; }
        .stagger-children > *:nth-child(5) { transition-delay: 0.32s; }
        .stagger-children > *:nth-child(6) { transition-delay: 0.4s; }
        
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;