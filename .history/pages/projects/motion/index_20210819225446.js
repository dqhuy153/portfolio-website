import React from 'react';
import Head from 'next/head';

import styles from './Motion.module.scss';
import SimpleMotion from '../../../components/motion/SimpleMotion';

export default function MotionPage(props) {
    return (
        <>
            <Head>
                <title>Motion - Animation</title>
                <meta
                    name="description"
                    content="Only animation here. Practice and gain some skill"
                />
            </Head>
            <main>
                <div className={styles['main-container']}>
                    <SimpleMotion />
                </div>
            </main>
        </>
    );
}
