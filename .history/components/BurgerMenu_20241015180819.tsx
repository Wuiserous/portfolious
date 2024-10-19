// components/BurgerMenu.js
import styles from './BurgerMenu.module.css';
import { RxHamburgerMenu } from "react-icons/rx";

const BurgerMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.burgerIcon}>
        <RxHamburgerMenu />
      </div>
      <div className={styles.menu}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
