import styles from "./Feedback.module.sass";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.founderImg}></div>
      <div className={styles.text}>
        <p>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
        <div className={styles.link}>Написать Иванке</div>
      </div>
    </div>
  );
};

export default Feedback;
