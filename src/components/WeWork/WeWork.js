import WeWorkItems from "./WeWorkItems";

import styles from "./WeWork.module.css"

const WeWork = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        We take a human approach to a business-to-business industry, breaking
        the boundaries between corporate and personal, and rethinking every step
        of the user experience along the way.
      </h2>
      <h3 >We make work, work for you.</h3>
      <ul >
        {WeWorkItems.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div>
                <img src={item.img} alt={item.title} className={styles.image}/>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WeWork;
