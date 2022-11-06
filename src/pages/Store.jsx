import React from "react";
import { Link } from "react-router-dom";

import StoreCard from "../components/StoreCard";
import StoreCardDemo from "../components/StoreCardDemo";

const Store = ({
  CardListItems,
  onToggleCardDemo,
  cardDemoOpened,
  onSetFavorites,
  cardDemoData,
  onClickOrder
}) => {
  // Кнопки фильтрации
  const filterButtons = [
    {
      title: "Все открытки",
      value: "",
      img: ".img/filterButtons/lightBulb.svg",
    },
    {
      title: "На день рождения",
      value: "На_день_рождения",
      img: "/img/filterButtons/wrappedGift.svg",
    },
    {
      title: "Второй половинке",
      value: "Второй_половинке",
      img: "/img/filterButtons/sparklingHeart.svg",
    },
  ];

  // Блок хуков и функций к ним
  const [searchValue, setSearchValue] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("");
  const [isFilterListOpened, setIsFilterListOpened] = React.useState(false);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    setActiveFilter(event.target.value);
  };

  const onToggleFilterOpened = () => {
    setIsFilterListOpened(!isFilterListOpened)
  }

  // Обрабатываемый массив
  const filteredItems = CardListItems.filter((item) =>
    item.category.includes(searchValue)
  );

  // Рендер открыток
  const cardList = filteredItems.map((item, i) => {
    return (
      <div className="page__list-item" key={i}>
        <StoreCard
          id={item.id}
          itemProps={item}
          onToggleCardDemo={onToggleCardDemo}
          onSetFavorites={onSetFavorites}
          isFavorite={item.is_favorite}
        />
        <h3 className="page__list-item-title">{item.title}</h3>
        <div className="page__list-item-price-block">
          <p className="page__list-item-price-block-cost">
            {Number(item.price) > 0 ? `${item.price} руб.` : "Бесплатно"}
          </p>
          <Link to={`/checkout/${item.id}`} onClick={() => onClickOrder(item.id)}>
            <button className="btn__buy btn__buy--store">Подписать</button>
          </Link>
        </div>
      </div>
    );
  });

  // Рендер кнопок фильтрации
  const buttonList = filterButtons.map((item) => {
    return (
      <label
        key={item.name}
        className={
          activeFilter === item.value
            ? "store__categories-button store__categories-button--active"
            : "store__categories-button"
        }
      >
        <img className="" src={item.img} alt="" />
        <input
          type="radio"
          name="card_type"
          value={item.value}
          onClick={onChangeSearchInput}
        />
        {item.title}
      </label>
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
        <h1 className="page__title">Все открытки</h1>
        {/* Если понадобится поиск - раскомментировать и filteredItems поправить

        <div className="search-block">
                    <img className="search-block__lens" src="/img/search-icon.svg" alt="search" />
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        placeholder="Поиск..."
                    />
                    {searchValue && (
                            <img
                            onClick={() => setSearchValue("")}
                            className="clear"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                            />
                        )}
                </div> 
                */}
      </div>
      <div className="page__body">
        <aside className="store__categories">
          <div className="store__categories-pc">
            <h3 className="store__categories-title">Категории</h3>
            <div className="store__categories-content">{buttonList}</div>
          </div>
          <div className="store__categories-mobile">
            <div
              className="store__categories-mobile-dropdown"
              onClick={() => onToggleFilterOpened()}
            >
              <h3 className="store__categories-title">Категории</h3>
              <img
                src={
                  isFilterListOpened
                    ? "/img/filterButtons/arrowDropUp.svg"
                    : "/img/filterButtons/arrowDropDown.svg"
                }
                alt="dropdown icon"
              />
            </div>
            {isFilterListOpened && (
              <div className="store__categories-content">{buttonList}</div>
            )}
          </div>
        </aside>
        <main className="page__list">{cardList}</main>
      </div>
    </div>
  );
};

export default Store;
