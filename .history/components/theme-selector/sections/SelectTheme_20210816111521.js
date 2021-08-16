import React, { useEffect } from 'react';

export default function SelectTheme({ id, className, themes, ...props }) {
    useEffect(() => {
        console.log(themes);
    });

    return (
        <section id={id} className={className}>
            <p>Select theme</p>
            <div role="button">
                <p>Primary color</p>
                <p>Secondary color</p>
                <p>Link</p>
                <button>Primary button</button>
                <button>Secondary button</button>
            </div>
        </section>
    );
}
