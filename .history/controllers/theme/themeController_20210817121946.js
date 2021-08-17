import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

export const postNewTheme = async (req, res) => {
    const { db } = await connectToDatabase();

    if (req.method === 'POST') {
        console.log(req.body);

        try {
            const newTheme = req.body;

            if (!newTheme) {
                throw new Error('');
            }
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
