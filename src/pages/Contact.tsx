import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-12 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Contact Anuraag</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-card border-border text-foreground" />
              <Input placeholder="Phone Number" className="bg-card border-border text-foreground" />
            </div>
            <Input placeholder="Email Address" className="bg-card border-border text-foreground" />
            <Input placeholder="Event Date (optional)" className="bg-card border-border text-foreground" />
            <Textarea placeholder="Tell us about your event and requirements..." rows={5} className="bg-card border-border text-foreground" />
            <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 py-3">
              Send Inquiry
            </Button>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-foreground mb-4">Reach Out</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+91 98765 43210" },
                  { icon: Mail, text: "hello@anuraagkaushik.com" },
                  { icon: MapPin, text: "New Delhi, India" },
                  { icon: Instagram, text: "@anuraagkaushik" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/80">
                    <item.icon size={18} className="text-primary" />
                    <span className="font-body text-sm font-light">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-display text-lg text-foreground mb-2">Booking Note</h4>
              <p className="text-muted-foreground font-body text-sm font-light">
                For bridal bookings, we recommend reaching out at least 2-3 months in advance. 
                A trial session is included with all bridal packages.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
