import { transform } from 'lodash';
import React from 'react';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    //above PC
    mediaComponent,
    containerDirection = 'row',

    mediaWidth = '50%',
    gap,

    contentTop,
    contentBottom,
    contentLeft,
    contentRight,
    contentCenter,
    containerWidth = '100%',

    contentWidth,
    containerMargin,
    containerPadding,
    containerFontSize,

    //under PC
    underPCMediaComponent,
    underPCContainerDirection,

    underPCMediaWidth,
    underPCGap,

    underPCContentTop,
    underPCContentBottom,
    underPCContentLeft,
    underPCContentRight,
    underPCContentCenter,
    underPCContainerWidth,

    underPCContentWidth,
    underPCContainerMargin,
    underPCContainerPadding,
    underPCContainerFontSize,

    //under tablet
    underTabletMediaComponent,

    underTabletContainerDirection,

    underTabletMediaWidth,
    underTabletGap,

    underTabletContentTop,
    underTabletContentBottom,
    underTabletContentLeft,
    underTabletContentRight,
    underTabletContentCenter,
    underTabletContainerWidth,

    underTabletContentWidth,
    underTabletContainerMargin,
    underTabletContainerPadding,
    underTabletContainerFontSize,

    className,

    ...props
}) {
    let contentCenterSetup;

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

                '--media-width': mediaWidth,
                '--container-direction': containerDirection,
                '--container-width': containerWidth,
                '--content-width': contentWidth,
                '--container-padding': containerPadding,
                '--container-margin': containerMargin,
                '--flex-gap': gap,
                '--container-font-size': containerFontSize,

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

                        top: contentTop,
                        left: contentLeft,
                        right: contentRight,
                        bottom: contentBottom,

                        ...contentCenterSetup,
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
}
