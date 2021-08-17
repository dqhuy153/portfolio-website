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
                    id: 'T002',
                    name: 'Dark default',
                    description: 'Description',
                    colors: {
                        primary: '#fff',
                        secondary: '#ccc',
                        background: '#222831',
                        body: '#222831',
                        text: '#fff',
                        buttonPrimary: {
                            text: '#222831',
                            background: '#fff',
                        },
                        buttonSecondary: {
                            text: '#fff',
                            background: '#222831',
                        },
                        link: {
                            text: '#fae3b4',
                            background: '#fff',
                        },
                        boxShadow: 'rgba(193, 122, 235, 0.4)',
                    },
                    font: 'Arial',
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
