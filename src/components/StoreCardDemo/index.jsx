import React from "react";

import styles from "./StoreCardDemo.module.scss";

import CustomCard from "../CustomCard";

const StoreCardDemo = ({ onToggleCardDemo, cardDemoData, cardDemoOpened }) => {
  return (
    <div className={cardDemoOpened ? `bg--blur show` : `bg--blur hide`}>
      <div className={styles.storeCardDemo}>
        <div className={styles.storeCardDemoBody}>
          <img
            className={styles.storeCardDemoClosebtn}
            src="./img/close.svg"
            alt="close"
            onClick={() => onToggleCardDemo("")}
          />
          <CustomCard customCardData={cardDemoData} />
          <h3 className={styles.storeCardDemoText}>{cardDemoData.title}</h3>
          <div className={styles.storeCardDemoPriceBlock}>
            <p className={styles.storeCardDemoCost}>
              {Number(cardDemoData.price) > 0 ? `${cardDemoData.price} руб.`: 'Бесплатно'} 
            </p>
            <button className="btn__buy">Подписать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCardDemo;
