import { MongoClient } from 'mongodb';

const MONGODB_DB = 'themes';
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_CONN_USERNAME}:${process.env.MONGODB_CONN_PASSWORD}@cluster0.imwcv.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

if (!MONGODB_DB) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
    );
}

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
                };
            }
        );
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
