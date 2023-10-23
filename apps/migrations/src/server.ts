import seeds from './seeds';

export default {
  async seeds() {
    const actions = {
      'initial-data': seeds.initialData,
      'initial-table': seeds.initTables,
    };

    if (!process.env.MIGRATION_SEEDER) return;

    const entryPoint = process.env.MIGRATION_SEEDER;
    const executeAction = actions[entryPoint];
    await executeAction();

    process.exit(0);
  },
};
