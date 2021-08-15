import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../util/storage/LocalStorage';
import _ from 'lodash';
import * as themesJson from '../models/themes.json';

const useTheme = () => {
    const [themes, setThemes] = useState();
    const [theme, setTheme] = useState();
    const [themeLoaded, setThemeLoaded] = useState(false);

    const modalThemes = JSON.stringify(themesJson);

    const setMode = (mode) => {
        setToLS('theme', mode);
        setTheme(mode);
    };

    const getFonts = () => {
        const allFonts = themes.map((item) => item.font); //_.values(_.mapValues(themes, 'font'));
        return allFonts;
    };

    //set themes
    useEffect(() => {
        //load themes from localStorage or directly from models
        const localThemes = getFromLS('all-themes');

        localThemes ? setThemes(localThemes) : setThemes(modalThemes);
    }, [modalThemes]);

    useEffect(() => {
        //get theme
        const localTheme = getFromLS('theme');

        localTheme ? setTheme(localTheme) : setTheme(modalThemes[0]);

        setThemeLoaded(true);
    }, [themes, modalThemes]);

    return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;
