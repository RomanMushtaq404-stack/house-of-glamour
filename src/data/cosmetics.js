import fitme from "../assets/products/cosmetics/fit-me-deal.jpeg";
import fitme2 from "../assets/products/cosmetics/fit-me-deal2.jpeg";
import hudabeauty from "../assets/products/cosmetics/huda-beauty-deal1.jpeg";
import hudabeauty2 from "../assets/products/cosmetics/huda-beauty-deal2.jpeg";
import hudabeauty3 from "../assets/products/cosmetics/huda-beauty-deal3.jpeg";
import makeup from "../assets/products/cosmetics/makeup-deal.jpeg";
import eyeshadow from "../assets/products/cosmetics/mocallure-eyeshadow.jpeg";
import lipstick from "../assets/products/cosmetics/jumbo-lipstick-pencils.jpeg";

const cosmetics = [
  {
    id: 1,
    name: "Fit Me Beauty Product",
    price: 2200,
    images: [fitme, fitme2],
    description: "Premium Fit Me makeup product.",
    details: {
      type: "Makeup",
      brand: "Fit Me",
      quality: "Premium"
    }
  },
  {
    id: 2,
    name: "Huda Beauty Product",
    price: 2800,
    images: [hudabeauty, hudabeauty2, hudabeauty3],
    description: "Luxury Huda Beauty makeup collection.",
    details: {
      type: "Cosmetics",
      brand: "Huda Beauty",
      quality: "High Quality"
    }
  },
  {
    id: 3,
    name: "Makeup Deal",
    price: 2400,
    images: [makeup],
    description: "Complete makeup deal for daily use.",
    details: {
      type: "Makeup Kit",
      category: "Beauty"
    }
  },   // ✅ comma added here
  {
    id: 4,
    name: "Mocallura Eyeshadow",
    price: 850,
    images: [eyeshadow],
    description: "High-pigment Mocallura eyeshadow palette.",
    details: {
      type: "Eyeshadow",
      brand: "Mocallura",
      quality: "Premium"
    }
  },
  {
    id: 5,
    name: "Jumbo Lipstick Pencil",
    price: 1300,
    images: [lipstick],
    description: "Smooth jumbo lipstick pencil for long-lasting color.",
    details: {
      type: "Lipstick",
      category: "Cosmetics",
      quality: "High Quality"
    }
  }
];

export default cosmetics;
