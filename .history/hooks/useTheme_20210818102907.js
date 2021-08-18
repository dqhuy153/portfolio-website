//first version idea in: https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

import { useEffect, useState } from 'react';

import { setToLS, getFromLS } from '../util/storage/LocalStorage';

import * as themesJson from '../models/themes.json';

const jsonTheme = JSON.stringify(themesJson.default);
const modalThemes = JSON.parse(jsonTheme);

const useTheme = () => {
    const [themes, setThemes] = useState([]);
    const [theme, setTheme] = useState({});
    const [themeLoaded, setThemeLoaded] = useState(false);
    const [unsave, setUnsave] = useState(0); //save number of unsave through ID

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
    };

    const applyTheme = (theme) => {
        setToLS('theme', theme);

        //set placeholder id for unsave theme, till page reload, it's gone
        theme.id = 'US' + unsave;
        setUnsave((prevState) => prevState + 1);
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
        setThemes,
    };
};

export default useTheme;
