import Head from 'next/head';
import React from 'react';
import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section100vh from '../../../components/UI/section/Section100vh';

export default function ThemePage(props) {
    return (
        <>
            <Head>
                <title>Theme</title>
                <meta name="description" content="Theme selector." />
            </Head>
            <main style={{ height: '200vh', background: '#eee' }}>
                {/* Navigation */}
                <Navigation1
                    items={[
                        { title: 'Home', link: '#home' },
                        { title: 'About', link: '#about' },
                        { title: 'Projects', link: '#projects' },
                        { title: 'Contact', link: '#contact' },
                    ]}
                    position="fixed"
                    background="transparent"
                />
                {/* Home Section */}
                <Section100vh id="#home">
                    <section></section>
                    <p>Home</p>
                </Section100vh>
                {/* About Section */}
                <Section100vh itemID="#about">
                    <p>about</p>
                </Section100vh>
                {/* Projects Section */}
                <Section100vh id="#projects">
                    <p>projects</p>
                </Section100vh>
                {/* Contact Section */}
                <Section100vh id="#contact">
                    <p>contact</p>
                </Section100vh>
            </main>
        </>
    );
}
