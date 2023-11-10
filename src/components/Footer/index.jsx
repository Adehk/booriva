import Info from "./Info/Info";
import Contacts from "./Contacts/Contacts";
import Logo from "../Footer/Logo/Logo";
import Socials from "./Socials/Socials";
import Feedback from "./Feedback/Feedback";

import styles from "./index.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <Logo />
        <div className={styles.infoRow}>
          <Info />
          <Contacts />
        </div>
        <Socials />
        <div>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Footer;
