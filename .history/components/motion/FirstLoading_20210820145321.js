import React from 'react';
import Image from 'next/image';
import { useSpring } from '@react-spring/core';

import styles from './FirstLoading.module.scss';

export default function FirstLoading(props) {
    const { x } = useSpring({ x: 0 });

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
