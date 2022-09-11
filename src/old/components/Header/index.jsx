import React from 'react';

import styles from './Header.module.scss'

function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="./img/logo.svg" alt="logo" />
                <span>serdce.CARDS</span>
            </div>
            <p>Открытки</p>
        </div>
    )
}

export default Header;