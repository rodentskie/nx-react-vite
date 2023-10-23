import { join } from 'path';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';

export const csvJson = async (file: string): Promise<unknown> => {
  try {
    const badgeCsv = join(__dirname, file);

    const csvData = readFileSync(badgeCsv, 'utf8');

    const data = await new Promise((resolve) => {
      parse(csvData, {
        delimiter: ',',
        header: true,
        complete: function (results) {
          resolve(results.data);
        },
      });
    });

    return data;
  } catch (e: unknown) {
    console.error(e);
  }
};
