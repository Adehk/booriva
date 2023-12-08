import { Link } from "react-router-dom";

import TopBtnBg from "../../../../../assets/icons/TopBtnBg";

import styles from "./Top.module.sass";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog" className={styles.svgButton}>
          <TopBtnBg />
          <span className={styles.buttonText}>Верх</span>
        </Link>
      </div>
    </div>
  );
};

export default Top;
