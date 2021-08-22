import React, { useEffect, useState } from 'react';
import Link1 from './UI/Link1';

export default function Footer(props) {
    const [heightFooter, setHeightFooter] = useState();
    const footerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            //footer animation trigger
            //find percent from start footer => end footer
            if (
                window.scrollY + footerRef.current.clientHeight >
                footerRef.current.offsetTop
            ) {
                let currentScroll =
                    window.scrollY + footerRef.current.clientHeight;
                let offsetTop = footerRef.current.offsetTop;
                let clientHeight = footerRef.current.clientHeight;

                setHeightFooter(clientHeight - (currentScroll - offsetTop));
            }
        });

        return () => {
            pPreEndApi.stop();
        };
    }, []);

    return (
        <footer ref={footerRef} className={styles.footer}>
            <section
                className={`${styles['footer-container']} ${styles.section}`}
                style={{
                    // transform: `translateY(-${heightFooter}px)`,
                    transform: `translateY(-${heightFooter}px)`,
                }}
            >
                <div className={styles.content}>
                    <h2>
                        Starting a new project or want to collaborate with us?
                    </h2>
                    <Link1
                        href="/projects/motion/work"
                        title="Let's talk"
                        margin="8rem 0 0 0"
                        color="var(--background-color)"
                        justifyContent="flex-start"
                    />
                </div>
                <div className={styles.contact}>
                    <p>Footer information</p>
                    <p>Social contact</p>
                    <p>@2021</p>
                </div>
            </section>
        </footer>
    );
}
