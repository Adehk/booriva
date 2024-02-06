import { useSelector } from "react-redux";
import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ setIsCartOpen }) => {
  const counter = useSelector((state) => state.cart.cart).length;
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };
  return (
    <div className={styles.cart} onClick={handleCartOpen}>
      <CartIcon />
      <span className={styles.counter}>{counter}</span>
    </div>
  );
};

export default Cart;
