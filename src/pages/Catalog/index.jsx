import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import qs from "qs";

import Filter from "../Catalog/Filter/Filter";
import Banner from "../Catalog/Banner/Banner";
import ProductCard from "../../components/ProductCard";
import Insta from "../../components/Insta";

import styles from "./index.module.sass";

const Catalog = ({
  activeMenuItem,
  activeSubmenuItem,
  setActiveSubmenuItem,
  savedData,
  setSavedData,
}) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring("1"));
      if (params.menuId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${params.menuId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoader(false);
          });
      }
      if (params.categoryId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${params.categoryId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoader(false);
          });
      }
    }
  }, [activeMenuItem, activeSubmenuItem]);
  return (
    <div>
      <div className={styles.catalog}>
        <Banner />
        <div className={styles.heading}>
          <h1 className={styles.category}>
            {data.length >= 1 ? data[0].menuName : ""}
          </h1>
          <p className={styles.subcategory}>
            {data.length >= 1 ? data[0].categoryName : ""}
          </p>
        </div>
        <Filter
          activeSubmenuItem={activeSubmenuItem}
          setActiveSubmenuItem={setActiveSubmenuItem}
        />
        <div className={styles.cards}>
          {data.length >= 1 ? (
            data[0].products.map(({ id, images, name, price }) => (
              <ProductCard
                id={id}
                images={images}
                name={name}
                price={price}
                key={id}
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
      <Insta />
    </div>
  );
};

export default Catalog;
