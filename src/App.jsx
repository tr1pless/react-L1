import React, { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([])
  

  useEffect(() => {
    if(messages.length > 0 &&
       messages[messages.length -1].author !== AUTHOR.BOT) {
      const timeout = setTimeout(() => {
        setMessages([...messages, {
          author: AUTHOR.BOT,
          value: "Please wait for human's answer"
        }])
      }, 1000)
  
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [messages]);


const addMessage = (value,name) => {
  setMessages([
    ...messages, 
    {
    author: name,
    value,
  }])
  console.log(name)
  console.log(messages)
}

  return (
    <>
    <MessageList messages={messages}/>
      <Form addMessage={addMessage}/>
    </>
  );
};
