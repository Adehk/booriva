import React, { useState } from "react";

import Contact from "./Contact/Contact";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";

import styles from "./index.module.sass";

const Header = ({
  activeMenuItem,
  setActiveMenuItem,
  activeSubmenuItem,
  setActiveSubmenuItem,
  setCartOpen,
  isSearchBarOpen,
  setisSearchBarOpen,
}) => {
  const toggleSearchBar = () => {
    setisSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerInner}>
          <div className={styles.topRow}>
            <Logo />
            <Contact />
            <div className={styles.rightCol}>
              <Search toggleSearchBar={toggleSearchBar} />
              <Wishlist />
              <Cart setCartOpen={setCartOpen} />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <Menu
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              activeSubmenuItem={activeSubmenuItem}
              setActiveSubmenuItem={setActiveSubmenuItem}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
