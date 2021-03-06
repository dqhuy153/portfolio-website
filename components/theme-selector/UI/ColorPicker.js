//src: https://github.com/casesandberg/react-color/issues/743#issuecomment-672249452

import { useState } from 'react';
import { SketchPicker } from 'react-color';

import styles from './ColorPicker.module.scss';

export const ColorPicker = ({ onChange, value, disableAlpha, ...props }) => {
    const [state, setState] = useState({
        displayColorPicker: false,
        // color: {
        //     r: '241',
        //     g: '112',
        //     b: '19',
        //     a: '1',
        // },
    });

    const handleClick = () => {
        setState({ ...state, displayColorPicker: !state.displayColorPicker });
    };

    const handleClose = () => {
        setState({ ...state, displayColorPicker: false });
    };

    const handleChange = (color) => {
        onChange(color);
        // setState({ ...state, color: color.rgb });
    };

    return (
        <div>
            <div className={styles.swatch} onClick={handleClick}>
                <div
                    className={styles.color}
                    style={{
                        background: value?.rgba
                            ? `rgba(${value.rgba.r}, ${value.rgba.g}, ${value.rgba.b}, ${value.rgba.a})`
                            : value,
                    }}
                />
            </div>
            {state.displayColorPicker ? (
                <div className={styles.popover}>
                    <div className={styles.cover} onClick={handleClose} />
                    <SketchPicker
                        color={value?.rgba ? value.rgba : value}
                        onChange={handleChange}
                        width={250}
                        disableAlpha={disableAlpha}
                    />
                </div>
            ) : null}
        </div>
    );
};
