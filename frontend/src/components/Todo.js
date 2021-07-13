import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ toDo, handleToggle, deleteToDo }) => {
  const handleCheckboxChanged = () => {
    handleToggle(toDo.id);
  };

  const handleClickDeleteButton = () => {
    deleteToDo(toDo.id);
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

Todo.defaultProps = { toDo: {}, handleToggle: () => {}, deleteToDo: () => {} };

Todo.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  handleToggle: PropTypes.func,
  deleteToDo: PropTypes.func,
};

export default Todo;
