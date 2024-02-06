import verticalTilde from "./../../../assets/icons/verticalTilde.svg";
import horizontalTilde from "./../../../assets/icons/horizontalTilde.svg";
import prime from "./../../../assets/icons/prime.svg";
import squigglyLine from "./../../../assets/icons/squigglyLine.svg";
import heartL from "./../../../assets/icons/heartL.svg";
import tie from "./../../../assets/icons/tie.svg";
import greaterThanSignS from "./../../../assets/icons/greaterThanSignS.svg";
import greaterThanSignL from "./../../../assets/icons/greaterThanSignL.svg";
import heartS from "./../../../assets/icons/heartS.svg";

import styles from "./BoorivaStore.module.sass";

const BoorivaStore = () => {
  return (
    <div className={styles.boorivaStore}>
      <h1 className={styles.title}>
        <span>BOORIVA</span> <span>STORE</span>
      </h1>
      <div className={styles.info}>
        <p>
          г.Грозный, <br /> просп. Кадырова, 216
        </p>
        <br />
        <p>
          Ежедневно <br />с 09:00 до 21:00
        </p>
      </div>
      <div className={styles.boorivaStoreImg}>
        <img
          src={verticalTilde}
          alt="A vertical tilde icon"
          className={styles.verticalTilde}
        />
        <img
          src={horizontalTilde}
          alt="A horizontal tilde icon"
          className={styles.horizontalTilde}
        />
        <img src={prime} alt="A prime icon" className={styles.prime} />
        <img
          src={squigglyLine}
          alt="A squiggly line icon"
          className={styles.squigglyLine}
        />
        <img src={heartL} alt="A heart icon" className={styles.heartL} />
        <img src={tie} alt="A tie icon" className={styles.tie2} />
        <img src={tie} alt="A tie icon" className={styles.tie} />
        <img
          src={greaterThanSignS}
          alt="A greater than sign icon"
          className={styles.greaterThanSignS}
        />
        <img
          src={greaterThanSignL}
          alt="A greater than sign icon"
          className={styles.greaterThanSignL}
        />
        <img src={heartS} alt="A heart icon" className={styles.heartS} />
      </div>
      <p className={styles.description}>
        Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
        гуляя по Подолу, и примерять что-то из в наличии
      </p>
    </div>
  );
};

export default BoorivaStore;
