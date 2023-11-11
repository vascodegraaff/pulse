import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { handleConversation } from './conversationHandler';
import { sendSummary } from './summaries';

// dotenv.config();
console.log("Bot is running...");

const filip_bot_token = "6851464591:AAHTAOIldIMaPT8pl46Jy4O41Pjk-O3eZHc"
const filip_chat_id = "6203900314"
const vasco_bot_token = "5366512490:AAFNjdosYKeQofgp4BdI0ehUissp7-sIGRM"

// const token = process.env.TELEGRAM_TOKEN;
// console.log(token);

const bot = new TelegramBot(filip_bot_token, { polling: true });

bot.on('message', (msg) => {
	handleConversation(msg, bot);
});

sendSummary(bot, filip_chat_id, '0 8 * * *');
