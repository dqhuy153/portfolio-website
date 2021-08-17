import themeController from '../../../controllers/theme/themeController';

const newTheme = (req, res) => {
    themeController.postNewTheme(req, res);
};

export default newTheme;
