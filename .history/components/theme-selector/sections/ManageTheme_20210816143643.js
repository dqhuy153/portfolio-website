import React from 'react';

export default function ManageTheme({ id, className, ...props }) {
    return (
        <section id={id} className={className}>
            <p>Projects</p>
        </section>
    );
}
