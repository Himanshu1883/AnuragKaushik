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
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src={anuraagImage}
              alt="Anuraag Kaushik - Makeup Artist"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-2xl">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Professional Makeup Artist</p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-6">
              Anuraag<br />
              <span className="text-gradient">Kaushik</span>
            </h1>
            <p className="text-foreground/70 font-body font-light text-lg mb-8 max-w-md">
              Transforming faces into art. Bridal, editorial & celebrity makeup artistry that redefines beauty.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/services"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium hover:opacity-90 transition flex items-center gap-2"
              >
                Book Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/about/our-story"
                className="border border-foreground/30 text-foreground px-8 py-3 rounded-lg font-body font-light hover:border-primary hover:text-primary transition"
              >
                Learn More
              </Link>
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
