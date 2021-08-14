import React from 'react';

import styles from './Toggle-selector.module.scss';

export default function ToggleSelector({
    unCheckedValue,
    checkedValue,
    onCheckedChange,
    ...props
}) {
    return (
        <div className={(styles['toggle-container'], props.className)}>
            <span>{unCheckedValue}</span>
            <div className={styles['toggle-checkbox']}>
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
