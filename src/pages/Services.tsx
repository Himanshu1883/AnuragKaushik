import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useCart } from "@/contexts/CartContext";
import { services } from "@/data/services";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

const Services = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Offerings</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Services & Pricing</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div key={service.id} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-primary/80 text-xs font-body tracking-wider uppercase">{service.category}</p>
                  {service.popular && (
                    <span className="bg-primary/20 text-primary text-[0.65rem] px-2 py-0.5 rounded-full font-medium">Popular</span>
                  )}
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground font-body text-sm font-light mb-4">{service.description}</p>
                <p className="text-muted-foreground text-xs mb-4">Duration: {service.duration}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-display text-xl">₹{service.price.toLocaleString()}</span>
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
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
