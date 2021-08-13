import React from 'react';

import styles from './stream-lab.module.scss';

export default function SreamLab(props) {
    return (
        <div className={styles['body-container']}>
            <h1 className={styles.title}>Stream Lab.</h1>

            <video
                src=""
                height="445"
                width="710"
                className={styles.video}
            ></video>

            <div className={styles['button-container']}>
                <button
                    onClick={streamHandler}
                    className={styles['btn-stream']}
                >
                    Stream
                </button>
                <button
                    onClick={windowHandler}
                    className={styles['btn-window']}
                >
                    Window
                </button>
            </div>
        </div>
    );
}
