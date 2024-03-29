import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseBtn from "../../assets/icons/CloseBtn";

import styles from "./index.module.sass";

const MobileFilter = ({
  activeMenuItem,
  setActiveMenuItem,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  const [selectedPrice, setSelectedPrice] = useState("mobileAllPrices");
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleMobileFilterClose = () => {
    setIsMobileFilterOpen(false);
  };

  useEffect(() => {
    setIsMobileFilterOpen(false);
  }, [location]);

  return (
    <div
      className={`${styles.mobileFilter} ${
        isMobileFilterOpen ? styles.visible : ""
      }`}
    >
      <div className={styles.closeBtn} onClick={handleMobileFilterClose}>
        <CloseBtn />
      </div>

      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.title}>КАТЕГОРИИ:</div>
          <ul className={styles.categories}>
            {categories.map(({ id, name }) => (
              <li
                key={id}
                className={
                  styles.category +
                  " " +
                  (id === activeMenuItem ? styles.active : "")
                }
                onClick={() => setActiveMenuItem(id)}
              >
                <Link to={`/catalog?menuId=${id}`} className={styles.link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>ЦЕНЫ:</div>
          <form action="" className={styles.options}>
            <div className={styles.option}>
              <input
                type="radio"
                id="mobileAllPrices"
                name="price"
                value="mobileAllPrices"
                checked={selectedPrice === "mobileAllPrices"}
                onChange={handlePriceChange}
              />
              <label htmlFor="mobileAllPrices">Все цены</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="mobileUpto500"
                name="price"
                value="mobileUpto500"
                checked={selectedPrice === "mobileUpto500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="mobileUpto500">до 500</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="mobileFrom500to1000"
                name="price"
                value="mobileFrom500to1000"
                checked={selectedPrice === "mobileFrom500to1000"}
                onChange={handlePriceChange}
              />
              <label htmlFor="mobileFrom500to1000">500 — 1000</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="mobileFrom1000to1500"
                name="price"
                value="mobileFrom1000to1500"
                checked={selectedPrice === "mobileFrom1000to1500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="mobileFrom1000to1500">1000 — 1500</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="mobileFrom1500"
                name="price"
                value="mobileFrom1500"
                checked={selectedPrice === "mobileFrom1500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="mobileFrom1500">от 1500</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
