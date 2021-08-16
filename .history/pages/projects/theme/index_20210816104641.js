import { set } from 'lodash';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import About from '../../../components/theme-selector/sections/About';
import Contact from '../../../components/theme-selector/sections/Contact';
import Home from '../../../components/theme-selector/sections/Home';
import Projects from '../../../components/theme-selector/sections/Projects';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section from '../../../components/UI/section/Section1';
import useTheme from '../../../hooks/useTheme';

import styles from './theme-selector.module.scss';

export default function ThemePage(props) {
    const { theme, themes, themeLoaded, setThemeMode, getFonts } = useTheme();
    //'T001': light
    //'T002': dark

    //theme structure: (models/themes.json)
    // [
    //     id,
    //     name,
    //     font,
    //     colors: {
    //         background,
    //         body,
    //         button-primary: {
    //             text,
    //             background
    //         },
    //         button-secondary: {
    //             text,
    //             background
    //         },
    //         link: {
    //             text,
    //             background
    //         },
    //         primary,
    //         secondary,
    //         text
    //     }
    // }];

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeModeChange = (e) => {
        if (e.target.checked) {
            setThemeMode('T002');
        } else {
            setThemeMode('T001');
        }
    };

    useEffect(() => {
        const themeId = theme.id;
        if (themeId) {
            if (themeId === 'T001') {
                setIsDarkMode(false);
            }
            if (themeId === 'T002') {
                setIsDarkMode(true);
            }
        }
    }, [theme.id]);

    return (
        <>
            <Head>
                <title>Theme</title>
                <meta name="description" content="Theme selector." />
            </Head>
            <Section
                primaryColor={theme?.colors?.primary}
                background={theme?.colors?.background}
                className={styles['main-body']}
            >
                {/* Navigation */}
                <Navigation1
                    items={[
                        { title: 'Dark mode', link: '#home' },
                        { title: 'Select theme', link: '#about' },
                        { title: 'Projects', link: '#projects' },
                        { title: 'Contact', link: '#contact' },
                    ]}
                    position="fixed"
                    background={theme?.colors?.background}
                    logoColor={theme?.colors?.primary}
                    navColor={theme?.colors?.primary}
                    navActiveColor={theme?.colors?.link.text}
                    navHoverColor={theme?.colors?.link.text}
                    boxShadow="rgba(100, 100, 111, 0.1) 0px 6px 50px 4px"
                />
                {/* Home Section */}
                <Home
                    id="home"
                    className={styles['section-container']}
                    onModeThemeChange={handleThemeModeChange}
                    primaryColor={theme?.colors?.primary}
                    backgroundColor={theme?.colors?.background}
                    checked={isDarkMode}
                ></Home>
                {/* About Section */}
                <About
                    id="about"
                    className={styles['section-container']}
                ></About>
                {/* Projects Section */}
                <Projects
                    id="projects"
                    className={styles['section-container']}
                ></Projects>
                {/* Contact Section */}
                <Contact
                    id="contact"
                    className={styles['section-container']}
                ></Contact>
            </Section>
        </>
    );
}

//try to get active when scrolling

// const homeRef = useRef();
// const aboutRef = useRef();
// const projectRef = useRef();
// const contactRef = useRef();

// let sectionActive = 'home';
// const router = useRouter();

// const sectionArray = [homeRef, aboutRef, projectRef, contactRef];

// useEffect(() => {
//     window.addEventListener('scroll', () => {
//         sectionArray.forEach((itemRef, index) => {
//             if (
//                 window.scrollY >=
//                     itemRef.current.offsetHeight * index - 250 &&
//                 window.scrollY <=
//                     itemRef.current.offsetHeight * (index + 1) - 250
//             ) {
//                 if (sectionActive !== itemRef.current.id) {
//                     router.replace(
//                         `/projects/theme/#${itemRef.current.id}`
//                     );
//                 }
//             }
//         });
//     });
// }, [router]);
