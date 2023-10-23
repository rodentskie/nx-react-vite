import initialDataHandler from './initial-data';

export default {
  async initialData(): Promise<void> {
    await initialDataHandler();
  },
};
