import React from 'react';
import Image from 'next/image';
import { useSpring, useTrail, animated } from 'react-spring';

import styles from './FirstLoading.module.scss';

export default function FirstLoading(props) {
    const { x } = useSpring({
        from: { x: 0, opacity: 1 },
        x: 100,
        opacity: 0,
        delay: 1000,
        config: { duration: 1000 },
    });

    // const trail = useTrail(amount, () => ({
    //     opacity: 1,
    // }));

    return (
        <div className={styles.container}>
            <animated.img
                src="/images/motion/img1.jpg"
                style={{
                    transform: x.to((x) => `translateY(-${x}%)`),
                }}
                alt="img1"
            ></animated.img>
        </div>
    );
}
