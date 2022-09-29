import React from 'react';

import StoreCard from '../components/StoreCard';
import StoreCardDemo from "../components/StoreCardDemo"
import CardListItems from '../cardsLayout/layoutCardsList';

const Store = () => {

    const [cardDemoOpened, setCardDemoOpened] = React.useState(false);

    const onToggleCardDemo = () => {
        setCardDemoOpened(!cardDemoOpened)
    }
    
    const cardList = CardListItems.map((item, i) => {
        return(
            <div className="store__list-item" key={i}>
                <StoreCard  
                    itemProps = {item} 
                    onToggleCardDemo = {onToggleCardDemo}
                />
            </div>
        )
    })

    return (
        <div className="store">
            {cardDemoOpened && <StoreCardDemo 
                                    onToggleCardDemo = {onToggleCardDemo}
                                /> 
            }

            <div className="store__header">
                <h1 className="page__title">Все открытки</h1>
                <div className="search-block">
                    <img src="./img/search-icon.svg" alt="search" />
                    <input type="text" placeholder="Поиск..."/>
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