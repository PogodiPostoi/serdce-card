import React from "react";

import styles from "./DemoCard.module.scss";

function DemoCard({itemProps}) {
  return (
        <div className={styles.demoCard}>
          {console.log(itemProps)}
          <div className={styles.demoCardFront}>
            <h3 className={styles.demoCardFrontTitle}>
              {itemProps.front_title}
            </h3>
            <img
              className={styles.demoCardFrontImg}
              src={itemProps.front_img}
              alt=""
            />
            <img
              className={styles.demoCardSwitchBtn}
              src="./img/switch.svg"
              alt="switch"
            />
            <div className={styles.demoCardBack}>
            <p className={styles.demoCardBackText}>
              {itemProps.back_text}
            </p>
            <img
              className={styles.demoCardBackImg}
              src={itemProps.back_img}
              alt=""
            />
          </div>
          </div>
          
        </div>
      );
    };


export default DemoCard;
