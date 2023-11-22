import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";
import Cart from "./components/Cart";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(0);

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Header
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubmenuItem={setActiveSubmenuItem}
        setCartOpen={setCartOpen}
      />
      {cartOpen && <Cart setCartOpen={setCartOpen} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              activeMenuItem={activeMenuItem}
              activeSubmenuItem={activeSubmenuItem}
            />
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Menu setCartOpen={setCartOpen} />
      <Footer />
    </div>
  );
}

export default App;
