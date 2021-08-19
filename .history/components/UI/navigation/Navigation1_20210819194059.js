import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';

import styles from './Navigation1.module.scss';
import ActiveLink from '../link/ActiveLink';
import HamburgerMenu1 from '../checkbox/hamburger-menu1';
import { useMediaQuery } from 'react-responsive';
import { set } from 'lodash';

export default function Navigation1({
    //props parameters:

    logo = 'Theme.',
    items = [],
    //props.items = [{ title, link },...]

    background = '#fff',
    position = 'initial',
    boxShadow = null,

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
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    // const menuAnimation = useSpring({
    //     opacity: showMenu ? 1 : 0,
    //     transform: showMenu ? 'translateY(0)' : 'translate(-100%)',
    // });

    const transitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!show),
    });


    //handle open/close menu
    const handleChangeMenu = (event) => {
        if (event.target.checked) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        if (!isMobile) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }, [isMobile]);

    //first load will have no active link
    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    return (
        <nav
            className={styles['nav__container']}
            style={{
                '--nav-background': background,
                '--nav-position': position,
                '--nav-box-shadow': boxShadow,
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

            {/* Hamburger nav menu*/}
            {isMobile && <HamburgerMenu1 onChange={handleChangeMenu} />}

            {/* navigation links */}
            {transitions((style, item) => 
             <animated.ul style={style} className={styles['nav__list']}>
                
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
                        
                        <ActiveLink
                            href={`/projects/theme${item.link}`}
                            activeClassName={isFirstLoad ? '' : 'active'}
                            as={`/projects/theme${item.link}`}
                        >
                            <a>{item.title}</a>
                        </ActiveLink>
                        
                    </li>
                ))}
            </animated.ul>
                )
        </nav>
    );
}
