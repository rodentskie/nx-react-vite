import { dbInstance } from '../db';
export default async function () {
  const dynamoDB = dbInstance();

  const tables = ['migrations', 'certificates', 'badges'];
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
