import React from 'react';

import DemoCard from '../components/DemoCard'
import PagePath from '../components/PagePath'
import PopupPreviewCard from '../components/PopupPreviewCard'

function Cards() {

    const CardListItems = [
        {
            'name': 'thief_card',
            'front_title': 'Кто-то украл моё сердце...1',
            'front_img': './img/thief-card/Background.png',
            'back_text': 'Главный подозреваемый - ТЫ!',
            'back_img': './img/thief-card/pointing-finger.png'
        },
        {
            'name': 'thief_card',
            'front_title': 'Кто-то украл моё сердце...2',
            'front_img': './img/thief-card/Background.png',
            'back_text': 'Главный подозреваемый - ТЫ!',
            'back_img': './img/thief-card/pointing-finger.png'
        },
        {
            'name': 'thief_card',
            'front_title': 'Кто-то украл моё сердце...3',
            'front_img': './img/thief-card/Background.png',
            'back_text': 'Главный подозреваемый - ТЫ!',
            'back_img': './img/thief-card/pointing-finger.png'
        },
        {
            'name': 'thief_card',
            'front_title': 'Кто-то украл моё сердце...4',
            'front_img': './img/thief-card/Background.png',
            'back_text': 'Главный подозреваемый - ТЫ!',
            'back_img': './img/thief-card/pointing-finger.png'
        }
    ]

    const cardList = CardListItems.map((item, i) => {
        return(
            <DemoCard key={i} 
            itemProps = {item} />
        )
    })

    return(
        <>
            <div className='cards'> 
                <PagePath 
                    one = {'Открытки'}
                    two = {'Все открытки'}
                />
                <h2 className='cardsTitle'>Категории открыток</h2>
                <div className="cardsContent">
                    <aside className='cardsCategories'>
                        <nav>
                            <button className='cardsCategoriesButton'>Все открытки</button>
                            <button className='cardsCategoriesButton'>Универсальные</button>
                            <button className='cardsCategoriesButton'>День рождения</button>
                        </nav>
                    </aside>
                    <div className="cardsBody">
                        <div className="cardsFilters">
                            <div className="cardsFiltersButton">
                                <img src="/img/gender.png" alt="" width={18} height={18}/>
                                <p>Кому</p>
                                <img src="/img/arrow-down.png" alt="" width={12} height={12}/>
                            </div>
                            <div className="cardsFiltersButton">
                                <img src="/img/wallet.png" alt="" width={18} height={18}/>
                                <p>Цена</p>
                                <img src="/img/arrow-down.png" alt="" width={12} height={12}/>
                            </div>
                        </div>
                        <div className='cardsList'>
                            {cardList}
                        </div>
                    </div>
                </div>
            </div>
            
            <PopupPreviewCard />
        </>
    )
}

export default Cards