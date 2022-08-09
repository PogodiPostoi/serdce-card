import React from 'react';

import styles from './DemoCard.module.scss'

function DemoCard() {

    return(
        <div className={styles.demoCard}>
            <div className={styles.demoCardFront}>
                <h3 className={styles.demoCardFrontTitle}>Кто-то украл моё сердце...</h3>
                <img className={styles.demoCardFrontImg} src="./img/thief-card/Background.png" alt="thief" />
                <img className={styles.demoCardSwitchBtn} src="./img/switch.svg" alt="switch" />
            </div>
            <div className={styles.demoCardBack}>
                <p className={styles.demoCardBackText}>Главный подозреваемый - ТЫ!</p>
                <img className={styles.demoCardBackImg} src="./img/thief-card/pointing-finger.png" alt="pointing finger" />
            </div>
        </div>
    )
}

export default DemoCard