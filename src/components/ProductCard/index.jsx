import { Link } from "react-router-dom";

import Like from "../../assets/icons/Like";

import styles from "./index.module.sass";

const ProductCard = ({ image, name, price }) => {
  return (
    <Link to="/" className={styles.productCard}>
      <div className={styles.icon}>
        <Like />
      </div>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>{price} &#8372;</p>
      </div>
    </Link>
  );
};

export default ProductCard;
