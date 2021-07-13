import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ toDoList, handleToggle, deleteToDo }) => (
  <div>
    {toDoList.map((todo) => (
      <Todo key={todo.id} toDo={todo} handleToggle={handleToggle} deleteToDo={deleteToDo} />
    ))}
  </div>
);

TodoList.defaultProps = { toDoList: [], handleToggle: () => {}, deleteToDo: () => {} };
TodoList.propTypes = {
  toDoList: PropTypes.checkPropTypes(PropTypes.array),
  handleToggle: PropTypes.func,
  deleteToDo: PropTypes.func,
};

export default TodoList;
