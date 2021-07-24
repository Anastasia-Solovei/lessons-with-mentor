import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import map from "../../images/map.svg";
import cart from "../../images/cart.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.top}>
          <ul className={styles.contacts}>
            <li className={styles["contacts-item"]}>
              <a href="/contact">Contact Sales</a>
            </li>
            <li className={styles["contacts-item"]}>
              <a href="tel:6467913726">646-791-3726</a>
            </li>
            <li className={styles["contacts-item"]}>
              <select>
                <option>US</option>
                <option>UK</option>
              </select>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <a href="/header">
            <img src={logo} alt="logo" className={styles["logo-header"]} />
          </a>
          <nav className={styles.nav}>
            <ul className={styles["nav-menubar"]}>
              <li className={styles["nav-item"]}>
                <a href="/products">Products</a>
              </li>
              <li className={styles["nav-item"]}>
                <a href="explore">Explore</a>
              </li>
              <li className={styles["nav-item"]}>
                <a href="/Shop">Shop</a>
              </li>
            </ul>
          </nav>
          <div className={styles.showrooms}>
            <a href="/Showrooms">
              <img src={map} alt="img2" className={styles.map} />
              <span className={styles["showrooms-text"]}>Showrooms</span>
            </a>
          </div>
          <button type="Button" className={styles.cart}>
            <img src={cart} alt="img1" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
