import { useReducer, useCallback } from "react";

const initialState = {
  messages: [],
};

const actionTypes = {
  appendMessage: "APPEND_MESSAGE",
  updateMessage: "UPDATE_MESSAGE",
  setMessages: "SET_MESSAGES",
};

function chatReducer(state, action) {
  switch (action.type) {
    case actionTypes.appendMessage:
      return {
        messages: [...state.messages, action.payload],
      };

    case actionTypes.updateMessage:
      const { type, message } = action.payload;

      const messageIndex = state.messages.findIndex(
        ({ messageId }) => message.id === messageId
      );

      if (messageIndex === -1) {
        return state;
      }

      const newMessages = [...state.messages];
      newMessages[messageIndex] = {
        ...newMessages[messageIndex],
        ...(type === "feedback"
          ? { responseFeedback: message.responseFeedback }
          : {}),
        ...(type === "verification" ? { savedQuery: message.savedQuery } : {}),
      };

      return {
        messages: newMessages,
      };
    case actionTypes.setMessages:
      return {
        messages: action.payload,
      };
    default:
      return state;
  }
}

// All the references inside the hook are stable
const useChat = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const appendMessage = useCallback(
    (message) => {
      dispatch({ type: actionTypes.appendMessage, payload: message });
    },
    [dispatch]
  );

  const updateMessage = useCallback(
    (type, message) => {
      dispatch({
        type: actionTypes.updateMessage,
        payload: { type, message },
      });
    },
    [dispatch]
  );

  const setMessages = useCallback(
    (messages) => {
      dispatch({ type: actionTypes.setMessages, payload: messages });
    },
    [dispatch]
  );

  return {
    messages: state.messages,
    appendMessage,
    updateMessage,
    setMessages,
  };
};

export default useChat;
