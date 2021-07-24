import img1 from "../../images/slider1.jpg";

import styles from "./SliderTop.module.css"

const SliderTop = () => {
  return (
    <div className={styles.slider}>
      <img src={img1} alt="slide1" />
    </div>
  );
};
export default SliderTop;
