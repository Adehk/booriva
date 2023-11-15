import { Link } from "react-router-dom";

import AddToCartBtnBg from "../../assets/icons/AddToCartBtnBg";

import styles from "./index.module.sass";
import DottedLine from "../../assets/icons/DottedLine";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <h1 className={styles.name}>Бомбер Gone Crazy хаки</h1>
        <p className={styles.price}>2 499 &#8372;</p>
        <div className={styles.size}>
          <p className={styles.chooseSize}>Выбрать размер:</p>
          <ul className={styles.sizeOptions}>
            <li className={styles.sizeOption}>XS — S</li>
            <li className={styles.sizeOption + " " + styles.active}>S — M</li>
            <li className={styles.sizeOption}>L — XL</li>
            <li className={styles.sizeOption}>M — L</li>
          </ul>
        </div>
        <Link to="/cart" className={styles.svgButton}>
          <AddToCartBtnBg />
          <span className={styles.buttonText}>В корзину</span>
        </Link>
        <p className={styles.description}>
          Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура
          выполнена в серебряном цвете. Акцентными деталями выступают объемные
          нашитые карманы и капюшон, который отстёгивается.
        </p>
        <p className={styles.madeOf}>
          Состав: &nbsp; <span>50% вискоза, 50% полиэстер</span>
        </p>
        <DottedLine />
      </div>
    </div>
  );
};

export default Product;
