import { MongoClient } from 'mongodb';
import { getMongoSecret } from './secrets.js';

let cachedClient;

export const getMongoClient = async () => {
  if (cachedClient) {
    return cachedClient;
  }

  const directEnvUri = process.env.MONGODB_URI;
  let uri = directEnvUri;

  if (!uri) {
    const secret = await getMongoSecret();
    uri = secret.MONGODB_URI || secret.connectionString || secret.uri;
  }

  if (!uri) {
    throw new Error('Mongo secret must include MONGODB_URI or connectionString.');
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 3,
    serverSelectionTimeoutMS: 5000
  });

  await client.connect();
  cachedClient = client;
  return cachedClient;
};

