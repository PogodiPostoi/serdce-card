import React from "react";
import { Link } from "react-router-dom";

import RenderCard from "../components/RenderCard";
import StoreCard from "../components/StoreCard";
import StoreCardDemo from "../components/StoreCardDemo";

const Favorites = ({
  onToggleCardDemo,
  cardDemoOpened,
  onSetFavorites,
  CardListItems,
  cardDemoData,
  onClickOrder,
  isLoading,
}) => {
  const loaderFavoriteList = isLoading
    ? Array(3).fill([])
    : CardListItems.filter((obj) => obj.is_favorite === true);

  // Рендер избранных открыток
  const favoriteList = loaderFavoriteList.map((item, i) => {
    return (
      <div className="page__list-item" key={i}>
        {isLoading ? (
          <RenderCard location={"list"} />
        ) : (
          <>
            <StoreCard
              id={item.id}
              itemProps={item}
              onToggleCardDemo={onToggleCardDemo}
              onSetFavorites={onSetFavorites}
              isFavorite={item.is_favorite}
              location={"list"}
            />
            <h3 className="page__list-item-title">{item.title}</h3>
            <div className="page__list-item-price-block">
              <p className="page__list-item-price-block-cost">
                {Number(item.price) > 0 ? `${item.price} руб.` : "Бесплатно"}
              </p>
              <Link
                to={`/checkout/${item.id}`}
                onClick={() => onClickOrder(item.id)}
              >
                <button className="btn__buy btn__buy--store">Подписать</button>
              </Link>
            </div>
          </>
        )}
      </div>
    );
  });

  return (
    <div className="page">
      {cardDemoOpened && (
        <StoreCardDemo
          onToggleCardDemo={onToggleCardDemo}
          cardDemoData={cardDemoData}
          cardDemoOpened={cardDemoOpened}
          onClickOrder={onClickOrder}
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
