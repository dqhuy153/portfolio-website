import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import styles from './Modal1.module.scss';

//for input inside
export default function Modal1({
    onSubmit,
    onClose,
    onChangeInput,

    submitText = 'OK',
    closeText = 'Close',
    inputLabel = 'Label',
    closeButton = true,
    inputType = 'text',
    placeholderInput,
    contentText = 'content here',

    title = 'Title',
    show,
    ...props
}) {
    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <span className={styles['header-title']}>{title}</span>
                    {closeButton && <RiCloseFill />}
                </div>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {props.children}
                        {contentText}
                        <p>
                            Save custom theme successfully! Your theme will be
                            only available on your device.
                        </p>
                        <p>If you are admin, please enter PIN</p>
                    </div>
                    <div className={styles.input}>
                        <span>{inputLabel}</span>
                        <input
                            type={inputType}
                            placeholder={placeholderInput}
                            onChange={onChangeInput}
                        ></input>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.buttons}>
                        <button
                            className={styles['cancel-btn']}
                            onClick={onClose}
                        >
                            {closeText}
                        </button>
                        <button
                            className={styles['submit-btn']}
                            onClick={onSubmit}
                        >
                            {submitText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
