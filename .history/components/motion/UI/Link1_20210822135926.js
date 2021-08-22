import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import styles from './Link1.module.scss';

export default function Link1({
    href,
    title,
    justifyContent = 'center',
    margin,
    color = 'var(--link-color)',
    ...props
}) {
    return (
        <div
            className={styles.container}
            style={{
                '--link-margin': margin,
                '--link-justify-content': justifyContent,
                '--link-color': color,
            }}
        >
            <Link href={href}>
                <a>
                    <span>{title}</span>
                    <BsArrowRight className={styles['link-icon']} />
                </a>
            </Link>
        </div>
    );
}
