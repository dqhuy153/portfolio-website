import React from 'react';

import styles from './About.module.scss';

export default function About({ id, className, ...props }) {
    return (
        <section id={id} className={`${className} ${styles.container}`}>
            <h1>About</h1>
            <div className={styles.content}>
                <h2>References:</h2>
                <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Design perspective
                </a>
            </div>
        </section>
    );
}
