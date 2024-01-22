import { Link } from "react-router-dom";

import HoodiesBtnBg from "../../../../../assets/icons/HoodiesBtnBg";

import styles from "./Hoodies.module.sass";

const Hoodies = () => {
  return (
    <div className={styles.hoodies}>
      <div className={styles.btnWrapper}>
        <Link to="/catalog?categoryId=ab004" className={styles.svgButton}>
          <HoodiesBtnBg />
          <span className={styles.buttonText}>Худи</span>
        </Link>
      </div>
    </div>
  );
};

export default Hoodies;
