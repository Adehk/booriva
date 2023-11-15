import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(0);
  return (
    <div>
      <Header
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubmenuItem={setActiveSubmenuItem}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
