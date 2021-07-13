import React from 'react';
import Todo from './Todo';

const TodoList = ({ toDoList }) => (
  <div>
    {toDoList.map((todo) => <Todo toDo={todo} />)}
  </div>
);

export default TodoList;
