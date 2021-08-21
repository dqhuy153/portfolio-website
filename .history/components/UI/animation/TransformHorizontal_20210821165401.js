import React from 'react';

import styles from './TransformHorizontal.module.scss';

const findStartOrderList = (array, index) => {
    if (index >= array.length) {
        return;
    }

    if (index === 0) {
        return 1;
    }

    if (index > 0) {
        return array[index - 1].length + findStartOrderList(array, index - 1);
    }
};

export default function TransformHorizontal({
    items = [],
    className,
    isOrderList,
    fontSize = '2',
    direction = 'left', //left or right
    ...props
}) {
    //props: items=[[...items line 1], [...items line 2],...]

    return (
        <div
            className={`${styles.container} ${className}`}
            style={{
                '--font-size': fontSize + 'rem',
            }}
        >
            {/* loop through items */}
            {isOrderList &&
                items.map((line, index) => (
                    <div
                        className={styles['list-container']}
                        key={`list-container-${index}`}
                    >
                        <ol
                            start={findStartOrderList(items, index)}
                            key={`line1-${index}`}
                            className={`${styles.list} ${
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            }`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.map((itemInLine, index) => (
                                <li
                                    className={styles.item}
                                    key={`${itemInLine}1-${index}`}
                                >
                                    {itemInLine}
                                </li>
                            ))}
                        </ol>

                        <ol
                            start={findStartOrderList(items, index)}
                            key={`line2-${index}`}
                            className={`${styles.list} ${
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            } ${styles.marquee2}`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.map((itemInLine, index) => (
                                <li
                                    className={styles.item}
                                    key={`${itemInLine}2-${index}`}
                                >
                                    {itemInLine}
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}

            {!isOrderList &&
                items.map((line, index) => (
                    <ul key={`line-${index}`} className={styles.list}>
                        {/* loop through items line 1, 2 */}
                        {line.map((itemInLine, index) => (
                            <li
                                key={`${itemInLine}-${index}`}
                                className={styles.item}
                            >
                                {itemInLine}
                            </li>
                        ))}
                    </ul>
                ))}
        </div>
    );
}
