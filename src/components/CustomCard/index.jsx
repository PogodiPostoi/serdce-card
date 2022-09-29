import React from "react";

import styles from "./CustomCard.module.scss";

function CustomCard({ customTextRecipient, customText, customTextSender }) {
  const [isFlipped, setFlipped] = React.useState(false)

  return (
    <div 
      className={`${styles.customCard} ${isFlipped ? styles.isFlipped : ''}`}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className={styles.customCardFlipper}>
        <div className={styles.customCardFront}>
          <img
            className={styles.customCardFrontImg}
            src="./img/cards/thief-card/thief_front.png"
            alt="thief card"
          />
          <img className={styles.customCardSwitchBtn} src="./img/switch.svg" alt="switch" />

        </div>
        <div className={styles.customCardBack}>
          <img
            className={styles.customCardBackImg}
            src="./img/cards/thief-card/thief_back.png"
            alt="backside"
          />
          {customTextRecipient && (
            <p className={styles.customCardBackTextRecipient}>
              {customTextRecipient}
            </p>
          )}
          {customText && (
            <p className={styles.customCardBackText}>{customText}</p>
          )}
          {customTextSender && (
            <p className={styles.customCardBackTextSender}>
              {customTextSender}
            </p>
          )}
          {/* <img className={styles.customCardSwitchBtn} src="./img/switch.svg" alt="switch" /> */}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
