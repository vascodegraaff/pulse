import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { handleConversation } from './conversationHandler';


// dotenv.config();
console.log("Hello world");

// const token = process.env.TELEGRAM_TOKEN;
// console.log(token);
// const bot = new TelegramBot("6851464591:AAHTAOIldIMaPT8pl46Jy4O41Pjk-O3eZHc", { polling: true });
const bot = new TelegramBot("5366512490:AAFNjdosYKeQofgp4BdI0ehUissp7-sIGRM", { polling: true });


bot.on('message', (msg) => {
	handleConversation(msg, bot);
});

console.log('Bot has been started...');
