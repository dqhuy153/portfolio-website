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
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles['header-title']}>{title}</span>
            </div>
        </div>
    );
}
