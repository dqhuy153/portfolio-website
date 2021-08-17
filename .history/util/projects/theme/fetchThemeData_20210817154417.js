import * as themesFile from '../../../models/themes.json';
import { setToLS } from '../../storage/LocalStorage';

const fetchThemesData = async () => {
    try {
        const response = await fetch('/api/themes');

        if (!response.ok) {
            throw new Error('Fetch themes failed!');
        }

        const themesData = await response.json();

        if (!themesData) {
            throw new Error('No theme provided!');
        }

        //if themes is default, keep theme
        //else variable an id for theme to match source course in useTheme (find id)
        const themes = themesData.map((item) => {
            if (!item.default) {
                return {
                    ...item,
                    id: item._id.toString(),
                };
            } else {
                return item;
            }
        });

        console.log(themes);
        return { themes };
    } catch (error) {
        console.log(error);
        return { error };
    }
};

const getThemesDataFromDb = async () => {
    const result = await fetchThemesData();

    if (result.error) {
        alert(error.message);
    }

    console.log(result.themes);

    return result?.themes;
};

const setThemeToLS = async () => {
    const result = await fetchThemesData();

    if (result.error) {
        setToLS('all-themes', themesFile.default);

        console.log(error.message);
    }

    if (result.themes) {
        setToLS('all-themes', result.themes);
    }
};

export { getThemesDataFromDb, setThemeToLS };
