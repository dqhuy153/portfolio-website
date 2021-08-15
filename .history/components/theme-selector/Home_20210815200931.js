import React from 'react';

export default function Home({ className, ...props }) {
    return (
        <section
            id="home"
            className={className}
            // ref={homeRef}
        ></section>
    );
}
