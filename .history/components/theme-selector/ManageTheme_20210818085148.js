import React, { useState } from 'react';
import { ColorPicker } from './UI/ColorPicker';
import { BsTrash } from 'react-icons/bs';

import styles from './ManageTheme.module.scss';
import Card from './UI/Card';
import Card1 from './UI/Card1';

export default function ManageTheme({
    id,
    className,
    onTryTheme,
    onSaveTheme,
    themes,
    onDeleteTheme,
    ...props
}) {
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

    const [themeName, setThemeName] = useState('Awesome theme');
    const [themeDesc, setThemeDesc] = useState('Description');

    const placeholderTheme = {
        name: themeName,
        description: themeDesc,
        font: '',
        colors: {
            primary: primaryColor,
            secondary: secondaryColor,
            text: primaryColor,
            background: backgroundColor,
            body: backgroundColor,
            buttonPrimary: {
                text: primaryButtonColor,
                background: primaryButtonBgColor,
            },
            buttonSecondary: {
                text: secondaryButtonColor,
                background: secondaryButtonBgColor,
            },
            link: {
                text: linkColor,
                background: backgroundColor,
            },
            boxShadow: boxShadowColor,
        },
    };

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

    const handleChangeThemeName = (event) => {
        setThemeName(event.target.value);
    };

    const handleChangeThemeDesc = (event) => {
        setThemeDesc(event.target.value);
    };

    return (
        <section id={id} className={`${className} ${styles.container}`}>
            {/* title */}
            <h1>Manage theme</h1>
            {/* Custom theme section */}
            <div className={styles['add-container']}>
                <h2>Custom your theme</h2>
                <div className={styles['add-content']}>
                    {/* color picker section */}
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
                            <span>1st button background</span>
                            <ColorPicker
                                value={primaryButtonBgColor}
                                onChange={handleChangePrimaryButtonBgColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>2nd button</span>
                            <ColorPicker
                                value={secondaryButtonColor}
                                onChange={handleChangeSecondaryButtonColor}
                                disableAlpha
                            />
                        </div>
                        <div className={styles['add-row']}>
                            <span>2nd button background</span>
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
                    {/* theme demo section */}
                    <div className={styles['add-content_right']}>
                        <div className={styles['add-theme_form']}>
                            <div className={styles['add-theme-form-row']}>
                                <span>Name: </span>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={themeName}
                                    onChange={handleChangeThemeName}
                                ></input>
                            </div>
                            <div className={styles['add-theme-form-row']}>
                                <span>Description: </span>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={themeDesc}
                                    onChange={handleChangeThemeDesc}
                                ></input>
                            </div>
                        </div>

                        <Card
                            name={themeName}
                            description={themeDesc}
                            primaryColor={primaryColor}
                            secondaryColor={secondaryColor}
                            backgroundColor={backgroundColor}
                            linkColor={linkColor}
                            primaryBtnColor={primaryButtonColor}
                            primaryBtnBgColor={primaryButtonBgColor}
                            secondaryBtnColor={secondaryButtonColor}
                            secondaryBtnBgColor={secondaryButtonBgColor}
                            boxShadowColor={`rgba(${boxShadowColor?.rgba.r}, ${boxShadowColor?.rgba.g}, ${boxShadowColor?.rgba.b},${boxShadowColor?.rgba.a})`}
                            primaryBtn="Try your theme"
                            secondaryBtn="Apply and Save"
                            onPrimaryClick={() => onTryTheme(placeholderTheme)}
                            onSecondaryClick={() =>
                                onSaveTheme(placeholderTheme)
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Themes detail section */}
            <div className={styles['themes-detail']}>
                {/* title */}
                <h2>Themes detail</h2>
                <div className={styles.cards}>
                    {themes.map((theme) => (
                        <Card1
                            key={theme.id}
                            id={theme.id}
                            name={theme.name}
                            description={theme.description}
                            colors={theme.colors}
                            secondaryBtn=""
                            primaryBtn={<BsTrash />}
                            onPrimaryClick={() => onDeleteTheme(theme.id)}
                            // onSecondaryClick={handleGoToManageTheme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
