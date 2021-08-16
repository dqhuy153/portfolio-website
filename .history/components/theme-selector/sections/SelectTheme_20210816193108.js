import React, { useEffect } from 'react';

import Card from './UI/Card';
import styles from './SelectTheme.module.scss';

export default function SelectTheme({
    id,
    className,
    themes,
    onSelectTheme,
    ...props
}) {
    const router = useRouter();

    const handleGoToManageTheme = () => {
        router.push('/projects/theme#manage-theme');
    };

    return (
        <section id={id} className={`${className} ${styles.container}`}>
            <h1>Select theme</h1>
            <div className={styles.cards}>
                {themes.map((theme) => (
                    <Card
                        key={theme.id}
                        id={theme.id}
                        name={theme.name}
                        colors={theme.colors}
                        onPrimaryClick={() => onSelectTheme(theme.id)}
                        onSecondaryClick={handleGoToManageTheme}
                    />
                ))}
            </div>
        </section>
    );
}
