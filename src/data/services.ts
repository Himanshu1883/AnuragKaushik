import bhaatMakeup from "@/assets/bhaat2.jpeg";
import bridalMakeup from "@/assets/bridal_makeup_10.jpeg";
import bridalMakeup2 from "@/assets/bridal_makeup_2.jpeg";
import bridalMakeup4 from "@/assets/bridal_makeup_4.jpeg";
import bridalMakeup5 from "@/assets/bridal_makeup_5.jpeg";
import bridalMakeup6 from "@/assets/bridal_makeup_6.jpeg";
import bridalMakeup7 from "@/assets/bridal_makeup_7.jpeg";
import bridalMakeup8 from "@/assets/bridal_makeup_8.jpeg";
import bridalMakeup9 from "@/assets/bridal_makeup_9.jpeg";
import bridalMakeup1 from "@/assets/bridal_makeup_1.jpeg";
import bridalMakeup3 from "@/assets/bridal_makeup_3.jpeg";
import bridalMakeup11 from "@/assets/bridal_makeup_11.jpeg";
import bridalMakeup10 from "@/assets/bridal_makeup_10.jpeg";
// import bridalMakeup3 from "@/assets/bridal_makeup_3.jpeg";
import bhaatMakeup2 from "@/assets/con2.jpg";
import engagementMakeup from "@/assets/engagement-makeup_1.jpeg";
import haldiMakeup2 from "@/assets/haldi2.jpeg";
import haldiMakeup from "@/assets/haldi_makeup_1.jpeg";
import mehndiMakeup from "@/assets/mehendi_makeup_1.jpeg";
import mehndiMakeup2 from "@/assets/mehendi_makeup_2.jpeg";
import partyMakeupYoung from "@/assets/party_makeup_1.jpeg";
import partyMakeup from "@/assets/party_makeup_2.jpeg";
import partyMakeup3 from "@/assets/party_makeup_3.jpeg";
import partyMakeup4 from "@/assets/party_makeup_4.jpeg";
import receptionMakeup2 from "@/assets/reception-makeup_1.jpeg";
import receptionMakeup3 from "@/assets/reception-makeup_2.jpeg";
import receptionMakeup from "@/assets/reception_makeup_1.jpeg";
import cocktail from "@/assets/cocktails_1.jpeg";
import party_makeup_video from "@/assets/party_makeup_video.mp4";
import party_makeup_video2 from "@/assets/party_makeup_video2.mp4";
import reception_makeup_video from "@/assets/reception_reel_1.mp4";
import reception_makeup_video2 from "@/assets/reception_reel_2.mp4";
import Reception_video from "@/assets/Reception_video.mp4";
import reception_video2 from "@/assets/Reception_video2.mp4";
import bride_video from "@/assets/bride_makeup_video.mp4";
import mehendi_video from "@/assets/mehendi_video.mp4";
import reception_video4 from "@/assets/reception_video3.mp4";
import party_makeUP_video3 from "@/assets/party_makeup_video3.mp4";


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
  videos?: string[];
  popular?: boolean;
}

const baseServices: Service[] = [
  {
    id: 1,
    name: "Engagement Makeup",
    category: "Engagement",
    description: "Elegant engagement glam with HD finish. Delhi: ₹40,000 | Outside Delhi: ₹45,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 40000,
    delhiPrice: 40000,
    outsideDelhiPrice: 45000,
    duration: "2-3 hours",
    image: engagementMakeup,
    popular: true,
  },
  {
    id: 2,
    name: "Mehndi Makeup",
    category: "Mehndi",
    description:
      "Fresh and vibrant mehndi look with long-lasting products. Delhi:25,000 | Outside Delhi:30,000. Minimum booking package: 20 makeups at 7,000 per makeup.",
    price: 25000,
    delhiPrice: 25000,
    outsideDelhiPrice: 30000,
    duration: "2-3 hours",
    image: mehndiMakeup,
  },
  {
    id: 3,
    name: "Haldi Makeup",
    category: "Haldi",
    description: "Natural and dewy haldi look designed for bright daylight events. Delhi: ₹25,000 | Outside Delhi: ₹30,000. Minimum booking package: 25 makeups at ₹7,000 per makeup.",
    price: 25000,
    delhiPrice: 25000,
    outsideDelhiPrice: 30000,
    duration: "2 hours",
    image: haldiMakeup,
  },
  {
    id: 4,
    name: "Reception Makeup",
    category: "Reception",
    description:
      "High-glam reception makeup with flawless skin finish and premium products. Delhi:45,000 | Outside Delhi:50,000. Minimum booking package: 20 makeups at 7,000 per makeup.",
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
    description: "Complete bridal transformation with premium products and detailed finishing. Delhi: ₹50,000 | Outside Delhi: ₹55,000. Minimum booking package: 20 makeups at ₹7,000 per makeup.",
    price: 50000,
    delhiPrice: 50000,
    outsideDelhiPrice: 55000,
    duration: "3-4 hours",
    image: bridalMakeup10,
    popular: true,
  },
//   {
//   id: 6,
//   name: "Bhaat Soft Glam",
//   category: "Bhaat",
//   description: "Soft glam bhaat look with lightweight finish.",
//   price: 30000,
//   delhiPrice: 30000,
//   outsideDelhiPrice: 35000,
//   duration: "1.5 hours",
//   image: bhaatMakeup2,
// },
  {
    id: 7,
    name: "Party Makeup ",
    category: "Party",
    description: "Classic party glam for mature features with balanced, elegant detailing. Delhi: ₹17,000 | Outside Delhi: ₹22,000.",
    price: 17000,
    delhiPrice: 17000,
    outsideDelhiPrice: 22000,
    duration: "1-2 hours",
    image: partyMakeup,
  },
  {
    id: 8,
    name: "Party Makeup (Young)",
    category: "Party",
    description: "Trendy and fresh party look with modern glam styling. Delhi: ₹17,000 | Outside Delhi: ₹22,000.",
    price: 17000,
    delhiPrice: 17000,
    outsideDelhiPrice: 22000,
    duration: "1-2 hours",
    image: partyMakeupYoung,
  },
  {
  id: 10,
  name: "Light Engagement Makeup",
  category: "Engagement",
  description: "Soft engagement glam with natural skin finish.",
  price: 40000,
  delhiPrice: 40000,
  outsideDelhiPrice: 45000,
  duration: "2 hours",
  image: "/engagement3.jpeg",
},
{
  id: 11,
  name: "HD Engagement Makeup",
  category: "Engagement",
  description: "HD coverage engagement look for flawless photography.",
  price: 40000,
  delhiPrice: 40000,
  outsideDelhiPrice: 45000,
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
  image: "",
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
  price: 25000,
  delhiPrice: 25000,
  outsideDelhiPrice: 30000,
  duration: "1.5 hours",
  image: "",
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
  price: 17000,
  delhiPrice: 17000,
  outsideDelhiPrice: 22000,
  duration: "2 hours",
  image: "/party2.jpeg",
},
{
  id: 21,
  name: "Party Makeup (Soft Glam)",
  category: "Party",
  description: "Soft glam party makeup for subtle elegance.",
  price: 17000,
  delhiPrice: 17000,
  outsideDelhiPrice: 22000,
  duration: "1.5 hours",
  image: "/party3.jpeg",
},
// {
//   id: 22,
//   name: "Bhaat HD Makeup",
//   category: "Bhaat",
//   description: "HD bhaat makeup with festive glow.",
//   price: 30000,
//   delhiPrice: 30000,
//   outsideDelhiPrice: 35000,
//   duration: "2 hours",
//   image: "/bhaat2.jpeg",
// },
{
  id: 23,
  name: "Cocktail Glam Makeup",
  category: "Cocktail",
  description: "Glamorous cocktail look with flawless base and bold eyes. Delhi: ₹40,000 | Outside Delhi: ₹45,000. Includes makeup, hair styling, draping, lashes, and lenses.",
  price: 40000,
  delhiPrice: 40000,
  outsideDelhiPrice: 45000,
  duration: "2 hours",
  image: cocktail,
},
{
  id: 24,
  name: "Sangeet Glam Makeup",
  category: "Sangeet",
  description: "Elegant sangeet look with glowing skin and defined eyes for evening functions. Delhi: ₹35,000 | Outside Delhi: ₹40,000. Includes makeup, hair styling, draping, lashes, and lenses.",
  price: 35000,
  delhiPrice: 35000,
  outsideDelhiPrice: 40000,
  duration: "2 hours",
  image: "/mehndi3.jpeg",
},
{
  id: 25,
  name: "Groom Makeup & Draping",
  category: "Groom",
  description: "Complete groom styling for a polished and refined look. Delhi: ₹12,000 | Outside Delhi: ₹15,000. Includes makeup, hair styling, outfit draping, and grooming essentials.",
  price: 12000,
  delhiPrice: 12000,
  outsideDelhiPrice: 15000,
  duration: "1.5 hours",
  image: bridalMakeup11,
}
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

// Add more images category-wise here without creating new service entries.
// Example:
// Party: ["/party4.jpeg", "/party5.jpeg"]
const categoryExtraImages: Partial<Record<string, string[]>> = {
  Bridal: [
    bridalMakeup1,
    bridalMakeup2,
    bridalMakeup3,
    bridalMakeup4,
    bridalMakeup5,
    bridalMakeup6,
    bridalMakeup7,
    bridalMakeup8,
    bridalMakeup9,
    bridalMakeup11,
  ],
  Party: [partyMakeup, partyMakeupYoung, partyMakeup3, partyMakeup4],
  Reception: [receptionMakeup, receptionMakeup2, receptionMakeup3],
  Mehndi: [mehndiMakeup, mehndiMakeup2],
  Haldi: [haldiMakeup, haldiMakeup2],
  
};

// Add category-wise videos here.
// Example:
// Bridal: ["/videos/bridal1.mp4", "/videos/bridal2.mp4"]
const categoryExtraVideos: Partial<Record<string, string[]>> = {
  Bridal: [bride_video],
  Party: [party_makeup_video, party_makeup_video2],
  Cocktail: [],
  Groom: [],
  Sangeet: [],
  Reception: [reception_makeup_video, reception_makeup_video2, Reception_video, reception_video4],
  Mehndi: [mehendi_video],
  Haldi: [],
  Bhaat: [],
};

export const services: Service[] = baseServices.map((service) => {
  const ownImages = (service.images ?? []).filter(Boolean);
  const ownVideos = (service.videos ?? []).filter(Boolean);
  const fallbackImage = service.image ? [service.image] : [];
  const categoryImages = categoryExtraImages[service.category] ?? [];
  const categoryVideos = categoryExtraVideos[service.category] ?? [];

  const mergedImages = Array.from(
    new Set([...ownImages, ...fallbackImage, ...categoryImages].filter(Boolean)),
  );
  const mergedVideos = Array.from(
    new Set([...ownVideos, ...categoryVideos].filter(Boolean)),
  );

  return {
    ...service,
    images: mergedImages.length > 0 ? mergedImages : undefined,
    videos: mergedVideos.length > 0 ? mergedVideos : undefined,
  };
});

export const ABOUT_ANURAAG = {
  name: "Anuraag Kaushik",
  title: "Professional Makeup Artist",
  tagline: "Bridal & Fashion Glam Specialist ✨",

  image: "/assets/about.jpeg", // adjust path if needed

  description: `Anuraag Kaushik is a passionate and professional freelance makeup artist specializing in bridal and fashion glam looks. With a keen eye for detail and a deep understanding of skin tones, textures, and trends, Anuraag creates stunning transformations that enhance natural beauty while reflecting each client's unique personality.

From elegant bridal makeovers to high-fashion editorial looks, Anuraag combines creativity with precision to deliver flawless results. Known for professionalism, hygiene, and client comfort, every session is tailored to provide a luxurious and memorable experience.`,

  highlights: [
    "Specializes in Bridal Makeup",
    "Expert in Fashion & Glam Looks",
    "Personalized Makeup Sessions",
    "High-Quality Premium Products",
    "Focus on Skin-Friendly Techniques",
    "Available for Travel Worldwide ",
  ],

  services: [
    "Bridal Makeup",
    "Engagement & Reception Makeup",
    "Fashion & Editorial Shoots",
    "Party & Occasion Makeup",
    "Photoshoot Makeup",
    "Makeup Consultation",
  ],

  stats: [
    { value: "500+", label: "Brides Styled" },
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Celebrity Clients" },
    { value: "4.9★", label: "Average Rating" },
  ],

  experienceNote:
    "Freelance Makeup Artist with diverse experience across bridal, fashion, and event makeup.",

  contact: {
    phone: "+91 9821936847",
    availability: "Available for bookings worldwide",
  },
};

