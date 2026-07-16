import "./Hero.css";
import heroBanner from "../assets/banners/hero-banner.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="hero-overlay">

        <div className="hero-buttons">
          <a href="#categories" className="shop-btn">
            Shop Now
          </a>

          <a href="#featured" className="explore-btn">
            Explore Collection
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;