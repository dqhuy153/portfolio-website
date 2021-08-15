import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import About from '../../../components/theme-selector/sections/About';
import Contact from '../../../components/theme-selector/sections/Contact';
import Home from '../../../components/theme-selector/sections/Home';
import Projects from '../../../components/theme-selector/sections/Projects';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import styles from './theme-selector.module.scss';

export default function ThemePage(props) {
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

    const [themeMode, setThemeMode] = useState();

    return (
        <>
            <Head>
                <title>Theme</title>
                <meta name="description" content="Theme selector." />
            </Head>
            <main>
                {/* Navigation */}
                <Navigation1
                    items={[
                        { title: 'Home', link: '#home' },
                        { title: 'About', link: '#about' },
                        { title: 'Projects', link: '#projects' },
                        { title: 'Contact', link: '#contact' },
                    ]}
                    position="fixed"
                    background="#fff"
                />
                {/* Home Section */}
                <Home
                    id="home"
                    className={styles['section-container']}
                    primaryColor="#333"
                    background="#fff"
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
            </main>
        </>
    );
}
