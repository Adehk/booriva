import Telegram from "../../../assets/icons/Telegram";

import styles from "./Write.module.sass";

const Write = () => {
  return (
    <div className={styles.navigationBarItem}>
      <Telegram />
      Написать
    </div>
  );
};

export default Write;
