import React from 'react';

import styles from './Transform.module.scss';

export default function TransformHorizontal({
    items = [],
    className,
    ...props
}) {
    //props: items=[[...items line 1], [...items line 2],...]

    return <div className={`${styles.container} ${className}`}></div>;
}
