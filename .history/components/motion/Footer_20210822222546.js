import React from 'react';

export default function Footer(props) {
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
