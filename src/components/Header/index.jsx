import Contact from "./Contact/Contact";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";

import styles from "./index.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerInner}>
          <div className={styles.topRow}>
            <Logo />
            <Contact />
            <div className={styles.rightCol}>
              <Search />
              <Wishlist />
              <Cart />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
