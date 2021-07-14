import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ toDoList, onHandleToggle, onDeleteToDo }) => (
  <div>
    <h2>To Do List</h2>

    {toDoList.map((todo) => (
      <Todo key={todo.id} toDo={todo} onHandleToggle={onHandleToggle} onDeleteToDo={onDeleteToDo} />
    ))}
  </div>
);

TodoList.defaultProps = { toDoList: [], onHandleToggle: () => {}, onDeleteToDo: () => {} };
TodoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
};

export default TodoList;
