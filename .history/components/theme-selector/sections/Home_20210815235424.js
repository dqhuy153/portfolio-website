import React from 'react';

import ToggleSelector from '../../../components/UI/checkbox/Toggle-selector';
import styles from './Home.module.scss';

export default function Home({ id, className, onModeThemeChange, ...props }) {
    return (
        <section id={id} className={`${className}`}>
            <p>Home</p>
            <ToggleSelector
                unCheckedValue="Light"
                checkedValue="Dark"
                onCheckedChange={onModeThemeChange}
            />
        </section>
    );
}