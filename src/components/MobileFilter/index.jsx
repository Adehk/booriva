import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseBtn from "../../assets/icons/CloseBtn";

import styles from "./index.module.sass";

const MobileFilter = ({ isMobileFilterOpen, setIsMobileFilterOpen }) => {
  const [selectedPrice, setSelectedPrice] = useState("allprices");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
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
                  (id === activeCategory ? styles.active : "")
                }
                onClick={() => setActiveCategory(id)}
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
                id="allprices"
                name="price"
                value="allprices"
                checked={selectedPrice === "allprices"}
                onChange={handlePriceChange}
              />
              <label htmlFor="allprices">Все цены</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="upto500"
                name="price"
                value="upto500"
                checked={selectedPrice === "upto500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="upto500">до 500</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="from500to1000"
                name="price"
                value="from500to1000"
                checked={selectedPrice === "from500to1000"}
                onChange={handlePriceChange}
              />
              <label htmlFor="from500to1000">500 — 1000</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="from1000to1500"
                name="price"
                value="from1000to1500"
                checked={selectedPrice === "from1000to1500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="from1000to1500">1000 — 1500</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="from1500"
                name="price"
                value="from1500"
                checked={selectedPrice === "from1500"}
                onChange={handlePriceChange}
              />
              <label htmlFor="from1500">от 1500</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
