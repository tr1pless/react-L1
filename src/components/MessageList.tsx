import React, { FC } from 'react';

interface Message {
  id:string,
  author: string,
  value: string
}

interface MessageListProps {
  messages: Message[],
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul className='messageList'>
    {messages.map((message, idx) => (
      <li key={idx}>
        {message.author}: {message.value}
      </li>
    ))}
  </ul>
);
