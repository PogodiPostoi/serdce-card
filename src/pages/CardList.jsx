import React from 'react';

import DemoCard from '../components/DemoCard'

function CardList() {

    const CardListItems = [
        {
            'name': 'thief_card',
            'front_title': 'Кто-то украл моё сердце...',
            'front_img': './img/thief-card/Background.png',
            'back_text': 'Главный подозреваемый - ТЫ!',
            'back_img': './img/thief-card/pointing-finger.png'
        }
    ]

    return(
        <div className='cardList'>
            <div className='cardListItem'>
                <DemoCard
                    CardListItems = {CardListItems}
                />
            </div>
        </div>
    )
}

export default CardList