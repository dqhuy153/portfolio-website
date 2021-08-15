import Head from 'next/head';
import React, { useEffect, useRef } from 'react';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section100vh from '../../../components/UI/section/Section100vh';
import styles from './theme-selector.module.scss';

export default function ThemePage(props) {
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        // const element = document.getElementById('contact');

        window.addEventListener('scroll', () => {
            // console.log(
            //     'offsetHeight: ' + element.offsetHeight,
            //     ' offsetTop: ' +
            //         element.offsetTop +
            //         ' scrollHeight: ' +
            //         element.scrollHeight +
            //         ' clientHeight: ' +
            //         element.clientHeight +
            //         'scrollY ' +
            //         window.scrollY
            // );

            console.log(window.screenY, aboutRef.current.offsetHeight);
        });
    });

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
                <section
                    id="home"
                    className={styles['section-container']}
                    ref={homeRef}
                >
                    <p>Home</p>
                </section>
                {/* About Section */}
                <section
                    id="about"
                    className={styles['section-container']}
                    ref={aboutRef}
                >
                    <p>About</p>
                </section>
                {/* Projects Section */}
                <section id="projects" className={styles['section-container']}>
                    <p>Projects</p>
                </section>
                {/* Contact Section */}
                <section id="contact" className={styles['section-container']}>
                    <p>Contact</p>
                </section>
            </main>
        </>
    );
}
