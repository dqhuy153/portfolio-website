import React from 'react';
import { ColorPicker } from './UI/ColorPicker';

import styles from './ManageTheme.module.scss';

export default function ManageTheme({ id, className, ...props }) {
    const handleChangePrimaryColor = (color) => {
        console.log(color);
    };
    const handleChangeSecondaryColor = (color) => {
        console.log(color);
    };
    const handleChangeBackgroundColor = (color) => {
        console.log(color);
    };
    const handleChangeLinkColor = (color) => {
        console.log(color);
    };

    const handleChangePrimaryButtonColor = (color) => {
        console.log(color);
    };
    const handleChangePrimaryButtonBackgroundColor = (color) => {
        console.log(color);
        // };const handleChange = (color) => {
        //     console.log(color);
        // };
        // const handleChangeLinkColor = (color) => {
        //     console.log(color);
        // };
    };
    return (
        <section id={id} className={`${className} ${styles.container}`}>
            {/* title */}
            <h1>Manage theme</h1>
            <div className={styles['add-container']}>
                <p>Custom your theme</p>
                <div className={styles['add-content']}>
                    <div className={styles['add-row']}>
                        <span>Primary color</span>
                        <ColorPicker onChange={handleChangePrimaryColor} />
                    </div>
                    <div className={styles['add-row']}>
                        <span>Secondary color</span>
                        <ColorPicker onChange={handleChangeSecondaryColor} />
                    </div>
                    <div className={styles['add-row']}>
                        <span>Background color</span>
                        <ColorPicker onChange={handleChangeBackgroundColor} />
                    </div>
                    <div className={styles['add-row']}>
                        <span>Link color</span>
                        <ColorPicker onChange={handleChangeLinkColor} />
                    </div>
                    <div className={styles['add-row']}>
                        <span>Primary button color</span>
                        <ColorPicker
                            onChange={handleChangePrimaryButtonColor}
                        />
                    </div>
                    <div className={styles['add-row']}>
                        <span>Primary button background color</span>
                        <ColorPicker
                            onChange={handleChangePrimaryButtonBackgroundColor}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
