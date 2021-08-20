import React from 'react';
import Head from 'next/head';

// import styles from '';

export default function template(props) {
    return (
        <>
            <Head>
                <title>Template</title>
                <meta
                    name="description"
                    content="Only learner here. Practice and gain some skill"
                />
            </Head>
            <main>
                <div className={styles['main-container']}></div>
            </main>
        </>
    );
}
