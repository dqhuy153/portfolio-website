import themeController from '../../../controllers/theme/themeController';

const getAllThemes = (req, res) => {
    themeController.getAllThemes(req, res);
};

export default getAllThemes;
