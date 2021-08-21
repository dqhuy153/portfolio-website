import React from 'react';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    mediaComponent,
    mediaWidth = '50%',
    mediaLeftSide = true, //else will be right side
    contentPositionTop,
    contentPositionBottom,
    contentPositionLeft,
    contentPositionRight,
    contentCenter,

    ...props
}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>{mediaComponent}</div>
        </div>
    );
}
