import { useLocation } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Write from "./Write/Write";
import Filter from "./Filter/Filter";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

import styles from "./index.module.sass";

const NavigationBar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isCartOpen,
  setIsCartOpen,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  const location = useLocation();
  const isCatalogRoute = location.pathname.includes("/catalog");

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMobileFilterOpen = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className={styles.navigationBar}>
      <HamburgerMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <Write />
      {isCatalogRoute && (
        <Filter
          isMobileFilterOpen={isMobileFilterOpen}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
          handleMobileFilterOpen={handleMobileFilterOpen}
        />
      )}
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        handleCartOpen={handleCartOpen}
      />
      <WishList />
    </div>
  );
};

export default NavigationBar;
