import React from 'react';
import styles from './hamburger-menu.module.scss';

export default function HamburgerMenu1({
    className,
    onChange,
    value,
    ...props
}) {
    return (
        <div className={`${className} ${styles['container']}`}>
            <input
                type="checkbox"
                value={value}
                onChange={onChange}
                id="menu_checkbox"
            />
            <label htmlFor="menu_checkbox">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
    );
}