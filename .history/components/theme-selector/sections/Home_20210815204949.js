import React from 'react';

export default function Home({ id, className, primaryColor, secondaryColor, background ...props }) {
    return (
        <section
            id={id}
            className={className}
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
                '--background': background,
            }}
        >
            <p>Home</p>
        </section>
    );
}
