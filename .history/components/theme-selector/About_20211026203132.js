import React from 'react';

import styles from './About.module.scss';

export default function About({ id, className, ...props }) {
  return (
    <section id={id} className={`${className} ${styles.container}`}>
      <h1>About</h1>
      <div
        // data-aos="fade"
        // data-aos-duration="100"
        className={styles.content}
      >
        <h2>References and Materials</h2>
        <a
          href="https://github.com/michalsnik/aos/tree/v2"
          target="_blank"
          rel="noreferrer"
        >
          Animation on scroll (AOS)
        </a>
        <a
          href="https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/"
          target="_blank"
          rel="noreferrer"
        >
          NextJs with Mongodb
        </a>
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
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
      </div>
      <div className={styles.me}>
        <h2>Source code:</h2>
        <a
          href="https://github.com/dqhuy153/portfolio-website"
          target="_blank"
          rel="noreferrer"
        >
          GitHub..
        </a>
      </div>
    </section>
  );
}
