import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

const themeController = {
    getAllThemes: async (req, res) => {
        if (req.method === 'GET') {
            const { db } = await connectToDatabase();

            const themes = await db.collection('theme').find().toArray();

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

                const { db } = await connectToDatabase();

                const result = await db.collection('theme').insertOne({
                    id: 'T001',
                    name: 'Light default',
                    description: 'Description',
                    colors: {
                        primary: '#333',
                        secondary: '#666',
                        background: '#fff',
                        body: '#fff',
                        text: '#333',
                        buttonPrimary: {
                            text: '#fff',
                            background: '#333',
                        },
                        buttonSecondary: {
                            text: '#333',
                            background: '#fff',
                        },
                        link: {
                            text: '#1771bb',
                            background: '#fff',
                        },
                        boxShadow: 'rgba(100, 100, 111, 0.2)',
                    },
                    font: '',
                });

                res.status(201).json(result);
            } catch (error) {
                console.log(error.message);

                res.status(200).json({
                    error: true,
                    message: error.message,
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
