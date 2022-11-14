import React from "react";

import styles from "./CustomCard.module.scss";

function CustomCard({
  customTextRecipient,
  customText,
  customTextSender,
  customCardData,
}) {
  const [isFlipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`${styles.customCard} ${isFlipped ? styles.isFlipped : ""}`}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className={styles.customCardFlipper}>
        <div className={styles.customCardFront}>
          <img
            className={styles.customCardFrontImg}
            src={customCardData.front_img}
            alt="thief card"
          />
          <img
            className={styles.customCardSwitchBtn}
            src="/img/switch.svg"
            alt="switch"
          />
        </div>
        <div className={styles.customCardBack}>
          <img
            className={styles.customCardBackImg}
            src={customCardData.back_img}
            alt="backside"
          />
          {customTextRecipient ? (
            <p className={styles.customCardBackTextRecipient}>
              {customTextRecipient}
            </p>
          ) : (
            <p className={styles.customCardBackTextRecipient}>
              Кому
            </p>
          )}
          {customText ? (
            <p className={styles.customCardBackText}>{customText}</p>
          ) : (
            <p className={styles.customCardBackText}>
              Ваше пожелание
            </p>
          )}
          {customTextSender ? (
            <p className={styles.customCardBackTextSender}>
              {customTextSender}
            </p>
          ) : (
            <p className={styles.customCardBackTextSender}>
              От кого
            </p>
          )}
          {/* <img className={styles.customCardSwitchBtn} src="/img/switch.svg" alt="switch" /> */}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
