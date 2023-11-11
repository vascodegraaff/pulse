import TelegramBot, { Message } from "node-telegram-bot-api";
import { UserState } from "../types";
import dotenv from "dotenv";
import { callOpenAI } from "./openai";
import { ChatCompletionMessageParam } from "openai/resources";
dotenv.config();

const userStates: Record<number, UserState> = {};
const questions = [
  {
    text: "How are you feeling today?",
    handler: (response: string, state: UserState) => {
      // Handle response
      console.log(response);
    },
  },
  {
    text: "How many hours did you sleep last night?",
    handler: (response: string, state: UserState) => {
      // Handle response
      console.log(response);
    },
  },
  // Add more questions as needed
];

export async function handleConversation(
  msg: Message,
  bot: TelegramBot,
  message_history: ChatCompletionMessageParam[],
): Promise<string | void> {
  const chatId = msg.chat.id;

  if (!userStates[chatId]) {
    userStates[chatId] = { currentQuestionIndex: 0, responses: {} };
  }

  const currentState = userStates[chatId];
  const currentQuestion = questions[currentState.currentQuestionIndex];

  if (msg.text) {
    console.log(msg);
    const response = await callOpenAI(message_history);
    if (response) {
      console.log("Response", response);
      bot.sendMessage(chatId, response);
      return response;
    }
  }

  if (msg.text && currentQuestion) {
    currentQuestion.handler(msg.text, currentState);
    currentState.currentQuestionIndex++;

    const nextQuestion = questions[currentState.currentQuestionIndex];
    if (nextQuestion) {
      //   bot.sendMessage(chatId, nextQuestion.text);
    } else {
      // End of questionnaire, process responses
      console.log(userStates);
    }
  }
}
