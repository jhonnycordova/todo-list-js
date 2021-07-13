import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ toDoList }) => (
  <div>
    {toDoList.map((todo) => (
      <Todo toDo={todo} />
    ))}
  </div>
);

TodoList.defaultProps = { toDoList: [] };
TodoList.propTypes = { toDoList: PropTypes.checkPropTypes(PropTypes.array) };

export default TodoList;
