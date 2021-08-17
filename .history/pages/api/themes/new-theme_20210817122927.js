import { postNewTheme } from '../../../controllers/theme/themeController';

const newTheme = (req, res) => {
    postNewTheme(req, res);
};

export default newTheme;
