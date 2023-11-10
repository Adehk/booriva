import { Link } from "react-router-dom";

import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/" className={styles.link}>
          Главная
        </Link>
      </li>
      <li>
        <Link to="/newitems" className={styles.link}>
          Новинки
        </Link>
      </li>
      <li>
        <Link to="/dresses" className={styles.link}>
          Платья
        </Link>
      </li>
      <li>
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
      </li>
      <li>
        <Link to="/bottom" className={styles.link}>
          НИз
        </Link>
      </li>
      <li>
        <Link to="/jackets" className={styles.link}>
          куртки
        </Link>
      </li>
      <li>
        <Link to="/suits" className={styles.link}>
          Костюмы
        </Link>
      </li>
      <li>
        <Link to="/aboutus" className={styles.link}>
          #Boorivagirls
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
