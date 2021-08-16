import React from 'react';

export default function Section1({
    id,
    className,
    primaryColor,
    secondaryColor,
    backgroundColor,
    boxShadowColor,
    ...props
}) {
    return (
        <section
            id={id}
            className={className}
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
                '--background-color': backgroundColor,
                '--box-shadow-color': boxShadowColor,
            }}
        >
            {props.children}
        </section>
    );
}
