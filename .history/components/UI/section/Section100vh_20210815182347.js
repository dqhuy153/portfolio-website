import React from 'react';

export default function Section100vh(props) {
    return (
        <section
            style={{
                minHeight: '180vh',
            }}
            {...props}
        >
            {props.children}
        </section>
    );
}
