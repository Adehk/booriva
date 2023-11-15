import { Link } from "react-router-dom";

import styles from "./Banner.module.sass";

const Banner = () => {
  return <Link to="/newitems" className={styles.banner}></Link>;
};

export default Banner;
