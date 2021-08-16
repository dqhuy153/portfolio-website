import { connectToDatabase } from '../../../util/mongodb/theme-mongodb';

const newTheme = async (req, res) => {
    const { db } = await connectToDatabase();

    const theme = await db
        .collection('movies')
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    res.json(movies);
};

export default newTheme;
