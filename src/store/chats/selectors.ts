import { nanoid } from "nanoid";
import { shallowEqual } from "react-redux";
import { StoreState } from "..";

export const selectChats = (state: StoreState) => state.chats;

export const selectChatList = (state: StoreState) => {
  return Object.entries(state.chats).map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }));
};
