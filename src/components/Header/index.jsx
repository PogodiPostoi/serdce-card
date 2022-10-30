import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return(
        <>
            <div className={styles.header}>
                <Link to={"/"} className={styles.headerLogoLink}>
                    <div className={styles.headerLogo}>
                        <img className={styles.headerLogoImg} src="./img/header/logo.svg" alt="logo" />
                        <div className={styles.headerLogoContent}>
                            <h2>Serdce.cards</h2>
                            <p>Электронное счастье</p>
                        </div>
                    </div>
                </Link>
                <div className={styles.headerBar}>
                    {/* <div className={styles.headerBarCart}>
                        <img src="./img/header/cart.svg" alt="cart" />
                        <p className={styles.headerBarCartText}>258 руб.</p>
                    </div> */}
                    <Link to={"/favorites"}>
                        <img className={styles.headerBarFavorite} src="./img/header/favorite.svg" alt="favorite" />
                    </Link>
                    {/* <img className={styles.headerBarProfile} src="./img/header/profile.svg" alt="profile" /> */}
                </div>
            </div>
            <div className={styles.line}></div>
            <Outlet />
        </>
    )
}

export default Header;