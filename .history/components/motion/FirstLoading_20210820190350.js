import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTrail, animated } from 'react-spring';

import styles from './FirstLoading.module.scss';

const ImagesTrail = ({ open, children }) => {
    const items = React.Children.toArray(children);

    const [trail, api] = useTrail(items.length, () => ({
        from: { x: 0, opacity: 1 },
        opacity: 0,
        x: 100,
        config: { mass: 5, tension: 2000, friction: 200, duration: 1500 },
    }));

    useEffect(() => {
        api.start();
    });

    return (
        <>
            {open &&
                trail.map(({ x }, index) => (
                    <animated.div
                        key={index}
                        style={{
                            transform: x
                                .to({
                                    range: [0, 40, 75, 100],
                                    output: [0, 5, 10, 100],
                                })
                                .to((x) => `translateY(-${x}%)`),
                            zIndex: 10 - index,
                        }}
                        className={styles.img}
                    >
                        {items[index]}
                    </animated.div>
                ))}
        </>
    );
};

const ParagraphTrail = ({ open, children }) => {
    const items = React.Children.toArray(children);

    const [trail, api] = useTrail(items.length, () => ({
        from: {
            opacity: 0,
        },
        opacity: 1,
        delay: 3000,
        config: { mass: 5, tension: 2000, friction: 200, duration: 2000 },
    }));

    useEffect(() => {
        api.start();
    });

    return (
        <div className={styles['loading-page']}>
            {open &&
                trail.map(({ x, height, opacity }, index) => (
                    <animated.div
                        key={index}
                        style={{
                            opacity,
                        }}
                    >
                        {items[index]}
                    </animated.div>
                ))}
        </div>
    );
};

export default function FirstLoading({ open }) {
    return (
        <div className={styles.container}>
            <ImagesTrail open={open}>
                <Image
                    src="/images/motion/img3.jpg"
                    alt="img3"
                    layout="fill"
                    objectFit="cover"
                ></Image>
                <Image
                    src="/images/motion/img2.jpg"
                    alt="img2"
                    layout="fill"
                    objectFit="cover"
                ></Image>
                <Image
                    src="/images/motion/img1.jpg"
                    alt="img1"
                    layout="fill"
                    objectFit="cover"
                ></Image>
                <ParagraphTrail open={open}>
                    <p>Your brand is your story</p>
                    <p>and we help you tell it.</p>
                </ParagraphTrail>
            </ImagesTrail>
        </div>
    );
}