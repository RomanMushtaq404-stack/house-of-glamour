import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories() {

  const navigate = useNavigate();

  const categories = [
    {
      name: "👗 Dresses",
      link: "/dresses"
    },
    {
      name: "👜 Bags",
      link: "/bags"
    },
    {
      name: "👠 Shoes",
      link: "/shoes"
    },
    {
      name: "💄 Cosmetics",
      link: "/cosmetics"
    },
    {
      name: "🧕 Hijabs",
      link: "/hijabs"
    },
    {
      name: "🖤 Abayas",
      link: "/abayas"
    },
    {
      name: "✨ Customized Products",
      link: "/customized"
    }
  ];


  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <div className="category-container">

        {categories.map((item, index) => (

          <div
            className="category-card"
            key={index}
            onClick={() => navigate(item.link)}
          >

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;
