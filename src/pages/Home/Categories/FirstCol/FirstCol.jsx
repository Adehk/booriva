import Bottoms from "./Bottom/Bottom";
import Dresses from "./Dresses/Dresses";
import Tshirts from "./Tshirts/Tshirts";

import styles from "./FirstCol.module.sass";

const FirstCol = () => {
  return (
    <div className={styles.firstCol}>
      <Tshirts />
      <Dresses />
      <Bottoms />
    </div>
  );
};

export default FirstCol;
