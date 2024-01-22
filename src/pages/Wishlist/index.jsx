import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import Insta from "../../components/Insta";
import USP from "../../components/USP";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import ProductCard from "../../components/ProductCard";

import styles from "./index.module.sass";

const Wishlist = ({ savedData, setSavedData }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const handleRemoveProductFromWishlist = (productId) => {
    setSavedData((prev) => {
      const updatedData = prev.filter((id) => id !== productId);
      localStorage.setItem("savedData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  useEffect(() => {
    const productIds = JSON.parse(localStorage.getItem("savedData"));

    if (productIds && productIds.length > 0) {
      Promise.all(
        productIds.map((productId) =>
          fetch(
            `https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`
          ).then((res) => res.json())
        )
      ).then((productData) => {
        setData(productData);
        setLoader(false);
      });
    } else {
      setData([]);
      setLoader(false);
    }
  }, [savedData]);

  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Список желаний</h1>
          <p className={styles.subtitle}>твой тайный Список желаний</p>
        </div>

        <div className={data.length >= 1 ? styles.cards : ""}>
          {data.length >= 1 ? (
            data.map(({ id, images, name, price }) => (
              <ProductCard
                id={id}
                images={images}
                name={name}
                price={price}
                key={id}
                savedData={savedData}
                setSavedData={setSavedData}
                onRemoveFromWishlist={() => handleRemoveProductFromWishlist(id)}
              />
            ))
          ) : loader ? (
            <BeatLoader className={styles.loader} color="#FDA3C4" />
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </div>
      <USP />
      <Insta />
    </div>
  );
};

export default Wishlist;
