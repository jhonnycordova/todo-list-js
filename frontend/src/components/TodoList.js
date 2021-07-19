import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Todo from './Todo';

/* eslint-disable react/jsx-props-no-spreading */
// I disable that rule because DragAndDrog uses props spreading
// Prettier and Eslint doesn't match in their rules :(, that's why I disabled prettier on line 10
// prettier-ignore
const TodoList = ({
  toDos, onHandleToggle, onDeleteToDo, onDragToDo,
}) => {
  const onDragEnd = (result) => {
    onDragToDo(result.draggableId, result.source.index, result.destination.index);
  };
  return (
    <div>
      <Typography variant="h2">To Do List</Typography>

      {toDos.length > 0 && (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {toDos.map((toDo, index) => (
                    <Draggable key={toDo.id} draggableId={`${toDo.id}`} index={index}>
                      {(providedDraggable) => (
                        <div
                          ref={providedDraggable.innerRef}
                          {...providedDraggable.draggableProps}
                          {...providedDraggable.dragHandleProps}
                        >
                          {/* prettier-ignore */}
                          <Todo
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
        </>
      )}

      {toDos.length === 0 && <p>Nothing to show</p>}
    </div>
  );
};

/* eslint-enable react/jsx-props-no-spreading */

TodoList.defaultProps = {
  toDos: [],
  onHandleToggle: () => {},
  onDeleteToDo: () => {},
  onDragToDo: () => {},
};
TodoList.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.object),
  onHandleToggle: PropTypes.func,
  onDeleteToDo: PropTypes.func,
  onDragToDo: PropTypes.func,
};

export default TodoList;
