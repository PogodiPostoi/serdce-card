import React from "react";

import styles from "./ExportCard.module.scss";

const ExportCard = ({
  customTextRecipient,
  customText,
  customTextSender,
  customCardData
}) => {
  return (
    <div className={styles.exportCard}>
      <div className={styles.exportCardFront}>
        <img
          className={styles.exportCardFrontImg}
          src={customCardData.front_img}
          alt="card"
        />
      </div>
      <div className={styles.exportCardBack}>
        <img
          className={styles.exportCardBackImg}
          src={customCardData.back_img}
          alt="backside"
        />
        {customTextRecipient ? (
          <p className={styles.exportCardBackTextRecipient}>
            {customTextRecipient}
          </p>
        ) : (
          <p className={styles.exportCardBackTextRecipient}>Кому</p>
        )}
        {customText ? (
          <p className={styles.exportCardBackText}>{customText}</p>
        ) : (
          <p className={styles.exportCardBackText}>Ваше пожелание</p>
        )}
        {customTextSender ? (
          <p className={styles.exportCardBackTextSender}>{customTextSender}</p>
        ) : (
          <p className={styles.exportCardBackTextSender}>От кого</p>
        )}
      </div>
    </div>
  );
};

export default ExportCard;
