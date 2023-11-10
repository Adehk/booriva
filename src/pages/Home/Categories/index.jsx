import FirstCol from "./FirstCol/FirstCol";
import SecondCol from "./SecondCol/SecondCol";

import styles from "./index.module.sass";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <FirstCol />
      <SecondCol />
    </div>
  );
};

export default Categories;
