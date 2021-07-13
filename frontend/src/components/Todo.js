import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ toDo }) => (
  <div>
    <input type="checkbox" name="completed" id="completed" />
    <input type="text" name="task" id="task" value={toDo.task} />
    <button type="button">Delete</button>
  </div>
);

Todo.defaultProps = { toDo: {} };

Todo.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

export default Todo;
