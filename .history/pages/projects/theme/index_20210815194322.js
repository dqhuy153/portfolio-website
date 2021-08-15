import Head from 'next/head';
import React, { useEffect, useRef } from 'react';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import styles from './theme-selector.module.scss';

export default function ThemePage(props) {
    const homeRef = useRef();
    const aboutRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    const sectionArray = [homeRef, aboutRef, projectRef, contactRef];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            sectionArray.forEach((itemRef, index) => {
                if (
                    window.scrollY >=
                        itemRef.current.offsetHeight * index - 200 &&
                    window.scrollY <=
                        itemRef.current.offsetHeight * (index + 1) - 200
                ) {
                    console.log(itemRef.current.innerText);
                }
            });
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
                <section
                    id="projects"
                    className={styles['section-container']}
                    ref={projectRef}
                >
                    <p>Projects</p>
                </section>
                {/* Contact Section */}
                <section
                    id="contact"
                    className={styles['section-container']}
                    ref={contactRef}
                >
                    <p>Contact</p>
                </section>
            </main>
        </>
    );
}
