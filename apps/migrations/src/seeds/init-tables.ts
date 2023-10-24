import { DynamoDB } from 'aws-sdk';

export default function () {
  const dynamoDB = new DynamoDB({
    endpoint: 'http://localhost:8000',
    region: 'us-east-1',
  });

  // Use the `listTables` method to list all tables
  dynamoDB.listTables({}, (err, data) => {
    if (err) {
      console.error(
        'Unable to list tables. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('Table names tae fire:', data.TableNames);
    }
  });
}
