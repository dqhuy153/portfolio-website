import { connectToDatabase } from '../../../util/mongodb/mongodb';

const newTheme = async (req, res) => {
    const { db } = await connectToDatabase();

    const movies = await db
        .collection('movies')
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    res.json(movies);
};

export default newTheme;