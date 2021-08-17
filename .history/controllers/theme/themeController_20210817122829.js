import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

const COLLECTION_NAME = 'theme';

const { db } = await connectToDatabase();
const themeCollection = db.collection(COLLECTION_NAME);

export const postNewTheme = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);

        try {
            const newTheme = req.body;

            if (!newTheme) {
                throw new Error('Not found body provided!');
            }

            const result = await themeCollection.insertOne(newTheme);

            res.status(201).json(result);
        } catch (error) {
            console.log(message);

            res.status(200).json({
                error: true,
                message: error.message,
            });
        }
        // const theme = await db
        //     .collection('movies')
        //     .find({})
        //     .sort({ metacritic: -1 })
        //     .limit(20)
        //     .toArray();
        // res.json(movies);
    }
};
