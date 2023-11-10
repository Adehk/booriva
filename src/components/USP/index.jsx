import Box from "../../assets/icons/Box";
import COD from "../../assets/icons/COD";
import Cat from "../../assets/icons/Cat";

import styles from "./index.module.sass";

const USP = () => {
  return (
    <div className={styles.usp}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Cat />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>
            Отправка <br /> день в день
          </p>
          <p className={styles.subtitle}>
            При заказе до 18<sup>00</sup>
          </p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Box />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>
            Легкий <br />
            возврат/обмен
          </p>
          <p className={styles.subtitle}>В течении 14 дней</p>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <COD />
        </div>
        <div className={styles.text}>
          <p className={styles.title}>
            Отправляем <br /> наложкой
          </p>
          <p className={styles.subtitle}>+ 2% от суммы </p>
        </div>
      </div>
    </div>
  );
};

export default USP;
