import React from 'react';

import styles from './About.module.scss';

export default function About({ id, className, ...props }) {
    return (
        <section id={id} className={`${className} ${styles.container}`}>
            <h1>About</h1>
        </section>
    );
}
