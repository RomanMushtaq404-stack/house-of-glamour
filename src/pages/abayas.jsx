import ProductCard from "../components/ProductCard";
import abayas from "../data/abayas";
import "../components/Products.css";

function Abayas() {
  return (
    <section className="products">

      <h2>Abayas Collection</h2>

      <div className="product-container">
        {abayas.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Abayas;