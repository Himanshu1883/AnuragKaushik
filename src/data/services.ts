import bhaatMakeup from "@/assets/bhaat2.jpeg";
import bridalMakeup from "@/assets/bridal.jpg";
import bhaatMakeup2 from "@/assets/con2.jpg";
import engagementMakeup from "@/assets/engage.jpg";
import haldiMakeup from "@/assets/haldi.jpg";
import Haldi2 from "@/assets/haldi2.jpeg";
import mehndi2 from "@/assets/mehndi2.jpeg";
import partyMakeupYoung from "@/assets/party.jpeg";
import partyMakeup from "@/assets/party1.jpg";
import preweddingMakeup from "@/assets/prewed.jpeg";
import receptionMakeup from "@/assets/recep.jpg";

export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  delhiPrice: number;
  outsideDelhiPrice: number;
  duration: string;
  image: string;
  images?: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Engagement Makeup",
    category: "Engagement",
    description: "Elegant engagement glam with HD finish. Delhi: ₹35,000 | Outside Delhi: ₹40,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 35000,
    delhiPrice: 35000,
    outsideDelhiPrice: 40000,
    duration: "2-3 hours",
    image: engagementMakeup,
    popular: true,
  },
  {
    id: 2,
    name: "Mehndi Makeup",
    category: "Mehndi",
    description: "Fresh and vibrant mehndi look with long-lasting products. Delhi: ₹25,000 | Outside Delhi: ₹30,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 25000,
    delhiPrice: 25000,
    outsideDelhiPrice: 30000,
    duration: "2-3 hours",
    image: preweddingMakeup,
  },
  {
    id: 3,
    name: "Haldi Makeup",
    category: "Haldi",
    description: "Natural and dewy haldi look designed for bright daylight events. Delhi: ₹20,000 | Outside Delhi: ₹25,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 20000,
    delhiPrice: 20000,
    outsideDelhiPrice: 25000,
    duration: "2 hours",
    image: haldiMakeup,
  },
  {
    id: 4,
    name: "Reception Makeup",
    category: "Reception",
    description: "High-glam reception makeup with flawless skin finish and premium products. Delhi: ₹45,000 | Outside Delhi: ₹50,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 45000,
    delhiPrice: 45000,
    outsideDelhiPrice: 50000,
    duration: "3-4 hours",
    image: receptionMakeup,
    popular: true,
  },
  {
    id: 5,
    name: "Bridal Makeup",
    category: "Bridal",
    description: "Complete bridal transformation with premium products and detailed finishing. Delhi: ₹45,000 | Outside Delhi: ₹50,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 45000,
    delhiPrice: 45000,
    outsideDelhiPrice: 50000,
    duration: "3-4 hours",
    image: bridalMakeup,
    popular: true,
  },
  {
  id: 6,
  name: "Bhaat Soft Glam",
  category: "Bhaat",
  description: "Soft glam bhaat look with lightweight finish.",
  price: 20000,
  delhiPrice: 20000,
  outsideDelhiPrice: 25000,
  duration: "1.5 hours",
  image: bhaatMakeup2,
},
  {
    id: 7,
    name: "Party Makeup (Old)",
    category: "Party",
    description: "Classic party glam for mature features with balanced, elegant detailing. Delhi: ₹12,000 | Outside Delhi: ₹15,000.",
    price: 12000,
    delhiPrice: 12000,
    outsideDelhiPrice: 15000,
    duration: "1-2 hours",
    image: partyMakeup,
  },
  {
    id: 8,
    name: "Party Makeup (Young)",
    category: "Party",
    description: "Trendy and fresh party look with modern glam styling. Delhi: ₹15,000 | Outside Delhi: ₹18,000.",
    price: 15000,
    delhiPrice: 15000,
    outsideDelhiPrice: 18000,
    duration: "1-2 hours",
    image: partyMakeupYoung,
  },
    {
    id: 9,
    name: "Bhaat Makeup",
    category: "Bhaat",
    description: "Soft yet festive bhaat makeup curated for traditional functions. Delhi: ₹20,000 | Outside Delhi: ₹25,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 20000,
    delhiPrice: 20000,
    outsideDelhiPrice: 25000,
    duration: "2 hours",
    image: bhaatMakeup,
  },
  {
  id: 10,
  name: "Light Engagement Makeup",
  category: "Engagement",
  description: "Soft engagement glam with natural skin finish.",
  price: 35000,
  delhiPrice: 35000,
  outsideDelhiPrice: 40000,
  duration: "2 hours",
  image: "/engagement3.jpeg",
},
{
  id: 11,
  name: "HD Engagement Makeup",
  category: "Engagement",
  description: "HD coverage engagement look for flawless photography.",
  price: 35000,
  delhiPrice: 35000,
  outsideDelhiPrice: 40000,
  duration: "3 hours",
  image: "/reception4.jpeg",
},
{
  id: 12,
  name: "Minimal Mehndi Makeup",
  category: "Mehndi",
  description: "Minimal mehndi look with radiant base.",
  price: 25000,
  delhiPrice: 25000,
  outsideDelhiPrice: 30000,
  duration: "1.5 hours",
  image: mehndi2,
},
{
  id: 13,
  name: "HD Mehndi Makeup",
  category: "Mehndi",
  description: "HD mehndi glam with long-wear products.",
  price: 25000,
  delhiPrice: 25000,
  outsideDelhiPrice: 30000,
  duration: "2.5 hours",
  image: "/mehndi3.jpeg",
},
{
  id: 14,
  name: "Haldi Natural Glow",
  category: "Haldi",
  description: "Soft natural haldi glow with minimal coverage.",
  price: 20000,
  delhiPrice: 20000,
  outsideDelhiPrice: 25000,
  duration: "1.5 hours",
  image: Haldi2,
},
// {
//   id: 15,
//   name: "Haldi Premium Makeup",
//   category: "Haldi",
//   description: "Premium haldi makeup with airbrush finish.",
//   price: 20000,
//   delhiPrice: 20000,
//   outsideDelhiPrice: 25000,
//   duration: "2 hours",
//   image: xyzImage,
// },
{
  id: 16,
  name: "Reception HD Glam",
  category: "Reception",
  description: "HD reception glam with full coverage finish.",
  price: 45000,
  delhiPrice: 45000,
  outsideDelhiPrice: 50000,
  duration: "3-4 hours",
  image: "/reception2.jpeg",
},
{
  id: 17,
  name: "Reception Soft Glam",
  category: "Reception",
  description: "Soft glam reception look with elegant detailing.",
  price: 45000,
  delhiPrice: 45000,
  outsideDelhiPrice: 50000,
  duration: "3 hours",
  image: "/reception3.jpeg",
},
{
  id: 18,
  name: "Bridal Airbrush Makeup",
  category: "Bridal",
  description: "Airbrush bridal makeup with ultra-smooth finish.",
  price: 45000,
  delhiPrice: 45000,
  outsideDelhiPrice: 50000,
  duration: "4 hours",
  image: "/bridle2.jpeg",
  popular: true,
  // recommended: true,
},
{
  id: 19,
  name: "Bridal HD Makeup",
  category: "Bridal",
  description: "HD bridal glam with premium luxury products.",
  price: 45000,
  delhiPrice: 45000,
  outsideDelhiPrice: 50000,
  duration: "3-4 hours",
  image: "/bridle3.jpeg",
},
{
  id: 20,
  name: "Party Makeup (HD)",
  category: "Party",
  description: "HD party glam with long-lasting finish.",
  price: 15000,
  delhiPrice: 15000,
  outsideDelhiPrice: 18000,
  duration: "2 hours",
  image: "/party2.jpeg",
},
{
  id: 21,
  name: "Party Makeup (Soft Glam)",
  category: "Party",
  description: "Soft glam party makeup for subtle elegance.",
  price: 12000,
  delhiPrice: 12000,
  outsideDelhiPrice: 15000,
  duration: "1.5 hours",
  image: "/party3.jpeg",
},
{
  id: 22,
  name: "Bhaat HD Makeup",
  category: "Bhaat",
  description: "HD bhaat makeup with festive glow.",
  price: 20000,
  delhiPrice: 20000,
  outsideDelhiPrice: 25000,
  duration: "2 hours",
  image: "/bhaat2.jpeg",
},
//  {
//     id: 23,
//     name: "Bhaat Makeup",
//     category: "Bhaat",
//     description: "Soft yet festive bhaat makeup curated for traditional functions. Delhi: ₹20,000 | Outside Delhi: ₹25,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
//     price: 20000,
//     delhiPrice: 20000,
//     outsideDelhiPrice: 25000,
//     duration: "2 hours",
//     image: preweddingMakeup,
//   },
];

export const ABOUT_ANURAAG = {
  name: "Anuraag Kaushik",
  title: "Professional Makeup Artist",
  tagline: "Bridal & Fashion Glam Specialist âœ¨",

  image: "/assets/about.jpeg", // adjust path if needed

  description: `Anuraag Kaushik is a passionate and professional freelance makeup artist specializing in bridal and fashion glam looks. With a keen eye for detail and a deep understanding of skin tones, textures, and trends, Anuraag creates stunning transformations that enhance natural beauty while reflecting each client's unique personality.

From elegant bridal makeovers to high-fashion editorial looks, Anuraag combines creativity with precision to deliver flawless results. Known for professionalism, hygiene, and client comfort, every session is tailored to provide a luxurious and memorable experience.`,

  highlights: [
    "Specializes in Bridal Makeup",
    "Expert in Fashion & Glam Looks",
    "Personalized Makeup Sessions",
    "High-Quality Premium Products",
    "Focus on Skin-Friendly Techniques",
    "Available for Travel Worldwide "
  ],

  services: [
    "Bridal Makeup",
    "Engagement & Reception Makeup",
    "Fashion & Editorial Shoots",
    "Party & Occasion Makeup",
    "Photoshoot Makeup",
    "Makeup Consultation"
  ],

  stats: [
    { value: "500+", label: "Brides Styled" },
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Celebrity Clients" },
    { value: "4.9â˜…", label: "Average Rating" },
  ],

  experienceNote: "Freelance Makeup Artist with diverse experience across bridal, fashion, and event makeup.",

  contact: {
    phone: "+91 9625272041",
    availability: "Available for bookings worldwide"
  }
};
