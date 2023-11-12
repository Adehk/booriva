import { Link } from "react-router-dom";

import styles from "./Filter.module.sass";
import Dot from "../../../assets/icons/Dot";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.category}>
        <h1 className={styles.title}>КАТЕГОРИИ:</h1>
        <ul className={styles.list}>
          <li>
            <Link to="/catalog/dresses" className={styles.link}>
              Платья
            </Link>
          </li>
          <li>
            <Link to="/catalog/top" className={styles.link}>
              Верх
            </Link>
          </li>
          <li>
            <Link to="/catalog/bottom" className={styles.link}>
              Низ
            </Link>
          </li>
          <li>
            <Link
              to="/catalog/jackets"
              className={styles.link + " " + styles.active}
            >
              Куртки
            </Link>
          </li>
          <li>
            <Link to="/catalog/suits" className={styles.link}>
              Костюмы
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.category}>
        <h1 className={styles.title}>ЦЕНЫ:</h1>
        <ul className={styles.list}>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              Все цены
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link + " " + styles.active}>
              <Dot />
              до 500
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              500 — 1000
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              1000 — 1500
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              от 1500
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.category}>
        <h1 className={styles.title}>РАЗМЕР:</h1>
        <ul className={styles.list}>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              XS — S
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link + " " + styles.active}>
              <Dot />
              S — M
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              M — L
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link}>
              <Dot />
              L — XL
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
