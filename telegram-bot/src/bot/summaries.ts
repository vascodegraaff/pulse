import { CronJob } from "cron";
import TelegramBot from "node-telegram-bot-api";

// TODO: Implement this function
export function generateDailySummary() {
  // Define daily goals
  const goals = [
    { goal: "Go for a run 🏃", progress: "50%" },
    { goal: "Do 50 pushups 💪", progress: "80%" },
  ];

  // Generate summary text
  let summaryText = " Here is your daily summary:\n\n";
  goals.forEach((goal, index) => {
    summaryText += `${index + 1}. ${goal.goal} - Progress: ${goal.progress}\n`;
  });

  console.log("Generated Summary", summaryText);

  return summaryText;
}

export function sendSummary(
  bot: TelegramBot,
  chatId: string,
  cronTime: string,
) {
  const message = generateDailySummary();
  const job = new CronJob(cronTime, () => {
    bot.sendMessage(chatId, message);
  });
  job.start();
}
