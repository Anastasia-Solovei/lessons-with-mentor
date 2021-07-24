// import reviews_bcg from "./images/reviews/reviews_bcg.jpg";
import stars from "../../images/reviews/stars.svg";
import reviewsItems from "./reviewsItems";

import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className={styles.container}>
    <div
      className={styles.bcg}
      // style={{
      //   backgroundImage: { reviews_bcg },
      // }}
    >
      <ul className={styles.reviews}>
        {reviewsItems.map((review) => {
          return (
            <li key={review.id} className={styles.item}>
              <img src={stars} alt="" />
              <p>{review.text}</p>
              <img src={review.img} alt="" />
            </li>
          );
        })}
      </ul>
      <p>READ MORE REVIEWS</p>
    </div>
    </section>
  );
};
export default Reviews;
