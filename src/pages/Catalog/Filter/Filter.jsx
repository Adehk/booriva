import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import qs from "qs";

import styles from "./Filter.module.sass";

const Filter = ({ activeSubmenuItem, setActiveSubmenuItem }) => {
  const [selectedPrice, setSelectedPrice] = useState("allprices");
  const [selectedSize, setSelectedSize] = useState("XS—S");
  const [categories, setCategories] = useState([]);
  const params = qs.parse(window.location.search.substring(1));

  useEffect(() => {
    fetch(
      `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories/a${params.menuId}`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, [params.menuId]);

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className={styles.filter}>
      {categories && categories.length > 0 && (
        <div className={styles.column}>
          <div className={styles.title}>КАТЕГОРИИ:</div>
          <ul className={styles.list}>
            {categories.map(({ id, name }) => (
              <li key={id}>
                <Link
                  to={`?menuId=${params.menuId}&categoryId=${id}`}
                  className={
                    styles.item +
                    " " +
                    (id === activeSubmenuItem ? styles.active : "")
                  }
                  onClick={() => {
                    setActiveSubmenuItem(id);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
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
      <div className={styles.column}>
        <div className={styles.title}>РАЗМЕР:</div>
        <form action="" className={styles.options}>
          <div className={styles.option}>
            <input
              type="radio"
              id="XS—S"
              name="size"
              value="XS—S"
              checked={selectedSize === "XS—S"}
              onChange={handleSizeChange}
            />
            <label htmlFor="XS—S">XS — S</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="S—M"
              name="size"
              value="S—M"
              checked={selectedSize === "S—M"}
              onChange={handleSizeChange}
            />
            <label htmlFor="S—M">S — M</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="M—L"
              name="size"
              value="M—L"
              checked={selectedSize === "M—L"}
              onChange={handleSizeChange}
            />
            <label htmlFor="M—L">M — L</label>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="L—XL"
              name="size"
              value="L—XL"
              checked={selectedSize === "L—XL"}
              onChange={handleSizeChange}
            />
            <label htmlFor="L—XL">L — XL</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
