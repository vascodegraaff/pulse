import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import { generateDailySummary } from "./summaries";

const client = new OpenAI({
  apiKey: "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",
});

const system_prompt =
  "You are Pulse, a personal health and fitness coach. Be concise. Don't say you're a language model.";

export const callOpenAI = async (
  message_history: ChatCompletionMessageParam[],
): Promise<string | null> => {
  const runner = client.beta.chat.completions.runFunctions({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: system_prompt,
      },
      ...message_history,
    ],
    functions: [
      {
        function: generateDailySummary,
        description: "Returns a daily summary",
        parameters: { type: "object", properties: {} },
      },
    ],
  });

  const finalContent = await runner.finalContent();
  console.log();
  console.log("Final content:", finalContent);
  return finalContent;
  // console.log(message_history);
  // const chatCompletion = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "system",
  //       content: system_prompt,
  //     },
  //     ...message_history,
  //   ],
  //   model: "gpt-3.5-turbo",
  //   functions,
  // });
  // return chatCompletion.choices[0].message.content;
};
