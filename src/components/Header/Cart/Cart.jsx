import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ setIsCartOpen }) => {
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };
  return (
    <div className={styles.cart} onClick={handleCartOpen}>
      <CartIcon />
    </div>
  );
};

export default Cart;
