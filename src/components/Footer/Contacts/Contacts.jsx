import styles from "./Contacts.module.sass";

const ContactInfo = () => {
  return (
    <div>
      <h1 className={styles.title}>Контакты</h1>
      <h1 className={styles.title + " " + styles.hidden}>НАШ АДРЕС</h1>
      <ul className={styles.list}>
        <li>
          <a
            href="https://maps.app.goo.gl/RhDdVt9EyjTtfJFe9"
            target="_blank"
            className={styles.link}
          >
            г.Грозный, <span>просп. Кадырова, 216</span>
          </a>
        </li>
        <li className={styles.hidden}>Пн — Вс: с 09:00 до 21:00</li>
        <li className={styles.item}>
          Ежедневно: <span>с 09:00 до 21:00</span>
        </li>
        <li className={styles.item}>
          <a href="tel:+79294444095" className={styles.link}>
            +7 &#40;929&#41; 4444 095
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
