import React, { useState} from 'react';
import { Button } from './Button/Button';


export const Form = ({addMessage}) => {
  const [value, setValue] = useState('')
  const [name, setName] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setValue('')
    addMessage(value,name);
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <p>Введите Имя</p>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <p>Введите ваше сообщение</p>
      <textarea  
      value={value} 
      onChange={e => setValue(e.target.value)}/>
      <Button onButtonClick={() => {}}/>
    </form>
  );
};
