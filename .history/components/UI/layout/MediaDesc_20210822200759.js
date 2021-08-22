import { transform } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './MediaDesc.module.scss';

export default function MediaDesc({
    //above PC
    mediaComponent,
    containerDirection = 'row',
    containerJustifyContent,
    containerAlignItems,

    mediaWidth = '50%',
    gap,

    contentPosition = 'relative',
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
    underPCContainerJustifyContent,
    underPCContainerAlignItems,

    underPCMediaWidth,
    underPCGap,

    underPCContentPosition,
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
    underTabletContainerJustifyContent,
    underTabletContainerAlignItems,

    underTabletMediaWidth,
    underTabletGap,

    underTabletContentPosition,
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
    delayY = 0, //use to calc right offsetTop (element change when use transformY) //tricky

    ...props
}) {
    //check media query
    const underPC = useMediaQuery({ query: '(max-width: 1023px)' });
    const underTablet = useMediaQuery({ query: '(max-width: 676px)' });

    //check center position
    const centerSetup = {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    };
    const contentCenterSetup = contentCenter ? centerSetup : null;
    const underPCContentCenterSetup = underPCContentCenter
        ? centerSetup
        : contentCenterSetup;
    const underTabletContentCenterSetup = underTabletContentCenter
        ? centerSetup
        : underPCContentCenterSetup;

    let contentPositionSetup = {
        position: contentPosition,

        top: contentTop,
        left: contentLeft,
        right: contentRight,
        bottom: contentBottom,

        ...contentCenterSetup,
    };

    if (underPC) {
        contentPositionSetup = {
            position: underPCContentPosition || contentPosition,

            top: underPCContentTop || contentTop,
            left: underPCContentLeft || contentLeft,
            right: underPCContentRight || contentRight,
            bottom: underPCContentBottom || contentBottom,

            ...underPCContentCenterSetup,
        };
    }

    if (underTablet) {
        contentPositionSetup = {
            position:
                underTabletContentPosition ||
                underPCContentPosition ||
                contentPosition,

            top: underTabletContentTop || underPCContentTop || contentTop,
            left: underTabletContentLeft || underPCContentLeft || contentLeft,
            right:
                underTabletContentRight || underPCContentRight || contentRight,
            bottom:
                underTabletContentBottom ||
                underPCContentBottom ||
                contentBottom,

            ...underTabletContentCenterSetup,
        };
    }

    //ref
    const [translateY, setTranslateY] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        const offsetTop = containerRef.current.offsetTop;
        const offsetHeight = containerRef.current.offsetHeight;
        const clientHeight = containerRef.current.clientHeight;

        // top < scrollY < top + height
        window.addEventListener('scroll', () => {
            if (
                offsetTop - clientHeight + delayY < window.scrollY &&
                window.scrollY < offsetHeight + offsetTop + delayY
            ) {
                setTranslateY(
                    (window.scrollY - (offsetTop - clientHeight + delayY)) / 20
                );

                // console.log(offsetTop - clientHeight + delayY);
                // console.log(window.scrollY);
                // console.log(offsetHeight + offsetTop + delayY);
                // console.log('inside');
            } else {
                setTranslateY(0);
            }
        });

        // console.dir(containerRef.current);
    });

    return (
        <div
            ref={containerRef}
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
                '--container-justify-content': containerJustifyContent,
                '--container-align-items': containerAlignItems,

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
                '--underPC-container-justify-content':
                    underPCContainerJustifyContent || containerJustifyContent,
                '--underPC-container-align-items':
                    underPCContainerAlignItems || containerAlignItems,

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
                '--underTablet-container-justify-content':
                    underTabletContainerJustifyContent ||
                    underPCContainerJustifyContent ||
                    containerJustifyContent,
                '--underTablet-container-align-items':
                    underTabletContainerAlignItems ||
                    underPCContainerAlignItems ||
                    containerAlignItems,
            }}
        >
            <div
                style={{
                    transform: `translateY(${translateY}px)`,
                }}
                className={styles.image}
            >
                {mediaComponent}
            </div>
            <div className={styles['content-container']}>
                <div
                    className={styles['content-position']}
                    style={contentPositionSetup}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
}
