import React from 'react';
import Section from '../../UI/section/section1';

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
        <Section
            id={id}
            className={`${styles['section-container']} ${className}`}
            primaryColor={primaryColor}
            background={background}
        >
            <p className={styles.title}>Home</p>
            <a>HHH</a>
        </Section>
    );
}
