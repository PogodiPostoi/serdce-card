import React from "react";

import styles from "./SimpleCard.module.scss";

function SimpleCard() {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`${styles.simpleCard} ${isFlipped ? styles.isFlipped : ""}`}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className={styles.simpleCardFlipper}>
        <div className={styles.simpleCardFront}>
          <h3 className={styles.simpleCardFrontTitle}>
            Кто-то украл моё сердце...
          </h3>
          <img
            className={styles.simpleCardFrontImg}
            src="./img/thief-card/Background.png"
            alt="thief"
          />
          <img
            className={styles.simpleCardSwitchBtn}
            src="./img/switch.svg"
            alt="switch"
          />
        </div>
        <div className={styles.simpleCardBack}>
          <p className={styles.simpleCardBackText}>
            Главный подозреваемый - ТЫ!
          </p>
          <img
            className={styles.simpleCardBackImg}
            src="./img/thief-card/pointing-finger.png"
            alt="pointing finger"
          />
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
