import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { Input } from './Input';
import { List } from './List';

export const Form = () => {
  const [defaultMessage] = useState('Ожидайте ответа');
  const [bot] = useState('Автоответ');
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);
  const handleClick = () => {
    setMessageList([...messageList, { message, author, botMessage: false }]);
    setMessage('');
    setAuthor('');
  };
  const changeАuthor = (event) => {
    setAuthor(event.target.value);
  };
  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  useEffect(() => {
    if (messageList.length && !messageList[messageList.length - 1].botMessage) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            message: defaultMessage,
            author: bot,
            botMessage: true,
          },
        ]);
      }, 1000);
    }
  }, [messageList.length]);

  return (
    <div className="content">
      <List messages={messageList} />
      <div className="form">
        <Input
          placeholder="Введите ваше имя"
          author={author}
          change={changeАuthor}
        />
        <Textarea change={changeMessage} message={message} />
        <Button name="Отправить" click={handleClick} />
      </div>
    </div>
  );
};
