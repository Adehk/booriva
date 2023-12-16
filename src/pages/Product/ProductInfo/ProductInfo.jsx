import React, { useState } from "react";

import AddToCartBtnBg from "../../../assets/icons/AddToCartBtnBg";

import styles from "./ProductInfo.module.sass";

const ProdictInfo = ({ name, price, desc, details }) => {
  const [selectedSize, setSelectedSize] = useState("XS—S");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.price}>{price} &#8381;</p>
      <div className={styles.size}>
        <p className={styles.chooseSize}>Выбрать размер:</p>
        <form action="" className={styles.sizeOptions}>
          <label htmlFor="XS—S">
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
          <label htmlFor="S—M">
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
          <label htmlFor="L—XL">
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
          <label htmlFor="M—L">
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
      <div className={styles.svgButton}>
        <AddToCartBtnBg />
        <span className={styles.buttonText}>В корзину</span>
      </div>
      <p className={styles.description}>{desc}</p>
      <div className={styles.dottedLine}></div>
      <p className={styles.madeOf}>
        <b>Состав: </b>
        {details}
      </p>
    </div>
  );
};

export default ProdictInfo;
