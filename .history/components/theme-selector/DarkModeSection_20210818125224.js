import React from 'react';

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
            <h1 className={styles['home__title']}>Mode</h1>
            <ToggleSelector
                unCheckedValue="Light"
                checkedValue="Dark"
                onCheckedChange={onModeThemeChange}
                className={styles}
                color={primaryColor}
                bgColor={backgroundColor}
                checked={checked}
            />
            <div className={styles['home__body']}>
                <p>
                    Manage theme, design your custom theme,... and totally can
                    apply your theme to all pages. We lives where design,
                    technology, and experience collide. Just try it and feel.
                </p>
            </div>
        </section>
    );
}
