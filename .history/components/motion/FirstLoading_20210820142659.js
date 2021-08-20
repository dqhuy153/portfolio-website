import React from 'react';
import Image from 'next/image';

import styles from './FirstLoading.module.scss';

export default function FirstLoading(props) {
    return (
        <div className={styles.container}>
            <Image src="/motion/img1.jpg" alt="img1" layout="fill" />
        </div>
    );
}
