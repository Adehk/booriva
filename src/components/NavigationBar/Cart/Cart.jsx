import classNames from "classnames";

import CartIcon from "../../../assets/icons/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ isCartOpen, handleCartOpen }) => {
  const cartClasses = classNames(styles.navigationBarItem, {
    [styles.active]: isCartOpen,
  });
  return (
    <div
      className={cartClasses}
      onClick={() => {
        handleCartOpen();
      }}
    >
      <CartIcon />
      Корзина
    </div>
  );
};

export default Cart;
