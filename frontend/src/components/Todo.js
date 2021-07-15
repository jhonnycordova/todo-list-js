import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const Todo = ({ toDo, onHandleToggle, onDeleteToDo }) => {
  const [isCompleted, setIsCompleted] = useState(toDo.isCompleted);
  const handleCheckboxChanged = () => {
    setIsCompleted(!isCompleted);
    onHandleToggle(toDo.id, isCompleted);
  };

  const handleClickDeleteButton = () => {
    onDeleteToDo(toDo.id);
  };

  return (
    <div>
      <DragIndicatorIcon />
      <Checkbox checked={isCompleted} onChange={handleCheckboxChanged} />
      <TextField value={toDo.task} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }} />
      <IconButton color="primary" aria-label="delete todo" onClick={handleClickDeleteButton}>
        <Delete />
      </IconButton>
    </div>
  );
};

Todo.defaultProps = { toDo: {}, onHandleToggle: () => {}, onDeleteToDo: () => {} };

Todo.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
};

export default Todo;
