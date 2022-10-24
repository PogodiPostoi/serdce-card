import React from "react";

import StoreCard from "../components/StoreCard";
import StoreCardDemo from "../components/StoreCardDemo";

const Favorites = ({
  favoriteListItems,
  onToggleCardDemo,
  demoCardId,
  cardDemoOpened,
  onSetFavorites,
  isItemFavorited,
  CardListItems
}) => {

  // Рендер избранных открыток
  const favoriteList = favoriteListItems.map((item, i) => {

    return (
      <div className="page__list-item" key={i}>
        <StoreCard
          id={item.id}
          itemProps={item}
          onToggleCardDemo={onToggleCardDemo}
          onSetFavorites={onSetFavorites}
          isFavorite={true}
          isItemFavorited={isItemFavorited}
        />
        <h3 className="page__list-item-title">{item.title}</h3>
        <div className="page__list-item-price-block">
          <p className="page__list-item-price-block-cost">{item.price} руб.</p>
          <button className="btn__buy btn__buy--store">Купить</button>
        </div>
      </div>
    );
  });


  // Обрабатываемый массив
  const cardDemoData = favoriteListItems.find((i) => i.id === demoCardId);

  return (
    <div className="page">
      {cardDemoOpened && (
        <StoreCardDemo
          onToggleCardDemo={onToggleCardDemo}
          cardDemoData={cardDemoData}
          cardDemoOpened={cardDemoOpened}
        />
      )}

      <div className="page__header">
        <h1 className="page__title">Избранное</h1>
      </div>
      <div className="page__body">
        <main className="page__list">{favoriteList}</main>
      </div>
    </div>
  );
};

export default Favorites;
