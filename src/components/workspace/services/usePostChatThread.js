import { useCallback } from "react";

import useAxios from "../../../api/axiosInstance";
import { CHATS_URL } from "../../../api/apiUrls";

const usePostChatThread = () => {
    const TEAM_ID = localStorage.hasOwnProperty("credentials")
        ? JSON.parse(localStorage.getItem("credentials")).teamId
        : null;

    const [{ data, loading }, execute] = useAxios(
        {
            url: CHATS_URL,
            method: "POST",
            params: {
                teamId: TEAM_ID,
            },
        },
        { manual: true },
    );

    const postChatThread = useCallback(
        (message, publicDbId) => {
            execute({
                data: {
                    message,
                    databaseId: publicDbId,
                },
            });
        },
        [execute],
    );

    return {
        threadId: data?.data.chat.id,
        loading,
        postChatThread,
    };
};

export default usePostChatThread;
