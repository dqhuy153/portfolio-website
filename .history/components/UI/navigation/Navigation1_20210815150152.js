import Link from 'next/link';
import React from 'react';

import styles from './Navigation1.module.scss';

export default function Navigation1({
    //props parameters:

    items = [],
    //props.items = [{ title, link },...]

    logoFontSize = '2.5rem',
    logoFontWeight = 'bold',

    navFontSize = '1.8rem',
    navFontWeight = '400',

    logoColor = '#333',
    navColor = '#333',

    logoHover = {},

    ...props
}) {
    return (
        <nav className={styles['nav__container']}>
            <div
                className={styles['nav__logo']}
                style={{ fontSize: logoFontSize, fontWeight: logoFontWeight }}
            >
                <Link href="/projects/theme">Theme</Link>
            </div>
            <ul className={styles['nav__list']}>
                {items.map((item) => (
                    <li
                        key={item.title}
                        style={{
                            fontSize: navFontSize,
                            fontWeight: navFontWeight,
                        }}
                        className={styles['nav__list--item']}
                    >
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
