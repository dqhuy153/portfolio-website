import React, { useEffect } from 'react';

import Card from './UI/Card';
import styles from './SelectTheme.module.scss';

export default function SelectTheme({ id, className, themes, ...props }) {
    useEffect(() => {
        console.log(themes);
    });

    return (
        <section id={id} className={className}>
            <p>Select theme</p>
            <div className={styles.cards}>
                <Card />
            </div>
        </section>
    );
}