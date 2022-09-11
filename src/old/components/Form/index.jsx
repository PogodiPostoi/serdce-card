import React from 'react'

import styles from './Form.module.scss'

function Form({onChangeCustomTextRecipient, onChangeCustomText, onChangeCustomTextSender}) {

    return (
        <div className={styles.form}>
            <h3 className={styles.formTitle}>Подпишите</h3>
            <div className={styles.formBox}>
                <div className={styles.formBoxItem}>
                    <p>Имя получателя:</p>
                    <input type="text" maxLength="20" onChange={onChangeCustomTextRecipient}/>
                </div>
                <div className={styles.formBoxItem}>
                    <p>Имя отправителя:</p>
                    <input type="text" maxLength="20" onChange={onChangeCustomTextSender}/>
                </div>
                <div className={styles.formBoxItem}>
                    <p>Пожелания:</p>
                    <textarea maxLength="100" onChange={onChangeCustomText}/>
                </div>
            </div>
        </div>
    )
}

export default Form