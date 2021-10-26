import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>huyy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['home-container']}>
        <h1>huyy.</h1>

        <Link href="/projects/quote-generator">Quote generator</Link>
        <Link href="https://react-timer-delta.vercel.app/">Basic timer</Link>
        <Link href="/projects/infinite-scroll">Infinite scroll</Link>
        <Link href="/projects/stream-lab">Stream lab</Link>
        <Link href="/projects/story-teller">Story teller</Link>
        <Link href="https://todo-list-nine-sandy.vercel.app/">
          Advanced TodoList - Random account to login
        </Link>
        <Link href="/projects/theme">Theme selector</Link>
        <Link href="/projects/motion">Motion - Animation</Link>
      </main>

      <footer></footer>
    </div>
  );
}
