import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { animated, config, useSpring } from 'react-spring';

import styles from './Motion.module.scss';
import useTheme from '../../../hooks/useTheme';

import FirstLoading from '../../../components/motion/FirstLoading';
import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section1 from '../../../components/UI/section/Section1';
import TransformHorizontal from '../../../components/UI/animation/TransformHorizontal';

export default function MotionPage(props) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const { theme } = useTheme();
    const pHomeAnimated = useSpring({
        from: { opacity: 0, y: -30 },
        opacity: isFirstLoad ? 1 : 1,
        y: isFirstLoad ? 0 : -30,
        height: isFirstLoad ? 0 : 210,
        // delay: 6000,
        config: config.molasses,
    });

    useEffect(() => {
        setTimeout(() => {
            setIsFirstLoad(false);
        }, 5800);
    }, []);

    return (
        <>
            <Head>
                <title>Motion - Animation</title>
                <meta
                    name="description"
                    content="Only animation here. Practice and gain some skill"
                />
            </Head>

            <Section1
                primaryColor={theme?.colors?.primary}
                secondaryColor={theme?.colors?.secondary}
                backgroundColor={theme?.colors?.background}
                boxShadowColor={theme?.colors?.boxShadow}
                primaryBtnColor={theme?.colors?.buttonPrimary?.text}
                primaryBtnBgColor={theme?.colors?.buttonPrimary?.background}
                secondaryBtn={theme?.colors?.buttonSecondary?.text}
                secondaryBtnBgColor={theme?.colors?.buttonSecondary?.background}
                linkColor={theme?.colors?.link.text}
                className={styles['main-body']}
            >
                {/* Loading */}
                {isFirstLoad && <FirstLoading open={true} />}
                {!isFirstLoad && (
                    <>
                        {/* Navigation */}
                        <Navigation1
                            items={[
                                {
                                    title: 'Work',
                                    link: '/projects/motion/work',
                                },
                                {
                                    title: 'Agency',
                                    link: '/projects/motion/agency',
                                },
                                {
                                    title: 'Contact',
                                    link: '/projects/motion/contact',
                                },
                                {
                                    title: 'Dark mode',
                                    link: '/projects/theme',
                                },
                            ]}
                            position="fixed"
                            background={theme?.colors?.background}
                            logoColor={theme?.colors?.primary}
                            navColor={theme?.colors?.primary}
                            navActiveColor={theme?.colors?.link.text}
                            navHoverColor={theme?.colors?.link.text}
                            boxShadow={`${
                                theme?.colors?.boxShadow?.rgba
                                    ? `rgba(${theme?.colors?.boxShadow?.rgba?.r}, ${theme?.colors?.boxShadow?.rgba?.g}, ${theme?.colors?.boxShadow?.rgba?.b}, ${theme?.colors?.boxShadow?.rgba?.a})`
                                    : theme?.colors?.boxShadow
                            } 0px 6px 35px 5px`}
                            logo="Motion"
                            linkLogo="/projects/motion"
                        />
                    </>
                )}

                {/* Home of home */}
                <section className={`${styles.home} ${styles.section}`}>
                    <animated.p style={pHomeAnimated}>
                        Motion is a digital brand agency that lives where
                        design, technology, and experience collide. We are
                        obsessed with creativity — challenging what is, while
                        defining what comes next.
                    </animated.p>
                </section>

                {/* Animation horizontal */}
                <TransformHorizontal
                    items={[
                        [
                            'Research & Strategy',
                            'Content Strategy',
                            'Art Direction',
                            'Prototyping',
                            'Photography',
                        ],
                        [
                            'User Experience',
                            'Web Development',
                            'E-commerce',
                            'Mobile Apps',
                        ],
                        [
                            'User Experience',
                            'Web Development',
                            'E-commerce',
                            'Mobile Apps',
                        ],
                        [
                            'User Experience',
                            'Web Development',
                            'E-commerce',
                            'Mobile Apps',
                        ],
                    ]}
                    className={styles['content-slide']}
                />
            </Section1>
        </>
    );
}