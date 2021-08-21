import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export default function Link1({ href, title, ...props }) {
    return (
        <Link href="/projects/motion/agency">
            <a>
                <span>Get to know us</span>
                <BsArrowRight className={styles['link-icon']} />
            </a>
        </Link>
    );
}
