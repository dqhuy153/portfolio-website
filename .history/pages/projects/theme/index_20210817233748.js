import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import About from '../../../components/theme-selector/About';
import SelectTheme from '../../../components/theme-selector/SelectTheme';
import DarkModeSection from '../../../components/theme-selector/DarkModeSection';
import ManageTheme from '../../../components/theme-selector/ManageTheme';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section from '../../../components/UI/section/Section1';
import useTheme from '../../../hooks/useTheme';

import styles from './theme-selector.module.scss';
import { getThemesDataFromDb } from '../../../util/projects/theme/fetchThemeData';
import Modal1 from '../../../components/UI/modal/Modal1';

export default function ThemePage(props) {
    const { theme, themes, setTryTheme, setThemeMode, applyTheme, setThemes } =
        useTheme();
    //IMPORTANT: 'T001': light default
    //IMPORTANT: 'T002': dark default

    //theme structure: (models/themes.json)
    // [{
    //     id,
    //     name,
    //     description,
    //     font,
    //     colors: {
    //         background,
    //         body,
    //         buttonPrimary: {
    //             text,
    //             background
    //         },
    //         buttonSecondary: {
    //             text,
    //             background
    //         },
    //         link: {
    //             text,
    //             background
    //         },
    //         primary,
    //         secondary,
    //         text,
    //         boxShadow: {
    //             rgba: {
    //                 r,
    //                 g,
    //                 b,
    //                 a
    //             }
    //         }
    //     }
    // }];

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pin, setPin] = useState(''); //pin in the confirm modal
    const [placeholderTheme, setPlaceholderTheme] = useState();

    const handleThemeModeChange = (e) => {
        if (e.target.checked) {
            setThemeMode('T002');
        } else {
            setThemeMode('T001');
        }
    };

    const handleSelectTheme = (themeId) => {
        setThemeMode(themeId);
    };

    const handleTryTheme = (theme) => {
        setTryTheme(theme);
    };

    const handleSaveTheme = async () => {
        //save to db
        const reqData = {
            theme: placeholderTheme,
            pin,
        };

        console.log(reqData);

        const response = await fetch('/api/themes/new-theme', {
            method: 'POST',
            body: JSON.stringify(reqData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            alert('Server error! Please try again');
        }

        const data = await response.json();
        console.log(data);

        if (data.error) {
            return alert('Server error! Please try again');
        }

        if (!data.isAuthenticated) {
            return alert('Wrong PIN! Please try again.');
        }

        alert('Add new theme successfully!');

        setShowConfirmModal(false);
    };

    const handleCloseConfirmModal = () => {
        setShowConfirmModal(false);
    };

    //show confirm admin modal when save theme
    const handleConfirmSaveTheme = (theme) => {
        applyTheme(theme);
        setShowConfirmModal(true);
        setPlaceholderTheme(theme);
    };

    //Pin inside confirm modal
    const handleChangePin = (event) => {
        setPin(event.target.value);
    };

    //get latest themesData in db here
    //effect when themes in db change
    useEffect(() => {
        const fetchThemeData = async () => {
            const themesData = await getThemesDataFromDb();

            setThemes(themesData);
        };

        fetchThemeData();
    }, [setThemes]);

    //check checkbox when reload page
    useEffect(() => {
        const themeId = theme.id;
        if (themeId) {
            if (themeId === 'T001') {
                setIsDarkMode(false);
            }
            if (themeId === 'T002') {
                setIsDarkMode(true);
            }
        }
    }, [theme.id]);

    return (
        <>
            <Head>
                <title>Theme</title>
                <meta name="description" content="Theme selector." />
            </Head>

            <Section
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
                {/* Modal section */}
                <Modal1
                    inputMode={true}
                    inputLabel=""
                    inputType="password"
                    maxLengthInput={5}
                    title="Successfully"
                    primaryText="Close"
                    secondaryText="Admin continue"
                    onPrimaryBtnClick={handleCloseConfirmModal}
                    onBackdropClick={handleCloseConfirmModal}
                    onCloseClick={handleCloseConfirmModal}
                    onSecondaryBtnClick={handleSaveTheme}
                    onChangeInput={handleChangePin}
                    show={showConfirmModal}
                >
                    <div className={styles['content-confirm-model']}>
                        <p>
                            Your custom theme saved! Your theme will be only
                            available on your device.
                        </p>
                        <p>If you are admin, please enter PIN</p>
                    </div>
                </Modal1>

                {/* Navigation */}
                <Navigation1
                    items={[
                        { title: 'Dark mode', link: '#dark-mode' },
                        { title: 'Select theme', link: '#select-theme' },
                        { title: 'Manage theme', link: '#manage-theme' },
                        { title: 'About', link: '#about' },
                    ]}
                    position="fixed"
                    background={theme?.colors?.background}
                    logoColor={theme?.colors?.primary}
                    navColor={theme?.colors?.primary}
                    navActiveColor={theme?.colors?.link.text}
                    navHoverColor={theme?.colors?.link.text}
                    boxShadow={`${theme?.colors?.boxShadow} 0px 6px 35px 5px`}
                />
                {/* DarkModeSection
                 Section */}
                <DarkModeSection
                    id="dark-mode"
                    className={styles['section-container']}
                    onModeThemeChange={handleThemeModeChange}
                    primaryColor={theme?.colors?.primary}
                    backgroundColor={theme?.colors?.background}
                    checked={isDarkMode}
                ></DarkModeSection>
                {/* SelectTheme Section */}
                <SelectTheme
                    id="select-theme"
                    className={styles['section-container']}
                    themes={themes}
                    onSelectTheme={handleSelectTheme}
                ></SelectTheme>
                {/* ManageTheme Section */}
                <ManageTheme
                    id="manage-theme"
                    className={styles['section-container']}
                    onTryTheme={handleTryTheme}
                    onSaveTheme={handleConfirmSaveTheme}
                    themes={themes}
                    onDeleteTheme={handleConfirmDeleteTheme}
                ></ManageTheme>

                {/* About Section */}
                <About
                    id="about"
                    className={styles['section-container']}
                ></About>
            </Section>
        </>
    );
}

//try to get active when scrolling

// const homeRef = useRef();
// const aboutRef = useRef();
// const projectRef = useRef();
// const contactRef = useRef();

// let sectionActive = 'home';
// const router = useRouter();

// const sectionArray = [homeRef, aboutRef, projectRef, contactRef];

// useEffect(() => {
//     window.addEventListener('scroll', () => {
//         sectionArray.forEach((itemRef, index) => {
//             if (
//                 window.scrollY >=
//                     itemRef.current.offsetHeight * index - 250 &&
//                 window.scrollY <=
//                     itemRef.current.offsetHeight * (index + 1) - 250
//             ) {
//                 if (sectionActive !== itemRef.current.id) {
//                     router.replace(
//                         `/projects/theme/#${itemRef.current.id}`
//                     );
//                 }
//             }
//         });
//     });
// }, [router]);
