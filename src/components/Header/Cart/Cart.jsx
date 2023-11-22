import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ setCartOpen }) => {
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  return (
    <div className={styles.cart} onClick={handleCartOpen}>
      <CartIcon />
    </div>
  );
};

export default Cart;
