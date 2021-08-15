import Link from 'next/link';
import React from 'react';

import styles from './Navigation1.module.scss';

export default function Navigation1({ items = [], ...props }) {
    //props parameters:
    //props.items = [{ title, link },...]

    return (
        <nav className={styles['nav__container']}>
            <Link href="/projects/theme" style={{fontSize: 2rem}}>Theme</Link>
            <ul className={styles['nav__list']}>
                {items.map((item) => (
                    <li key={item.title} style={{fontSize: '2rem'}} className={styles['nav__list--item']}>
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
