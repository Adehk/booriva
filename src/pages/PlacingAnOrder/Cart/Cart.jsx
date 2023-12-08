import { Link } from "react-router-dom";

import ProductCard from "./ProductCard/ProductCard";

import ProductImg1 from "../../../assets/images/product-img-1.png";
import ProductImg3 from "../../../assets/images/product-img-3.png";

import styles from "./Cart.module.sass";

const Cart = () => {
  const products = [
    {
      id: 0,
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
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
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
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
      image: ProductImg3,
      name: "Бомбер Gone Crazy хаки",
      size: "S — M",
      price: 2499,
    },
  ];
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cart}>
        <h1 className={styles.title}>Товары в Корзинe:</h1>
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
        <div className={styles.orderPrice}>
          <span>Cумма заказа:</span>
          <span>
            <b>4 998 &#8381;</b>
          </span>
        </div>
        <div className={styles.deliveryPrice}>
          <span>Стоимость доставки:</span>
          <span>
            <b>бесплатно</b>
          </span>
        </div>
        <p className={styles.total}>
          <span>К оплате:</span>
          <span className={styles.price}>
            <b>5 000 &#8381;</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
