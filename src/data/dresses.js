import dressbrown from "../assets/products/dresses/dress-brown.jpeg";
import dresszinc from "../assets/products/dresses/dress-zinc.jpeg";
import dressblack from "../assets/products/dresses/dress-black.jpeg";
import dresspink from "../assets/products/dresses/dress-pink.jpeg";
import dressyellow from "../assets/products/dresses/dress-yellow.jpeg";
import dressskyblue from "../assets/products/dresses/dress-skyblue.jpeg";

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
    ],
    price: "Rs 2600",
    sizeDetails: {
      shirtChest: "21-22 inches",
      shirtLength: "35 inches",
      sleeves: "23 inches",
      shalwarLength: "38 inches",
      waist: "Free Size (Elastic)",
    },
    description:
      "Beautiful embroidered suit with stylish sleeves and farshi shalwar.",
  },
];

export default dresses;