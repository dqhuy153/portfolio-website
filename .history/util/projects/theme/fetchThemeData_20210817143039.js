import * as themes from '../models/themes.json';
import { setToLS } from '../util/storage/LocalStorage';

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

        setToLS('all-themes', themes);
    } catch (error) {
        console.log(error);
        setToLS('all-themes', themes.default);
    }
};

export default fetchThemesData;
