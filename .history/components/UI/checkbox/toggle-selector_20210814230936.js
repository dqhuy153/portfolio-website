import React from 'react';

import styles from './Toggle-selector.module.scss';

export default function ToggleSelector({
    unCheckedValue,
    checkedValue,
    onCheckedChange,
    ...props
}) {
    return (
        <div
            className={[
                styles['toggle-container'],
                props.className['toggle-container'],
            ]}
        >
            <span>{unCheckedValue}</span>
            <div
                className={[
                    styles['toggle-checkbox'],
                    props.className['toggle-checkbox'],
                ]}
            >
                <input
                    type="checkbox"
                    id="player-type"
                    onChange={onCheckedChange}
                    name="player-type"
                />
                <label htmlFor="player-type"></label>
            </div>
            <span>{checkedValue}</span>
        </div>
    );
}
