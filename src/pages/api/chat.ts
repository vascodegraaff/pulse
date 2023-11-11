// import { NextApiRequest, NextApiResponse } from "next";
// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { Configuration, OpenAIApi } from "openai-edge";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const model = process.env.OPENAI_MODEL;

// const system_prompt = "You are Pulse, a personal health and fitness coach.";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === "POST") {
//     // const { messages } = req.body;

//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo-1106",
//       stream: true,
//       messages: [
//         {
//           role: "system",
//           content: system_prompt,
//         },
//         { role: "user", content: "What is love?" },
//       ],
//     });

//     // const response = await openai.createChatCompletion({
//     //   model: model as string,
//     //   messages: [
//     //     {
//     //       role: "system",
//     //       content: system_prompt,
//     //     },
//     //     ...messages,
//     //   ],
//     //   temperature: 0.7,
//     //   stream: true,
//     // });

//     const stream = OpenAIStream(response);
//     return new StreamingTextResponse(stream);
//     // res.status(200).json(new StreamingTextResponse(stream));
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  // const { messages } = body instanceof ReadableStream ? {} : body;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: "Marathon run" }],
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
