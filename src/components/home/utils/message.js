export const transformMessage = ({
    id,
    senderRole,
    responseFeedback,
    parsedMessageParts,
    chartEmbed,
    savedQuery,
}) => {
    if (chartEmbed) {
        return {
            type: "chart",
            sender: "friday",
            messageId: id,
            responseFeedback,
            questionId: chartEmbed.questionId,
            sqlQuery: chartEmbed.sql,
            parsedMessages: parsedMessageParts,
            savedQuery: savedQuery,
        };
    }

    return {
        type: "chat",
        sender: senderRole === "USER" ? "user" : "friday",
        messageId: id,
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
