import React from 'react';

import styles from './Card.module.scss';

export default function Card({ colors, id, name, ...props }) {
    return (
        <div
            role="button"
            className={styles.container}
            style={{
                '--primary-color': colors.primary,
                '--secondary-color': colors.secondary,
                '--background-color': colors.background,
                '--link-color': colors.link.text,
                '--primary-button-bg-color': colors.buttonPrimary.background,
                '--primary-button-color': colors.buttonPrimary.text,
            }}
        >
            <p className={styles['primary-color']}>Primary color</p>
            <p className={styles['secondary-color']}>Secondary color</p>
            <p className={styles.link}>link-color.com</p>
            <button className={styles['primary-button']}>Primary button</button>
            <button className={styles['secondary-button']}>
                Secondary button
            </button>
        </div>
    );
}
