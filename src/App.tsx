import React, { FC, useEffect, useState, useCallback } from "react";
import { nanoid } from "nanoid";

import "./App.scss";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { AUTHOR } from "./constants";
import { ChatList } from "./components/Chats/ChatList";

interface Message {
  id: string;
  author: string;
  value: string;
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: nanoid(),
            author: AUTHOR.BOT,
            value: "Please wait for human's answer",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = useCallback((value: string, name: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: name,
        value,
      },
    ]);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="chats">
          <h2>Your Chats</h2>
          <ChatList />
        </div>
        <div className="formWrapper">
        <MessageList messages={messages} />
        <Form addMessage={addMessage} />
        </div>
      </div>
    </>
  );
};
