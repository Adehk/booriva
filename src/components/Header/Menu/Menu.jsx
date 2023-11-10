import { Link } from "react-router-dom";

import styles from "./Menu.module.sass";

const Menu = ({
  activeMenuItem,
  setActiveMenuItem,
  activeSubmenuItem,
  setActiveSubmenuItem,
}) => {
  const menu = [
    {
      id: 0,
      name: "Главная",
      link: "/",
    },
    {
      id: 1,
      name: "Новинки",
      link: "/catalog",
    },
    {
      id: 2,
      name: "Платья",
      link: "/catalog",
    },
    {
      id: 3,
      name: "Верх",
      link: "/catalog",
    },
    {
      id: 4,
      name: "Низ",
      link: "/catalog",
    },
    {
      id: 5,
      name: "Куртки",
      link: "/catalog",
    },
    {
      id: 6,
      name: "Костюмы",
      link: "/catalog",
    },
    {
      id: 7,
      name: "#Boorivagirls",
      link: "/aboutus",
    },
  ];

  const submenu = [
    {
      id: 0,
      name: "Комбинезоны",
      link: "/catalog/overalls",
    },
    {
      id: 1,
      name: "Пиджаки",
      link: "/catalog/blazers",
    },
    {
      id: 2,
      name: "Рубашки",
      link: "/catalog/shirts",
    },
    {
      id: 3,
      name: "Свитшоты",
      link: "/catalog/sweatshirts",
    },
    {
      id: 4,
      name: "Худи",
      link: "/catalog/hoodies",
    },
    {
      id: 5,
      name: "Топы",
      link: "/catalog/tops",
    },
    {
      id: 6,
      name: "Футболки",
      link: "/catalog/tshirts",
    },
  ];
  console.log(activeSubmenuItem);
  return (
    <ul className={styles.menu}>
      {menu.map(({ id, name, link }) => (
        <li key={id}>
          <Link
            to={link}
            className={
              styles.link + " " + (id === activeMenuItem ? styles.active : "")
            }
            onClick={() => setActiveMenuItem(id)}
          >
            {name}
          </Link>
          <nav className={styles.submenu}>
            <ul className={styles.content}>
              {submenu.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
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
        </li>
      ))}

      {/* <li>
        <Link to="/top" className={styles.link}>
          Верх
        </Link>
        <nav className={styles.submenu}>
          <ul className={styles.content}>
            <li>
              <Link to="/overalls" className={styles.submenuLink}>
                Комбинезоны
              </Link>
            </li>
            <li>
              <Link to="/blazers" className={styles.submenuLink}>
                Пиджаки
              </Link>
            </li>
            <li>
              <Link to="/shirts" className={styles.submenuLink}>
                Рубашки
              </Link>
            </li>
            <li>
              <Link to="/sweatshirts" className={styles.submenuLink}>
                Свитшоты
              </Link>
            </li>
            <li>
              <Link to="/hoodies" className={styles.submenuLink}>
                Худи
              </Link>
            </li>
            <li>
              <Link to="/tops" className={styles.submenuLink}>
                Топы
              </Link>
            </li>
            <li>
              <Link to="/tshirts" className={styles.submenuLink}>
                Футболки
              </Link>
            </li>
          </ul>
        </nav>
      </li> */}
    </ul>
  );
};

export default Menu;
