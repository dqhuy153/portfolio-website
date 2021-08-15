import React from 'react';

export default function Section100vh(props) {
    return (
        <section
            style={{
                minHeight: '100vh',
            }}
            {...props}
        >
            {props.children}
        </section>
    );
}
