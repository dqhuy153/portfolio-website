import React from 'react';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    mediaComponent,
    mediaWidth,
    contentWidth,
    ...props
}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>{mediaComponent}</div>
        </div>
    );
}
