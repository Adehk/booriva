import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ setIsCartOpen, isCartActive, setIsCartActive }) => {
  const handleCartOpen = () => {
    setIsCartOpen(true);
    setIsCartActive(true);
  };
  return (
    <div
      className={`${styles.cart} ${isCartActive ? styles.active : ""}`}
      onClick={handleCartOpen}
    >
      <CartIcon />
    </div>
  );
};

export default Cart;
