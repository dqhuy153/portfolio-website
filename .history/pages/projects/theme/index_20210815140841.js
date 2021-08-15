import Head from 'next/head';
import React from 'react';
import Navigation from '../../../components/theme-seclector/Navigation';

export default function ThemePage(props) {
    return (
        <>
            <Head>
                <title>Theme</title>
                <meta name="description" content="Theme selector." />
            </Head>
            <main>
                {/* Navigation */}
                <Navigation />
                {/* Home Section */}

                {/* About Section */}

                {/* Projects Section */}

                {/* Contact Section */}
            </main>
        </>
    );
}
