import React from 'react';

import styles from './Card1.module.scss';

export default function Card1(props) {
    return <div className={styles.card}>{props.children}</div>;
}
