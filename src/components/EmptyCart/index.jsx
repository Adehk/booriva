import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseCartBtn from "../../assets/icons/CloseBtn";
import CatInTheBag from "../../assets/icons/CatInTheBag";
import StartShoppingBtnBg from "../../assets/icons/StartShoppingBtnBg";

import styles from "./index.module.sass";

const EmptyCart = ({ isCartOpen, setIsCartOpen }) => {
  const location = useLocation();
  const handleClose = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  }, [location, setIsCartOpen]);
  return (
    <div className="cartWrapper">
      <div
        className={`${styles.overlay} ${
          isCartOpen ? styles.overlayActive : ""
        }`}
        onClick={handleClose}
      ></div>
      <div className={`${styles.cart} ${isCartOpen ? styles.active : ""}`}>
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
