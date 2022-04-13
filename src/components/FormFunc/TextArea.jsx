import React from 'react';

export const Textarea = (props) => {
  return (
    <textarea
      className="textArea"
      value={props.value}
      onChange={props.change}
    />
  );
};
