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

                '--underPC-media-width': underPCMediaWidth,
                '--underPC-container-direction': underPCContainerDirection,
                '--underPC-container-width': underPCContainerWidth,
                '--underPC-content-width': underPCContentWidth,
                '--underPC-container-padding': underPCContainerPadding,
                '--underPC-container-margin': underPCContainerMargin,
                '--underPC-flex-gap': underPCGap,
                '--underPC-container-font-size': underPCContainerFontSize,

                '--underTablet-media-width': mediaWidth,
                '--underTablet-container-direction': containerDirection,
                '--underTablet-container-width': containerWidth,
                '--underTablet-content-width': contentWidth,
                '--underTablet-container-padding': containerPadding,
                '--underTablet-container-margin': containerMargin,
                '--underTablet-flex-gap': gap,
                '--underTablet-container-font-size': containerFontSize,
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
