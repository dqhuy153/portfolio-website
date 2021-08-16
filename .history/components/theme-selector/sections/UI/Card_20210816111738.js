import React from 'react';

import styles from './Card.module.scss';

export default function Card(props) {
    return (
        <div role="button">
            <p>Primary color</p>
            <p>Secondary color</p>
            <p>Link</p>
            <button>Primary button</button>
            <button>Secondary button</button>
        </div>
    );
}
