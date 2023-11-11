import TelegramBot from "node-telegram-bot-api";
import { handleConversation } from "./conversationHandler";
import { sendSummary } from "./summaries";
import { ChatCompletionMessageParam } from "openai/resources";

// dotenv.config();
console.log("Bot is running...");

const filip_bot_token = "6851464591:AAHTAOIldIMaPT8pl46Jy4O41Pjk-O3eZHc";
const filip_chat_id = "6203900314";
const vasco_bot_token = "5366512490:AAFNjdosYKeQofgp4BdI0ehUissp7-sIGRM";
const abel_bot_token = "6412114419:AAECP2ZXKI8E6roMoH8rOFej6yOn0mfqZ6M";
const abel_chat_id = "6389293420";
// const token = process.env.TELEGRAM_TOKEN;
// console.log(token);

const bot = new TelegramBot(abel_bot_token, { polling: true });

const message_history: ChatCompletionMessageParam[] = [];

bot.on("message", async (msg) => {
  if (msg.text) {
    message_history.push({ role: "user", content: msg.text });
  }
  const response = await handleConversation(msg, bot, message_history);
  if (response) {
    message_history.push({ role: "assistant", content: response });
  }
});

sendSummary(bot, abel_chat_id, "0 8 * * *");
