import React from 'react';

import styles from './stream-lab.module.scss';

export default function SreamLab(props) {
    return (
        <div className={styles['body-container']}>
            <h1 className={styles['title']}>Stream Lab.</h1>

            <video
                src=""
                id="video"
                height="445"
                width="710"
                className={styles.video}
            ></video>

            <div className={styles['button-container']}>
                <button id="stream" className={styles['btn-stream']}>
                    Stream
                </button>
                <button id="window" className={styles['btn-window']}>
                    Window
                </button>
            </div>
        </div>
    );
}
