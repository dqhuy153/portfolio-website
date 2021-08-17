import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

const themeController = {
    getAllThemes: async (req, res) => {
        if (req.method === 'GET') {
            // const { db } = await connectToDatabase();

            const client = await MongoClient.connect(
                `mongodb+srv://${process.env.MONGODB_CONN_USERNAME}:${process.env.MONGODB_CONN_PASSWORD}@cluster0.imwcv.mongodb.net/themes?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            );

            const db = client.db();

            const meetupsCollection = db.collection('meetups');

            const result = await meetupsCollection.insertOne(data);

            const themes = await db.collection('theme').find();

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

                const result = await themeCollection.insertOne(newTheme);

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