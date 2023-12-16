import { Link } from "react-router-dom";

import InstagramBtnBg from "../../assets/icons/InstagramBtnBg";

import styles from "./index.module.sass";

const BoorivaGirls = () => {
  return (
    <div className={styles.boorivaGirls}>
      <div className={styles.heading}>
        <h1 className={styles.category}>Boorivagirls</h1>
        <p className={styles.subcategory}>
          <span className={styles.hashtag}>&#35;</span>Boorivagirls
        </p>
      </div>
      <p className={styles.description}>
        Мы любим встречать booriva на улице. Так как всех не встретишь, отмечай
        нас в соц. сетях и мы внутри взорвемся и закричим УРА!
      </p>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <div className={styles.image}></div>
      <p className={styles.link}>
        Ставь тэг <Link to="/#">#boorivagirls</Link> чтобы быть в нашей тусовке.
      </p>
      <Link to="/#" className={styles.svgButton}>
        <InstagramBtnBg />
        <span className={styles.buttonText}>Instagram</span>
      </Link>
    </div>
  );
};

export default BoorivaGirls;
