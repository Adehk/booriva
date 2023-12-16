import { Link } from "react-router-dom";

import Like from "../../assets/icons/HollowHeart";

import styles from "./index.module.sass";

const ProductCard = ({ id, images, name, price }) => {
  return (
    <Link to={`/product?id=${id}`} className={styles.productCard}>
      <div className={styles.icon}>
        <Like />
      </div>
      {images && images.length > 0 && (
        <div className={styles.productImg}>
          <img src={images[0]} alt={name} />
        </div>
      )}
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>{price} &#8381;</p>
      </div>
    </Link>
  );
};

export default ProductCard;
