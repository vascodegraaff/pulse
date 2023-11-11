import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { functions } from "~/lib/chat-functions";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const model = process.env.OPENAI_MODEL;

const system_prompt = "You are Pulse, a personal health and fitness coach.";

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method === "POST") {
    const { messages } = await req.json();

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-1106",
      stream: false,
      messages: [
        {
          role: "system",
          content: system_prompt,
        },
        ...messages,
      ],
      functions: functions,
    });

    console.log(response);

    const stream = OpenAIStream(response, {
      async onCompletion(completion) {
        console.log("Completion:", completion);
        return res.status(200).json(new StreamingTextResponse(stream));
      },
    });
    return new StreamingTextResponse(stream);
    // res.status(200).json(new StreamingTextResponse(stream));
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
