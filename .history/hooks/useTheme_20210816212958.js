import { useEffect, useState } from 'react';

import { setToLS, getFromLS } from '../util/storage/LocalStorage';

import * as themesJson from '../models/themes.json';

const jsonTheme = JSON.stringify(themesJson.default);
const modalThemes = JSON.parse(jsonTheme);

const useTheme = () => {
    const [themes, setThemes] = useState([]);
    const [theme, setTheme] = useState({});
    const [themeLoaded, setThemeLoaded] = useState(false);

    let unsave = 0;

    const setThemeMode = (modeId) => {
        const theme = themes.find((t) => t.id === modeId);

        setToLS('theme', theme);

        setTheme(theme);
    };

    const getFonts = () => {
        const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
        return allFonts;
    };

    const setTryTheme = (theme) => {
        setTheme(theme);
        unsave = unsave + 1;
        console.log(unsave);
    };

    const applyTheme = (theme) => {
        setToLS('theme', theme);
        setThemes((prevState) => [...prevState, theme]);
        setTheme(theme);
    };

    useEffect(() => {
        const localThemes = getFromLS('all-themes');
        const localTheme = getFromLS('theme');

        localThemes ? setThemes(localThemes) : setThemes(modalThemes);
        localTheme ? setTheme(localTheme) : setTheme(modalThemes[0]);

        setThemeLoaded(true);
    }, []);

    return {
        theme,
        themes,
        themeLoaded,
        setThemeMode,
        setTryTheme,
        applyTheme,
        getFonts,
    };
};

export default useTheme;