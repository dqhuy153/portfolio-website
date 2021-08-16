import React from 'react';
import { ColorPicker } from './UI/ColorPicker';

export default function ManageTheme({ id, className, ...props }) {
    const handleChange = (color) => {
        console.log(color);
    };

    return (
        <section id={id} className={className}>
            {/* title */}
            <h1>Manage theme.</h1>

            <ColorPicker onChange={handleChange} />
        </section>
    );
}
