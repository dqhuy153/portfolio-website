import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

const themeController = {
    getAllThemes: async (req, res) => {
        if (req.method === 'GET') {
            const { themeCollection } = await connectToDatabase();

            const themes = await themeCollection.find().toArray();

            res.status(200).json(themes);
        }
    },

    postNewTheme: async (req, res) => {
        if (req.method === 'POST') {
            const { themeCollection } = await connectToDatabase();

            try {
                const newTheme = req.body;

                if (!newTheme) {
                    throw new Error('Not found body provided!');
                }

                if (req.body.pin !== process.env.ADMIN_PIN) {
                    return res.status(200).json({
                        isAuthenticated: false,
                        message: 'Wrong PIN',
                    });
                }

                const result = await themeCollection.insertOne(newTheme.theme);

                res.status(201).json({ ...result, isAuthenticated: true });
            } catch (error) {
                console.log(error.message);

                res.status(200).json({
                    error: true,
                    message: error.message,
                    isAuthenticated: false,
                });
            }
        }
    },

    deleteTheme: async (req, res) => {
        if (req.method === 'DELETE') {
            const { themeCollection } = await connectToDatabase();

            try {
                const themeReqData = req.body;

                if (!themeReqData) {
                    throw new Error('Not found body provided!');
                }

                if (req.body.pin !== process.env.ADMIN_PIN) {
                    return res.status(200).json({
                        isAuthenticated: false,
                        message: 'Wrong PIN',
                    });
                }

                const result = await themeCollection.deleteOne({
                    _id: ObjectId(themeReqData.themeId),
                });

                res.status(201).json({ ...result, isAuthenticated: true });
            } catch (error) {
                console.log(error.message);

                res.status(200).json({
                    error: true,
                    message: error.message,
                    isAuthenticated: false,
                });
            }
        }
    },
};

export default themeController;
// const theme = await db
//     .collection('movies')
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
// res.json(movies);
