import advantagesImg from "./advantagesImg";

import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Our simple and seamless modular products allow teams to shape and then
        reshape their work environment with ease.
      </h2>
      <p>GET IN TOUCH</p>
      <ul className={styles.cardSet}>
        {advantagesImg.map((advantages) => {
          return (
            <li key={advantages.title} className={styles.items}>
              <img src={advantages.img} alt={advantages.label} />
              <h3>{advantages.title}</h3>
              <p>{advantages.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Advantages;
