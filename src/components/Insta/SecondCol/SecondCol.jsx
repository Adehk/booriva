import { Link } from "react-router-dom";

import InstaImg4 from "../../../assets/images/insta-img-4.png";
import InstaImg5 from "../../../assets/images/insta-img-5.jpg";
import InstaImg3 from "../../../assets/images/insta-img-3.png";

import styles from "./SecondCol.module.sass";

const SecondCol = () => {
  return (
    <div className={styles.rightCol}>
      <div className={styles.imgGallery}>
        <img src={InstaImg4} className={styles.firstImg} alt="" />
        <img src={InstaImg5} className={styles.secondImg} alt="" />
        <img src={InstaImg3} className={styles.thirdImg} alt="" />
      </div>
      <div className={styles.text}>
        <Link to="/#" className={styles.link}>
          #boorivagirls
        </Link>
        <p className={styles.subtitle}>Ставь тэг чтобы быть в нашей тусовке.</p>
      </div>
    </div>
  );
};

export default SecondCol;
