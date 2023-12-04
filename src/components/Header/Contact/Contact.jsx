import Location from "../../../assets/icons/Location";
import Phone from "../../../assets/icons/Phone";

import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <div className={styles.contactInfo}>
      <div
        href="tel:+380638433471"
        className={styles.address + " " + styles.hidden}
      >
        <Location />
        Киев, Нижний вал, 37
      </div>

      <a href="tel:+380638433471" className={styles.phoneNumber}>
        <Phone />
        +38 063 843 34 71
      </a>
    </div>
  );
};

export default Contact;
