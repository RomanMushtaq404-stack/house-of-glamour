import mens1 from "../assets/products/customized/mens-deal1.jpeg";
import mens2 from "../assets/products/customized/mens-deal2.jpeg";
import locket from "../assets/products/customized/name-locket.jpeg";


const customized = [

  {
    id: 1,
    name: "Men Customized Gift",
    price: 1800,
    images: [
      mens1
    ],
    description: "Customized gift item for men.",
    details: {
      category: "Gift",
      customization: "Personalized Design",
      material: "Premium"
    }
  },


  {
    id: 2,
    name: "Men Gift Deal",
    price: 2200,
    images: [
      mens2
    ],
    description: "Special customized men's gift deal.",
    details: {
      category: "Customized Gift",
      customization: "Name & Design"
    }
  },


  {
    id: 3,
    name: "Name Locket",
    price: 1500,
    images: [
      locket
    ],
    description: "Beautiful customized name locket.",
    details: {
      material: "Metal",
      customization: "Name Engraving"
    }
  }

];


export default customized;