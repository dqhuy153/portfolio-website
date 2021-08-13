import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles['home-container']}>
                <Link href="/projects/quote-generator">Quote generator</Link>
                <Link href="/projects/infinite-scroll">Infinite scroll</Link>
            </main>

            <footer></footer>
        </div>
    );
}
