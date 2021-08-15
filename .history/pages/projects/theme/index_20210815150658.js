import Head from 'next/head';
import React from 'react';
import Navigation1 from '../../../components/UI/navigation/Navigation1';

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
                        { title: 'Home', link: '#home', active: true },
                        { title: 'About', link: '#about' },
                        { title: 'Projects', link: '#projects' },
                        { title: 'Contact', link: '#contact' },
                    ]}
                />
                {/* Home Section */}

                {/* About Section */}

                {/* Projects Section */}

                {/* Contact Section */}
            </main>
        </>
    );
}
