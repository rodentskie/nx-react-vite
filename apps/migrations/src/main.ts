import { config } from 'dotenv';

import service from './server';

config();

const ACTIONS = {
  seeds: service.seeds,
};

async function main(action: string) {
  const executeAction = ACTIONS[action];

  if (!executeAction) {
    console.log('Entry point not supported.');
    process.exit(0);
  }

  try {
    await executeAction();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

main(process.env.ENTRY_POINT || 'seeds');
