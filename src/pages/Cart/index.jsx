import { Link } from "react-router-dom";

import ProductImg1 from "../../assets/images/product-img-1.png";
import ProductImg3 from "../../assets/images/product-img-3.png";
import CheckoutBtnBg from "../../assets/icons/CheckoutBtnBg";
import CloseCartBtn from "./../../assets/icons/CloseCartBtn";
import ProductCard from "./ProductCard/ProductCard";

import styles from "./index.module.sass";

const Cart = () => {
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
  ];
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <div className={styles.closeBtn}>
          <CloseCartBtn />
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
        <p className={styles.total}>
          Cумма заказа: . . . . . . . . . . . <b>4 998 &#8372;</b>
        </p>
        <Link to="/checkout" className={styles.svgButton}>
          <CheckoutBtnBg />
          <span className={styles.buttonText}>Оформить заказ</span>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
