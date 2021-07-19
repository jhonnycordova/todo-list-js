import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import TodoList from './components/TodoList';
import data from './data.json';
import Theme from './components/Theme';
import Filters from './components/Filters';

function App() {
  const [todoList, setToDoList] = useState(data);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    /** TEST CODE */
    const COMPLETED = 'completed';
    if (filter === '') {
      return;
    }

    const isCompleted = filter === COMPLETED;

    const filtered = todoList.filter((task) => task.isCompleted === isCompleted);
    setToDoList(filtered);
  }, [filter]);

  const onHandleToggle = (id) => {
    // I need to call a service to update todo in mongoDB
    /* eslint-disable */
    const mapped = todoList.map((task) => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : { ...task };
    });
    setToDoList(mapped);
    /* eslint-enable */
  };

  const onDeleteToDo = (id) => {
    // I need to call a service to update todo in mongoDB
    const filtered = todoList.filter((task) => task.id !== id);
    setToDoList(filtered);
  };

  const handleFilter = (newFilter) => {
    setToDoList(data);
    setFilter(newFilter);
  };

  const handleDrag = (toDoId, source, destionation) => {
    console.log(toDoId, source, destionation);
    // service?
  };

  const onSorting = () => {
    const sortedToDos = [...todoList].sort((a, b) => a.task.localeCompare(b.task));
    setToDoList(sortedToDos);
  };

  return (
    <Theme>
      <Container maxWidth="sm">
        <h1>Welcome </h1>
        <Filters onFiltersChanged={handleFilter} />
        <IconButton color="primary" aria-label="sorting todos" onClick={onSorting}>
          <SortByAlphaIcon />
        </IconButton>
        <TodoList
          toDos={todoList}
          onHandleToggle={onHandleToggle}
          onDeleteToDo={onDeleteToDo}
          onDragToDo={handleDrag}
        />
      </Container>
    </Theme>
  );
}

export default App;
