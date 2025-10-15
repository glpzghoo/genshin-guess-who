import { S3Client } from '@aws-sdk/client-s3';

const REQUIRED_ENV_VARS = ['AWS_REGION', 'AWS_S3_BUCKET'] as const;

const missing = REQUIRED_ENV_VARS.filter(
  (key) => !process.env[key] || process.env[key] === ''
);

if (missing.length > 0) {
  throw new Error(
    `Missing required S3 environment variables: ${missing.join(', ')}`
  );
}

const region = process.env.AWS_REGION as string;
const bucket = process.env.AWS_S3_BUCKET as string;

const credentials =
  process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
    ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      }
    : undefined;

export const s3Client = new S3Client({
  region,
  credentials,
});

export const voiceLineBucket = bucket;

