import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import ProductCard from "../../../components/ProductCard";
import SeeAllBtnBg from "../../../assets/icons/SeeAllBtnBg";

import styles from "./TopProducts.module.sass";

const TopProducts = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className={styles.topProductsWrapper}>
      <div className={styles.topProducts}>
        {data.length >= 1 ? (
          data[0].products
            .slice(0, 3)
            .map(({ id, images, name, price }) => (
              <ProductCard
                id={id}
                images={images}
                name={name}
                price={price}
                key={id}
              />
            ))
        ) : loader ? (
          <BeatLoader className={styles.loader} color="#FDA3C4" />
        ) : (
          "Товар не найден"
        )}
        <div className={styles.banner}></div>
      </div>
      <Link to="/catalog?menuId=000" className={styles.svgButton}>
        <SeeAllBtnBg />
        <span className={styles.buttonText}>Cмотреть все</span>
      </Link>
    </div>
  );
};

export default TopProducts;
