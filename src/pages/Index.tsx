import anuraagImage from "@/assets/anuraag-kaushik.jpg";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { ArrowRight, Camera, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Index = () => {
  const { addToCart } = useCart();
  const popularServices = services.filter((s) => s.popular);

  const stats = [
    { value: "500+", label: "Brides Styled" },
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Celebrity Clients" },
    { value: "4.9", label: "Average Rating" },
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

  return (
    <div className="min-h-screen bg-[#fdfaf2] text-[#2f2415]">
      <Header />

      <main className="overflow-hidden">
        <section className="relative isolate min-h-[92vh] overflow-hidden bg-[linear-gradient(180deg,#fffdf7_0%,#f7eed2_100%)]">
          <img
            src={anuraagImage}
            alt="Anuraag Kaushik - Makeup Artist"
            className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-top md:w-[52%]"
          />
          {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,252,244,0.97)_0%,rgba(255,249,231,0.94)_46%,rgba(173,123,55,0.18)_68%,rgba(88,20,20,0.12)_100%)]" /> */}
          <div className="absolute left-[-8rem] top-[-4rem] -z-10 h-72 w-72 rounded-full bg-[#f0d98a]/35 blur-3xl" />
          <div className="absolute bottom-[-5rem] left-[14%] -z-10 h-64 w-64 rounded-full bg-[#d0472f]/10 blur-3xl" />
          <div className="absolute right-[8%] top-[12%] -z-10 hidden h-44 w-44 rounded-full border border-[#b9872e]/25 md:block" />

          <div className="mx-auto flex min-h-[92vh] w-full max-w-8xl items-center px-6 py-16 md:px-12 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-5 font-body text-sm uppercase tracking-[0.35em] text-[#a93d2b]">
                Luxury Bridal Makeup Artist
              </p>
              <h1 className="font-display text-6xl leading-none text-[#2f2415] md:text-7xl lg:text-[6.5rem]">
                Bridal beauty,
                <br />
                <span className="bg-gradient-to-r from-[#7a5417] via-[#c2952f] to-[#e0c168] bg-clip-text text-transparent italic">
                  gilded with quiet drama
                </span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg font-light leading-8 text-[#5b4a2e] md:text-xl">
                Signature bridal artistry with radiant skin, expressive eyes, and a soft sculpted finish designed
                to look elegant in person, in portraits, and through every celebration.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-8 py-3 font-body text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(185,135,46,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a17829]"
                >
                  Book Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about/our-story"
                  className="inline-flex items-center rounded-full border border-[#b9872e]/30 bg-white/70 px-8 py-3 font-body text-sm font-medium uppercase tracking-[0.18em] text-[#6a4f1f] transition hover:border-[#a93d2b]/35 hover:text-[#a93d2b]"
                >
                  Learn More
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  "Soft bridal beauty with modern polish",
                  "Camera-ready skin with elegant definition",
                  "Luxury studio and on-location sessions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="animate-fade-in rounded-[1.75rem] border border-[#b9872e]/12 bg-white/72 p-4 shadow-[0_18px_45px_rgba(130,99,32,0.10)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#a93d2b]/18 hover:bg-[#fffaf0]"
                    style={{ animationDelay: `${index * 180}ms`, animationFillMode: "both" }}
                  >
                    <p className="font-body text-sm leading-6 text-[#4d3e24]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 hidden rounded-[1.9rem] border border-[#b9872e]/20 bg-white/78 p-6 text-[#2f2415] shadow-[0_18px_45px_rgba(130,99,32,0.14)] backdrop-blur md:block lg:right-12">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[#a93d2b]">Signature Style</p>
            <p className="mt-2 font-display text-3xl text-[#7a5417]">Golden Soft Glam</p>
            <p className="mt-3 font-body text-sm text-[#5b4a2e]">Bridal / Reception / Occasion</p>
          </div>
        </section>

        <section className="px-6 py-8 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-5 rounded-[2rem] border border-[#b9872e]/15 bg-white/80 p-8 shadow-[0_22px_55px_rgba(150,115,38,0.10)] backdrop-blur md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-3 flex justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e7b1] text-[#b9872e]">
                    <Star className="h-5 w-5" />
                  </span>
                </div>
                <p className="font-display text-4xl leading-none text-[#7a5417]">{stat.value}</p>
                <p className="mt-2 font-body text-sm uppercase tracking-[0.18em] text-[#7d6a4d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-[#a93d2b]">Beauty Direction</p>
              <h2 className="font-display text-4xl text-[#2f2415] md:text-5xl">
                Makeup that feels elevated, feminine, and unmistakably bespoke.
              </h2>
            </div>
            <p className="font-body text-base font-light leading-8 text-[#5b4a2e] md:text-lg">
              The visual language is intentionally soft and polished: luminous skin, romantic color stories, and
              clean finishing details that complement bridalwear, occasion looks, and editorial concepts without
              overpowering the person wearing them.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-[#a93d2b]">Signature Services</p>
                <h2 className="font-display text-4xl text-[#2f2415] md:text-5xl">Most Requested Looks</h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 font-body text-sm uppercase tracking-[0.18em] text-[#7a5417] transition hover:text-[#a93d2b]"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                    <p className="mb-2 font-body text-xs uppercase tracking-[0.22em] text-[#a93d2b]">{service.category}</p>
                    <h3 className="mb-2 font-display text-3xl leading-none text-[#2f2415]">{service.name}</h3>
                    <p className="mb-5 font-body text-sm font-light leading-7 text-[#7d6a4d] line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-end justify-between gap-4 border-t border-[#e7d8ad] pt-5">
                      <div>
                        <span className="font-display text-2xl text-[#7a5417]">Rs. {service.price.toLocaleString()}</span>
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

        <section className="bg-[linear-gradient(180deg,rgba(255,253,247,0.7),rgba(247,238,210,0.95))] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-[#a93d2b]">Why Choose Anuraag</p>
              <h2 className="font-display text-4xl text-[#2f2415] md:text-5xl">
                Editorial softness with professional precision
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[2rem] border border-[#e8d8a8] bg-white/85 p-8 text-center shadow-[0_20px_50px_rgba(150,115,38,0.10)] backdrop-blur"
                >
                  <item.icon className="mx-auto mb-5 h-9 w-9 text-[#b9872e]" />
                  <h3 className="mb-3 font-display text-3xl text-[#2f2415]">{item.title}</h3>
                  <p className="font-body text-sm font-light leading-7 text-[#7d6a4d]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#b9872e]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(250,242,211,0.98),rgba(255,250,239,0.95))] px-8 py-16 text-center shadow-[0_28px_70px_rgba(150,115,38,0.13)]">
            <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-[#a93d2b]">Ready to Transform?</p>
            <h2 className="mb-5 font-display text-4xl text-[#2f2415] md:text-6xl">Reserve your beauty session</h2>
            <p className="mx-auto mb-8 max-w-2xl font-body text-base font-light leading-8 text-[#5b4a2e] md:text-lg">
              From intimate bridal mornings to fashion-forward shoots, every booking is built around a polished,
              soft-focus result that photographs beautifully and still feels like you.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#b9872e] px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(185,135,46,0.24)] transition hover:-translate-y-0.5 hover:bg-[#a93d2b]"
            >
              View Services <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
