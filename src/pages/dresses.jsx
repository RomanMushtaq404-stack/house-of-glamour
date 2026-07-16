import ProductCard from "../components/ProductCard";
import dresses from "../data/dresses";
import "../components/Products.css";

function Dresses() {
  return (
    <section className="products">

      <h2 className="products-title">
        Dresses Collection
      </h2>

      <div className="product-container">
        {dresses.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Dresses;