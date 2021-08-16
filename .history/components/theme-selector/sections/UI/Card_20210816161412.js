import { useRouter } from 'next/router';
import React from 'react';

import styles from './Card.module.scss';

export default function Card({
    colors,
    id,
    name,
    onSelectTheme,

    primaryColor,
    secondaryColor,
    backgroundColor,
    linkColor,
    primaryBtnBgColor,
    primaryBtnColor,
    secondaryBtnColor,
    secondaryBtnBgColor,
    boxShadowColor,

    ...props
}) {
    const router = useRouter();

    const handleGoToManageTheme = () => {
        router.push('/projects/theme#manage-theme');
    };

    return (
        <div
            role="button"
            className={styles.container}
            style={{
                '--primary-color': primaryColor || colors.primary,
                '--secondary-color': secondaryColor || colors.secondary,
                '--background-color': backgroundColor || colors.background,
                '--link-color': linkColor || colors.link.text,
                '--primary-button-bg-color':
                    primaryBtnBgColor || colors.buttonPrimary.background,
                '--primary-button-color':
                    primaryBtnColor || colors.buttonPrimary.text,
                '--secondary-button-bg-color':
                    secondaryBtnBgColor || colors.buttonSecondary.background,
                '--secondary-button-color':
                    secondaryBtnColor || colors.buttonSecondary.text,
                '--box-shadow-color': boxShadowColor || colors.boxShadow,
            }}
        >
            <p className={styles['primary-color']}>{name}</p>
            <p className={styles['secondary-color']}>Description</p>
            <p className={styles.link}>link-color.com</p>
            <button
                className={styles['primary-button']}
                onClick={onSelectTheme}
            >
                Select theme
            </button>
            <button
                className={styles['secondary-button']}
                onClick={handleGoToManageTheme}
            >
                Manage theme
            </button>
        </div>
    );
}
