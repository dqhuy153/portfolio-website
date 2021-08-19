import React from 'react';

import styles from './Backdrop.module.scss';

export default function Backdrop({ className, onClick, ...props }) {
    return (
        <div
            onClick={onClick}
            className={`${styles.backdrop} ${className}`}
        ></div>
    );
}
