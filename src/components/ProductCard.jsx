import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [mainImage, setMainImage] = useState(product.images?.[0]);

  return (
    <div className="product-card">

      <div className="product-image">
        <img
  src={mainImage || "/placeholder.png"}
  alt={product.name}
/>
      </div>

      <div className="thumbnail-container">
        {product.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="color option"
            className="thumbnail"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <h3>{product.name}</h3>

      <p className="price">{product.price}</p>

      <p>{product.description}</p>

      {product.sizeDetails && (
        <div className="size-details">
          <h4>Size Details:</h4>

          <p>Shirt Chest: {product.sizeDetails.shirtChest}</p>
          <p>Shirt Length: {product.sizeDetails.shirtLength}</p>
          <p>Sleeves: {product.sizeDetails.sleeves}</p>
          <p>Shalwar Length: {product.sizeDetails.shalwarLength}</p>
          <p>Waist: {product.sizeDetails.waist}</p>
        </div>
      )}

      <a
        className="order-btn"
        href={`https://wa.me/923144760009?text=Hello House of Glamour, I want to order ${product.name}. Price: ${product.price}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Order on WhatsApp
      </a>

    </div>
  );
}

export default ProductCard;