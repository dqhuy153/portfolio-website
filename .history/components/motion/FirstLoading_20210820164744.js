import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSpring, useTrail, animated, config, a } from 'react-spring';

import styles from './FirstLoading.module.scss';

const ImagesTrail = ({ open, children }) => {
    const items = React.Children.toArray(children);

    const [trail, api] = useTrail(items.length, () => ({
        from: { x: 0, opacity: 1 },
        opacity: 0,
        x: 100,
        transDelay: 5000,
        config: { mass: 5, tension: 2000, friction: 200, duration: 3000 },
    }));

    useEffect(() => {
        api.start();
    });

    return (
        <div>
            {trail.map(({ x, transDelay, ...styles }, index) => (
                <a.div
                    key={index}
                    style={{
                        transform: x
                            .to({
                                range: [0, 40, 70, 100],
                                output: [0, 10, 20, 100],
                            })
                            .to((x) => `translateY(-${x}%)`),
                        transitionDelay: transDelay * index,
                    }}
                >
                    {items[index]}
                </a.div>
            ))}
        </div>
    );
};

export default function FirstLoading(props) {
    // const { x } = useSpring({
    //     from: { x: 0, opacity: 1 },
    //     x: 100,
    //     opacity: 0,
    //     delay: 1000,
    //     config: { duration: 1000 },
    // });

    return (
        <div className={styles.container}>
            {/* <animated.img
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
            ></animated.img> */}
            <ImagesTrail open={true}>
                <Image
                    src="/images/motion/img2.jpg"
                    alt="img2"
                    height={4}
                    width={5}
                    layout="responsive"
                ></Image>
                <Image
                    src="/images/motion/img3.jpg"
                    alt="img3"
                    height={4}
                    width={5}
                    layout="responsive"
                ></Image>
                <Image
                    src="/images/motion/img1.jpg"
                    alt="img1"
                    height={4}
                    width={5}
                    layout="responsive"
                ></Image>
            </ImagesTrail>
        </div>
    );
}
