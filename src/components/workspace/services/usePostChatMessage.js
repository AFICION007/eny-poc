import { useMemo, useCallback } from "react";

import useAxios from "../../../api/axiosInstance";
import { transformMessage } from "../utils/message";
import { CHATS_URL } from "../../../api/apiUrls";

const usePostChatMessage = (threadId, publicDatabaseId) => {
    const TEAM_ID = localStorage.hasOwnProperty("credentials")
        ? JSON.parse(localStorage.getItem("credentials")).teamId
        : null;

    const [{ data, loading }, execute] = useAxios(
        {
            url: `${CHATS_URL}/${threadId}/messages`,
            method: "POST",
            params: {
                teamId: TEAM_ID,
                databaseId: publicDatabaseId,
            },
            timeout: 60000,
        },
        { manual: true },
    );

    const postChatMessage = useCallback(
        (message) => {
            execute({
                data: {
                    userMessage: message,
                },
            });
        },
        [execute],
    );

    const responseMessage = useMemo(
        () => (data ? transformMessage(data.data.message) : undefined),
        [data],
    );

    return {
        responseMessage,
        fetchingMessage: loading,
        postChatMessage,
    };
};

export default usePostChatMessage;
