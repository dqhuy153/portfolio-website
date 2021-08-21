import { transform } from 'lodash';
import React from 'react';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    mediaComponent,
    mediaWidth = '50%',
    horizontal, //default
    vertical,
    mediaLeftSide = true, //else will be right side //default
    mediaTopSide = true, //else will be bottom side
    gap,

    contentPositionTop,
    contentPositionBottom,
    contentPositionLeft,
    contentPositionRight,
    contentCenter,
    containerWidth = '100%',

    contentWidth,
    containerMargin,
    containerPadding,
    containerFontSize,

    className,

    ...props
}) {
    let containerDirection;
    let contentCenterSetup;

    //container direction
    if (horizontal) {
        if (mediaLeftSide) {
            containerDirection = 'row';
        } else if (mediaLeftSide === false) {
            containerDirection = 'row-reverse';
        } else {
            containerDirection = 'row';
        }
    } else if (vertical) {
        if (mediaTopSide) {
            containerDirection = 'column';
        } else if (mediaTopSide === false) {
            containerDirection = 'column-reverse';
        } else {
            containerDirection = 'column';
        }
    } else {
        containerDirection = 'row';
    }

    //content center
    if (contentCenter) {
        contentCenterSetup = {
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        };
    }

    return (
        <div
            className={`${styles.container} ${className}`}
            style={{
                '--media-width': mediaWidth,
                '--container-direction': containerDirection,
                '--container-width': containerWidth,
                '--content-width': contentWidth,
                '--container-padding': containerPadding,
                '--container-margin': containerMargin,
                '--flex-gap': gap,
                '--container-font-size': containerFontSize,
            }}
        >
            <div className={styles.image}>{mediaComponent}</div>
            <div className={styles['content-container']}>
                <div
                    className={styles['content-position']}
                    style={{
                        position: 'absolute',

                        top: contentPositionTop,
                        left: contentPositionLeft,
                        right: contentPositionRight,
                        bottom: contentPositionBottom,

                        ...contentCenterSetup,
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
}
