import React, { useRef, useState } from 'react';

import styles from './stream-lab.module.scss';

export default function SreamLab(props) {
    const [srcObject, setSrcObject] = useState(null);

    const videoRef = useRef();

    const streamHandler = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia();
            //videoRef.current.srcObject = mediaStream;
            setSrcObject(mediaStream);
        } catch (error) {
            alert(error.message);
        }
    };

    const windowHandler = async () => {
        await videoRef.current.requestPictureInPicture();
    };

    return (
        <div className={styles['body-container']}>
            <h1 className={styles.title}>Stream Lab.</h1>

            <video
                src=""
                height="445"
                width="710"
                className={styles.video}
                ref={videoRef}
                srcObject={srcObject}
                onLoadedMetadata={() => videoRef.current.play()}
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
