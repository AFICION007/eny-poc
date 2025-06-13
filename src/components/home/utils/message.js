import { getSourcesFromAgent } from "./modes";

export const transformMessage = ({ sender, mode, answer, ...data }) => {
  if (sender === "friday") {
    return {
      type: "chart",
      sender: sender,
      response: answer,
      sources: getSourcesFromAgent(mode, data),
    };
  }

  return {
    type: "chat",
    sender: sender,
    parsedMessages: parsedMessageParts,
  };
};

export const getUserMessage = (query) => {
  return {
    type: "chat",
    sender: "user",
    parsedMessages: [
      {
        type: "UNFORMATTED_TEXT",
        lang: "",
        content: query,
      },
    ],
  };
};
