import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import ProductCard from "./ProductCard/ProductCard";

import ProductImg1 from "../../assets/images/product-img-1.png";
import ProductImg3 from "../../assets/images/product-img-3.png";
import PlaceAnOrderBtnBg from "../../assets/icons/PlaceAnOrderBtnBg";
import CloseBtn from "../../assets/icons/CloseBtn";

import styles from "./index.module.sass";

const Cart = ({ isCartOpen, setIsCartOpen, setIsCartActive }) => {
  const location = useLocation();

  const products = [
    {
      id: 0,
      image: ProductImg1,
      name: "Cвитшoт вставка клетка",
      size: "S — M",
      price: 1099,
    },
    {
      id: 1,
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
    },
    {
      id: 2,
      image: ProductImg1,
      name: "Cвитшoт вставка клетка",
      size: "S — M",
      price: 1099,
    },
    {
      id: 3,
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
    },
    {
      id: 4,
      image: ProductImg1,
      name: "Cвитшoт вставка клетка",
      size: "S — M",
      price: 1099,
    },
    {
      id: 5,
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
    },
  ];
  const handleCartClose = () => {
    setIsCartOpen(false);
    setIsCartActive(false);
  };

  useEffect(() => {
    if (isCartOpen) {
      setIsCartOpen(false);
      setIsCartActive(false);
    }
  }, [location, setIsCartOpen, setIsCartActive]);

  return (
    <div className="cartWrapper">
      <div
        className={`${styles.overlay} ${
          isCartOpen ? styles.overlayActive : ""
        }`}
        onClick={handleCartClose}
      ></div>
      <div className={`${styles.cart} ${isCartOpen ? styles.active : ""}`}>
        <div className={styles.closeBtn} onClick={handleCartClose}>
          <CloseBtn />
        </div>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.products}>
          {products.map(({ id, image, name, size, price }) => (
            <ProductCard
              key={id}
              image={image}
              name={name}
              size={size}
              price={price}
            />
          ))}
        </div>
        <p className={styles.orderPrice}>
          <span>Cумма заказа:</span>
          <span className={styles.price}>
            <b>4 998 &#8381;</b>
          </span>
        </p>
        <Link to="/checkout" className={styles.svgButton}>
          <PlaceAnOrderBtnBg />
          <span className={styles.buttonText}>Оформить заказ</span>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
