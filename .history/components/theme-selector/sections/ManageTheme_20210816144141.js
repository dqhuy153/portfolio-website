import React from 'react';
import { ChromePicker } from 'react-color';

export default function ManageTheme({ id, className, ...props }) {
    const handleChange = (color, event) => {
        console.log(color, event);
    };

    return (
        <section id={id} className={className}>
            <ChromePicker onChange={handleChange} />
        </section>
    );
}
