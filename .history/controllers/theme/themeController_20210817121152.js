import { connectToDatabase } from '../../util/mongodb/theme-mongodb';

export const postNewTheme = async (req, res) => {
    const { db } = await connectToDatabase();

    if (req.method === 'POST') {
        console.log(req.body);
    }
};
