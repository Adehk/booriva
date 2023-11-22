import { Link } from "react-router-dom";

import Hamburger from "../../assets/icons/Hamburger";
import Telegram from "../../assets/icons/Telegram";
import Cart from "../../assets/icons/Cart";
import Wishlist from "../../assets/icons/Wishlist";

import styles from "./index.module.sass";

const Menu = ({ setCartOpen }) => {
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  return (
    <ul className={styles.menu}>
      <li className={styles.hamburger}>
        <Link to="/menu" className={styles.link}>
          <Hamburger />
          Меню
        </Link>
      </li>
      <li>
        <Link to="/telegram" className={styles.link}>
          <Telegram />
          Написать
        </Link>
      </li>
      <li>
        <div className={styles.link} onClick={handleCartOpen}>
          <Cart />
          Корзина
        </div>
      </li>
      <li>
        <Link to="/wishlist" className={styles.link}>
          <Wishlist />
          Wish list
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
