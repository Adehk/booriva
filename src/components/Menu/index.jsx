import { Link } from "react-router-dom";

import Hamburger from "../../assets/icons/Hamburger";
import Telegram from "../../assets/icons/Telegram";

import styles from "./index.module.sass";
import Cart from "../../assets/icons/Cart";
import Wishlist from "../../assets/icons/Wishlist";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.hamburger}>
        <Link to="/menu" className={styles.link}>
          <Hamburger />
          Меню
        </Link>
      </li>
      <li>
        <Link to="/menu" className={styles.link}>
          <Telegram />
          Написать
        </Link>
      </li>
      <li>
        <Link to="/menu" className={styles.link}>
          <Cart />
          Корзина
        </Link>
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
