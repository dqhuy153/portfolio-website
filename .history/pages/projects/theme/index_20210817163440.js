import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import About from '../../../components/theme-selector/About';
import SelectTheme from '../../../components/theme-selector/SelectTheme';
import DarkModeSection from '../../../components/theme-selector/DarkModeSection';
import ManageTheme from '../../../components/theme-selector/ManageTheme';

import Navigation1 from '../../../components/UI/navigation/Navigation1';
import Section from '../../../components/UI/section/Section1';
import useTheme from '../../../hooks/useTheme';

import styles from './theme-selector.module.scss';
import { getThemesDataFromDb } from '../../../util/projects/theme/fetchThemeData';
import ModalOneInput from '../../../components/UI/modal/ModalOneInput';

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

    const handleSaveTheme = async (theme) => {
        //save to db
        await fetch('/api/themes/new-theme', {
            method: 'POST',
            body: JSON.stringify(theme),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        applyTheme(theme);
    };

    const handleCloseConfirmModal = () => setShowConfirmModal(false);
    const handleShowConfirmModal = () => setShowConfirmModal(true);

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
            {/* <Modal
                show={showConfirmModal}
                onHide={handleCloseConfirmModal}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleCloseConfirmModal}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseConfirmModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal> */}
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showConfirmModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseConfirmModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Section
                primaryColor={theme?.colors?.primary}
                backgroundColor={theme?.colors?.background}
                boxShadowColor={theme?.colors?.boxShadow}
                className={styles['main-body']}
            >
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
                    onSaveTheme={handleShowConfirmModal}
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
