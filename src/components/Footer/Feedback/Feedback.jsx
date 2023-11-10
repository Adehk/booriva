import { Link } from "react-router-dom";

import styles from "./Feedback.module.sass";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.founderImg}></div>
      <div className={styles.text}>
        <p>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
        <Link to="/" className={styles.link}>
          Написать Иванке
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
