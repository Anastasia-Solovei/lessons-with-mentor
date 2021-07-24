import hero from "../../images/hero.jpg";

import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
      <img src={hero} alt="room" />
      <div className={styles["text-area"]}>
        <h1>Design that inspires a better way to work.</h1>
        <p>
          We've developed a series of purpose-built rooms that offer companies
          looking for change an affordable, sustainable, and flexible
          alternative to fixed construction and traditional office design.
        </p>
      </div>
    </section>
  );
};
export default Hero;
