import React from 'react';

import Todo from './Todo';

const TodoList = ({
  visibleTodos,
  onTodoClick
}) => (
  <ul>
    {
      visibleTodos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))
    }
  </ul>
);

export default TodoList;
