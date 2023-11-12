import { Link } from "react-router-dom";

import ToHomePageBtnBg from "../../../assets/icons/ToHomePageBtnBg";
import EmptyWishlistIcon from "../../../assets/icons/EmptyWishlistIcon";

import styles from "./EmptyWishlist.module.sass";

const EmptyWishlist = () => {
  return (
    <div className={styles.emptyWishlist}>
      <div className={styles.icon}>
        <EmptyWishlistIcon />
      </div>
      <p className={styles.paragraph}>
        Похоже тебе еще ничего не запало <br /> в сердечко....
      </p>
      <Link to="/" className={styles.svgButton}>
        <ToHomePageBtnBg />
        <span className={styles.buttonText}>На главную</span>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
