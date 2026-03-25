import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { ArrowRight, Star, Sparkles, Camera, Heart } from "lucide-react";
import anuraagImage from "@/assets/anuraag-kaushik.jpg";

const Index = () => {
  const { addToCart } = useCart();
  const popularServices = services.filter((s) => s.popular);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero - Magazine Editorial Style */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={anuraagImage}
              alt="Anuraag Kaushik - Makeup Artist"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </div>
          
          {/* Magazine-style typography overlay */}
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Left side - Bold typography */}
              <div className="space-y-4 md:space-y-6 mb-12 md:mb-0">
                <div className="inline-block">
                  <p className="text-white/80 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-2 border-l-2 border-primary pl-4">
                    Makeup Artist & Creative Director
                  </p>
                </div>
                
                <div className="relative">
                  <h1 className="font-display text-8xl md:text-9xl lg:text-[10rem] text-white leading-[0.9] tracking-tight">
                    ANURAAG
                  </h1>
                  <div className="relative mt-2">
                    <h1 className="font-display text-7xl md:text-8xl lg:text-[8rem] text-primary/90 leading-[0.9] tracking-tighter italic">
                      KAUSHIK
                    </h1>
                  </div>
                </div>
                
                {/* Magazine-style tagline */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm tracking-wide">
                    BRIDAL
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm tracking-wide">
                    EDITORIAL
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm tracking-wide">
                    CELEBRITY
                  </span>
                </div>
              </div>
              
              {/* Right side - Magazine quote */}
              <div className="mt-12 md:mt-16 flex flex-col items-start gap-6">
                <div className="max-w-xl">
                  <p className="text-white/90 font-body text-base md:text-lg leading-relaxed mb-6 italic">
                    "Transforming faces into art. Creating looks that define moments, 
                    enhance beauty, and tell your unique story."
                  </p>
                  
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      to="/services"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:opacity-90 transition flex items-center gap-2 group"
                    >
                      Book Your Session 
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/about/our-story"
                      className="border border-white/30 text-white px-8 py-3 rounded-lg font-body font-light hover:border-primary hover:text-primary transition"
                    >
                      Discover the Art
                    </Link>
                  </div>
                </div>
                
                {/* Magazine-style meta info */}
                <div className="flex gap-8 text-white/60 text-xs md:text-sm uppercase tracking-wider mt-4">
                  <span>✦ FEATURED IN</span>
                  <span>VOGUE INDIA</span>
                  <span>✦ COSMOPOLITAN</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative corner elements - Magazine style */}
          <div className="absolute bottom-8 right-8 z-10 hidden md:block">
            <div className="text-right">
              <p className="text-white/40 text-xs tracking-widest">EST. 2015</p>
              <div className="w-12 h-px bg-white/30 mt-2 ml-auto"></div>
            </div>
          </div>
          
          <div className="absolute top-8 left-8 z-10 hidden md:block">
            <div className="text-left">
              <div className="w-12 h-px bg-white/30 mb-2"></div>
              <p className="text-white/40 text-xs tracking-widest">MAKEUP ARTISTRY</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 border-y border-border">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Brides Styled" },
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Celebrity Clients" },
              { value: "4.9", label: "Average Rating", icon: Star },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-3xl md:text-4xl text-primary">{stat.value}</p>
                <p className="text-muted-foreground font-body text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">What We Offer</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">Popular Services</h2>
              </div>
              <Link to="/services" className="text-primary font-body text-sm flex items-center gap-1 hover:opacity-80 transition">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <div key={service.id} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-primary/80 text-xs font-body tracking-wider uppercase mb-1">{service.category}</p>
                    <h3 className="font-display text-xl text-foreground mb-2">{service.name}</h3>
                    <p className="text-muted-foreground font-body text-sm font-light mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-primary font-display text-xl">₹{service.price.toLocaleString()}</span>
                        <span className="text-muted-foreground text-xs ml-2">/ {service.duration}</span>
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
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
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

        {/* Why Choose */}
        <section className="py-20 px-6 bg-card">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Why Choose Anuraag</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">Artistry Meets Perfection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Sparkles, title: "Premium Products", desc: "Only luxury, skin-safe products from top international brands." },
                { icon: Camera, title: "Camera Ready", desc: "Looks designed to be flawless in person and on camera." },
                { icon: Heart, title: "Personalized Touch", desc: "Every look is customized to your features, skin tone, and personality." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-xl border border-border hover:border-primary/30 transition">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Ready to Transform?</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">Book Your Session Today</h2>
          <p className="text-muted-foreground font-body font-light max-w-md mx-auto mb-8">
            Whether it's your wedding day or a special event, let Anuraag create a look you'll never forget.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-body font-medium text-lg hover:opacity-90 transition"
          >
            View Services <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;