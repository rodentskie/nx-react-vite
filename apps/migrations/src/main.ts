import { config } from 'dotenv';
import { DynamoDB } from 'aws-sdk';

import service from './server';

config();

const ACTIONS = {
  seeds: service.seeds,
};

async function main(action: string) {
  const executeAction = ACTIONS[action];

  if (!executeAction) {
    console.log('Entry point not supported.');
    process.exit(0);
  }

  const dynamoDB = new DynamoDB({
    endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
    region: 'us-east-1', // You can set any valid region
  });

  // Use the `listTables` method to list all tables
  dynamoDB.listTables({}, (err, data) => {
    if (err) {
      console.error(
        'Unable to list tables. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('Table names:', data.TableNames);
    }
  });

  try {
    await executeAction();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

main(process.env.ENTRY_POINT || 'seeds');
