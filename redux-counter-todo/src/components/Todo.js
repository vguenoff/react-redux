import React from 'react';

const Todo = ({
  text,
  completed,
  onClick
}) => (
  <li
    style={{ textDecoration: completed && 'line-through' }}
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export default Todo;
