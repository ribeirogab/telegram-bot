import TelegramBot from 'node-telegram-bot-api';

import { env } from './env';

const bot = new TelegramBot(env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});
