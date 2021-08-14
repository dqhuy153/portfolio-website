import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from './story-teller.module.scss';
import ToggleSelector from '../../../components/UI/checkbox/toggle-selector';
import TextToSpeech from '../../../util/projects/story-teller/voicerss-tts.min';

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

    const handlePlay = async () => {
        //music mode
        if (isMusicMode) {
            const min = 1;
            const max = 2.99;
            const randomNum = Math.floor(Math.random() * (max - min) + min);

            audioRef.current.src = `/audios/story-teller/music${randomNum}.mp3`;

            audioRef.current.play();
        }
        //story mode
        else {
            let story = '';

            //fetch story
            const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Fetch failed');
                }

                const storyData = await response.json();

                if (storyData.type === 'single') {
                    story = storyData.joke;
                }
                if (storyData.type === 'twopart') {
                    story = `${storyData.setup} ... ${storyData.delivery}`;
                }

                //Translate text to speech
                TextToSpeech(story, (speechAudio) => {
                    audioRef.current.src = speechAudio;
                    audioRef.current.play();
                });

                //disablePlayButton();
            } catch (error) {
                console.log(error.message);
                alert(`Something goes wrong! [message: ${error.message}]`);
            }
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

                <button className={styles['stories-btn']} onClick={handlePlay}>
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
