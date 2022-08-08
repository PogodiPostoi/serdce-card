import React from 'react';

import styles from './CustomCard.module.scss'

function CustomCard({customTextRecipient, customText, customTextSender}) {

    return(
        <div className={styles.customCard}>
            <div className={styles.customCardFlipper}>
                <div className={styles.customCardFront}>
                    <h3 className={styles.customCardFrontTitle}>Кто-то украл моё сердце...</h3>
                    <img className={styles.customCardFrontImg} src="./img/thief-card/Background.png" alt="thief" />
                    <p className={styles.customCardFrontText}>Главный подозреваемый - ТЫ!</p>
                    <img className={styles.customCardSwitchBtn} src="./img/switch.svg" alt="switch" />
                </div>
                <div className={styles.customCardBack}>
                    <img className={styles.customCardBackImg} src="./img/thief-card/pointing-finger.png" alt="pointing finger" />
                    {customTextRecipient && <p className={styles.customCardBackTextRecipient}>{customTextRecipient}</p>}
                    {customText && <p className={styles.customCardBackText}>{customText}</p>}
                    {customTextSender && <p className={styles.customCardBackTextSender}>{customTextSender}</p>}
                    <img className={styles.customCardSwitchBtn} src="./img/switch.svg" alt="switch" />
                </div>
            </div>
        </div>
    )
}

export default CustomCard