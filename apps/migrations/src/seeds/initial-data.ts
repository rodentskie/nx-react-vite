import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { csvJson } from '@practera-badges/library/parse-csv';
import { BadgesField, CertificatesField } from '@practera-badges/library/types';

import { dbInstance } from '../db';

export default async function () {
  const badgeFile = 'assets/initial-badges.csv';
  const certificateFile = 'assets/initial-certificates.csv';

  const badgeData = (await csvJson(badgeFile)) as BadgesField[];
  const certificateData = (await csvJson(
    certificateFile
  )) as CertificatesField[];

  const documentClient = new DocumentClient({ service: dbInstance() });

  const params = {
    TransactItems: [],
  };

  badgeData.forEach((data) => {
    const putData = {
      Put: {
        TableName: 'badges',
        Item: {
          ...data,
        },
      },
    };

    params.TransactItems.push(putData);
  });

  certificateData.forEach((data) => {
    const putData = {
      Put: {
        TableName: 'certificates',
        Item: {
          ...data,
        },
      },
    };

    params.TransactItems.push(putData);
  });

  documentClient.transactWrite(params, (err, data) => {
    if (err) {
      console.error('Unable to complete transaction. Error:', err, err.stack);
    } else {
      console.log(
        'Transaction completed successfully:',
        JSON.stringify(data, null, 2)
      );
    }
  });
}
