import InstaImg1 from "../../../assets/images/insta-img-1.jpg";
import InstaImg2 from "../../../assets/images/insta-img-2.png";
import InstaImg3 from "../../../assets/images/insta-img-3.png";
import InstaImg4 from "../../../assets/images/insta-img-5.png";
import InstaImg5 from "../../../assets/images/insta-img-4.png";

import styles from "./FirstCol.module.sass";

const FirstCol = () => {
  return (
    <div className={styles.leftCol}>
      <div className={styles.text}>
        <h1 className={styles.title}>Instagram</h1>
        <p className={styles.subtitle}>
          Мы в экстазе, когда ты нас отмечаешь&#41; Отмечай плз чаще
        </p>
      </div>
      <div className={styles.imgGallery}>
        <div className={styles.leftCol}>
          <img src={InstaImg1} className={styles.firstImg} alt="" />
          <img src={InstaImg2} className={styles.secondImg} alt="" />
        </div>
        <div className={styles.rightCol}>
          <img src={InstaImg3} className={styles.thirdImg} alt="" />
          <img src={InstaImg4} className={styles.forthImg} alt="" />
        </div>
      </div>
      <img src={InstaImg5} className={styles.fifthImg} alt="" />
    </div>
  );
};

export default FirstCol;
