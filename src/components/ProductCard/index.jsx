import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSavedData } from "../../redux/savedData/savedDataSlice";

import HollowHeart from "../../assets/icons/HollowHeart";
import styles from "./index.module.sass";

const ProductCard = ({ id, images, name, price }) => {
  const savedData = useSelector((state) => state.savedData.savedData);
  const [isSaved, setIsSaved] = useState(savedData.includes(id));
  const dispatch = useDispatch();

  const handleAddProductToWishlistClick = () => {
    dispatch(
      setSavedData(
        savedData.includes(id)
          ? savedData.filter((productId) => productId !== id)
          : [...savedData, id]
      )
    );
  };

  useEffect(() => {
    setIsSaved(savedData.includes(id));
  }, [savedData]);

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
