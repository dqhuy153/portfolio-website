import React, { useState } from 'react';
import Image from 'next/image';

import styles from './ImagesList.module.scss';
import Loader from './Loader';

export default function ImagesList({ data, className, ...props }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ul className={className}>
            {data.map((image) => (
                <li
                    key={image.id + new Date().toISOString()}
                    className={styles['image-container']}
                >
                    <Loader style={{ display: isLoading ? 'block' : 'none' }} />
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
                            onLoad={() => {
                                console.log('start');
                                setIsLoading(true);
                            }}
                            onLoadingComplete={() => {
                                console.log('end');
                                setIsLoading(false);
                            }}
                            key={image.id + new Date().toISOString()}
                            onError={(e) => {
                                setError(e);
                                console.log(e);
                            }}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
