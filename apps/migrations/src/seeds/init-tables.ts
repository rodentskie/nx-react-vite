import { DynamoDB } from 'aws-sdk';

export default async function () {
  console.log('Asdasdasdasxxxxxxxxxx');

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
}
