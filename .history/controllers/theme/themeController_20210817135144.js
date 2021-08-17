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
                    id: 'T003',
                    name: 'Sea Wave',
                    description: 'Description',
                    colors: {
                        primary: '#0d47a1',
                        secondary: '#107cd4',
                        background: '#9be7ff',
                        body: '#9be7ff',
                        text: '#0d47a1',
                        buttonPrimary: {
                            text: '#fff',
                            background: '#0d47a1',
                        },
                        buttonSecondary: {
                            text: '#0d47a1',
                            background: '#fff',
                        },
                        link: {
                            text: '#ff8d5c',
                            background: '#0d47a1',
                        },
                        boxShadow: 'rgba(56, 164, 236, 0.596)',
                    },
                    font: 'Ubuntu',
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
