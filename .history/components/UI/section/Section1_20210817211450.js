import React from 'react';

export default function Section1({
    id,
    className,
    primaryColor,
    secondaryColor,
    backgroundColor,
    boxShadowColor,
    primaryBtnColor,
    primaryBtnBgColor,
    secondaryBtn,
    secondaryBtnBgColor,
    linkColor,

    ...props
}) {
    console.log(
        primaryBtnBgColor,
        secondaryColor,
        backgroundColor,
        boxShadowColor,
        primaryBtnColor,
        secondaryBtnBgColor
    );

    return (
        <section
            id={id}
            className={className}
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
                '--background-color': backgroundColor,
                '--box-shadow-color': boxShadowColor,
                '--primary-button-color': primaryBtnColor,
                '--primary-button-bg-color': primaryBtnBgColor,
                '--secondary-button-color': secondaryBtn,
                '--secondary-button-bg-color': secondaryBtnBgColor,
                '--link-color': linkColor,
            }}
        >
            {props.children}
        </section>
    );
}