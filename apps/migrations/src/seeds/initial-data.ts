import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { csvJson } from '@practera-badges/library/parse-csv';

import { dbInstance } from '../db';

export default async function () {
  const badgeFile = 'assets/initial-badges.csv';
  const certificateFile = 'assets/initial-certificates.csv';

  const badgeData = await csvJson(badgeFile);
  const certificateData = await csvJson(certificateFile);

  const documentClient = new DocumentClient({ service: dbInstance() });

  console.log(documentClient);
  console.log(badgeData);
  console.log(certificateData);
}
