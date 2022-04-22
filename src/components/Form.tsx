import React, { useState, memo } from "react";
import { Button } from "./Button/Button";
import Input from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import { ChatList } from "./Chats/ChatList";
import "./Form.scss";

interface FormProps {
  addMessage: (value: string, name: string) => void;
}

export const Form = memo<FormProps>(({ addMessage }) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
    addMessage(value, name);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        label="Введите имя"
        variant="standard"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        id="outlined-multiline-static"
        rows={4}
        multiline
        placeholder="Введите текст сообщения"
        className="textfield"
        autoFocus={true}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onButtonClick={() => {}} />
    </form>
  );
});
