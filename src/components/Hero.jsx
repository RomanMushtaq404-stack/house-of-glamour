import "./Hero.css";
import heroBanner from "../assets/banners/hero-banner.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
    </section>
  );
}

export default Hero;