import React from 'react';

import StoreCard from '../components/StoreCard';
import CardListItems from '../cardsLayout/layoutCardsList';

const Store = () => {

    const cardList = CardListItems.map((item, i) => {
        return(
            <div className="storeListItem">
                <StoreCard key={i} 
                    itemProps = {item} />
            </div>
        )
    })

    return (
        <div className="store">
            <h1>Все открытки</h1>
            <main className="storeList">
                    {cardList}
            </main>
        </div>
    )
}

export default Store;