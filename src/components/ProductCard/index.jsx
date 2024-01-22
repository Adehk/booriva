import { Link } from "react-router-dom";
import HollowHeart from "../../assets/icons/HollowHeart";
import styles from "./index.module.sass";

const ProductCard = ({ id, images, name, price, savedData, setSavedData }) => {
  const isSaved = savedData.includes(id);

  const handleAddProductToWishlistClick = () => {
    setSavedData((prev) => {
      if (prev.includes(id)) {
        return prev.filter((productId) => productId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.icon} onClick={handleAddProductToWishlistClick}>
        <HollowHeart save={isSaved} />
      </div>
      <Link to={`/product?id=${id}`} className={styles.productCard}>
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
    </div>
  );
};

export default ProductCard;
