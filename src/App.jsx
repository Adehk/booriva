import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
import BoorivaGirls from "./pages/BoorivaGirls";
import SearchBar from "./components/Searchbar";
import PlacingAnOrder from "./pages/PlacingAnOrder";
import PageNotFound from "./components/PageNotFound";
import MobileMenu from "./components/MobileMenu";
import MobileFilter from "./components/MobileFilter";
import NavigationBar from "./components/NavigationBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const [activeSubmenuItem, setActiveSubmenuItem] = useState(0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isCartActive, setIsCartActive] = useState(false);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [savedData, setSavedData] = useState(
    localStorage.getItem("savedData")
      ? JSON.parse(localStorage.getItem("savedData"))
      : []
  );

  useEffect(() => {
    const savedDataFromLocalStorage = localStorage.getItem("savedData");
    if (savedDataFromLocalStorage) {
      setSavedData(JSON.parse(savedDataFromLocalStorage));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("savedData", JSON.stringify(savedData));
  // }, [savedData]);

  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen || isMobileFilterOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen, isCartOpen, isMobileFilterOpen]);

  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };

  return (
    <div>
      <Header
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubmenuItem={setActiveSubmenuItem}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isSearchBarOpen={isSearchBarOpen}
        setIsSearchBarOpen={setIsSearchBarOpen}
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        setIsCartActive={setIsCartActive}
      />
      {/* <EmptyCart cartOpen={cartOpen} setIsCartOpen={setIsCartOpen} /> */}
      <SearchBar
        isSearchBarOpen={isSearchBarOpen}
        closeSearchBar={closeSearchBar}
      />
      <MobileMenu
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        activeSubmenuItem={activeSubmenuItem}
        setActiveSubmenuItem={setActiveSubmenuItem}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MobileFilter
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        isMobileFilterOpen={isMobileFilterOpen}
        setIsMobileFilterOpen={setIsMobileFilterOpen}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              activeMenuItem={activeMenuItem}
              activeSubmenuItem={activeSubmenuItem}
              setActiveSubmenuItem={setActiveSubmenuItem}
              savedData={savedData}
              setSavedData={setSavedData}
            />
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<BoorivaGirls />} />
        <Route path="/checkout" element={<PlacingAnOrder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <NavigationBar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
        isMobileFilterOpen={isMobileFilterOpen}
        setIsMobileFilterOpen={setIsMobileFilterOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
