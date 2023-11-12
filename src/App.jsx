import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(0);
  return (
    <div>
      <Header
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubMenuItem={setActiveSubmenuItem}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
