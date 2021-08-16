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
                '--secondary-button-bg-color':
                    colors.buttonSecondary.background,
                '--secondary-button-color': colors.buttonSecondary.text,
                '--box-shadow-color': colors.boxShadow,
            }}
        >
            <p className={styles['primary-color']}>{name}</p>
            <p className={styles['secondary-color']}>Description</p>
            <p className={styles.link}>link-color.com</p>
            <button className={styles['primary-button']}>Primary button</button>
            <button className={styles['secondary-button']}>
                Secondary button
            </button>
        </div>
    );
}
