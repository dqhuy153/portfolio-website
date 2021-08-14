import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from './story-teller.module.scss';
import ToggleSelector from '../../../components/UI/checkbox/toggle-selector';

export default function Index(props) {
    const audioRef = useRef();
    const [isMusicMode, setIsMusicMode] = useState(true);

    //fix bug UI (small blank at end of page)
    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
    }, []);

    const handleCheckedChange = (event) => {
        if (!event.target.checked) {
            //checked = false => music mode
            setIsMusicMode(true);
        } else {
            setIsMusicMode(false);
        }
    };

    return (
        <>
            <Head>
                <title>Story & Music.</title>
                <meta name="description" content="Stream lab." />
            </Head>
            <main className={styles['stories-teller-container']}>
                <Image
                    src="/images/story-teller/bg-joke-teller.webp"
                    alt="bg-page"
                    layout="fill"
                    objectFit="cover"
                />

                <button className={styles['stories-btn']} id="stories-btn">
                    Click
                </button>

                <nav className={styles['nav-container']}>
                    <ul className={styles['links']}>
                        <li className={styles['logo']}>Stories teller.</li>
                        <li className={styles['link']}>
                            <a>Upload your story</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles['content']}>
                    <h3>Stories Music Everything for you...</h3>

                    <div className={styles['player-container']}>
                        <ToggleSelector
                            checkedValue="Story"
                            unCheckedValue="Music"
                            onCheckedChange={handleCheckedChange}
                        />
                        <audio ref={audioRef} controls></audio>
                    </div>
                </div>
            </main>
        </>
    );
}
