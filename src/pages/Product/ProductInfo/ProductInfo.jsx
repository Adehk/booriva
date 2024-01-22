import React, { useState } from "react";

import AddToCartBtnBg from "../../../assets/icons/AddToCartBtnBg";

import styles from "./ProductInfo.module.sass";

const ProdictInfo = ({ id, name, price, desc, details }) => {
  const [selectedSize, setSelectedSize] = useState("XS—S");
  const [btnText, setBtnText] = useState("В корзину");
  
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddProductToCartClick = (e) => {
    e.preventDefault();
    const arr = localStorage.getItem("arrOfCartProducts")
      ? JSON.parse(localStorage.getItem("arrOfCartProducts"))
      : [];
    if (arr.length === 0) {
      localStorage.setItem(
        "arrOfCartProducts",
        JSON.stringify([...arr, { id, selectedSize }])
      );
    }
    for (let item of arr) {
      if (item.id === id) {
        let repeat = false;
        for (let item of arr) {
          if (item.selectedSize === selectedSize && item.id === id) {
            repeat = true;
            break;
          }
        }
        if (!repeat) {
          localStorage.setItem(
            "arrOfCartProducts",
            JSON.stringify([...arr, { id, selectedSize }])
          );
          setBtnText("Добавлен!");
          setTimeout(() => {
            setBtnText((prevText) =>
              prevText === "Добавлен!" ? "В корзину" : prevText
            );
          }, 2000);
        }
      } else {
        if (arr.every((item) => item.id !== id)) {
          localStorage.setItem(
            "arrOfCartProducts",
            JSON.stringify([...arr, { id, selectedSize }])
          );
          setBtnText("Добавлен!");
          setTimeout(() => {
            setBtnText((prevText) =>
              prevText === "Добавлен!" ? "В корзину" : prevText
            );
          }, 2000);
        }
      }
    }
  };

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.price}>{price} &#8381;</p>
      <form action="" className={styles.form}>
        <div className={styles.size}>
          <p className={styles.chooseSize}>Выбрать размер:</p>
          <div action="" className={styles.sizeOptions}>
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
          </div>
        </div>
        <div
          className={
            styles.svgButton +
            " " +
            (btnText === "Добавлен!" ? styles.disabled : "")
          }
        >
          <AddToCartBtnBg />
          <button
            className={styles.buttonText}
            onClick={handleAddProductToCartClick}
          >
            {btnText}
          </button>
        </div>
      </form>

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
