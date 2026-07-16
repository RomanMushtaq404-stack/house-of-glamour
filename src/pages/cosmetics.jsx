import ProductCard from "../components/ProductCard";
import cosmetics from "../data/cosmetics";

function Cosmetics() {

  return (
    <div className="products">

      {cosmetics.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default Cosmetics;