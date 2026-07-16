import "./Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="products" id="featured">

      <h2 className="products-title">
        Featured Products
      </h2>

      <p className="products-subtitle">
        Discover our latest collection of dresses, hijabs, abayas, cosmetics and customized products.
      </p>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;