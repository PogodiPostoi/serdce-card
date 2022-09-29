import React from 'react';

import styles from './StoreCardDemo.module.scss'

import CustomCard from '../CustomCard'

const StoreCardDemo = ({onToggleCardDemo}) => {


    return(
        <div className={`bg--blur ${styles.storeCardDemo}`} >
            <div className={styles.storeCardDemoBody}>
                <img className={styles.storeCardDemoClosebtn} src="./img/close.svg" alt="close" onClick={onToggleCardDemo}/>
                <CustomCard />
                <h3 className={styles.storeCardDemoText}>Воришка сердец</h3>
                <div className={styles.storeCardDemoPriceBlock}>
                    <p className={styles.storeCardDemoCost}>148 руб.</p>
                    <button className="btn__buy">Купить</button>
                </div>
            </div>
        </div>
    );
}

export default StoreCardDemo;