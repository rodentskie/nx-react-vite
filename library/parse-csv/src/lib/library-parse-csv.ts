import { join } from 'path';
// import { readFileSync } from 'fs';
// import {parse} from 'papaparse';

export const csvJson = (file: string) => {
  const badgeCsv = join(__dirname, 'file');

  console.log(badgeCsv);
  // const csvData = readFileSync(badgeCsv, 'utf8');

  // parse(csvData, {
  //   delimiter: ',',
  //   header: true,
  //   complete: function (results) {
  //     console.log('Finished:', results);
  //   },
  // });
};
