import { FunctionCallHandler } from "ai";
import { ChatCompletionFunctions } from "openai-edge";

export const functionCallHandler: FunctionCallHandler = async (
  chatMessages,
  functionCall,
) => {
  switch (functionCall.name) {
    case "give_daily_summary":
      console.log("Send daily summary");
      break;
    default:
      console.error(`Unknown function call: ${functionCall.name}`);
  }
  console.log("Function call handled.");
};

export const functions: ChatCompletionFunctions[] = [
  {
    name: "give_daily_summary",
    description: "Present the user with a summary",
    parameters: {
      type: "object",
      properties: {
        sentence: {
          type: "string",
          description:
            "Sentence that asks the user to choose topic and what for. Based on the query that triggers this function.",
        },
      },
    },
  },
];
