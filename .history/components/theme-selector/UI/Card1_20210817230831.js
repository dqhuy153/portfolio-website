import React from 'react';
import { IoTrashBin } from 'react-icons/io';

import styles from './Card1.module.scss';

export default function Card1({
    colors,
    id,
    name = 'Name',
    description = 'Description',

    primaryColor,
    secondaryColor,
    backgroundColor,
    linkColor,
    primaryBtnBgColor,
    primaryBtnColor,
    secondaryBtnColor,
    secondaryBtnBgColor,
    boxShadowColor,

    primaryBtn = 'Select theme',
    secondaryBtn = 'Manage theme',
    onPrimaryClick,
    onSecondaryClick,

    ...props
}) {
    return (
        <div
            role="button"
            className={styles.container}
            style={{
                '--primary-color': primaryColor || colors?.primary,
                '--secondary-color': secondaryColor || colors?.secondary,
                '--background-color': backgroundColor || colors?.background,
                '--link-color': linkColor || colors?.link.text,
                '--primary-button-bg-color':
                    primaryBtnBgColor || colors?.buttonPrimary.background,
                '--primary-button-color':
                    primaryBtnColor || colors?.buttonPrimary.text,
                '--secondary-button-bg-color':
                    secondaryBtnBgColor || colors?.buttonSecondary.background,
                '--secondary-button-color':
                    secondaryBtnColor || colors?.buttonSecondary.text,
                '--box-shadow-color': boxShadowColor
                    ? boxShadowColor
                    : colors?.boxShadow?.rgba
                    ? `rgba(${colors?.boxShadow.rgba.r}, ${colors?.boxShadow.rgba.g}, ${colors?.boxShadow.rgba.b}, ${colors?.boxShadow.rgba.a})`
                    : colors?.boxShadow,
            }}
        >
            <div className={styles['name-desc']}>
                <p className={styles['primary-color']}>{name}</p>
                <p className={styles['secondary-color']}>{description}</p>
            </div>
            <div className={styles['color-detail']}>
                <p>Link</p>
                <p className={styles.link}>
                    {linkColor ? linkColor : colors?.link.text}
                </p>
            </div>
            {primaryBtn && (
                <button
                    className={styles['primary-button']}
                    onClick={onPrimaryClick}
                >
                    {primaryBtn}
                </button>
            )}
            {secondaryBtn && (
                <button
                    className={styles['secondary-button']}
                    onClick={onSecondaryClick}
                >
                    {secondaryBtn}
                </button>
            )}
        </div>
    );
}
