import React from 'react';

import styles from './TransformHorizontal.module.scss';

export default function TransformHorizontal({
    items = [],
    className,
    ...props
}) {
    //props: items=[[...items line 1], [...items line 2],...]

    return (
        <div className={`${styles.container} ${className}`}>
            {/* loop through items */}
            {items.map((line, index) => (
                <ol key={`line-${index}`}>
                    {/* loop through items line 1, 2 */}
                    {line.map((itemInLine, index) => (
                        <li key={`${itemInLine}-${index}`}>{itemInLine}</li>
                    ))}
                </ol>
            ))}
        </div>
    );
}
