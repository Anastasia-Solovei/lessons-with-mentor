import brandsLogo from "./brandsLogo";

import styles from "./Brands.module.css"

const Brands = () => {
  return (
    <section className={styles.container}>
      <h2> The world's leading brands choose ROOM.</h2>
      <p>Over 3,000 and counting.</p>
      <ul className={styles.cardSet}>
        {brandsLogo.map((logo, i) => {
          return (
            <li key={i} className={styles.item}>
              <img src={logo} alt="logo" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Brands;
