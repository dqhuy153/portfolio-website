import React, { useState } from 'react';
import { ColorPicker } from './UI/ColorPicker';

import styles from './ManageTheme.module.scss';
import Card from './UI/Card';

export default function ManageTheme({ id, className, ...props }) {
    const [primaryColor, setPrimaryColor] = useState();
    const [secondaryColor, setSecondaryColor] = useState();
    const [backgroundColor, setBackgroundColor] = useState();
    const [linkColor, setLinkColor] = useState();
    const [primaryButtonColor, setPrimaryButtonColor] = useState();
    const [primaryButtonBgColor, setPrimaryButtonBgColor] = useState();
    const [secondaryButtonColor, setSecondaryButtonColor] = useState();
    const [secondaryButtonBgColor, setSecondaryButtonBgColor] = useState();
    const [boxShadowColor, setBoxShadowColor] = useState();

    const handleChangePrimaryColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeSecondaryColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeBackgroundColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeLinkColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangePrimaryButtonColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangePrimaryButtonBgColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeSecondaryButtonColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeSecondaryButtonBgColor = (color) => {
        setPrimary(color.hex);
    };
    const handleChangeBoxShadowColor = (color) => {
        setPrimary(color.hex);
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
