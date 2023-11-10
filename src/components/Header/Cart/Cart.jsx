import { Link } from "react-router-dom";
import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = () => {
  return (
    <Link to="/cart" className={styles.cart}>
      <CartIcon />
    </Link>
  );
};

export default Cart;
