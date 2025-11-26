# Decormind Interior Design Platform

This project contains a lightweight marketing site for an interior design studio (`frontend/`) and an AWS Lambda + MongoDB Atlas backend (`backend/`) for capturing project inquiries.

## Frontend (HTML / CSS / JavaScript)

```
cd frontend
```

- Open `index.html` directly in a browser or serve it with any static file server.
- Update `window.DECORMIND_API_BASE_URL` in `app.js` (or inline via a script tag) once the backend API Gateway URL is available.

## Backend (Serverless Framework + AWS Lambda)

```
cd backend
npm install
serverless deploy --stage prod
```

Configure the following environment variables or `.env` file (supported by the Serverless Framework):

| Variable | Description |
| --- | --- |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | IAM user or role credentials with permission to deploy and access Secrets Manager |
| `MONGODB_SECRET_ID` | Secrets Manager secret that stores your Mongo connection info (optional if using `MONGODB_URI`) |
| `MONGODB_SECRET_ARN` | ARN for the same secret (used for IAM policy scoping) |
| `MONGODB_DB_NAME` | Target MongoDB database name |
| `MONGODB_URI` | (Optional) Direct MongoDB connection URI if you don't want to use Secrets Manager |
| `ALLOWED_ORIGIN` | Optional CORS origin for the contact form (default `*`) |

Expected secret JSON shape:

```json
{
  "MONGODB_URI": "mongodb+srv://<user>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority"
}
```

If you prefer not to use Secrets Manager, set `MONGODB_URI` directly in your deployment environment. The backend now prioritizes `MONGODB_URI` and falls back to the secret when the env var is not provided.

The `POST /contact` Lambda validates incoming payloads and stores inquiries inside the `inquiries` collection.

## Security note

Never commit raw AWS access keys or MongoDB credentials. Use AWS Secrets Manager + environment variables instead (the app already assumes this). Update the provided placeholder values with your own secure configuration before deploying.

