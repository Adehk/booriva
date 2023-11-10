import FirstCol from "./FirstCol/FirstCol";
import SecondCol from "./SecondCol/SecondCol";

import styles from "./index.module.sass";

const Insta = () => {
  return (
    <div className={styles.insta}>
      <h1 className={styles.title}>Instagram</h1>
      <div className={styles.columns}>
        <FirstCol />
        <SecondCol />
      </div>
    </div>
  );
};

export default Insta;
