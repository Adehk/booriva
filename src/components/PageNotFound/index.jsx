import { Link } from "react-router-dom";

import Dragon from "../../assets/icons/Dragon";
import BackToHome from "../../assets/icons/BackToHome";

import styles from "./index.module.sass";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.icon}>
        <Dragon />
      </div>
      <div className={styles.infiniteMarquee}>
        <ul className={styles.track}>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
          <li className={styles.text}>Похоже, что-то пошло не так...</li>
        </ul>
      </div>
      <p className={styles.paragraph}>
        Страница не найдена, но у нас есть <br /> еще много всего интересного
      </p>
      <Link to="/" className={styles.svgButton}>
        <BackToHome />
        <span className={styles.buttonText}>На главную</span>
      </Link>
    </div>
  );
};

export default PageNotFound;
