import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { animated, config, useSpring } from 'react-spring';

import styles from './Motion.module.scss';
import useTheme from '../../../hooks/useTheme';

import FirstLoading from '../../../components/motion/FirstLoading';
import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section1 from '../../../components/UI/section/Section1';
import TransformHorizontal from '../../../components/UI/animation/TransformHorizontal';
import MediaDesc from '../../../components/UI/layout/MediaDesc';
import Image from 'next/image';
import Link1 from '../../../components/motion/UI/Link1';

import caseImg1 from '../../../public/images/motion/case1.jpeg';
import caseImg2 from '../../../public/images/motion/case2.jpeg';
// import caseVid3 from '../../../public/images/motion/case3.mp4';

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

    //turn off loading image in first
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
                fontSize={2}
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

                        {/* Home of home */}
                        <section className={`${styles.home} ${styles.section}`}>
                            <animated.p style={pHomeAnimated}>
                                Motion is a digital brand agency that lives
                                where design, technology, and experience
                                collide. We are obsessed with creativity —
                                challenging what is, while defining what comes
                                next.
                            </animated.p>
                        </section>

                        {/* Animation horizontal */}
                        <section className={styles['content-slide']}>
                            <TransformHorizontal
                                items={[
                                    {
                                        direction: 'left',
                                        values: [
                                            'Research & Strategy',
                                            'Content Strategy',
                                            'Art Direction',
                                            'Prototyping',
                                            'Photography',
                                        ],
                                    },
                                    {
                                        direction: 'right',
                                        values: [
                                            'User Experience',
                                            'Web Development',
                                            'E-commerce',
                                            'Mobile Apps',
                                        ],
                                    },
                                ]}
                                fontSize={9}
                                duration="25s"
                                marginList="0"
                                marginItem="2rem 8rem"
                            />
                            <Link1
                                href="/projects/motion/agency"
                                title="Get to know us"
                                margin="5rem"
                            />
                        </section>

                        {/* Case study */}
                        <section>
                            <MediaDesc
                                mediaComponent={
                                    <Image
                                        src={caseImg1}
                                        alt="home sweet home"
                                        width={6}
                                        height={9}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                }
                                contentWidth="50%"
                                mediaWidth="60%"
                                containerWidth="100%"
                                containerMargin="0 auto"
                                containerPadding="0"
                                gap="14rem"
                                underPCContainerDirection="column"
                                underPCContentWidth="60%"
                                underPCContainerPadding="0 8rem 10rem"
                                underPCMediaWidth="75%"
                                underPCGap="4rem"
                                underTabletContentWidth="100%"
                                underTabletContainerPadding="0 3rem 10rem"
                                underTabletMediaWidth="100%"
                            >
                                <div className={styles['image-desc']}>
                                    <h2>Dialogue38</h2>
                                    <p>
                                        Defining and shaping entire brand spaces
                                    </p>
                                    <Link1
                                        href="/projects/motion/agency"
                                        title="View the project"
                                        justifyContent="flex-start"
                                    />
                                </div>
                            </MediaDesc>
                            <MediaDesc
                                mediaComponent={
                                    <Image
                                        src={caseImg2}
                                        alt="coffee chill"
                                        width={6}
                                        height={9}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                }
                                containerDirection="row-reverse"
                                contentWidth="35%"
                                mediaWidth="40%"
                                containerWidth="100%"
                                containerMargin="0 auto"
                                containerPadding="0"
                                gap="14rem"
                                contentPosition="absolute"
                                contentBottom={0}
                                underPCContentPosition="relative"
                                underPCContainerDirection="column"
                                underPCContentWidth="75%"
                                underPCContainerPadding="0 8rem 10rem"
                                underPCMediaWidth="75%"
                                underPCContainerAlignItems="flex-end"
                                underPCGap="4rem"
                                underTabletContentWidth="100%"
                                underTabletContainerPadding="0 3rem 10rem"
                                underTabletMediaWidth="100%"
                                className={styles['case-study-2']}
                            >
                                <div className={styles['image-desc']}>
                                    <h2>Ensembl</h2>
                                    <p>Cookware that goes beyond the kitchen</p>
                                    <Link1
                                        href="/projects/motion/agency"
                                        title="View the project"
                                        justifyContent="flex-start"
                                    />
                                </div>
                            </MediaDesc>
                            <MediaDesc
                                mediaComponent={
                                    <video
                                        loop
                                        muted
                                        autoPlay
                                        playsInline
                                        style={{
                                            width: '100%',
                                            objectFit: 'cover',
                                        }}
                                    >
                                        <source src="/images/motion/case3.mp4"></source>
                                    </video>
                                }
                                contentWidth="50%"
                                mediaWidth="75%"
                                containerWidth="100%"
                                containerMargin="0 auto"
                                containerPadding="0"
                                gap="14rem"
                                underPCContainerDirection="column"
                                underPCContentWidth="60%"
                                underPCContainerPadding="0 8rem 10rem"
                                underPCMediaWidth="75%"
                                underPCGap="4rem"
                                underTabletContentWidth="100%"
                                underTabletContainerPadding="0 3rem 10rem"
                                underTabletMediaWidth="100%"
                            >
                                <div className={styles['image-desc']}>
                                    <h2>Sotheby&apos;s Institute of Art T</h2>
                                    <p>here’s more to art than auctions </p>
                                    <Link1
                                        href="/projects/motion/agency"
                                        title="View the project"
                                        justifyContent="flex-start"
                                    />
                                </div>
                            </MediaDesc>
                        </section>
                    </>
                )}
            </Section1>
        </>
    );
}
