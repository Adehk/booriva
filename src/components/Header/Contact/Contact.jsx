import Location from "../../../assets/icons/Location";
import Phone from "../../../assets/icons/Phone";

import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <div className={styles.contactInfo}>
      <a
        href="https://maps.app.goo.gl/RhDdVt9EyjTtfJFe9"
        target="_blank"
        className={styles.address + " " + styles.hidden}
      >
        <Location />
        Грозный, Кадырова, 216
      </a>

      <a href="tel:+79294444095" className={styles.phoneNumber}>
        <Phone />
        +7 &#40;929&#41; 4444 095
      </a>
    </div>
  );
};

export default Contact;
