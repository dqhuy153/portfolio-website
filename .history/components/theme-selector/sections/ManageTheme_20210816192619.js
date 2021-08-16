import React, { useState } from 'react';
import { ColorPicker } from './UI/ColorPicker';

import styles from './ManageTheme.module.scss';
import Card from './UI/Card';

export default function ManageTheme({ id, className, ...props }) {
    const [primaryColor, setPrimaryColor] = useState('#A1F0FF');
    const [secondaryColor, setSecondaryColor] = useState('#D3F7FF');
    const [backgroundColor, setBackgroundColor] = useState('#060030');
    const [linkColor, setLinkColor] = useState('#fff');
    const [primaryButtonColor, setPrimaryButtonColor] = useState('#1C2B4D');
    const [primaryButtonBgColor, setPrimaryButtonBgColor] = useState('#EBE8FF');
    const [secondaryButtonColor, setSecondaryButtonColor] = useState('#EBE8FF');
    const [secondaryButtonBgColor, setSecondaryButtonBgColor] =
        useState('#4D1AFF');
    const [boxShadowColor, setBoxShadowColor] = useState({
        rgba: {
            r: 118,
            g: 95,
            b: 231,
            a: 0.51,
        },
    });

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
        setBoxShadowColor({
            rgba: {
                r: color.rgb.r,
                g: color.rgb.g,
                b: color.rgb.b,
                a: color.rgb.a,
            },
        });
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
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary</span>
                            <ColorPicker
                                value={secondaryColor}
                                onChange={handleChangeSecondaryColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Background</span>
                            <ColorPicker
                                value={backgroundColor}
                                onChange={handleChangeBackgroundColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Link color</span>
                            <ColorPicker
                                value={linkColor}
                                onChange={handleChangeLinkColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button</span>
                            <ColorPicker
                                value={primaryButtonColor}
                                onChange={handleChangePrimaryButtonColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Primary button background</span>
                            <ColorPicker
                                value={primaryButtonBgColor}
                                onChange={handleChangePrimaryButtonBgColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button</span>
                            <ColorPicker
                                value={secondaryButtonColor}
                                onChange={handleChangeSecondaryButtonColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>Secondary button background</span>
                            <ColorPicker
                                value={secondaryButtonBgColor}
                                onChange={handleChangeSecondaryButtonBgColor}
                                disableAlpha
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
                            boxShadowColor={`rgba(${boxShadowColor?.rgba.r}, ${boxShadowColor?.rgba.g}, ${boxShadowColor?.rgba.b},${boxShadowColor?.rgba.a})`}
                            primaryBtn="Primary button"
                            secondaryBtn="Secondary button"
                        />

                        <div className={styles['add-theme_form']}>
                            <div className="add-theme-form-row">
                                <span>Name: </span>
                                <input type="text" placeholder="Name"></input>
                            </div>
                            <div className="add-theme-form-row">
                                <span>Description: </span>
                                <input
                                    type="text"
                                    placeholder="Description"
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
