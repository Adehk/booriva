import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import qs from "qs";

import Filter from "../Catalog/Filter/Filter";
import Banner from "../Catalog/Banner/Banner";
import ProductCard from "../../components/ProductCard";
import Insta from "../../components/Insta";

import styles from "./index.module.sass";
import SquigglyLine from "../../assets/icons/SquigglyLine";

const Catalog = ({ activeSubmenuItem, setActiveSubmenuItem }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if (params.menuId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${params.menuId}`
        )
          .then((res) => (res.ok ? res.json() : []))
          .then((data) => {
            setData(data);
            setLoader(false);
          });
      } else if (params.categoryId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${params.categoryId}`
        )
          .then((res) => (res.ok ? res.json() : []))
          .then((data) => {
            setData(data);
            setLoader(false);
          });
      }
    } else {
      fetch("https://6569c6cede53105b0dd7a33a.mockapi.io/product")
        .then((res) => (res.ok ? res.json() : []))
        .then((data) => {
          setData(data);
          setLoader(false);
        });
    }
  }, [location]);

  return (
    <div>
      <div className={styles.catalog}>
        <Banner />
        <div className={styles.heading}>
          <h1 className={styles.category}>
            {data.length >= 1 ? data[0].menuName : ""}
          </h1>
          {data.length >= 1 && data[0].categoryName && (
            <p className={styles.subcategory}>
              {data[0].categoryName}
              <SquigglyLine />
            </p>
          )}
        </div>
        <Filter
          activeSubmenuItem={activeSubmenuItem}
          setActiveSubmenuItem={setActiveSubmenuItem}
        />
        <div className={styles.cards}>
          {data.length >= 1 ? (
            data[0].products ? (
              data[0].products.map(({ id, images, name, price }) => (
                <ProductCard
                  id={id}
                  images={images}
                  name={name}
                  price={price}
                  key={id}
                />
              ))
            ) : (
              data.map(({ id, images, name, price }) => (
                <ProductCard
                  id={id}
                  images={images}
                  name={name}
                  price={price}
                  key={id}
                />
              ))
            )
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
