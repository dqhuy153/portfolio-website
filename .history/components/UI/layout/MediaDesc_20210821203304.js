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
        <div
            className={styles.container}
            style={{
                '--media-width': mediaWidth,
            }}
        >
            <div className={styles.image}>{mediaComponent}</div>
            <div className={styles['content-container']}>{props.children}</div>
        </div>
    );
}
