import themeController from '../../../controllers/theme/themeController';

const getAllThemes = (req, res) => {
    if (req.method === 'GET') {
        themeController.getAllThemes(req, res);
    }
    if (req.method === 'DELETE') {
        themeController.deleteTheme(req, res);
    }
};

export default getAllThemes;
