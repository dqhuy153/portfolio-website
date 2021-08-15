import React from 'react';

export default function Section100vh({ className, ref, ...props }) {
    return (
        <section
            style={{
                minHeight: '100vh',
            }}
            className={className}
            ref={ref}
        >
            {props.children}
        </section>
    );
}
