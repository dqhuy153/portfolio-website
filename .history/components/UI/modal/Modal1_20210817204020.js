import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import styles from './Modal1.module.scss';

//for input inside
export default function Modal1({
    onPrimaryBtnClick,
    onSecondaryBtnClick,
    onChangeInput,

    primaryText = 'OK',
    secondaryText = 'Close',
    inputLabel = 'Label',
    closeButton = true,
    inputType = 'text',
    placeholderInput,
    contentText,
    title = 'Title',
    maxLengthInput,
    maxInput,
    minInput,
    minLengthInput,

    show = false,
    inputMode = false,

    ...props
}) {
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles['header-title']}>{title}</span>
                    {closeButton && (
                        <RiCloseFill
                            className={styles['close-btn']}
                            onClick={onClose}
                        />
                    )}
                </div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {props.children}
                        {contentText}
                    </div>
                    {inputMode && (
                        <div className={styles.input}>
                            <span>{inputLabel}</span>
                            <input
                                type={inputType}
                                placeholder={placeholderInput}
                                onChange={onChangeInput}
                                maxLength={maxLengthInput}
                                max={maxInput}
                                min={minInput}
                                minLength={minLengthInput}
                            ></input>
                        </div>
                    )}
                </div>
                <div className={styles.footer}>
                    <div className={styles.buttons}>
                        <button
                            className={styles['secondary-btn']}
                            onClick={onSecondaryBtnClick}
                        >
                            {secondaryText}
                        </button>
                        <button
                            className={styles['primary-btn']}
                            onClick={onPrimaryBtnClick}
                        >
                            {primaryText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
