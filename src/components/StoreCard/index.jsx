import React from "react";

import styles from "./StoreCard.module.scss";

function StoreCard({itemProps}) {
    const renderStoreCard = () => {
        switch (itemProps.card_type) {
            case 1:
                return(
                    <>
                        <div className={styles.storeCardFront}>
                            <h3 className={styles.storeCardFrontTitle}>
                            {itemProps.front_title}
                            </h3>
                            <img
                            className={styles.storeCardFrontImg}
                            src={itemProps.front_img}
                            alt=""
                            />
                            <img
                            className={styles.storeCardSwitchBtn}
                            src="./img/switch.svg"
                            alt="switch"
                            />
                        </div>
                        <div className={styles.storeCardBack}>
                            <p className={styles.storeCardBackText}>
                            {itemProps.back_text}
                            </p>
                            <img
                            className={styles.storeCardBackImg}
                            src={itemProps.back_img}
                            alt=""
                            />
                        </div>
                    </>
                );

                case 2:
                return(
                    <>
                        <div className={styles.storeCardFront}>
                            <p className={styles.storeCardBackText}>
                                {itemProps.back_text}
                                </p>
                                <img
                                className={styles.storeCardBackImg}
                                src={itemProps.back_img}
                                alt=""
                            />
                        </div>
                        <div className={styles.storeCardBack}>
                            <h3 className={styles.storeCardFrontTitle}>
                            {itemProps.front_title}
                            </h3>
                            <img
                            className={styles.storeCardFrontImg}
                            src={itemProps.front_img}
                            alt=""
                            />
                            <img
                            className={styles.storeCardSwitchBtn}
                            src="./img/switch.svg"
                            alt="switch"
                            />
                        </div>
                    </>
                );
        
            default:
                break;
        }
    }

    return (
    
        <div className={styles.storeCard}>
            {renderStoreCard()}
        </div>
    );
};


export default StoreCard;


/*
<div className={styles.storeCard}>
    <div className={styles.storeCardFront}>
        <h3 className={styles.storeCardFrontTitle}>
        {itemProps.front_title}
        </h3>
        <img
        className={styles.storeCardFrontImg}
        src={itemProps.front_img}
        alt=""
        />
        <img
        className={styles.storeCardSwitchBtn}
        src="./img/switch.svg"
        alt="switch"
        />
    </div>
    <div className={styles.storeCardBack}>
        <p className={styles.storeCardBackText}>
        {itemProps.back_text}
        </p>
        <img
        className={styles.storeCardBackImg}
        src={itemProps.back_img}
        alt=""
        />
    </div>
</div>
*/