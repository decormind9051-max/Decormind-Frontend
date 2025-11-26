import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

const client = new SecretsManagerClient({});
let cachedSecret;

export const getMongoSecret = async () => {
  if (cachedSecret) {
    return cachedSecret;
  }

  const secretId = process.env.MONGODB_SECRET_ID;

  if (!secretId) {
    throw new Error('MONGODB_SECRET_ID is not configured.');
  }

  const command = new GetSecretValueCommand({ SecretId: secretId });
  const response = await client.send(command);

  try {
    cachedSecret = JSON.parse(response.SecretString);
  } catch (error) {
    throw new Error('Mongo secret must be valid JSON.');
  }

  return cachedSecret;
};



