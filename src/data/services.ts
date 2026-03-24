import bridalMakeup from "@/assets/bridal-makeup.jpg";
import receptionMakeup from "@/assets/reception-makeup.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import editorialMakeup from "@/assets/editorial-makeup.jpg";
import engagementMakeup from "@/assets/engagement-makeup.jpg";
import preweddingMakeup from "@/assets/prewedding-makeup.jpg";
import masterclassMakeup from "@/assets/masterclass-makeup.jpg";
import celebrityMakeup from "@/assets/celebrity-makeup.jpg";

export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Bridal Makeup",
    category: "Bridal",
    description: "Complete bridal makeup with HD finish, including pre-bridal consultation and trial session.",
    price: 25000,
    duration: "3-4 hours",
    image: bridalMakeup,
    popular: true,
  },
  {
    id: 2,
    name: "Reception Makeup",
    category: "Bridal",
    description: "Glamorous reception look with long-lasting products and airbrush finish.",
    price: 18000,
    duration: "2-3 hours",
    image: receptionMakeup,
  },
  {
    id: 3,
    name: "Party Makeup",
    category: "Party",
    description: "Stunning party-ready look for any occasion — birthdays, anniversaries, or night outs.",
    price: 8000,
    duration: "1-2 hours",
    image: partyMakeup,
    popular: true,
  },
  {
    id: 4,
    name: "Editorial Shoot",
    category: "Editorial",
    description: "High-fashion editorial makeup for magazine shoots and campaigns.",
    price: 15000,
    duration: "2-3 hours",
    image: editorialMakeup,
  },
  {
    id: 5,
    name: "Engagement Makeup",
    category: "Bridal",
    description: "Soft glam engagement look with emphasis on natural beauty and flawless skin.",
    price: 12000,
    duration: "2 hours",
    image: engagementMakeup,
  },
  {
    id: 6,
    name: "Pre-Wedding Shoot",
    category: "Bridal",
    description: "Camera-ready makeup for pre-wedding photoshoots with multiple look changes.",
    price: 15000,
    duration: "3 hours",
    image: preweddingMakeup,
    popular: true,
  },
  {
    id: 7,
    name: "Masterclass",
    category: "Education",
    description: "One-on-one makeup masterclass — learn professional techniques and product knowledge.",
    price: 20000,
    duration: "4 hours",
    image: masterclassMakeup,
  },
  {
    id: 8,
    name: "Celebrity Styling",
    category: "Editorial",
    description: "Full glam styling for events, red carpets, and celebrity appearances.",
    price: 30000,
    duration: "3-4 hours",
    image: celebrityMakeup,
  },
];
