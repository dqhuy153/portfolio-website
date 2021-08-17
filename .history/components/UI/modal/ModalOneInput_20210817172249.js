import React from 'react';

import styles from './ModalOneInput.module.scss';

export default function Modaloneinput({
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
                    <p>
                        Save custom theme successfully! Your theme will be only
                        available on your device.
                    </p>
                    <p>If you are admin, please enter PIN</p>
                </div>
            </div>
        </>
    );
}
