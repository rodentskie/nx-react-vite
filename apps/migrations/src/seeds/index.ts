import initialDataHandler from './initial-data';
import initializeTables from './init-tables';

export default {
  async initialData(): Promise<void> {
    await initialDataHandler();
  },

  async initTables(): Promise<void> {
    await initializeTables();
  },
};
