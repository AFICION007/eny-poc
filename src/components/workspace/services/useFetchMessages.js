import { useEffect, useMemo } from "react";

import useAxios from "../../../api/axiosInstance";
import { transformMessage } from "../utils/message";
import { CHATS_URL } from "../../../api/apiUrls";

const PAGE_NO = 1;
const PAGE_SIZE = 100;

const useFetchMessages = (threadId, publicDatabaseId) => {
    const TEAM_ID = localStorage.hasOwnProperty("credentials")
        ? JSON.parse(localStorage.getItem("credentials")).teamId
        : null;

    const [{ data, loading }, refetch] = useAxios(
        {
            url: `${CHATS_URL}/${threadId}/messages`,
            method: "GET",
            params: {
                teamId: TEAM_ID,
                databaseId: publicDatabaseId,
                pageNo: PAGE_NO,
                pageSize: PAGE_SIZE,
            },
        },
        {
            manual: true,
        },
    );

    useEffect(() => {
        refetch();
    }, [threadId, publicDatabaseId, refetch]);

    const fetchedMessages = useMemo(() => {
        return data
            ? data.data.messages.map((message) => transformMessage(message))
            : [];
    }, [data]);

    return {
        fetchedMessages,
        refetching: loading,
        refetchMessages: refetch,
    };
};

export default useFetchMessages;
