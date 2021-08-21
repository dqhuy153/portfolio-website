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
    const centerSetup = {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    };
    let contentCenterSetup = contentCenter ? centerSetup : null;
    let underPCContentCenterSetup = underPCContentCenter ? centerSetup : null;
    let underTabletContentCenterSetup = underTabletContentCenter
        ? centerSetup
        : null;

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

                '--underPC-media-width': underPCMediaWidth || mediaWidth,
                '--underPC-container-direction':
                    underPCContainerDirection || underPCContainerDirection,
                '--underPC-container-width':
                    underPCContainerWidth || containerWidth,
                '--underPC-content-width': underPCContentWidth || contentWidth,
                '--underPC-container-padding':
                    underPCContainerPadding || containerPadding,
                '--underPC-container-margin':
                    underPCContainerMargin || containerMargin,
                '--underPC-flex-gap': underPCGap || gap,
                '--underPC-container-font-size':
                    underPCContainerFontSize || containerFontSize,

                '--underTablet-media-width':
                    underTabletMediaWidth || underPCMediaWidth || mediaWidth,
                '--underTablet-container-direction':
                    underTabletContainerDirection ||
                    underPCContainerDirection ||
                    underPCContainerDirection,
                '--underTablet-container-width':
                    underTabletContainerWidth ||
                    underPCContainerWidth ||
                    containerWidth,
                '--underTablet-content-width':
                    underTabletContentWidth ||
                    underPCContentWidth ||
                    contentWidth,
                '--underTablet-container-padding':
                    underTabletContainerPadding ||
                    underPCContainerPadding ||
                    containerPadding,
                '--underTablet-container-margin':
                    underTabletContainerMargin ||
                    underPCContainerMargin ||
                    containerMargin,
                '--underTablet-flex-gap': underTabletGap || underPCGap || gap,
                '--underTablet-container-font-size':
                    underTabletContainerFontSize ||
                    underPCContainerFontSize ||
                    containerFontSize,
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
