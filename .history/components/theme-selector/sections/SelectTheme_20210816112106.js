import React, { useEffect } from 'react';
import Card from './UI/Card';

export default function SelectTheme({ id, className, themes, ...props }) {
    useEffect(() => {
        console.log(themes);
    });

    return (
        <section id={id} className={className}>
            <p>Select theme</p>
            <Card
        </section>
    );
}
