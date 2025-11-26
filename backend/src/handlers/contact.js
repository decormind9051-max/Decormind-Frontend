import { getMongoClient } from '../services/mongo.js';
import { jsonResponse } from '../utils/response.js';
import { validatePayload } from '../utils/validation.js';

const COLLECTION_NAME = 'inquiries';

export const handler = async event => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body || '{}') : (event.body ?? {});
    const validation = validatePayload(body);

    if (!validation.isValid) {
      return jsonResponse(400, { message: validation.message });
    }

    const client = await getMongoClient();
    const dbName = process.env.MONGODB_DB_NAME;

    if (!dbName) {
      throw new Error('MONGODB_DB_NAME environment variable missing.');
    }

    const doc = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      scope: body.scope,
      message: body.message?.trim() || '',
      source: 'decormind-web',
      createdAt: new Date().toISOString()
    };

    const result = await client.db(dbName).collection(COLLECTION_NAME).insertOne(doc);

    return jsonResponse(201, {
      message: 'Inquiry stored',
      inquiryId: result.insertedId
    });
  } catch (error) {
    console.error('Contact handler error:', error);
    const statusCode = error.statusCode || (error.message?.includes('JSON') ? 400 : 500);
    const message = statusCode === 400 ? 'Invalid request payload.' : 'Unable to store inquiry.';
    return jsonResponse(statusCode, { message });
  }
};



