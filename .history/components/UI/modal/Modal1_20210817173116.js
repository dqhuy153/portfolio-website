import React from 'react';

import styles from './Modal1.module.scss';

//for input inside
export default function Modal1({
    onSubmit,
    onClose,
    onTextChange,

    submitText = 'OK',
    closeText = 'Close',

    title = 'Title',
    show,
    ...props
}) {
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles['header-title']}>{title}</span>
                </div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        <p>
                            Save custom theme successfully! Your theme will be
                            only available on your device.
                        </p>
                        <p>If you are admin, please enter PIN</p>
                    </div>
                    <div className={styles.input}>
                        <span>{inputLabel}</span>
                        <input></input>
                    </div>
                </div>
            </div>
        </>
    );
}
