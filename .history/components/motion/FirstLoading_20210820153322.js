import React from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';

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
                    transform: x
                        .to({
                            range: [0, 30, 60, 100],
                            output: [0, 10, 20, 100],
                        })
                        .to((x) => `translateY(-${x}%)`),
                }}
                alt="img1"
            ></animated.img>
        </div>
    );
}
