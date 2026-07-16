import ProductCard from "../components/ProductCard";
import hijabs from "../data/hijabs";
import "../components/Products.css";

function Hijabs() {
  return (
    <section className="products">

      <h2>Hijabs Collection</h2>

      <div className="product-container">
        {hijabs.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Hijabs;