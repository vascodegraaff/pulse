import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import type { NextRequest } from "next/server";
export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const model = process.env.OPENAI_MODEL;

const system_prompt = "You are Pulse, a personal health and fitness coach.";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { messages } = json;

  const res = await openai.createChatCompletion({
    model: model as string,
    messages: [
      {
        role: "system",
        content: system_prompt,
      },
      ...messages,
    ],
    temperature: 0.7,
    stream: true,
  });

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      try {
        // EXECUTING SERVER STUFF HERE
        // UPLOAD SHIZZLE TO THE DATABASE
      } catch (error) {
        console.error(
          "An error occurred while processing the completion:",
          error,
        );
      }
    },
  });

  return new StreamingTextResponse(stream);
}
