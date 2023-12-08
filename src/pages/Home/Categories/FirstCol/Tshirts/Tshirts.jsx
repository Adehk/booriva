import { Link } from "react-router-dom";

import TshirtsBtnBg from "../../../../../assets/icons/TshirtsBtnBg";

import styles from "./Tshirts.module.sass";

const Tshirts = () => {
  return (
    <div className={styles.tShirts}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog" className={styles.svgButton}>
          <TshirtsBtnBg />
          <span className={styles.buttonText}>Футболки</span>
        </Link>
      </div>
    </div>
  );
};

export default Tshirts;
