import { useCart } from "@/contexts/CartContext";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, totalItems, totalPrice } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about/our-story" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative border-b border-border/80 bg-background/78 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-6 md:px-8 lg:px-10">
        <button
          className="rounded-full border border-border/80 bg-white/55 p-2.5 text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-border/80 bg-white/55 px-3 py-2 shadow-[0_10px_28px_rgba(166,117,127,0.08)] lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="rounded-full px-4 py-2 font-body text-sm font-medium text-foreground/75 transition hover:bg-primary/10 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/">
            <span className="block font-display text-2xl tracking-[0.18em] text-foreground">ANURAAG</span>
            <span className="hidden font-body text-[0.62rem] uppercase tracking-[0.36em] text-primary/80 sm:block">
              Makeup Artist
            </span>
          </Link>
        </div>

        <button
          className="relative rounded-full border border-border/80 bg-white/55 p-2.5 text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border/80 bg-background/95 px-6 py-6 shadow-[0_18px_45px_rgba(80,47,56,0.12)] backdrop-blur-xl lg:hidden">
          <div className="space-y-2 rounded-[1.75rem] border border-border/80 bg-white/65 p-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block rounded-2xl px-4 py-3 font-body text-base font-medium text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border/80 bg-card/95 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border/80 p-6">
              <h2 className="font-display text-lg text-foreground">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full border border-border/80 bg-white/70 p-2 text-foreground transition hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-[1.5rem] border border-border/70 bg-white/70 p-4">
                      <div className="h-16 w-16 overflow-hidden rounded-xl bg-secondary">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="mt-1 text-sm font-medium text-primary">Rs. {item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 text-xs text-foreground"
                        >
                          +
                        </button>
                        <span className="text-sm text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 text-xs text-foreground"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-border/80 p-6">
                <div className="mb-4 flex justify-between">
                  <span className="text-foreground">Total</span>
                  <span className="font-display text-lg text-primary">Rs. {totalPrice.toLocaleString()}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full rounded-xl bg-primary py-3 text-center font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
