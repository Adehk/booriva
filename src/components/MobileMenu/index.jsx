import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import CloseBtn from "../../assets/icons/CloseBtn";
import RightArrow from "../../assets/icons/RightArrow";

import styles from "./index.module.sass";

const MobileMenu = ({
  activeMenuItem,
  setActiveMenuItem,
  activeSubmenuItem,
  setActiveSubmenuItem,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [mobileMenu, setMobileMenu] = useState([]);
  const [mobileSubmenu, setMobileSubmenu] = useState([]);

  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((data) => setMobileMenu(data));
  }, []);

  const handleGetArrOfCategories = (id) => {
    fetch(`https://640ef1d54ed25579dc40e2a6.mockapi.io/categories/a${id}`)
      .then((res) => res.json())
      .then((data) => setMobileSubmenu(data.categories));
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div
      className={`${styles.mobileMenuWrapper} ${
        isMobileMenuOpen ? styles.visible : ""
      }`}
    >
      <div className={styles.closeBtn} onClick={handleMobileMenuClose}>
        <CloseBtn />
      </div>
      <div className={styles.mobileMenu}>
        <h1 className={styles.title}>
          <span className={styles.menu}>МЕНЮ</span>
          <span className={styles.category}>
            <span className={styles.slash}>&#47;</span> Верх
          </span>
        </h1>
        <ul className={styles.links}>
          {mobileMenu.map(({ id, name }) => (
            <li key={id}>
              <Link
                to={`/catalog?menuId=${id}`}
                className={
                  styles.link +
                  " " +
                  (id === activeMenuItem ? styles.active : "")
                }
                onClick={() => {
                  setActiveMenuItem(id);
                  handleGetArrOfCategories(id);
                }}
              >
                {name}
                <span className={styles.rightArrow}>
                  <RightArrow />
                </span>
              </Link>
              {/* {mobileSubmenu.length > 0 && (
                <ul className={styles.categories}>
                  {mobileSubmenu.map(({ id, name }) => (
                    <li key={id}>
                      <Link
                        to={`catalog?categoryId=${id}`}
                        className={
                          styles.categoryLink +
                          " " +
                          (id === activeSubmenuItem ? styles.active : "")
                        }
                        onClick={() => setActiveSubmenuItem(id)}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
          <Link
            to="/aboutus"
            className={
              styles.link +
              " " +
              ("aboutus" === activeMenuItem ? styles.active : "")
            }
            onClick={() => setActiveMenuItem("aboutus")}
          >
            #Boorivagirls
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
