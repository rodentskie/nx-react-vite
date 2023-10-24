import initTables from './seeds/init-tables';

export default {
  seeds() {
    const actions = {
      'initial-table': initTables(),
    };

    if (!process.env.MIGRATION_SEEDER) return;

    const entryPoint = process.env.MIGRATION_SEEDER || 'initial-table';

    actions[entryPoint];
  },
};
