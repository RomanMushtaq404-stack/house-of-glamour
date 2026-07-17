import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Hijabs from "./pages/hijabs";
import Abayas from "./pages/abayas";
import Dresses from "./pages/dresses";
import Bags from "./pages/bags";
import Shoes from "./pages/shoes";
import Cosmetics from "./pages/cosmetics";
import Customized from "./pages/customized";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hijabs" element={<Hijabs />} />
        <Route path="/abayas" element={<Abayas />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/customized" element={<Customized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
