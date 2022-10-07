import React from 'react';
// import { CSSTransition } from 'react-transition-group';

import StoreCard from '../components/StoreCard';
import StoreCardDemo from "../components/StoreCardDemo"
import CardListItems from '../cardsLayout/layoutCardsList';

const Store = () => {

    // Блок хуков и функций к ним
    const [cardDemoOpened, setCardDemoOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [demoCardId, setDemoCardId] = React.useState(1);

    const onToggleCardDemo = (id) => {
        setCardDemoOpened(!cardDemoOpened)
        setDemoCardId(id)
        console.log(cardDemoOpened)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    // Обрабатываемый массив
    const StoreCardDemoData = CardListItems.find((i) => i.id === demoCardId)
    const filteredItems = CardListItems.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    //Карточки
    const cardList = filteredItems.map((item, i) => {
        return(
            <div className="store__list-item" key={i}>
                <StoreCard  
                    itemProps = {item} 
                    onToggleCardDemo = {onToggleCardDemo}
                />
                <h3 className='store__list-item-title'>{item.title}</h3>
                <div className='store__list-item-price-block'>
                    <p className='store__list-item-price-block-cost'>{item.price} руб.</p>
                    <button className="btn__buy btn__buy--store">Купить</button>
                </div>
            </div>
        )
    })

    

    return (
        <div className="store" >
                    <StoreCardDemo 
                        onToggleCardDemo = {onToggleCardDemo}
                        StoreCardDemoData = {StoreCardDemoData}
                        cardDemoOpened = {cardDemoOpened}
                    />  

                {/* <CSSTransition
                in={cardDemoOpened}
                classNames="storeCardDemoAnimation"
                timeout={300}
                unmountOnExit
                > */}
                    
                
            <div className="store__header">
                <h1 className="page__title">Все открытки</h1>
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
            </div>
            <div className="store__body">
                <aside className="store__categories">
                    <h3 className="store__categories-title">Категории</h3>
                    <div className="store__categories-content">
                        <button className="store__categories-button--active">Все открытки</button>
                        <button>На день рождения</button>
                        <button>Второй половинке</button>
                    </div>
                </aside>
                <main className="store__list">
                        {cardList}
                </main>
            </div>
        </div>
    )
}

export default Store;