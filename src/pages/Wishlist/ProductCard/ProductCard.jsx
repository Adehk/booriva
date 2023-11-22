import { Link } from "react-router-dom";

import RedHeart from "../../../assets/icons/RedHeart";

import styles from "./ProductCard.module.sass";

const ProductCard = ({ image, name, price }) => {
  return (
    <Link to="/" className={styles.productCard}>
      <div className={styles.icon}>
        <RedHeart />
      </div>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>{price} &#8381;</p>
      </div>
    </Link>
  );
};

export default ProductCard;
