import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';

export const Form = ({addMessage}) => {
  const [value, setValue] = useState('')
  
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setValue('')
    addMessage(value);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      
      <input 
      type="text" 
      value={value} 
      onChange={e => setValue(e.target.value)}/>
      <Button onButtonClick={() => {}}/>
    </form>
  );
};
