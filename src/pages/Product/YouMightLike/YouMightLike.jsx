import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import ProductCard from "../../../components/ProductCard";

import styles from "./YouMightLike.module.sass";

const YouMightLike = ({ savedData, setSavedData }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=002`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className={styles.youMightLike}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          <span>Могут</span> понравится
        </h1>
        <p className={styles.subtitle}>Тебе могут понравится</p>
      </div>
      <div className={styles.cards}>
        {data.length >= 1 ? (
          data[0].products
            .slice(0, 4)
            .map(({ id, images, name, price }) => (
              <ProductCard
                id={id}
                images={images}
                name={name}
                price={price}
                key={id}
                savedData={savedData}
                setSavedData={setSavedData}
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

export default YouMightLike;
