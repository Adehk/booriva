import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Write from "./Write/Write";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

import styles from "./index.module.sass";

const NavigationBar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isCartOpen,
  setIsCartOpen,
}) => {
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.navigationBar}>
      <HamburgerMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <Write />
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
