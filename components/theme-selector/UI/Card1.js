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
            {...props}
        >
            <div className={styles['name-desc']}>
                <p className={styles['primary-color']}>{name}</p>
                {/* <p className={styles['secondary-color']}>{description}</p> */}
            </div>
            <div className={styles.colors}>
                <div className={styles['color-detail']}>
                    <p>Primary</p>
                    <p className={styles.link}>
                        {primaryColor ? primaryColor : colors?.primary}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>Secondary</p>
                    <p className={styles.link}>
                        {secondaryColor ? secondaryColor : colors?.secondary}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>Background</p>
                    <p className={styles.link}>
                        {backgroundColor ? backgroundColor : colors?.background}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>Link</p>
                    <p className={styles.link}>
                        {linkColor ? linkColor : colors?.link.text}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>Button 1</p>
                    <p className={styles.link}>
                        {primaryBtnColor
                            ? primaryBtnColor
                            : colors?.buttonPrimary.text}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>B1 Bg</p>
                    <p className={styles.link}>
                        {primaryBtnBgColor
                            ? primaryBtnBgColor
                            : colors?.buttonPrimary.background}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>Button 2</p>
                    <p className={styles.link}>
                        {secondaryBtn
                            ? secondaryBtn
                            : colors?.buttonSecondary.text}
                    </p>
                </div>
                <div className={styles['color-detail']}>
                    <p>B2 Bg</p>
                    <p className={styles.link}>
                        {secondaryBtnBgColor
                            ? secondaryBtnBgColor
                            : colors?.buttonSecondary.background}
                    </p>
                </div>
            </div>
            <div className={styles['color-detail']}>
                <p>Box shadow</p>
                <p className={styles.link}>
                    {boxShadowColor
                        ? boxShadowColor
                        : colors?.boxShadow?.rgba
                        ? `rgba(${colors?.boxShadow.rgba.r}, ${colors?.boxShadow.rgba.g}, ${colors?.boxShadow.rgba.b}, ${colors?.boxShadow.rgba.a})`
                        : colors?.boxShadow}
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
