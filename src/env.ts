import 'dotenv/config';
import { get } from 'env-var';

export const env = {
  TELEGRAM_BOT_TOKEN: get('TELEGRAM_BOT_TOKEN').required().asString(),
};
