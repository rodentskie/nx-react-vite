import { csvJson } from '@practera-badges/library/parse-csv';
export default async function () {
  const file = '../assets/initial-badges.csv';

  csvJson(file);
}
