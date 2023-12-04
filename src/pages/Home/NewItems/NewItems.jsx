import { Link } from "react-router-dom";

import ProductCard from "../../../components/ProductCard";

import SeeAllBtnBg from "../../../assets/icons/SeeAllBtnBg";
import ProductImg1 from "../../../assets/images/product-img-1.png";
import ProductImg2 from "../../../assets/images/product-img-2.png";
import ProductImg3 from "../../../assets/images/product-img-3.png";
import ProductImg4 from "../../../assets/images/product-img-4.png";

import styles from "./NewItems.module.sass";
import { useState, useEffect } from "react";

const NewItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.newItems}>
      <div className={styles.heading}>
        <h1 className={styles.shadow}>
          {data.length >= 1 ? data[0].menuName : ""}
        </h1>
        <p className={styles.title}>
          {data.length >= 1 ? data[0].menuName : ""}
        </p>
      </div>
      <div className={styles.cards}>
        {data.length >= 1
          ? data[0].products
              .slice(0, 4)
              .map(({ id, images, name, price }) => (
                <ProductCard
                  id={id}
                  image={images[0]}
                  name={name}
                  price={price}
                  key={id}
                />
              ))
          : ""}
      </div>
      <Link to="/catalog" className={styles.svgButton}>
        <SeeAllBtnBg />
        <span className={styles.buttonText}>Cмотреть все</span>
      </Link>
    </div>
  );
};

export default NewItems;
