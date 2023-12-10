import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.sass";

const Menu = ({
  activeMenuItem,
  setActiveMenuItem,
  activeSubmenuItem,
  setActiveSubmenuItem,
}) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const [submenu, setSubmenu] = useState([]);

  const handleGetArrOfCategories = (id) => {
    fetch(`https://640ef1d54ed25579dc40e2a6.mockapi.io/categories/a${id}`)
      .then((res) => res.json())
      .then((data) => setSubmenu(data.categories));
  };

  return (
    <ul className={styles.menu}>
      {menu.map(({ id, name }) => (
        <li key={id}>
          <Link
            to={`catalog?menuId=${id}`}
            className={
              styles.link + " " + (id === activeMenuItem ? styles.active : "")
            }
            onClick={() => setActiveMenuItem(id)}
            onMouseEnter={() => handleGetArrOfCategories(id)}
          >
            {name}
          </Link>
          {submenu.length > 0 && (
            <nav className={styles.submenu}>
              <ul className={styles.content}>
                {submenu.map(({ id, name }) => (
                  <li key={id}>
                    <Link
                      to={`catalog?categoryId=${id}`}
                      className={
                        styles.submenuLink +
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
            </nav>
          )}
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
  );
};

export default Menu;
