import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.png";

import styles from "./index.module.sass";

const Banner = () => {
  return (
    <Link to="/newitems" className={styles.banner}>
      <img src={banner} alt="Banner" />
    </Link>
  );
};

export default Banner;
