import classNames from "classnames";

import Hamburger from "../../../assets/icons/Hamburger";

import styles from "./HamburgerMenu.module.sass";

const HamburgerMenu = ({ isMobileMenuOpen, handleMobileMenuOpen }) => {
  const hamburgerClasses = classNames(styles.navigationBarItem, {
    [styles.active]: isMobileMenuOpen,
  });
  return (
    <div
      className={hamburgerClasses}
      onClick={() => {
        handleMobileMenuOpen();
      }}
    >
      <Hamburger />
      Меню
    </div>
  );
};

export default HamburgerMenu;
