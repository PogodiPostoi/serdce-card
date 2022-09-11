import styles from "./Header.module.scss";

const Header = () => {
    return(
        <>
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <img src="./img/logo.svg" alt="logo" />
                <div className={styles.headerLogoContent}>
                    <h2>Serdce.cards</h2>
                    <p>Лучшие электронные открытки</p>
                </div>
            </div>
            <div className={styles.headerBar}></div>
        </div>
        <div className={styles.line}></div>
        </>
    )
}

export default Header;