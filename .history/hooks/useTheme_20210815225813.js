import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../util/storage/LocalStorage';
import _ from 'lodash';
import * as themesJson from '../models/themes.json';

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

    //set themes
    //load themes from localStorage or directly from models
    useEffect(() => {
        const modalThemes = JSON.stringify(themesJson);
        const localThemes = getFromLS('all-themes');

        localThemes ? setThemes(localThemes) : setThemes(modalThemes);
    }, []);

    //set theme
    useEffect(() => {
        const localTheme = getFromLS('theme');

        localTheme ? setTheme(localTheme) : setTheme(themes[0]);

        setThemeLoaded(true);
    }, [themes]);

    return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;
