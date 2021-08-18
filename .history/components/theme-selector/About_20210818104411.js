import React from 'react';

import styles from './About.module.scss';

export default function About({ id, className, ...props }) {
    return (
        <section id={id} className={`${className} ${styles.container}`}>
            <h1>About</h1>
            <div className={styles.content}>
                <h2>References & materials</h2>
                <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Design perspective
                </a>
                <a
                    href="https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/"
                    target="_blank"
                    rel="noreferrer"
                >
                    useTheme hook
                </a>
                <a
                    href="https://casesandberg.github.io/react-color/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Color picker
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    NextJs
                </a>
            </div>
            <div className={styles.me}>
                <h2>Source code:</h2>
                <a
                    href="https://github.com/dqhuy153"
                    target="_blank"
                    rel="noreferrer"
                >
                    Update soon in GitHub..
                </a>
            </div>
        </section>
    );
}
