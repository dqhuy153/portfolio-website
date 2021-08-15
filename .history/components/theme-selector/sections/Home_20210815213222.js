import React from 'react';

export default function Home({ id, className, ...props }) {
    return (
        <section id={id} className={className}>
            <p>Home</p>
        </section>
    );
}

// import React from 'react';
// import Section from '../../UI/section/section1';

// import styles from './Home.module.scss';

// export default function Home({
//     id,
//     className,
//     primaryColor,
//     secondaryColor,
//     background,
//     ...props
// }) {
//     return (
//         <Section
//             id={id}
//             className={`${styles['section-container']} ${className}`}
//             primaryColor={primaryColor}
//             background={background}
//         >
//             <p className={styles.title}>Home</p>
//         </Section>
//     );
// }
