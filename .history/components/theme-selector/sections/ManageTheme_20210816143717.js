import React from 'react';
import { ChromePicker } from 'react-color';

export default function ManageTheme({ id, className, ...props }) {
    return (
        <section id={id} className={className}>
            <p>a</p>
            <ChromePicker />
        </section>
    );
}
