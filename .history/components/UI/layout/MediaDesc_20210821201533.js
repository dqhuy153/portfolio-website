import React from 'react';

import styles from './MediaDesc.module.scss'

export default function MediaDesc({src, ...props}) {
    return (
        <div className={styles.container}>
            <div className="image">
            <Image src={src}
        </div>
    </div>

    )
}
