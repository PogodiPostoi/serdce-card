import React from "react";
import { Link } from "react-router-dom";

import styles from "./StoreCardDemo.module.scss";

import CustomCard from "../CustomCard";

const StoreCardDemo = ({
  onToggleCardDemo,
  cardDemoData,
  cardDemoOpened,
  onClickOrder,
}) => {
  console.log(cardDemoData, 11)

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
          <span className="flipper-hint">
            Нажми, чтобы перевернуть
          </span>
          <CustomCard customCardData={cardDemoData} />
          <h3 className={styles.storeCardDemoText}>{cardDemoData.title}</h3>
          <div className={styles.storeCardDemoPriceBlock}>
            <p className={styles.storeCardDemoCost}>
              {Number(cardDemoData.price) > 0
                ? `${cardDemoData.price} руб.`
                : "Бесплатно"}
            </p>
            <Link to={"/order"} onClick={() => onClickOrder(cardDemoData.id)}>
              <button className="btn__buy">Подписать</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCardDemo;
