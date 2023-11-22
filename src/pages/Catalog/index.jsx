import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import qs from "qs";

import Filter from "../Catalog/Filter/Filter";
import Banner from "../Catalog/Banner/Banner";
import ProductCard from "../Catalog/ProductCard/ProductCard";
import Insta from "../../components/Insta";

import styles from "./index.module.sass";

const Catalog = ({ activeMenuItem, activeSubmenuItem }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring("1"));
      if (params.menuId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${params.menuId}`
        )
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }
  }, [activeMenuItem, activeSubmenuItem]);
  return (
    <div>
      <div className={styles.catalog}>
        <Banner />
        <div className={styles.heading}>
          <h1 className={styles.title}>
            {data.length >= 1 ? data[0].menuName : ""}
          </h1>
          <p className={styles.subtitle}>
            {data.length >= 1 ? data[0].categoryName : ""}
          </p>
        </div>
        <Filter />
        <div className={styles.cards}>
          {data.length >= 1 ? (
            data[0].products.map(({ id, images, name, price }) => (
              <ProductCard
                id={id}
                images={images[0]}
                name={name}
                price={price}
                key={id}
              />
            ))
          ) : (
            <BeatLoader className={styles.loader} color="#FDA3C4" />
          )}
        </div>
      </div>
      <Insta />
    </div>
  );
};

export default Catalog;
