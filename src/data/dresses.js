import dressbrown from "../assets/products/dresses/dress-brown.jpeg";
import dresszinc from "../assets/products/dresses/dress-zinc.jpeg";
import dressblack from "../assets/products/dresses/dress-black.jpeg";
import dresspink from "../assets/products/dresses/dress-pink.jpeg";
import dressyellow from "../assets/products/dresses/dress-yellow.jpeg";
import dressskyblue from "../assets/products/dresses/dress-skyblue.jpeg";
import dresswhite from "../assets/products/dresses/dress-white.jpeg";
import dressgreen from "../assets/products/dresses/dress-green.jpeg";

// New imports for unstitched dresses
import unstitched1 from "../assets/products/dresses/unstitched1.jpeg";
import unstitched2 from "../assets/products/dresses/unstitched2.jpeg";
import unstitched3 from "../assets/products/dresses/unstitched3.jpeg";
import unstitched4 from "../assets/products/dresses/unstitched4.jpeg";
import unstitched5 from "../assets/products/dresses/unstitched5.jpeg";
import unstitched6 from "../assets/products/dresses/unstitched6.jpeg";
import unstitched7 from "../assets/products/dresses/unstitched7.jpeg";
import unstitched8 from "../assets/products/dresses/unstitched8.jpeg";

const dresses = [
  {
    id: 1,
    name: "Elegant Lawn Dress",
    images: [
      dresspink,
      dresszinc,
      dressblack,
      dressbrown,
      dressskyblue,
      dressyellow,
      dresswhite,
      dressgreen,
    ],
    price: "Rs 1750",
    sizeDetails: {
      shirtChest: {
        medium: "21 inches",
        large: "22 inches",
        xl: "23 inches",
      },
      shirtLength: "38 inches",
      flapperLength: "38-39 inches",
    },
    description:
      "Beautiful embroidered suit with stylish sleeves and farshi shalwar.",
  },

  // 8 new unstitched dresses
  {
    id: 2,
    name: "Unstitched Dress 1",
    images: [unstitched1],
    price: "Rs 4000",
    description: "Premium unstitched fabric for custom tailoring.",
  },
  {
    id: 3,
    name: "Unstitched Dress 2",
    images: [unstitched2],
    price: "Rs 4000",
    description: "Elegant unstitched lawn fabric with embroidery.",
  },
  {
    id: 4,
    name: "Unstitched Dress 3",
    images: [unstitched3],
    price: "Rs 4000",
    description: "Unstitched dress material.",
  },
  {
    id: 5,
    name: "Unstitched Dress 4",
    images: [unstitched4],
    price: "Rs 4000",
    description: "Stylish unstitched fabric with printed design.",
  },
  {
    id: 6,
    name: "Unstitched Dress 5",
    images: [unstitched5],
    price: "Rs 4000",
    description: "Luxury embroidered unstitched fabric.",
  },
  {
    id: 7,
    name: "Unstitched Dress 6",
    images: [unstitched6],
    price: "Rs 4000",
    description: "Classic unstitched lawn suit.",
  },
  {
    id: 8,
    name: "Unstitched Dress 7",
    images: [unstitched7],
    price: "Rs 4000",
    description: "Premium quality unstitched lawn fabric.",
  },
  {
    id: 9,
    name: "Unstitched Dress 8",
    images: [unstitched8],
    price: "Rs 4000",
    description: "Beautiful unstitched fabric with fine texture.",
  },
];

export default dresses;
