import React, { useState, FC, memo } from 'react';
import { Input } from '@mui/material';
import { Button } from './components/Button';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/chats/actions';
import { useParams } from 'react-router-dom';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const { chatId } = useParams();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(chatId){
    dispatch(addMessage(chatId, value))
    setValue('');
  }};

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});
