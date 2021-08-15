import Link from 'next/link';
import React from 'react';

import styles from './Navigation1.module.scss';
import ActiveLink from '../link/ActiveLink';

export default function Navigation1({
    //props parameters:

    items = [],
    //props.items = [{ title, link },...]

    logoFontSize = '2.5rem',
    logoFontWeight = 'bold',

    navFontSize = '1.8rem',
    navFontWeight = '500',

    logoColor = '#333',
    navColor = '#333',

    logoHoverColor = null,
    navHoverStylesColor: navHoverColor = 'rgb(23, 113, 187)',

    navActiveColor = 'rgb(23, 113, 187)',

    ...props
}) {
    return (
        <nav className={styles['nav__container']}>
            {/* dynamic style here */}
            <style jsx>{`
                .active {
                    color: ${navActiveColor};
                }
                .nav__list--item {
                    fontSize: ${navFontSize},
                    fontWeight: ${navFontWeight},
                    color: ${navColor},
                } 
                .nav__list--item:hover {
                    color: ${navHoverColor};
                }
            `}</style>

            {/* logo */}
            <div
                className={styles['nav__logo']}
                style={{
                    fontSize: logoFontSize,
                    fontWeight: logoFontWeight,
                    color: logoColor,
                }}
            >
                <Link href="/projects/theme">Theme</Link>
            </div>

            {/* navigation links */}
            <ul className={styles['nav__list']}>
                {items.map((item) => (
                    <li
                        key={item.title}
                        // style={{
                        //     fontSize: navFontSize,
                        //     fontWeight: navFontWeight,
                        //     color: navColor,
                        // }}
                        className={`${styles['nav__list--item']} nav__list--item`}
                    >
                        <ActiveLink
                            href={item.link}
                            activeClassName="active"
                            as={`/project/theme${item.link}`}
                        >
                            <a>{item.title}</a>
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
