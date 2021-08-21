import React from 'react';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    mediaComponent,
    mediaWidth = '50%',
    horizontal, //default
    vertical,
    mediaLeftSide = true, //else will be right side //default
    mediaTopSide = true, //else will be bottom side
    contentPositionTop,
    contentPositionBottom,
    contentPositionLeft,
    contentPositionRight,
    contentCenter,

    ...props
}) {
    let containerDirection;
    if(horizontal) {
        if(mediaLeftSide) {
            containerDirection = 'row'
        }

        else if(mediaLeftSide === false) {
            containerDirection = 'row-reverse';
        }

        else {
            containerDirection = 'row'

        }
        
    }

    else if (vertical) {
         if(mediaTopSide) {
            containerDirection = 'column'
        }

        else if(mediaTopSide === false) {
            containerDirection = 'column-reverse';
        }

        else {
            containerDirection = 'column'

        }
    }


    return (
        <div
            className={styles.container}
            style={{
                '--media-width': mediaWidth,
                '--container-direction': horizontal ? 'row'
            }}
        >
            <div className={styles.image}>{mediaComponent}</div>
            <div className={styles['content-container']}>
                <div className={styles['content-position']}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
