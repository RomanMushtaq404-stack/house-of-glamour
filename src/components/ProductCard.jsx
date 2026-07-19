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

          <p>
            Shirt Chest:{" "}
            {typeof product.sizeDetails.shirtChest === "object"
              ? Object.entries(product.sizeDetails.shirtChest)
                  .map(([size, value]) => `${size.toUpperCase()}: ${value}`)
                  .join(", ")
              : product.sizeDetails.shirtChest}
          </p>

          {product.sizeDetails.shirtLength && (
            <p>Shirt Length: {product.sizeDetails.shirtLength}</p>
          )}
          {product.sizeDetails.sleeves && (
            <p>Sleeves: {product.sizeDetails.sleeves}</p>
          )}
          {product.sizeDetails.shalwarLength && (
            <p>Shalwar Length: {product.sizeDetails.shalwarLength}</p>
          )}
          {product.sizeDetails.waist && (
            <p>Waist: {product.sizeDetails.waist}</p>
          )}
          {product.sizeDetails.flapperLength && (
            <p>Flapper Length: {product.sizeDetails.flapperLength}</p>
          )}
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
