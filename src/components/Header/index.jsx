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
  isCartOpen,
  setIsCartOpen,
  isSearchBarOpen,
  setIsSearchBarOpen,
  isCartActive,
  setIsCartActive,
}) => {
  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
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
              <Cart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                isCartActive={isCartActive}
                setIsCartActive={setIsCartActive}
              />
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
