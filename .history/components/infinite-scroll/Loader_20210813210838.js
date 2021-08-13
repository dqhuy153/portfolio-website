import React from 'react';

export default function Loader({
    width = 50,
    height = 50,
    backgroundColor = '#fff',
    color1 = '#669ff1',
    color2 = '#b4d3f8',
    color3 = '#b6bde5',
    color4 = '#4576e2',
    color5 = '#669ff1',
    className,
    ...props
}) {
    return (
        <div className={className} style={props.style}>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<?xml version="1.0" encoding="utf-8"?>`,
                }}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: 'auto',
                    background: { backgroundColor },
                    display: 'block',
                    shapeRendering: 'auto',
                }}
                width={`${width}px`}
                height={`${height}px`}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="84" cy="50" r="10" fill="#669ff1">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="0.6097560975609756s"
                        calcMode="spline"
                        keyTimes="0;1"
                        values="13;0"
                        keySplines="0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                    <animate
                        attributeName="fill"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="discrete"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values={`${color1};${color2};${color3};${color4};${color5};`}
                        begin="0s"
                    ></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#669ff1">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;13;13;13"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="0s"
                    ></animate>
                </circle>
                <circle cx="50" cy="50" r="10" fill="#4576e2">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;13;13;13"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.6097560975609756s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-0.6097560975609756s"
                    ></animate>
                </circle>
                <circle cx="84" cy="50" r="10" fill="#b6bde5">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;13;13;13"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.2195121951219512s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.2195121951219512s"
                    ></animate>
                </circle>
                <circle cx="16" cy="50" r="10" fill="#b4d3f8">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="0;0;13;13;13"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.8292682926829267s"
                    ></animate>
                    <animate
                        attributeName="cx"
                        repeatCount="indefinite"
                        dur="2.4390243902439024s"
                        calcMode="spline"
                        keyTimes="0;0.25;0.5;0.75;1"
                        values="16;16;16;50;84"
                        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                        begin="-1.8292682926829267s"
                    ></animate>
                </circle>
            </svg>
        </div>
    );
}
