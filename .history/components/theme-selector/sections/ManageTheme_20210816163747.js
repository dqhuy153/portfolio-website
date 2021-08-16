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
        setPrimaryColor(color.hex);
    };
    const handleChangeSecondaryColor = (color) => {
        setSecondaryColor(color.hex);
    };
    const handleChangeBackgroundColor = (color) => {
        setBackgroundColor(color.hex);
    };
    const handleChangeLinkColor = (color) => {
        setLinkColor(color.hex);
    };
    const handleChangePrimaryButtonColor = (color) => {
        setPrimaryButtonColor(color.hex);
    };
    const handleChangePrimaryButtonBgColor = (color) => {
        setPrimaryButtonBgColor(color.hex);
    };
    const handleChangeSecondaryButtonColor = (color) => {
        setSecondaryButtonColor(color.hex);
    };
    const handleChangeSecondaryButtonBgColor = (color) => {
        setSecondaryButtonBgColor(color.hex);
    };
    const handleChangeBoxShadowColor = (color) => {
        setBoxShadowColor(color.hex);
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
                            <ColorPicker
                                value={primaryColor}
                                onChange={handleChangePrimaryColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary</span>
                            <ColorPicker
                                value={secondaryColor}
                                onChange={handleChangeSecondaryColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Background</span>
                            <ColorPicker
                                value={backgroundColor}
                                onChange={handleChangeBackgroundColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Link color</span>
                            <ColorPicker
                                value={linkColor}
                                onChange={handleChangeLinkColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button</span>
                            <ColorPicker
                                value={primaryButtonColor}
                                onChange={handleChangePrimaryButtonColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button background</span>
                            <ColorPicker
                                value={primaryButtonBgColor}
                                onChange={handleChangePrimaryButtonBgColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button</span>
                            <ColorPicker
                                value={secondaryButtonColor}
                                onChange={handleChangeSecondaryButtonColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button background</span>
                            <ColorPicker
                                value={secondaryButtonBgColor}
                                onChange={handleChangeSecondaryButtonBgColor}
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Box shadow</span>
                            <ColorPicker
                                value={boxShadowColor}
                                onChange={handleChangeBoxShadowColor}
                            />
                        </div>
                    </div>
                    <div className={styles['add-content_right']}>
                        <Card
                            name="Awesome theme"
                            primaryColor={primaryColor}
                            secondaryColor={secondaryColor}
                            backgroundColor={backgroundColor}
                            linkColor={linkColor}
                            primaryBtnColor={primaryButtonColor}
                            primaryBtnBgColor={primaryButtonBgColor}
                            secondaryBtnColor={secondaryButtonColor}
                            secondaryBtnBgColor={secondaryButtonBgColor}
                            boxShadowColor={boxShadowColor}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
