import React from 'react';
import Image from 'next/image';
import { useSpring, useTrail } from '@react-spring/core';

import styles from './FirstLoading.module.scss';

export default function FirstLoading(props) {
    const { x } = useSpring({
        from: { x: 0 },
        x: 100,
        delay: 500,
    });

    // const trail = useTrail(amount, () => ({
    //     opacity: 1,
    // }));

    return (
        <div className={styles.container}>
            <Image
                src="/images/motion/img1.jpg"
                alt="img1"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}
