import styles from "./Contacts.module.sass";

const ContactInfo = () => {
  return (
    <div>
      <h1 className={styles.title}>Контакты</h1>
      <h1 className={styles.title + " " + styles.hidden}>НАШ АДРЕС</h1>
      <ul className={styles.list}>
        <li>
          г.Киев, <span>ул. Нижний Вал, 37</span>
        </li>
        <li className={styles.hidden}>Пн — Вс: с 11:00 до 21:00</li>
        <li className={styles.item}>
          Ежедневно: <span>с 11:00 до 21:00</span>
        </li>
        <li className={styles.item}>
          <a href="tel:+380638433471" className={styles.phoneNumber}>
            +38 063 843 34 71
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
