import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function SimpleMotion(props) {
    const props = useSpring({
        to: {
            opacity: 1,
        },
        from: {
            opacity: 0,
        },
    });

    return <animated.div style={props}>I will fade in</animated.div>;
}
