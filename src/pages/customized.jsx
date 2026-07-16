import ProductCard from "../components/ProductCard";
import customized from "../data/customized";

function Customized() {

  return (
    <div className="products">

      {customized.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default Customized;