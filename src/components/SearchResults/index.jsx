import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

import ProductCard from "../ProductCard";

import styles from "./index.module.sass";

const SearchResults = () => {
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
    <div className={styles.searchResults}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Результаты</h1>
        <p className={styles.subtitle}>Найдено 3 товара</p>
      </div>
      <div className={styles.cards}>
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
      </div>
    </div>
  );
};

export default SearchResults;
