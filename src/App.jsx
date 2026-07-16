import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hijabs from "./pages/Hijabs";
import Abayas from "./pages/Abayas";
import Dresses from "./pages/Dresses";
import Bags from "./pages/Bags";
import Shoes from "./pages/Shoes";
import Cosmetics from "./pages/Cosmetics";
import Customized from "./pages/Customized";


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