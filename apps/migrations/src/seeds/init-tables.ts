import { dbInstance } from '../db';
export default async function () {
  const dynamoDB = dbInstance();

  const tables = ['certificates', 'badges'];

  tables.forEach((data) => {
    const params = {
      TableName: data,
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    };

    dynamoDB.createTable(params, (err, data) => {
      if (err) {
        console.error(
          'Unable to create table. Error JSON:',
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log(
          'Created table. Table description JSON:',
          JSON.stringify(data, null, 2)
        );
      }
    });
  });
}
