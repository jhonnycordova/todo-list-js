import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ toDo, onHandleToggle, onDeleteToDo }) => {
  const handleCheckboxChanged = () => {
    onHandleToggle(toDo.id);
  };

  const handleClickDeleteButton = () => {
    onDeleteToDo(toDo.id);
  };

  return (
    <div>
      <input type="checkbox" name="completed" onChange={handleCheckboxChanged} checked={toDo.completed} />
      <input type="text" name="task" value={toDo.task} />
      <button type="button" onClick={handleClickDeleteButton}>
        Delete
      </button>
    </div>
  );
};

Todo.defaultProps = { toDo: {}, onHandleToggle: () => {}, onDeleteToDo: () => {} };

Todo.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
};

export default Todo;
