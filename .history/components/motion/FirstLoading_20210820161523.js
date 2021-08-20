import React, { useEffect } from 'react';
import { useSpring, useTrail, animated, config, a } from 'react-spring';

import styles from './FirstLoading.module.scss';

const ImagesTrail = ({ open, children }) => {
    const items = React.Children.toArray(children);

    const [trail, api] = useTrail(items.length, () => ({
        from: { x: 0, opacity: 1 },
        opacity: 0,
        x: 100,
        delay: 1000,
        config: { mass: 5, tension: 2000, friction: 200 },
    }));
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    );
};

export default function FirstLoading(props) {
    const { x } = useSpring({
        from: { x: 0, opacity: 1 },
        x: 100,
        opacity: 0,
        delay: 1000,
        config: { duration: 1000 },
    });

    useEffect(() => {
        api.start();
    });

    return (
        <div className={styles.container}>
            <animated.img
                src="/images/motion/img1.jpg"
                style={{
                    transform: x
                        .to({
                            range: [0, 40, 70, 100],
                            output: [0, 10, 20, 100],
                        })
                        .to((x) => `translateY(-${x}%)`),
                }}
                alt="img1"
            ></animated.img>
            <animated.img
                src="/images/motion/img2.jpg"
                style={{
                    transform: x
                        .to({
                            range: [0, 40, 70, 100],
                            output: [0, 10, 20, 100],
                        })
                        .to((x) => `translateY(-${x}%)`),
                }}
                alt="img2"
            ></animated.img>
            <animated.img
                src="/images/motion/img3.jpg"
                style={{
                    transform: x
                        .to({
                            range: [0, 40, 70, 100],
                            output: [0, 10, 20, 100],
                        })
                        .to((x) => `translateY(-${x}%)`),
                }}
                alt="img3"
            ></animated.img>
        </div>
    );
}
