import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Todo from './Todo';

const TodoList = ({ toDoList, onHandleToggle, onDeleteToDo }) => (
  <div>
    {/* No estoy seguro si esto esta bien acá */}
    <FormControl>
      <Select value="" displayEmpty>
        <MenuItem value="">
          <em>Estado de la tarea</em>
        </MenuItem>
        <MenuItem value="completed">Completada</MenuItem>
        <MenuItem value="not_completed">Por completar</MenuItem>
      </Select>
    </FormControl>

    <h2>To Do List</h2>

    {toDoList.map((todo) => (
      <Todo key={todo.id} toDo={todo} onHandleToggle={onHandleToggle} onDeleteToDo={onDeleteToDo} />
    ))}
  </div>
);

TodoList.defaultProps = { toDoList: [], onHandleToggle: () => {}, onDeleteToDo: () => {} };
TodoList.propTypes = {
  toDoList: PropTypes.checkPropTypes(PropTypes.array),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
};

export default TodoList;
