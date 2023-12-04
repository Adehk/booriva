import { Link } from "react-router-dom";

import CloseCartBtn from "../../assets/icons/CloseCartBtn";
import CatInTheBag from "../../assets/icons/CatInTheBag";
import StartShoppingBtnBg from "../../assets/icons/StartShoppingBtnBg";

import styles from "./index.module.sass";

const EmptyCart = ({ setCartOpen, cartOpen }) => {
  const handleClose = () => {
    setCartOpen(false);
  };
  return (
    <div className="cartWrapper">
      <div
        className={`${styles.overlay} ${cartOpen ? styles.overlayActive : ""}`}
        onClick={handleClose}
      ></div>
      <div className={`${styles.cart} ${cartOpen ? styles.active : ""}`}>
        <div className={styles.closeBtn} onClick={handleClose}>
          <CloseCartBtn />
        </div>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.icon}>
          <CatInTheBag />
        </div>
        <p className={styles.text}>
          Твоя корзина пуста, но это никогда <br /> не поздно исправить:&#41;
        </p>
        <Link to="/catalog" className={styles.svgButton}>
          <StartShoppingBtnBg />
          <span className={styles.buttonText}>за покупками</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
