import React from 'react';
import { ColorPicker } from './UI/ColorPicker';

export default function ManageTheme({ id, className, ...props }) {
    const handleChange = (color, event) => {
        console.log(color, event);
    };

    return (
        <section id={id} className={className}>
            <ColorPicker />
        </section>
    );
}
