import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSpring, useTrail, animated, config, a } from 'react-spring';

import styles from './FirstLoading.module.scss';

const ImagesTrail = ({ open, children }) => {
    const items = React.Children.toArray(children);

    const [trail, api] = useTrail(items.length, () => ({
        from: { x: 0, opacity: 1 },
        opacity: 0,
        x: 100,
        config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
    }));

    useEffect(() => {
        if (open) {
            console.log('start');
            api.start();
        }
    }, [open, api]);

    return (
        <>
            {trail.map(({ x }, index) => (
                <a.div
                    key={index}
                    style={{
                        transform: x
                            .to({
                                range: [0, 40, 70, 100],
                                output: [0, 10, 20, 100],
                            })
                            .to((x) => `translateY(-${x}%)`),
                        zIndex: 10 - index,
                    }}
                    className={styles.img}
                >
                    {items[index]}
                </a.div>
            ))}
        </>
    );
};

export default function FirstLoading(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 3) {
            setIsLoaded(true);
        }
        setCount(0);
    }, [count]);

    return (
        <div className={styles.container}>
            <ImagesTrail open={isLoaded}>
                <Image
                    src="/images/motion/img2.jpg"
                    alt="img2"
                    layout="fill"
                    objectFit="cover"
                    onLoad={() => setCount((prevState) => prevState + 1)}
                ></Image>
                <Image
                    src="/images/motion/img3.jpg"
                    alt="img3"
                    layout="fill"
                    objectFit="cover"
                    onLoad={() => setCount((prevState) => prevState + 1)}
                ></Image>
                <Image
                    src="/images/motion/img1.jpg"
                    alt="img1"
                    layout="fill"
                    objectFit="cover"
                    onLoad={() => setCount((prevState) => prevState + 1)}
                ></Image>
            </ImagesTrail>
        </div>
    );
}