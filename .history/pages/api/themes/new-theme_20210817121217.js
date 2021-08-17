import { postNewTheme } from '../../../controllers/theme/themeController';

const newTheme = async (req, res) => {
    postNewTheme(req, res);

    // const theme = await db
    //     .collection('movies')
    //     .find({})
    //     .sort({ metacritic: -1 })
    //     .limit(20)
    //     .toArray();
    // res.json(movies);
};

export default newTheme;
