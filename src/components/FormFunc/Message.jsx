import React from 'react';

export const Message = (props) => {
  return (
    <>
      <p className="author">{props.message.author}:</p>
      <p className="text">{props.message.message}</p>
    </>
  );
};
