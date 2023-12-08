import { Link } from "react-router-dom";

import HollowHeart from "../../../assets/icons/HollowHeart";

import styles from "./ProductCard.module.sass";

const ProductCard = ({ id, images, name, price }) => {
  return (
    <Link to={`/product?id=${id}`} className={styles.productCard}>
      <div className={styles.icon}>
        <HollowHeart />
      </div>
      <div className={styles.productImg}>
        <img src={images} alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>{price} &#8381;</p>
      </div>
    </Link>
  );
};

export default ProductCard;
