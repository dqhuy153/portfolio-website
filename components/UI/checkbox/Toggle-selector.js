import Aos from 'aos';
import React from 'react';

import styles from './Toggle-selector.module.scss';

export default function ToggleSelector({
    unCheckedValue,
    checkedValue,
    onCheckedChange,
    color = '#333',
    bgColor = '#fff',
    checked,
    dataAos,
    dataAosDelay,
    dataAosDuration,
    ...props
}) {
    return (
        <div
            className={`
                ${styles['toggle-container']} ${props.className?.['toggle-container']}
            `}
            style={{
                '--toggle-selector-color': color,
                '--toggle-selector-bg-color': bgColor,
            }}
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
            data-aos-duration={dataAosDuration}
        >
            <span>{unCheckedValue}</span>
            <div
                className={`
                    ${styles['toggle-checkbox']} ${props.className?.['toggle-checkbox']}
                `}
            >
                <input
                    type="checkbox"
                    id="player-type"
                    onChange={onCheckedChange}
                    name="player-type"
                    checked={checked}
                />
                <label htmlFor="player-type"></label>
            </div>
            <span>{checkedValue}</span>
        </div>
    );
}
