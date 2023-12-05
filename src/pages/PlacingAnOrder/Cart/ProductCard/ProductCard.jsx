import DeleteBtn from "../../../../assets/icons/DeleteBtn";

import styles from "./ProductCard.module.sass";

const ProductCard = ({ image, name, size, price }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productSize}>{size}</p>
        <p className={styles.productPrice}>{price} &#8381;</p>
      </div>
      <div className={styles.deleteProductBtn}>
        <DeleteBtn />
      </div>
    </div>
  );
};

export default ProductCard;
