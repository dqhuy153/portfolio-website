import React, { useState } from 'react';
import { ColorPicker } from './UI/ColorPicker';

import styles from './ManageTheme.module.scss';
import Card from './UI/Card';

export default function ManageTheme({ id, className, ...props }) {
    const [primary, setPrimary] = useState();

    const handleChangePrimaryColor = (color) => {
        setPrimary(color);
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
    const handleChangePrimaryButtonBgColor = (color) => {
        console.log(color);
    };
    const handleChangeSecondaryButtonColor = (color) => {
        console.log(color);
    };
    const handleChangeSecondaryButtonBgColor = (color) => {
        console.log(color);
    };
    const handleChangeBoxShadowColor = (color) => {
        console.log(color);
    };

    return (
        <section id={id} className={`${className} ${styles.container}`}>
            {/* title */}
            <h1>Manage theme</h1>
            <div className={styles['add-container']}>
                <h2>Custom your theme</h2>
                <div className={styles['add-content']}>
                    <div className={styles['add-content_left']}>
                        <div className={styles['add-row']}>
                            <span>Primary</span>
                            <ColorPicker onChange={handleChangePrimaryColor} />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary</span>
                            <ColorPicker
                                onChange={handleChangeSecondaryColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Background</span>
                            <ColorPicker
                                onChange={handleChangeBackgroundColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Link color</span>
                            <ColorPicker onChange={handleChangeLinkColor} />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button</span>
                            <ColorPicker
                                onChange={handleChangePrimaryButtonColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button background</span>
                            <ColorPicker
                                onChange={handleChangePrimaryButtonBgColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button</span>
                            <ColorPicker
                                onChange={handleChangeSecondaryButtonColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button background</span>
                            <ColorPicker
                                onChange={handleChangeSecondaryButtonBgColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Box shadow</span>
                            <ColorPicker
                                onChange={handleChangeBoxShadowColor}
                            />
                        </div>
                    </div>
                    <div className={styles['add-content_right']}>
                        <Card name="Awesome theme" />
                    </div>
                </div>
            </div>
        </section>
    );
}
