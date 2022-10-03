import React from 'react';

import styles from './StoreCardDemo.module.scss'

import CustomCard from '../CustomCard'

const StoreCardDemo = ({onToggleCardDemo, StoreCardDemoData}) => {

    return(
        <div className={`bg--blur ${styles.storeCardDemo}`} >
            <div className={styles.storeCardDemoBody}>
                <img className={styles.storeCardDemoClosebtn} src="./img/close.svg" alt="close" onClick={() => onToggleCardDemo('')}/>
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
    );
}

export default StoreCardDemo;