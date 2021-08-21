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
    fontSize,

    ...props
}) {
    // console.log({
    //     primaryColor,
    //     primaryBtnBgColor,
    //     secondaryColor,
    //     backgroundColor,
    //     boxShadowColor,
    //     primaryBtnColor,
    //     secondaryBtnBgColor,
    //     linkColor,
    // });

    return (
        <section
            id={id}
            className={className}
            style={{
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
                '--background-color': backgroundColor,
                '--box-shadow-color': `rgba(${boxShadowColor?.rgba?.r}, ${boxShadowColor?.rgba?.g}, ${boxShadowColor?.rgba?.b}, ${boxShadowColor?.rgba?.a})`,
                '--primary-button-color': primaryBtnColor,
                '--primary-button-bg-color': primaryBtnBgColor,
                '--secondary-button-color': secondaryBtn,
                '--secondary-button-bg-color': secondaryBtnBgColor,
                '--link-color': linkColor,
                '--font-size': fontSize,
            }}
        >
            {props.children}
        </section>
    );
}
