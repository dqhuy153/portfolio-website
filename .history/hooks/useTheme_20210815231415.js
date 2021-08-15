import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../util/storage/LocalStorage';
import _ from 'lodash';

const useTheme = () => {
    const [themes, setThemes] = useState();
    const [theme, setTheme] = useState();
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (mode) => {
        setToLS('theme', mode);
        setTheme(mode);
    };

    const getFonts = () => {
        const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
        return allFonts;
    };

    useEffect(() => {
        const themes = getFromLS('all-themes');
        const localTheme = getFromLS('theme');

        localTheme ? setTheme(localTheme) : setTheme(themes[0]);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;

// import { useEffect, useState } from 'react';
// import { setToLS, getFromLS } from '../util/storage/LocalStorage';
// import _ from 'lodash';
// import * as themesJson from '../models/themes.json';

// const useTheme = () => {
//     const modalThemes = JSON.stringify(themesJson);

//     const [themes, setThemes] = useState(modalThemes);
//     const [theme, setTheme] = useState(modalThemes[0]);
//     const [themeLoaded, setThemeLoaded] = useState(false);

//     const setMode = (mode) => {
//         setToLS('theme', mode);
//         setTheme(mode);
//     };

//     const getFonts = () => {
//         const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
//         return allFonts;
//     };

//     useEffect(() => {
//         //load themes from localStorage or directly from models
//         const localThemes = getFromLS('all-themes');

//         localThemes ? setThemes(localThemes) : setThemes(modalThemes);
//     }, [modalThemes]);

//     useEffect(() => {
//         //get theme
//         const localTheme = getFromLS('theme');

//         localTheme ? setTheme(localTheme) : setTheme(modalThemes[0]);

//         setThemeLoaded(true);
//     }, [themes, modalThemes]);

//     return { theme, themes, themeLoaded, setMode, getFonts };
// };

// export default useTheme;
