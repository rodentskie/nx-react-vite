import { DynamoDB } from 'aws-sdk';

export const dbInstance = (): DynamoDB => {
  const dynamoDB = new DynamoDB({
    endpoint: process.env['DB_ENDPOINT'] || 'http://localhost:8000',
    region: process.env['REGION'] || 'us-east-1',
  });

  return dynamoDB;
};
