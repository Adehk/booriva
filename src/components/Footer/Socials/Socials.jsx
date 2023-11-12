import { Link } from "react-router-dom";

import Facebook from "../../../assets/icons/Facebook";
import Instagram from "../../../assets/icons/Instagram";

import styles from "./Socials.module.sass";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <h1 className={styles.title}>СОЦ.СЕТИ</h1>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          <Instagram />
        </Link>
        <Link to="/" className={styles.link}>
          <Facebook />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
