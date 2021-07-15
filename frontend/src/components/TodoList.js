import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

/* eslint-disable */
const TodoList = ({ toDoList, onHandleToggle, onDeleteToDo, onDragToDo }) => {
  const onDragEnd = (result) => {
    onDragToDo(parseInt(result.draggableId), result.source.index, result.destination.index);
  };
  return (
    <div>
      <h2>To Do List</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {toDoList.map((toDo, index) => (
                <Draggable key={toDo.id} draggableId={`${toDo.id}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Todo
                        // key={todo.id}
                        toDo={toDo}
                        onHandleToggle={onHandleToggle}
                        onDeleteToDo={onDeleteToDo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {toDoList.length > 0 &&
        toDoList.map((todo) => (
          <Todo key={todo.id} toDo={todo} onHandleToggle={onHandleToggle} onDeleteToDo={onDeleteToDo} />
        ))}

      {toDoList.length === 0 && <p>Nothing to show</p>}
    </div>
  );
};

/* eslint-enable */

TodoList.defaultProps = {
  toDoList: [],
  onHandleToggle: () => {},
  onDeleteToDo: () => {},
  onDragToDo: () => {},
};
TodoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
  onDragToDo: PropTypes.func,
};

export default TodoList;
