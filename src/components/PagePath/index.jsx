import React from 'react';

import styles from "./PagePath.module.scss"

function PagePath({one, two, three}) {
    return (
        <div className={styles.pagePath}>
            <button>{one}</button>
            {two &&
                <>
                    <img src="/img/arrow-right.png" alt="arrow" />
                    <button>{two}</button>
                </>
            }
            {three &&
                <>
                    <img src="/img/arrow-right.png" alt="arrow" />
                    <button>{three}</button>
                </>
            }
            
        </div>
    )
}

export default PagePath;