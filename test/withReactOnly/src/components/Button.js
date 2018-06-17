import React from 'react';

export const Button = ({ content, handleClick }) => (
  <button onClick={() => handleClick()}>{content}</button>
);
