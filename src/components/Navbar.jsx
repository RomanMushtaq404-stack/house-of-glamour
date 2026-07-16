import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        House of Glamour
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/dresses">Dresses</Link></li>

        <li><Link to="/hijabs">Hijabs</Link></li>

        <li><Link to="/abayas">Abayas</Link></li>

        <li><Link to="/cosmetics">Cosmetics</Link></li>

        <li><Link to="/customized">Customized</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;