import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import styles from './Motion.module.scss';
import SimpleMotion from '../../../components/motion/SimpleMotion';
import FirstLoading from '../../../components/motion/FirstLoading';

export default function MotionPage(props) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // setIsFirstLoad(false);
    }, []);

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
                    {isFirstLoad && <FirstLoading />}
                    {/* <SimpleMotion /> */}
                </div>
            </main>
        </>
    );
}
