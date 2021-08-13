import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './ImagesList.module.scss';

export default function ImagesList({
    data,
    className,

    ...props
}) {
    return (
        <ul className={className}>
            {data.map((image) => (
                <li
                    key={image.id + new Date().toISOString()}
                    className={styles['image-container']}
                >
                    <a href={image.links.html} target="_blank" rel="noreferrer">
                        <Image
                            src={image.urls.regular}
                            alt={image.alt_description}
                            width={100}
                            height={100}
                            layout="responsive"
                            className={styles.image}
                            objectFit="cover"
                            sizes={30}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
