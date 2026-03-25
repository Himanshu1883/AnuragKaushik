import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <main className="px-6 py-12 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-body text-sm tracking-[0.2em] uppercase mb-2" style={{ color: "#b9872e" }}>
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: "#000000" }}>
            Contact Anuraag
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                placeholder="Your Name" 
                style={{ 
                  backgroundColor: "#F8F8F8", 
                  borderColor: "#E5E5E5",
                  color: "#000000",
                }} 
                className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent"
              />
              <Input 
                placeholder="Phone Number" 
                style={{ 
                  backgroundColor: "#F8F8F8", 
                  borderColor: "#E5E5E5",
                  color: "#000000",
                }} 
                className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent"
              />
            </div>
            <Input 
              placeholder="Email Address" 
              style={{ 
                backgroundColor: "#F8F8F8", 
                borderColor: "#E5E5E5",
                color: "#000000",
              }} 
              className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent"
            />
            <Input 
              placeholder="Event Date (optional)" 
              style={{ 
                backgroundColor: "#F8F8F8", 
                borderColor: "#E5E5E5",
                color: "#000000",
              }} 
              className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent"
            />
            <Textarea 
              placeholder="Tell us about your event and requirements..." 
              rows={5} 
              style={{ 
                backgroundColor: "#F8F8F8", 
                borderColor: "#E5E5E5",
                color: "#000000",
              }} 
              className="border focus:outline-none focus:ring-2 focus:ring-[#b9872e] focus:border-transparent"
            />
            <Button 
              className="w-full py-3 hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: "#b9872e",
                color: "#000000"
              }}
            >
              Send Inquiry
            </Button>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl mb-4" style={{ color: "#000000" }}>Reach Out</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3" style={{ color: "#4A4A4A" }}>
                  <FiPhone size={18} style={{ color: "#b9872e" }} />
                  <span className="font-body text-sm font-light">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A4A4A" }}>
                  <FiMail size={18} style={{ color: "#b9872e" }} />
                  <span className="font-body text-sm font-light">hello@anuraagkaushik.com</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A4A4A" }}>
                  <FiMapPin size={18} style={{ color: "#b9872e" }} />
                  <span className="font-body text-sm font-light">New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "#4A4A4A" }}>
                  <FaInstagram size={18} style={{ color: "#b9872e" }} />
                  <span className="font-body text-sm font-light">@anuraagkaushik</span>
                </div>
              </div>
            </div>
            <div 
              className="p-6 rounded-xl border"
              style={{ 
                backgroundColor: "#F8F8F8", 
                borderColor: "#E5E5E5"
              }}
            >
              <h4 className="font-display text-lg mb-2" style={{ color: "#000000" }}>Booking Note</h4>
              <p className="font-body text-sm font-light" style={{ color: "#4A4A4A" }}>
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