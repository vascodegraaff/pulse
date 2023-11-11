import { CronJob } from 'cron';
import TelegramBot from 'node-telegram-bot-api';

// TODO: Implement this function
function generateDailySummary() {
    return 'This is your summary of the day: \n\n 1. Lorum ipsum...';
}

export function sendSummary(bot: TelegramBot, chatId: string, cronTime: string) {
    const message = generateDailySummary();
    const job = new CronJob(cronTime, () => {
        bot.sendMessage(chatId, message);
    });
    console.log("Message sent: " + message)
    job.start();
}