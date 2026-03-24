import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-card text-foreground pt-12 pb-4 px-6 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="font-display text-2xl text-foreground mb-3">Anuraag Kaushik</h3>
            <p className="text-sm font-body font-light text-muted-foreground leading-relaxed max-w-sm mb-6">
              Professional makeup artist specializing in bridal, editorial & celebrity styling.
            </p>
            <div className="space-y-2 text-sm font-body font-light text-muted-foreground">
              <p>New Delhi, India</p>
              <p>+91 98765 43210</p>
              <p>hello@anuraagkaushik.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-body font-medium text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {["Bridal Makeup", "Party Makeup", "Editorial Shoot", "Masterclass"].map((s) => (
                  <li key={s}><Link to="/services" className="text-sm font-body font-light text-muted-foreground hover:text-primary transition">{s}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-body font-medium text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "/about/our-story" },
                  { label: "Contact", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((l) => (
                  <li key={l.label}><Link to={l.href} className="text-sm font-body font-light text-muted-foreground hover:text-primary transition">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-body font-medium text-foreground mb-4">Social</h4>
              <ul className="space-y-2">
                {["Instagram", "YouTube", "Facebook"].map((s) => (
                  <li key={s}><a href="#" className="text-sm font-body font-light text-muted-foreground hover:text-primary transition">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-4">
          <p className="text-xs font-body text-muted-foreground text-center">
            © 2026 Anuraag Kaushik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
