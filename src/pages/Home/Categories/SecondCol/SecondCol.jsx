import Hoodies from "./Hoodies/Hoodies";
import Suits from "./Suits/Suits";
import Top from "./Top/Top";

import styles from "./SecondCol.module.sass";

const SecondCol = () => {
  return (
    <div className={styles.secondCol}>
      <Top />
      <Hoodies />
      <Suits />
    </div>
  );
};

export default SecondCol;
