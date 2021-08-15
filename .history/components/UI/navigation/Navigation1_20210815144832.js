import Link from 'next/link';
import React from 'react';

import styles from './Navigation1.module.scss';

export default function Navigation1({ items = [], ...props }) {
    //props parameters:
    //props.items = [{ title, link },...]

    return (
        <nav className={styles['nav__container']}>
            <div
                className={styles['nav__logo']}
                style={{ fontSize: '1.7rem', fontWeight: 'bold' }}
            >
                <Link href="/projects/theme">Theme</Link>
            </div>
            <ul className={styles['nav__list']}>
                {items.map((item) => (
                    <li
                        key={item.title}
                        style={{ fontSize: '1.5rem' }}
                        className={styles['nav__list--item']}
                    >
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
