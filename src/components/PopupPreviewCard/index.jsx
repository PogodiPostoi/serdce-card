import React from 'react';

import styles from './popupPreviewCard.module.scss'
import CustomCard from '../../components/CustomCard'

function PopupPreviewCard() {
    return(
        <div className={styles.popup}>
            <div className={styles.blackout}></div>
            <div className={styles.popupBody}>
                <p className={styles.popupText}>Нажми, чтобы перевернуть!</p>
                <div className={styles.popupItem}>
                    <CustomCard />    
                </div>
                <div className={styles.popupFooter}>
                    <p className={styles.popupFooterCardName}>Любовный вор</p>
                    <div className={styles.popupPriceBlock}>
                        <p className={styles.popupPriceBlockPrice}>200 ₽</p>
                        <button className={styles.popupPriceBlockBtn}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupPreviewCard;