import React from 'react';
import autoAnimate from '@formkit/auto-animate';

import styles from './StoreCardDemo.module.scss'

import CustomCard from '../CustomCard'

const StoreCardDemo = ({ onToggleCardDemo, StoreCardDemoData, cardDemoOpened }) => {
    // const [parent] = autoAnimate.useAutoAnimate(/* optional config */)

    return(
        <div 
            className={cardDemoOpened ? `bg--blur show`: `bg--blur hide`
        }
        >
            <div className={` ${styles.storeCardDemo}`} 
            // ref={parent}
            > 
                <div className={styles.storeCardDemoBody}>
                    <img className={styles.storeCardDemoClosebtn} src="./img/close.svg" alt="close" onClick={() => onToggleCardDemo(StoreCardDemoData.id)}/>
                    <CustomCard 
                        customCardData = {StoreCardDemoData}
                    />
                    <h3 className={styles.storeCardDemoText}>{StoreCardDemoData.title}</h3>
                    <div className={styles.storeCardDemoPriceBlock}>
                        <p className={styles.storeCardDemoCost}>{StoreCardDemoData.price} руб.</p>
                        <button className="btn__buy">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCardDemo;