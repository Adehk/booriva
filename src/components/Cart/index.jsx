import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ProductCard from "./ProductCard/ProductCard";

import PlaceAnOrderBtnBg from "../../assets/icons/PlaceAnOrderBtnBg";
import CloseBtn from "../../assets/icons/CloseBtn";

import styles from "./index.module.sass";

const Cart = ({
  isCartOpen,
  setIsCartOpen,
  setIsCartActive,
  arrOfCartProducts,
  setArrOfCartProducts,
}) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let totalPrice = 0;
      const fetchedProducts = await Promise.all(
        arrOfCartProducts.map(async (item) => {
          try {
            const response = await fetch(
              `https://6569c6cede53105b0dd7a33a.mockapi.io/product/${item.id}`
            );
            const data = await response.json();

            const productPrice = parseFloat(data.price);

            if (!isNaN(productPrice)) {
              totalPrice += productPrice;
              const product = {
                id: data.id,
                name: data.name,
                price: productPrice,
                image: data.images[0],
                size: item.selectedSize,
              };
              return product;
            } else {
              console.error("Invalid price for product:", data);
              return null;
            }
          } catch (error) {
            console.error("Error fetching product data:", error);
            return null;
          }
        })
      );

      setProducts(fetchedProducts.filter((product) => product !== null));
      setPrice(totalPrice);
    };

    if (isCartOpen) {
      fetchData();
    }
  }, [isCartOpen, arrOfCartProducts]);

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

  const removeFromCart = (productId) => {
    setArrOfCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

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
              key={id + size}
              id={id}
              image={image}
              name={name}
              size={size}
              price={price}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <p className={styles.orderPrice}>
          <span>Cумма заказа:</span>
          <span className={styles.price}>
            <b>{price} &#8381;</b>
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
