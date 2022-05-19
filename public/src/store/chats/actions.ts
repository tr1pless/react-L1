import { Dispatch } from "redux";
import { AUTHOR } from "../../constants";
import { AddChat, DeleteChat, AddMessage, Message } from "./types";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const deleteChat: DeleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMessage: AddMessage = (chatId: string, message) => ({
  chatId,
  type: ADD_MESSAGE,
  message,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply: any =
  (chatId: string, message: Message) => (dispatch: Dispatch) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            text: "Hello, im BOT. Please wait for a human's answer ",
            author: AUTHOR.BOT,
          })
        );
      }, 1000);
    }
  };
