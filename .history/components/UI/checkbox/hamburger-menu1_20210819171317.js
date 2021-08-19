import React from 'react';
import './hamburger-menu.module.scss';

export default function HamburgerMenu1(props) {
    return (
        <div className={styles['nav__menu']}>
            <input type="checkbox" id="menu_checkbox" />
            <label htmlFor="menu_checkbox">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
    );
}
