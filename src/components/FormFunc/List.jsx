import React from 'react';
import { Message } from './Message';

export const List = (props) => {
  return (
    <div className="list">
      <ul className="itemList">
        {props.messages.map((message, index) => (
          <li
            key={index}
            className={message.botMessage ? 'botMessage' : 'message'}
          >
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
