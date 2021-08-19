import React from 'react';

import styles from './Backdrop.module.scss';

export default function Backdrop({ className, ...props }) {
    return <div className={`${styles.backdrop} ${className}`}></div>;
}
