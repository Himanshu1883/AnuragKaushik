import { X, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about/our-story" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile menu */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Left nav */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-body font-light"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="font-display text-xl tracking-wider text-foreground">
            ANURAAG
          </Link>
        </div>

        {/* Cart */}
        <button
          className="p-2 text-foreground relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border z-50 px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-foreground/80 hover:text-primary text-lg font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Cart drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-lg text-foreground">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-foreground"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <p className="text-muted-foreground text-sm">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-foreground font-medium">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="text-sm text-primary font-medium mt-1">₹{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-foreground text-xs px-2">+</button>
                        <span className="text-sm text-foreground">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-foreground text-xs px-2">−</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary font-display text-lg">₹{totalPrice.toLocaleString()}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-medium hover:opacity-90 transition"
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
