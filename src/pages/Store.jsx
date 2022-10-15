import React from "react";
import axios from "axios";

import StoreCard from "../components/StoreCard";
import StoreCardDemo from "../components/StoreCardDemo";

const Store = () => {

  // Кнопки фильтрации
  const filterButtons = [
    {
      title: "Все открытки",
      value: "",
    },
    {
      title: "На день рождения",
      value: "На_день_рождения",
    },
    {
      title: "Второй половинке",
      value: "Второй_половинке",
    },
  ];

  // Блок хуков и функций к ним
  const [CardListItems, setCardListItems] = React.useState([])
  const [cardDemoOpened, setCardDemoOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [demoCardId, setDemoCardId] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("");

  const onToggleCardDemo = (id) => {
    setCardDemoOpened(!cardDemoOpened);
    setDemoCardId(id);
    console.log(cardDemoOpened);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    setActiveFilter(event.target.value);
  };

  // Запрос открыток с сервера
  React.useEffect(() => {
    async function fetchData() {
      try {
        const cardListResponse = await axios.get("https://634afa40d90b984a1e340df0.mockapi.io/cardListItems")
        
        setCardListItems(cardListResponse.data)
        
      } catch (error) {
        alert("Ошибка при запросе данных :(")
        console.error(error)
      }
    }

    fetchData()
  }, [])

  // Обрабатываемый массив
  const StoreCardDemoData = CardListItems.find((i) => i.id === demoCardId);
  const filteredItems = CardListItems.filter((item) =>
    item.category.includes(searchValue)
  );

  // Рендер открыток
  const cardList = filteredItems.map((item, i) => {
    return (
      <div className="store__list-item" key={i}>
        <StoreCard itemProps={item} onToggleCardDemo={onToggleCardDemo} />
        <h3 className="store__list-item-title">{item.title}</h3>
        <div className="store__list-item-price-block">
          <p className="store__list-item-price-block-cost">{item.price} руб.</p>
          <button className="btn__buy btn__buy--store">Купить</button>
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
    <div className="store">
      {cardDemoOpened && (
        <StoreCardDemo
          onToggleCardDemo={onToggleCardDemo}
          StoreCardDemoData={StoreCardDemoData}
          cardDemoOpened={cardDemoOpened}
        />
      )}

      <div className="store__header">
        <h1 className="page__title">Все открытки</h1>
        {/* Если понадобится поиск - раскомментировать и filteredItems поправить

        <div className="search-block">
                    <img className="search-block__lens" src="./img/search-icon.svg" alt="search" />
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
      <div className="store__body">
        <aside className="store__categories">
          <h3 className="store__categories-title">Категории</h3>
          <div className="store__categories-content">{buttonList}</div>
        </aside>
        <main className="store__list">{cardList}</main>
      </div>
    </div>
  );
};

export default Store;
