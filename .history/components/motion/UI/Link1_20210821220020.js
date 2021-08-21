import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import styles from './Link1.module.scss';

export default function Link1({
    href,
    title,
    justifyContent = 'center',
    ...props
}) {
    return (
        <div
            className={styles.container}
            style={{
                '--link-justify-content': justifyContent,
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
