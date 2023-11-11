import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot("6851464591:AAHTAOIldIMaPT8pl46Jy4O41Pjk-O3eZHc", { polling: true });
import { env } from '~/env.mjs';


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});

export default (req, res) => {
  res.status(200).json({ status: 'ok' });
};


