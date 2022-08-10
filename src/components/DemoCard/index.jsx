import React from "react";

import styles from "./DemoCard.module.scss";

function DemoCard({CardListItems}) {
  const renderCards = (item) => {
    return item.map((item, index) => {
      return (
        <div key={index} className={styles.demoCard}>
          <div className={styles.demoCardFront}>
            <h3 className={styles.demoCardFrontTitle}>
              {item.front_title}
            </h3>
            <img
              className={styles.demoCardFrontImg}
              src={item.front_img}
              alt=""
            />
            <img
              className={styles.demoCardSwitchBtn}
              src="./img/switch.svg"
              alt="switch"
            />
          </div>
          <div className={styles.demoCardBack}>
            <p className={styles.demoCardBackText}>
              {item.back_text}
            </p>
            <img
              className={styles.demoCardBackImg}
              src={item.back_img}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return (
    renderCards(CardListItems)
  )

}

export default DemoCard;
