import { Link } from "react-router-dom";

import SuitsBtnBg from "../../../../../assets/icons/SuitsBtnBg";

import styles from "./Suits.module.sass";

const Suits = () => {
  return (
    <div className={styles.suits}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog?menuId=006" className={styles.svgButton}>
          <SuitsBtnBg />
          <span className={styles.buttonText}>Костюмы</span>
        </Link>
      </div>
    </div>
  );
};

export default Suits;
