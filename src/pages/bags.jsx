import ProductCard from "../components/ProductCard";
import bags from "../data/bags";
import "../components/Products.css";

function Bags() {
  return (
    <section className="products">

      <h2>Bags Collection</h2>

      <div className="product-container">
        {bags.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Bags;
