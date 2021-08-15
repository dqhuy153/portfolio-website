import Link from 'next/link';
import React from 'react';

import styles from './Navigation1.module.scss';
import ActiveLink from '../link/ActiveLink';

export default function Navigation1({
    //props parameters:

    logo = 'Theme',
    items = [],
    //props.items = [{ title, link },...]

    background = '#fff',
    position = 'initial',

    logoFontSize = '2.5rem',
    logoFontWeight = 'bold',

    navFontSize = '1.8rem',
    navFontWeight = '500',

    logoColor = '#333',
    navColor = '#333',

    logoHoverColor = null,
    navHoverColor = 'rgb(23, 113, 187)',

    navActiveColor = 'rgb(23, 113, 187)',

    ...props
}) {
    return (
        <nav
            className={styles['nav__container']}
            style={{
                '--nav-background': background,
                '--nav-position': position,
            }}
        >
            {/* dynamic style for .active here */}
            <style jsx>{`
                .active {
                    color: ${navActiveColor};
                }
            `}</style>

            {/* logo */}
            <div
                className={styles['nav__logo']}
                style={{
                    '--logo-font-size': logoFontSize,
                    '--logo-font-weight': logoFontWeight,
                    '--logo-color': logoColor,
                }}
            >
                <Link href="/projects/theme">{logo}</Link>
            </div>

            {/* navigation links */}
            <ul className={styles['nav__list']}>
                {/* nav item */}
                {items.map((item) => (
                    <li
                        key={item.title}
                        style={{
                            '--nav-font-size': navFontSize,
                            '--nav-font-weight': navFontWeight,
                            '--nav-color': navColor,
                            '--nav-hover-color': navHoverColor,
                        }}
                        className={styles['nav__list--item']}
                    >
                        {/* Custom active link */}
                        <ActiveLink
                            href={/projects/theme${item.link}}
                            activeClassName="active"
                            as={`/projects/theme${item.link}`}
                        >
                            <a>{item.title}</a>
                        </ActiveLink>
                        {/* <a href={`${item.link}`}>{item.title}</a> */}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
