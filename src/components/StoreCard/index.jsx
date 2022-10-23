import React from "react";

import styles from "./StoreCard.module.scss";

function StoreCard({ itemProps, onToggleCardDemo, onSetFavorites, isFavorite, isItemFavorited }) {

  const obj = { parentId: itemProps.id, ...itemProps };
  const [toFavorite, setToFavorite] = React.useState(isFavorite);

  const onChangeIsFavorite = () => {
    onSetFavorites(obj)
    setToFavorite(!toFavorite);
  };

  const renderStoreCard = () => {
    switch (itemProps.card_type) {
      case 1:
        return (
          <>
            <img
              className="page__list-item-favorite"
              src={isItemFavorited(itemProps.id) ? "./img/liked.svg" : "./img/unliked.png"}
              alt="favorite button"
              onClick={onChangeIsFavorite}
            />
            <div className={styles.storeCardFront}>
              <img
                className={styles.storeCardFrontImg}
                src={itemProps.front_img}
                alt=""
              />
              <img
                className={styles.storeCardSwitchBtn}
                src="./img/switch.svg"
                alt="switch"
              />
            </div>
            <div className={styles.storeCardBack}>
              <p className={styles.storeCardBackText}>{itemProps.back_text}</p>
              <img
                className={styles.storeCardBackImg}
                src={itemProps.back_img}
                alt=""
              />
            </div>
          </>
        );

      // case 2:
      // return(
      //     <>
      //         2
      //         {/* Добавить несколько вариантов карточек */}
      //     </>
      // );

      default:
        break;
    }
  };

  return (
    <div
      className={styles.storeCard}
      // onClick={() => onToggleCardDemo(itemProps.id)}
    >
      {renderStoreCard()}
    </div>
  );
}

export default StoreCard;
