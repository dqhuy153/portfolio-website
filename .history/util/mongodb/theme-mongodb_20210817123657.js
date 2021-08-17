//src: https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
//https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/

import { MongoClient } from 'mongodb';

const MONGODB_DB = 'themes';
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_CONN_USERNAME}:${process.env.MONGODB_CONN_PASSWORD}@cluster0.imwcv.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

const COLLECTION_NAME = 'theme';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(MONGODB_URI, opts).then(
            (client) => {
                return {
                    client,
                    db: client.db(MONGODB_DB),
                    themeCollection: client
                        .db(MONGODB_DB)
                        .collection(COLLECTION_NAME),
                };
            }
        );
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
