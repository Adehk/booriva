import { Link } from "react-router-dom";

import DressesBtnbg from "../../../../../assets/icons/DressesBtnBg";

import styles from "./Dresses.module.sass";

const Dresses = () => {
  return (
    <div className={styles.dresses}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog" className={styles.svgButton}>
          <DressesBtnbg /> <span className={styles.buttonText}>Платья</span>
        </Link>
      </div>
    </div>
  );
};

export default Dresses;
