import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../util/storage/LocalStorage';
import _ from 'lodash';

export default  const useTheme = () => {
    const themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes[0]);
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
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes[0]);
        setThemeLoaded(true);
    }, [themes]);

    return { theme, themeLoaded, setMode, getFonts };
};
