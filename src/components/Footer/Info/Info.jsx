import { Link } from "react-router-dom";

import Facebook from "../../../assets/icons/Facebook";
import Instagram from "../../../assets/icons/Instagram";

import styles from "./Info.module.sass";
const Info = () => {
  return (
    <div>
      <h1 className={styles.title}>Инфо</h1>
      <ul>
        <li>
          <Link to="/" className={styles.link + " " + styles.hidden}>
            Контакты
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Система лояльности
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Обмен и возврат
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Доставка и оплата
          </Link>
        </li>
        <li className={styles.socials}>
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <Facebook />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Info;
