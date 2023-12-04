import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
import BoorivaGirls from "./pages/BoorivaGirls";
import FourOFour from "./components/FourOFour";
import SearchBar from "./components/Searchbar";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState(0);

  const [cartOpen, setCartOpen] = useState(false);

  const [isSearchBarOpen, setisSearchBarOpen] = useState(false);

  return (
    <div>
      <Header
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubmenuItem={setActiveSubmenuItem}
        setCartOpen={setCartOpen}
        isSearchBarOpen={isSearchBarOpen}
        setisSearchBarOpen={setisSearchBarOpen}
      />
      {/* <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} /> */}
      <EmptyCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <SearchBar isSearchBarOpen={isSearchBarOpen} />
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
        <Route path="/aboutus" element={<BoorivaGirls />} />
        <Route path="/404" element={<FourOFour />} />
      </Routes>
      <Menu setCartOpen={setCartOpen} />
      <Footer />
    </div>
  );
}

export default App;
