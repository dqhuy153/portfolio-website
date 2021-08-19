import React, { useEffect } from 'react';

import ToggleSelector from '../UI/checkbox/Toggle-selector';
import styles from './DarkModeSection.module.scss';

export default function DarkModeSection({
    id,
    className,
    onModeThemeChange,
    primaryColor,
    backgroundColor,
    checked,
    ...props
}) {
    return (
        <section
            id={id}
            className={`${className} ${styles['section-container']}`}
        >
            <h1
                className={styles['home__title']}
                data-aos="fade"
                data-aos-delay="300"
            >
                Mode
            </h1>
            <ToggleSelector
                unCheckedValue="Light"
                checkedValue="Dark"
                onCheckedChange={onModeThemeChange}
                className={styles}
                color={primaryColor}
                bgColor={backgroundColor}
                checked={checked}
                data-aos="fade"
                data-aos-delay="400"
            />
            <div className={styles['home__body']}>
                <p data-aos="fade-in" data-aos-delay="500">
                    Manage theme, design your custom theme and apply your theme
                    to all pages. All references and materials are in About
                    section. Feel free to creative and have some fun!
                </p>
            </div>
        </section>
    );
}
