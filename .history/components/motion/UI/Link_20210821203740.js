import React from 'react';

export default function Link1(props) {
    return (
        <Link href="/projects/motion/agency">
            <a>
                <span>Get to know us</span>
                <BsArrowRight className={styles['link-icon']} />
            </a>
        </Link>
    );
}
