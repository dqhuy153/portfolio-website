import React from 'react';
import { ColorPicker } from './UI/ColorPicker';

import styles from './ManageTheme.module.scss';

export default function ManageTheme({ id, className, ...props }) {
    const handleChange = (color) => {
        console.log(color);
    };

    return (
        <section id={id} className={`${className} ${styles.container}`}>
            {/* title */}
            <h1>Manage theme</h1>
            <div className={styles['add-container']}>
                <p>Custom your theme</p>
            </div>

            <ColorPicker onChange={handleChange} />
        </section>
    );
}
