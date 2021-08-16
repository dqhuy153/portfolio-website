import React from 'react';

export default function Section1({
    id,
    className,
    primaryColor,
    secondaryColor,
    background,
    ...props
}) {
    return (
        <section
            id={id}
            className={className}
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
                '--background': background,
            }}
        >
            {props.children}
        </section>
    );
}
