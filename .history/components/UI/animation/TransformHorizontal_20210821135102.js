import React from 'react';

import styles from './TransformHorizontal.module.scss';

const findStartOl = (array, index) => {
    if (index >= array.length) {
        return;
    }

    if (index === 0) {
        return 1;
    }

    if (index > 0) {
        return array[index].length + findStartOl(array, index - 1);
    }
};

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
                <ol start={findStartOl(items, index)} key={`line-${index}`}>
                    {/* loop through items line 1, 2 */}
                    {line.map((itemInLine, index) => (
                        <li key={`${itemInLine}-${index}`}>{itemInLine}</li>
                    ))}
                </ol>
            ))}
        </div>
    );
}
