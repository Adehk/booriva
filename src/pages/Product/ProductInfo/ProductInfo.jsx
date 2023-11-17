import { Link } from "react-router-dom";
import React, { useState } from "react";

import AddToCartBtnBg from "../../../assets/icons/AddToCartBtnBg";
import DottedLine from "../../../assets/icons/DottedLine";

import styles from "./ProductInfo.module.sass";

const ProdictInfo = () => {
  const [selectedSize, setSelectedSize] = useState("XS—S");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.name}>
        Бомбер Gone Crazy хаки
      </h1>
      <p className={styles.price}>2 499 &#8372;</p>
      <div className={styles.size}>
        <p className={styles.chooseSize}>Выбрать размер:</p>
        <form action="" className={styles.sizeOptions}>
          <label for="XS—S">
            <input
              type="radio"
              id="XS—S"
              name="size"
              value="XS—S"
              checked={selectedSize === "XS—S"}
              onChange={handleSizeChange}
            />
            <span>XS — S</span>
          </label>
          <label for="S—M">
            <input
              type="radio"
              id="S—M"
              name="size"
              value="S—M"
              checked={selectedSize === "S—M"}
              onChange={handleSizeChange}
            />
            <span>S — M</span>
          </label>
          <label for="L—XL">
            <input
              type="radio"
              id="L—XL"
              name="size"
              value="L—XL"
              checked={selectedSize === "L—XL"}
              onChange={handleSizeChange}
            />
            <span>L — XL</span>
          </label>
          <label for="M—L">
            <input
              type="radio"
              id="M—L"
              name="size"
              value="M—L"
              checked={selectedSize === "M—L"}
              onChange={handleSizeChange}
            />
            <span>M — L</span>
          </label>
        </form>
      </div>
      <Link to="/cart" className={styles.svgButton}>
        <AddToCartBtnBg />
        <span className={styles.buttonText}>В корзину</span>
      </Link>
      <p className={styles.description}>
        Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура
        выполнена в серебряном цвете. Акцентными деталями выступают объемные
        нашитые карманы и капюшон, который отстёгивается.
      </p>
      <div className={styles.icon}>
        <DottedLine />
      </div>
      <p className={styles.madeOf}>
        Состав: &nbsp; <span>50% вискоза, 50% полиэстер</span>
      </p>
    </div>
  );
};

export default ProdictInfo;
