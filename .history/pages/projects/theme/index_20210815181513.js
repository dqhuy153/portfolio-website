import Head from 'next/head';
import React, { useEffect } from 'react';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section100vh from '../../../components/UI/section/Section100vh';
import styles from './theme-selector.module.scss';

export default function ThemePage(props) {
    useEffect(() => {
        const element = document.getElementById('projects');

        window.addEventListener('scroll', () => {
            console.log(
                'offsetHeight: ' + element.offsetHeight,
                ' offsetTop: ' +
                    element.offsetTop +
                    ' scrollHeight: ' +
                    element.scrollHeight +
                    ' scrollBottom: ' +
                    element.scrollBottom +
                    ' clientHeight: ' +
                    element.clientHeight +
                    'scrollY' +
                    window.scrollY
            );
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
                <Section100vh id="home" className={styles['section-container']}>
                    <p>Home</p>
                </Section100vh>
                {/* About Section */}
                <Section100vh
                    id="about"
                    className={styles['section-container']}
                >
                    <p>About</p>
                </Section100vh>
                {/* Projects Section */}
                <Section100vh
                    id="projects"
                    className={styles['section-container']}
                >
                    <p>Projects</p>
                </Section100vh>
                {/* Contact Section */}
                <Section100vh
                    id="contact"
                    className={styles['section-container']}
                >
                    <p>Contact</p>
                </Section100vh>
            </main>
        </>
    );
}
