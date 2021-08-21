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
        return (
            array[index - 1].values.length +
            findStartOrderList(array, index - 1)
        );
    }
};

export default function TransformHorizontal({
    items = [],
    className,
    isOrderList,
    fontSize = '5',
    direction, //left or right
    marginList = '5rem',
    marginItem = '5rem',
    duration = '10s',
    ...props
}) {
    //props: items=[
    // {d
    //     direction: 'left',
    //     values: [...items line 1]
    // },
    // {
    //     direction: 'right',
    //     values: [...items line 2]
    // } ,...]
    //units: rem

    return (
        <div
            className={`${styles.container} ${className}`}
            style={{
                '--font-size': fontSize + 'rem',
                '--margin-list': marginList,
                '--margin-item': marginItem,
                '--duration': duration,
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
                                line.direction === 'left' ||
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            }`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.values.map((itemInLine, index) => (
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
                                line.direction === 'left' ||
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            }`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.values.map((itemInLine, index) => (
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
                    <div
                        className={styles['list-container']}
                        key={`list-container-${index}`}
                    >
                        <ul
                            key={`line1-${index}`}
                            className={`${styles.list} ${
                                line.direction === 'left' ||
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            }`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.values.map((itemInLine, index) => (
                                <li
                                    className={styles.item}
                                    key={`${itemInLine}1-${index}`}
                                >
                                    {itemInLine}
                                </li>
                            ))}
                        </ul>

                        <ul
                            key={`line2-${index}`}
                            className={`${styles.list} ${
                                line.direction === 'left' ||
                                direction === 'left'
                                    ? styles['marquee-left']
                                    : styles['marquee-right']
                            }`}
                        >
                            {/* loop through items line 1, 2 */}
                            {line.values.map((itemInLine, index) => (
                                <li
                                    className={styles.item}
                                    key={`${itemInLine}2-${index}`}
                                >
                                    {itemInLine}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
}
