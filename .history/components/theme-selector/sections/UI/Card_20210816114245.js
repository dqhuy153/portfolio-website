import React from 'react';

import styles from './Card.module.scss';

export default function Card(props) {
    return (
        <div role="button" className={styles.container}>
            <p className={styles['primary-color']}>Primary color</p>
            <p className={styles['secondary-color']}>Secondary color</p>
            <p className={styles.link}>link-color</p>
            <button className={styles['primary-button']}>Primary button</button>
            <button className={styles['secondary-button']}>
                Secondary button
            </button>
        </div>
    );
}
