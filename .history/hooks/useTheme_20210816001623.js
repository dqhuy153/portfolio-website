// import { useEffect, useState } from 'react';

// import { setToLS, getFromLS } from '../util/storage/LocalStorage';
// import _ from 'lodash';
// import * as themesJson from '../models/themes.json';

// const jsonTheme = JSON.stringify(themesJson.default);
// const modalThemes = JSON.parse(jsonTheme);

// const useTheme = () => {
//     const [themes, setThemes] = useState();
//     const [theme, setTheme] = useState();
//     const [themeLoaded, setThemeLoaded] = useState(false);

//     const setMode = (themeId) => {
//         const theme = themes.find((t) => t.id === modeId);

//         setTheme(theme);

//         console.log(theme);
//     };

//     const getFonts = () => {
//         const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
//         return allFonts;
//     };

//     useEffect(() => {
//         setThemes(modalThemes);
//         localTheme ? setTheme(localTheme) : setTheme(themes[0]);
//         setThemeLoaded(true);
//     }, []);

//     return { theme, themes, themeLoaded, setMode, getFonts };
// };

// export default useTheme;

import { useEffect, useState } from 'react';

import { setToLS, getFromLS } from '../util/storage/LocalStorage';

import * as themesJson from '../models/themes.json';

const jsonTheme = JSON.stringify(themesJson.default);
const modalThemes = JSON.parse(jsonTheme);

const useTheme = () => {
    const [themes, setThemes] = useState([]);
    const [theme, setTheme] = useState({});
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = (modeId) => {
        const theme = themes.find((t) => t.id === modeId);

        setToLS('theme', theme);
        console.log(themes);
        setTheme(theme);
    };

    const getFonts = () => {
        const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
        return allFonts;
    };

    useEffect(() => {
        const localThemes = getFromLS('all-themes');
        const localTheme = getFromLS('theme');

        localThemes ? setThemes(localThemes) : setThemes(modalThemes);
        localTheme ? setTheme(localTheme) : setTheme(modalThemes[0]);

        setThemeLoaded(true);
    }, []);

    return { theme, themes, themeLoaded, setTheme, getFonts };
};

export default useTheme;
