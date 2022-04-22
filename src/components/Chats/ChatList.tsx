import React, { FC, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface chatList {
  id: number;
  name: string;
  text: string;
}

export const ChatList: FC = () => {
  const chatList = [
    {
      id: "123",
      text: "Hello!",
      name: "A",
    },
    {
      id: "421",
      text: "Hello!",
      name: "B",
    },
    {
      id: "713",
      text: "Hello!",
      name: "C",
    },
  ];

  const [chats] = useState(chatList);

  const result = chats.map((chat) => {
    return (
      <li key={chat.id}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={chat.name}
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {chat.text}
              </Typography>
            }
          />
        </ListItem>
        <hr></hr>
      </li>
    );
  });

  return <List sx={{ width: "100%", maxWidth: 360 }}>{result}</List>;
};
