import React from 'react';

import ToggleSelector from '../../../components/UI/checkbox/Toggle-selector';
import styles from './Home.module.scss';

export default function Home({
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
            <p className={styles['home__title']}>Home</p>
            <ToggleSelector
                unCheckedValue="Light"
                checkedValue="Dark"
                onCheckedChange={onModeThemeChange}
                className={styles}
                color={primaryColor}
                bgColor={backgroundColor}
                checked={checked}
            />
        </section>
    );
}
