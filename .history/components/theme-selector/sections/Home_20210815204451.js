import React from 'react';

export default function Home({ id, className, ...props }) {
    return (
        <section id={id} className={className}>
            <h1>Home</h1>
        </section>
    );
}
