import React from 'react';

export default function SelectTheme({ id, className, ...props }) {
    return (
        <section id={id} className={className}>
            <p>Select theme</p>
        </section>
    );
}