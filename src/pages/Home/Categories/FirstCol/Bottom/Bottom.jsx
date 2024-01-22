import { Link } from "react-router-dom";

import BottomBtnBg from "../../../../../assets/icons/BottomBtnBg";

import styles from "./Bottom.module.sass";

const Bottoms = () => {
  return (
    <div className={styles.bottoms}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog?menuId=003" className={styles.svgButton}>
          <BottomBtnBg />
          <span className={styles.buttonText}>Низ</span>
        </Link>
      </div>
    </div>
  );
};

export default Bottoms;
