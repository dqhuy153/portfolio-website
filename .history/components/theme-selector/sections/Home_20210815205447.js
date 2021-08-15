import React from 'react';

import styles from './Home.module.scss';

export default function Home({
    id,
    className,
    primaryColor,
    secondaryColor,
    background,
    ...props
}) {
    return (
        <section
            id={id}
            className={`${styles['section-container']} ${className}`}
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
